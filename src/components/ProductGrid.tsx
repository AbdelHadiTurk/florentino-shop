
import { useShop } from "@/lib/shop-context";
import { type Product, variantKey } from "@/lib/shop-data";

export function ProductCard({ product }: { product: Product }) {
  const { selection, pickErrors, setPick, addToCart } = useShop();

  const sel = selection[product.id] || {
    color: "",
    size: "",
  };

  return (
    <article>
      <div className="group overflow-hidden rounded-xl">
        <img
          src={
            sel.color
              ? product.images[sel.color] || product.image
              : product.image
          }
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1280}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium">{product.name}</h3>

        <p className="text-sm text-muted-foreground">
          {product.category}
        </p>

        <p className="mt-2 font-medium">${product.price}</p>
      </div>

      <div className="mt-3">
        <p className="mb-2 text-[10px] uppercase tracking-widest text-muted-foreground">
          Color{sel.color ? `: ${sel.color}` : ""}
        </p>

        <div className="flex flex-wrap gap-2">
          {product.colors.map((c) => (
            <button
              key={c.name}
              onClick={() =>
                setPick(product.id, {
                  color: c.name,
                })
              }
              title={c.name}
              aria-label={c.name}
              className={`h-7 w-7 rounded-full border-2 transition-transform ${
                sel.color === c.name
                  ? "border-foreground scale-110"
                  : "border-border hover:scale-105"
              }`}
              style={{ background: c.hex }}
            />
          ))}
        </div>
      </div>

      <div className="mt-3">
        <p className="mb-2 text-[10px] uppercase tracking-widest text-muted-foreground">
          Size{sel.size ? `: ${sel.size}` : ""}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() =>
                setPick(product.id, {
                  size: s,
                })
              }
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
        <p className="text-xs text-destructive mt-2">
          {pickErrors[product.id]}
        </p>
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

export function ProductGrid({
  products,
}: {
  products: Product[];
}) {
  if (products.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        No products in this category yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export { variantKey };

