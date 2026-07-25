import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/knitwear")({
  component: () => <CategoryPage category="Knitwear" />,
  head: () => ({
    meta: [
      { title: "Knitwear — Florentino" },
      { name: "description", content: "Soft sweaters, cardigans and turtlenecks in nude and neutral tones. Shop Florentino knitwear." },
    ],
  }),
});
