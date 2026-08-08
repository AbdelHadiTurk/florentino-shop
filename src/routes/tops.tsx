import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/tops")({
  component: () => <CategoryPage category="Tops" />,
  head: () => ({
    meta: [
      { title: "Tops — Florentino" },
      { name: "description", content: "Blouses, camisoles and button-ups that elevate every day. Shop Florentino tops." },
    ],
  }),
});
