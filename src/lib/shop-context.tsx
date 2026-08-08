import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  PRODUCTS,
  OUTFITS,
  outfitPrice,
  type Product,
  type Outfit,
  variantKey,
} from "./shop-data";

export type SingleItem = {
  kind: "single";
  product: Product;
  color: string;
  size: string;
  qty: number;
};

export type OutfitPick = { productId: string; color: string; size: string };

export type OutfitItem = {
  kind: "outfit";
  outfit: Outfit;
  picks: OutfitPick[];
  qty: number;
};

export type CartItem = SingleItem | OutfitItem;

type Selection = { color: string; size: string };

export const cartKey = (i: CartItem): string =>
  i.kind === "single"
    ? `single::${i.product.id}::${i.color}::${i.size}`
    : `outfit::${i.outfit.id}::${i.picks
        .map((p) => `${p.productId}-${p.color}-${p.size}`)
        .join("+")}`;

export const itemUnitPrice = (i: CartItem): number =>
  i.kind === "single" ? i.product.price : outfitPrice(i.outfit);

export const itemName = (i: CartItem): string =>
  i.kind === "single" ? i.product.name : i.outfit.name;

export const itemImage = (i: CartItem): string => {
  if (i.kind === "single") return i.product.images[i.color] || i.product.image;
  const first = PRODUCTS.find((p) => p.id === i.picks[0]?.productId);
  if (!first) return "";
  return first.images[i.picks[0].color] || first.image;
};

type ShopContextValue = {
  cart: CartItem[];
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  cartCount: number;
  total: number;
  selection: Record<string, Selection>;
  pickErrors: Record<string, string>;
  setPick: (id: string, patch: Partial<Selection>) => void;
  addToCart: (p: Product) => void;
  addOutfitToCart: (o: Outfit) => void;
  updateQty: (key: string, delta: number) => void;
  removeItem: (key: string) => void;
};

const ShopContext = createContext<ShopContextValue | null>(null);

type StoredItem =
  | { kind: "single"; id: string; color: string; size: string; qty: number }
  | { kind: "outfit"; outfitId: string; picks: OutfitPick[]; qty: number };

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selection, setSelection] = useState<Record<string, Selection>>({});
  const [pickErrors, setPickErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem("florentino-cart");
      if (!raw) return;
      const stored: StoredItem[] = JSON.parse(raw);
      const restored: CartItem[] = [];
      for (const i of stored) {
        if (i.kind === "single") {
          const p = PRODUCTS.find((x) => x.id === i.id);
          if (p) restored.push({ kind: "single", product: p, color: i.color, size: i.size, qty: i.qty });
        } else if (i.kind === "outfit") {
          const o = OUTFITS.find((x) => x.id === i.outfitId);
          if (o) restored.push({ kind: "outfit", outfit: o, picks: i.picks, qty: i.qty });
        }
      }
      setCart(restored);
    } catch {}
  }, []);

  useEffect(() => {
    const stored: StoredItem[] = cart.map((c) =>
      c.kind === "single"
        ? { kind: "single", id: c.product.id, color: c.color, size: c.size, qty: c.qty }
        : { kind: "outfit", outfitId: c.outfit.id, picks: c.picks, qty: c.qty }
    );
    localStorage.setItem("florentino-cart", JSON.stringify(stored));
  }, [cart]);

  const cartCount = cart.reduce((s, c) => s + c.qty, 0);
  const total = cart.reduce((s, c) => s + c.qty * itemUnitPrice(c), 0);

  const setPick = useCallback((id: string, patch: Partial<Selection>) => {
    setSelection((s) => ({ ...s, [id]: { ...(s[id] || { color: "", size: "" }), ...patch } }));
    setPickErrors((e) => ({ ...e, [id]: "" }));
  }, []);


  const addToCart = useCallback(
  (p: Product) => {
    const sel = selection[p.id] || { color: "", size: "" };

    if (!sel.color || !sel.size) {
      setPickErrors((e) => ({
        ...e,
        [p.id]: "Please select color and size",
      }));
      return;
    }

    setCart((c) => {
      const newItem: CartItem = {
        kind: "single",
        product: p,
        color: sel.color,
        size: sel.size,
        qty: 1,
      };

      const k = cartKey(newItem);
      const found = c.find((i) => cartKey(i) === k);

      if (found) {
        return c.map((i) =>
          cartKey(i) === k
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }

      return [...c, newItem];
    });

    setCartOpen(true);
  },
  [selection]
);



  const addOutfitToCart = useCallback(
    (o: Outfit) => {
      const picks: OutfitPick[] = [];
      for (const pid of o.productIds) {
        const sel = selection[`${o.id}:${pid}`] || { color: "", size: "" };
        if (!sel.color || !sel.size) {
          setPickErrors((e) => ({ ...e, [o.id]: "Please pick color & size for every piece" }));
          return;
        }
        picks.push({ productId: pid, color: sel.color, size: sel.size });
      }
      setCart((c) => {
        const newItem: CartItem = { kind: "outfit", outfit: o, picks, qty: 1 };
        const k = cartKey(newItem);
        const found = c.find((i) => cartKey(i) === k);
        if (found) return c.map((i) => (cartKey(i) === k ? { ...i, qty: i.qty + 1 } : i));
        return [...c, newItem];
      });
      setCartOpen(true);
    },
    [selection]
  );

  const updateQty = useCallback(
    (key: string, delta: number) =>
      setCart((c) =>
        c.map((i) => (cartKey(i) === key ? { ...i, qty: i.qty + delta } : i)).filter((i) => i.qty > 0)
      ),
    []
  );

  const removeItem = useCallback(
    (key: string) => setCart((c) => c.filter((i) => cartKey(i) !== key)),
    []
  );

  const value = useMemo<ShopContextValue>(
    () => ({
      cart,
      cartOpen,
      setCartOpen,
      cartCount,
      total,
      selection,
      pickErrors,
      setPick,
      addToCart,
      addOutfitToCart,
      updateQty,
      removeItem,
    }),
    [cart, cartOpen, cartCount, total, selection, pickErrors, setPick, addToCart, addOutfitToCart, updateQty, removeItem]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within ShopProvider");
  return ctx;
}

// backward-compat re-export
export { variantKey };
