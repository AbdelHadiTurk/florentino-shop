import { useShop } from "@/lib/shop-context";
import {
  getOutfitProducts,
  outfitPrice,
  outfitOriginalPrice,
  type Outfit,
  type Product,
} from "@/lib/shop-data";

function OutfitPieceSelector({ outfit, product }: { outfit: Outfit; product: Product }) {
  const { selection, setPick } = useShop();
  const key = `${outfit.id}:${product.id}`;
  const sel = selection[key] || { color: "", size: "" };

  return (
    <div className="flex gap-3 rounded-2xl border border-border p-3">
      <img
        src={sel.color ? product.images[sel.color] || product.image : product.image}
        alt={product.name}
        className="h-24 w-20 rounded-xl object-cover shrink-0"
      />
      <div className="min-w-0 flex-1">
        <p className="font-medium text-sm truncate">{product.name}</p>
        <p className="text-xs text-muted-foreground">${product.price}</p>

        <div className="mt-2">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
            Color{sel.color ? `: ${sel.color}` : ""}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {product.colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setPick(key, { color: c.name })}
                title={c.name}
                aria-label={c.name}
                className={`h-5 w-5 rounded-full border-2 transition-transform ${
                  sel.color === c.name ? "border-foreground scale-110" : "border-border"
                }`}
                style={{ background: c.hex }}
              />
            ))}
          </div>
        </div>

        <div className="mt-2">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
            Size{sel.size ? `: ${sel.size}` : ""}
          </p>
          <div className="flex flex-wrap gap-1">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setPick(key, { size: s })}
                className={`min-w-7 px-2 h-6 rounded-full text-[10px] border transition-colors ${
                  sel.size === s
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:border-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function OutfitCard({ outfit }: { outfit: Outfit }) {
  const { selection, pickErrors, addOutfitToCart } = useShop();
  const products = getOutfitProducts(outfit);
  const price = outfitPrice(outfit);
  const original = outfitOriginalPrice(outfit);

  // Preview image = first picked color, else base
  const firstPick = selection[`${outfit.id}:${products[0]?.id}`];
  const heroImg =
    firstPick?.color && products[0]
      ? products[0].images[firstPick.color] || products[0].image
      : products[0]?.image;

  return (
    <article className="flex flex-col rounded-3xl bg-secondary/40 p-4 md:p-5">
      <div className="relative overflow-hidden rounded-2xl bg-secondary aspect-[4/5]">
        <img
          src={heroImg}
          alt={outfit.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-foreground text-background text-xs uppercase tracking-widest px-3 py-1 rounded-full">
          Save 15%
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-display text-xl truncate">{outfit.name}</h3>
          <p className="text-xs text-muted-foreground mt-1">{outfit.description}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-lg font-medium">${price}</p>
          <p className="text-xs text-muted-foreground line-through">${original}</p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {products.map((p) => (
          <OutfitPieceSelector key={p.id} outfit={outfit} product={p} />
        ))}
      </div>

      {pickErrors[outfit.id] && (
        <p className="text-xs text-destructive mt-2">{pickErrors[outfit.id]}</p>
      )}

      <button
        onClick={() => addOutfitToCart(outfit)}
        className="mt-4 w-full rounded-full py-3 text-sm font-medium uppercase tracking-wider bg-foreground text-background hover:opacity-90 transition-opacity"
      >
        Add Outfit — ${price}
      </button>
    </article>
  );
}

export function OutfitGrid({ outfits }: { outfits: Outfit[] }) {
  if (outfits.length === 0) {
    return <p className="text-center text-muted-foreground py-16">No outfits yet.</p>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {outfits.map((o) => (
        <OutfitCard key={o.id} outfit={o} />
      ))}
    </div>
  );
}

