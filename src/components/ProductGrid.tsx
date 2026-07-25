import { useShop } from "@/lib/shop-context";
import { type Product, variantKey } from "@/lib/shop-data";

export function ProductCard({ product }: { product: Product }) {
  const { selection, pickErrors, setPick, addToCart } = useShop();
  const sel = selection[product.id] || { color: "", size: "" };

  return (
    <article className="group flex flex-col">
      <div className="relative overflow-hidden rounded-2xl bg-secondary aspect-[4/5]">
        <img
          src={sel.color ? product.images[sel.color] || product.image : product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1280}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-display text-lg truncate">{product.name}</h3>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
            {product.category}
          </p>
        </div>
        <p className="text-lg font-medium shrink-0">${product.price}</p>
      </div>

      <div className="mt-3">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
          Color{sel.color ? `: ${sel.color}` : ""}
        </p>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setPick(product.id, { color: c.name })}
              title={c.name}
              aria-label={c.name}
              className={`h-7 w-7 rounded-full border-2 transition-transform ${
                sel.color === c.name ? "border-foreground scale-110" : "border-border hover:scale-105"
              }`}
              style={{ background: c.hex }}
            />
          ))}
        </div>
      </div>

      <div className="mt-3">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
          Size{sel.size ? `: ${sel.size}` : ""}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => setPick(product.id, { size: s })}
              className={`min-w-9 px-2.5 h-8 rounded-full text-xs border transition-colors ${
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

      {pickErrors[product.id] && (
        <p className="text-xs text-destructive mt-2">{pickErrors[product.id]}</p>
      )}

      <button
        onClick={() => addToCart(product)}
        className="mt-4 w-full rounded-full py-3 text-sm font-medium uppercase tracking-wider bg-foreground text-background hover:opacity-90 transition-opacity"
      >
        Add to Cart
      </button>
    </article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-16">No products in this category yet.</p>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export { variantKey };
