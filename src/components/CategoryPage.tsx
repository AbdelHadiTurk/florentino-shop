import { ProductGrid } from "@/components/ProductGrid";
import { PRODUCTS, type Category } from "@/lib/shop-data";

const BLURBS: Record<Category, string> = {
  Dresses: "Feminine silhouettes for every occasion — from daylight linens to satin evenings.",
  Knitwear: "Soft, cozy knits in nude and neutral tones to layer all season.",
  Tops: "Blouses, camis and button-ups that make everyday feel elevated.",
  Bottoms: "Trousers, skirts and shorts tailored for effortless movement.",
  Outerwear: "Coats, trenches and blazers to finish every look beautifully.",
  Accessories: "The finishing touch — bags, belts and silk scarves.",
};

export function CategoryPage({ category }: { category: Category }) {
  const items = PRODUCTS.filter((p) => p.category === category);

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            The Collection
          </p>
          <h1 className="font-display text-4xl md:text-5xl mt-3">{category}</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{BLURBS[category]}</p>
        </div>

        <ProductGrid products={items} />
      </div>
    </section>
  );
}
