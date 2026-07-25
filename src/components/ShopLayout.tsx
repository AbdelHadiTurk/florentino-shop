import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useShop, cartKey, itemUnitPrice, itemName, itemImage } from "@/lib/shop-context";
import { CATEGORY_ROUTES, PRODUCTS, WHATSAPP_NUMBER, outfitOriginalPrice } from "@/lib/shop-data";

export function ShopLayout({ children }: { children: ReactNode }) {
  const {
    cart,
    cartOpen,
    setCartOpen,
    cartCount,
    total,
    updateQty,
    removeItem,
  } = useShop();

  const [scrolled, setScrolled] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", location: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCategoriesOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const orderViaWhatsApp = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.location.trim()) e.location = "Required";
    if (cart.length === 0) e.cart = "Your cart is empty";
    setErrors(e);
    if (Object.keys(e).length) return;

    const lines: string[] = [
      "Hello, I want to order from Florentino:",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Location: ${form.location}`,
      "",
      "Order:",
    ];

    for (const i of cart) {
      if (i.kind === "single") {
        lines.push(
          `• ${i.product.name} — Color: ${i.color}, Size: ${i.size} — x${i.qty} — $${i.product.price * i.qty}`
        );
      } else {
        const unit = itemUnitPrice(i);
        const original = outfitOriginalPrice(i.outfit);
        lines.push(
          `• OUTFIT: ${i.outfit.name} — x${i.qty} — $${unit * i.qty} (was $${original * i.qty}, 15% off)`
        );
        for (const pick of i.picks) {
          const p = PRODUCTS.find((x) => x.id === pick.productId);
          if (p) lines.push(`    – ${p.name} — Color: ${pick.color}, Size: ${pick.size}`);
        }
      }
    }

    lines.push("", `Total: $${total}`);
    const msg = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur border-b border-border py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="font-display text-2xl md:text-3xl font-semibold tracking-wide truncate"
          >
            Florentino
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <Link to="/" activeOptions={{ exact: true }} className="hover:opacity-70 transition-opacity" activeProps={{ className: "font-semibold" }}>
              Home
            </Link>
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setCategoriesOpen((open) => !open)}
                className="flex items-center gap-1 hover:opacity-70 transition-opacity"
              >
                Categories
                <span className={`text-xs transition-transform ${categoriesOpen ? "rotate-180" : ""}`}>▾</span>
              </button>
              {categoriesOpen && (
                <div className="absolute left-0 top-full mt-3 w-56 overflow-hidden rounded-2xl border border-border/70 bg-background/95 shadow-xl backdrop-blur">
                  <div className="max-h-64 overflow-y-auto py-2">
                    {CATEGORY_ROUTES.map((c) => (
                      <Link
                        key={c.path}
                        to={c.path}
                        onClick={() => setCategoriesOpen(false)}
                        className="block px-4 py-2 text-sm hover:bg-muted"
                        activeProps={{ className: "font-semibold" }}
                      >
                        {c.category}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link to="/outfits" className="hover:opacity-70 transition-opacity" activeProps={{ className: "font-semibold" }}>
              Outfits
            </Link>
            <a href="#about" className="hover:opacity-70 transition-opacity">
              About us
            </a>
            <a href="#location" className="hover:opacity-70 transition-opacity">
              Our location
            </a>
          </nav>
          <button
            onClick={() => setCartOpen(true)}
            className="relative shrink-0 rounded-full border border-foreground/20 px-4 py-2 text-sm hover:bg-foreground hover:text-background transition-colors"
            aria-label="Open cart"
          >
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 grid place-items-center rounded-full bg-accent text-accent-foreground text-xs font-medium">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <div className="lg:hidden mt-3 border-t border-border/50">
          <div className="mx-auto max-w-7xl px-6 py-2">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <Link to="/" activeOptions={{ exact: true }} className="whitespace-nowrap" activeProps={{ className: "font-semibold" }}>
                Home
              </Link>
              <button
                type="button"
                onClick={() => setCategoriesOpen((open) => !open)}
                className="whitespace-nowrap"
              >
                Categories
              </button>
              <Link to="/outfits" className="whitespace-nowrap" activeProps={{ className: "font-semibold" }}>
                Outfits
              </Link>
              <a href="#about" className="whitespace-nowrap">
                About us
              </a>
              <a href="#location" className="whitespace-nowrap">
                Our location
              </a>
            </div>
            {categoriesOpen && (
              <div className="mt-2 max-h-56 overflow-y-auto rounded-xl border border-border/60 bg-background/95 p-2 shadow-sm">
                {CATEGORY_ROUTES.map((c) => (
                  <Link
                    key={c.path}
                    to={c.path}
                    onClick={() => setCategoriesOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-muted"
                  >
                    {c.category}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="pt-28 md:pt-32">{children}</main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Florentino. Crafted with love.
      </footer>

      {cartOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-foreground/40 animate-fade-in"
            onClick={() => setCartOpen(false)}
          />
          <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-background shadow-2xl flex flex-col animate-fade-in">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="font-display text-2xl">Your Bag</h3>
              <button
                onClick={() => setCartOpen(false)}
                aria-label="Close"
                className="text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 && (
                <p className="text-center text-muted-foreground py-12">Your bag is empty.</p>
              )}
              {cart.map((i) => {
                const k = cartKey(i);
                const unit = itemUnitPrice(i);
                return (
                  <div key={k} className="grid grid-cols-[80px_minmax(0,1fr)_auto] gap-3 items-start">
                    <img
                      src={itemImage(i)}
                      alt={itemName(i)}
                      className="h-20 w-20 rounded-xl object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="font-medium truncate">
                        {i.kind === "outfit" ? `Outfit: ${i.outfit.name}` : i.product.name}
                      </p>
                      {i.kind === "single" ? (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {i.color} · Size {i.size}
                        </p>
                      ) : (
                        <ul className="text-xs text-muted-foreground mt-0.5 space-y-0.5">
                          {i.picks.map((pk) => {
                            const p = PRODUCTS.find((x) => x.id === pk.productId);
                            return (
                              <li key={pk.productId} className="truncate">
                                {p?.name} — {pk.color}, {pk.size}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                      <p className="text-sm text-muted-foreground mt-1">
                        ${unit}
                        {i.kind === "outfit" && (
                          <span className="line-through ml-2 text-xs">
                            ${outfitOriginalPrice(i.outfit)}
                          </span>
                        )}
                      </p>
                      <div className="mt-2 inline-flex items-center border border-border rounded-full">
                        <button onClick={() => updateQty(k, -1)} className="px-3 py-1">−</button>
                        <span className="px-3 text-sm">{i.qty}</span>
                        <button onClick={() => updateQty(k, 1)} className="px-3 py-1">+</button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(k)}
                      className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground shrink-0"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}

              {cart.length > 0 && (
                <div className="pt-6 border-t border-border space-y-3">
                  <h4 className="font-display text-lg">Your details</h4>
                  {(["name", "phone", "location"] as const).map((field) => (
                    <div key={field}>
                      <input
                        type={field === "phone" ? "tel" : "text"}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        className="w-full rounded-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground"
                      />
                      {errors[field] && (
                        <p className="text-xs text-destructive mt-1 ml-4">{errors[field]}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-border p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-widest text-muted-foreground">Total</span>
                <span className="font-display text-2xl">${total}</span>
              </div>
              <button
                onClick={orderViaWhatsApp}
                disabled={cart.length === 0}
                className="w-full btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: "#25D366", color: "white" }}
              >
                Order via WhatsApp
              </button>
              {errors.cart && <p className="text-xs text-destructive text-center">{errors.cart}</p>}
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
