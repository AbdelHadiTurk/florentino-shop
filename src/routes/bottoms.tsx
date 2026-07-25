import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/bottoms")({
  component: () => <CategoryPage category="Bottoms" />,
  head: () => ({
    meta: [
      { title: "Bottoms — Florentino" },
      { name: "description", content: "Wide-leg trousers, tailored pants, skirts and shorts. Shop Florentino bottoms." },
    ],
  }),
});
