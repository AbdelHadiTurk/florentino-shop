import { createFileRoute } from "@tanstack/react-router";
import { OutfitGrid } from "@/components/OutfitGrid";
import { OUTFITS } from "@/lib/shop-data";

export const Route = createFileRoute("/outfits")({
  component: OutfitsPage,
  head: () => ({
    meta: [
      { title: "Outfits — Florentino" },
      {
        name: "description",
        content:
          "Complete Florentino looks — curated outfit bundles pairing our best pieces at 10% off.",
      },
      { property: "og:title", content: "Outfits — Florentino" },
      {
        property: "og:description",
        content: "Curated Florentino outfit bundles at 10% off.",
      },
    ],
  }),
});

function OutfitsPage() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Styled by Florentino
          </p>
          <h1 className="font-display text-4xl md:text-5xl mt-3">Outfits</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Complete looks pairing our favorite pieces — every outfit bundle is 15% off the sum
            of its parts.
          </p>
        </div>

        <OutfitGrid outfits={OUTFITS} />
      </div>
    </section>
  );
}
