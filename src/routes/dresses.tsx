import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/dresses")({
  component: () => <CategoryPage category="Dresses" />,
  head: () => ({
    meta: [
      { title: "Dresses — Florentino" },
      { name: "description", content: "Feminine dresses — from linen day dresses to satin evening midis. Shop Florentino's dress collection." },
    ],
  }),
});
