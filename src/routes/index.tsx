import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { ProductGrid } from "@/components/ProductGrid";
import { CategoryTile } from "@/components/CategoryTile";
import { NAV_LINKS, PRODUCTS, OUTFITS, WHATSAPP_NUMBER, getOutfitProducts } from "@/lib/shop-data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Florentino — Elegant Women's Fashion" },
      {
        name: "description",
        content:
          "Florentino — feminine, elegant clothing for the modern woman. Discover our best-selling dresses, knits, tops and more.",
      },
    ],
  }),
});

function Index() {
  const bestSellers = PRODUCTS.filter((p) => p.bestSeller);

  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--nude), var(--blush))" }}
      >
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div className="animate-fade-up">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              New Collection · SS26
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1.05]">
              Elegance,
              <br /> effortlessly worn.
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-md">
              Florentino curates timeless pieces for the modern woman — soft silhouettes,
              whispered tones, quiet luxury.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#best-sellers" className="btn-primary">Shop best sellers</a>
              <Link to="/dresses" className="btn-outline">Browse dresses</Link>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={heroImg}
                alt="Florentino hero"
                className="h-full w-full object-cover"
                width={1024}
                height={1280}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-background rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Handpicked</p>
              <p className="font-display text-xl">New arrivals</p>
            </div>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section id="best-sellers" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Loved by all
            </p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Best Sellers</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              The pieces our community keeps coming back to — timeless, adored, and ready to wear.
            </p>
          </div>

          <ProductGrid products={bestSellers} />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 md:py-24" style={{ background: "var(--sand)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Explore
            </p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {NAV_LINKS.map((c) => {
              const isOutfits = c.path === "/outfits";
              const images = isOutfits
                ? Array.from(
                    new Set(
                      OUTFITS.flatMap((o) =>
                        getOutfitProducts(o).flatMap((p) => [p.image, ...Object.values(p.images)])
                      )
                    )
                  )
                : Array.from(
                    new Set(
                      PRODUCTS.filter((p) => p.category === c.category).flatMap((p) => [
                        p.image,
                        ...Object.values(p.images),
                      ])
                    )
                  );
              return (
                <CategoryTile
                  key={c.path}
                  to={c.path}
                  label={c.category}
                  sublabel={isOutfits ? "Save 15% →" : "Shop now →"}
                  images={images}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            About Florentino
          </p>
          <h2 className="font-display text-4xl md:text-5xl mt-3">
            A love letter to feminine style
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            Born from a passion for timeless silhouettes and soft, sun-washed tones, Florentino
            is a small boutique dedicated to women who dress with intention. Every piece is
            chosen for the way it feels against the skin, the way it moves in the light, and the
            way it makes you feel — quietly, undeniably beautiful.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28" style={{ background: "var(--nude)" }}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Get in touch</p>
          <h2 className="font-display text-4xl md:text-5xl mt-3">Let's talk</h2>
          <p className="mt-4 text-muted-foreground">Orders, questions, styling — we're here.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              WhatsApp us
            </a>
            <a
              href="https://www.instagram.com/florentino_shop"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              @florentino_shop
            </a>
          </div>
        </div>
      </section>

      {/* VISIT US */}
      <section id="location" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-secondary/40 p-8 md:p-12 text-center">
            <div className="absolute top-0 right-0 bg-foreground text-background text-xs uppercase tracking-widest px-4 py-2 rounded-bl-2xl">
              5% Off
            </div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Visit us</p>
            <h2 className="font-display text-3xl md:text-4xl mt-3">Come say hello</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Step into our boutique and enjoy 5% off your in-store purchase. We would love to
              style you in person.
            </p>
            <a
              href="https://maps.app.goo.gl/ZpSJ7op9a9AX3EZP8?g_st=ic"
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-8"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
