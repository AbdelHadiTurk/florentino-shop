import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/outerwear")({
  component: () => <CategoryPage category="Outerwear" />,
  head: () => ({
    meta: [
      { title: "Outerwear — Florentino" },
      { name: "description", content: "Trenches, wool coats, blazers and puffers to complete every look. Shop Florentino outerwear." },
    ],
  }),
});
