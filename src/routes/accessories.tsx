import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/accessories")({
  component: () => <CategoryPage category="Accessories" />,
  head: () => ({
    meta: [
      { title: "Accessories — Florentino" },
      { name: "description", content: "Bags, belts and silk hair scarves — the finishing touch. Shop Florentino accessories." },
    ],
  }),
});
