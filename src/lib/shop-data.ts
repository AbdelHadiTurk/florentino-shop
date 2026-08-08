import p1 from "@/assets/product-1.jpg";
import p1Nude from "@/assets/product-1-nude.jpg";
import p1Blush from "@/assets/product-1-blush.jpg";
import p2 from "@/assets/product-2.jpg";
import p2Ivory from "@/assets/product-2-ivory.jpg";
import p2Black from "@/assets/product-2-black.jpg";
import p3 from "@/assets/product-3.jpg";
import p3Nude from "@/assets/product-3-nude.jpg";
import p3Black from "@/assets/product-3-black.jpg";
import p4 from "@/assets/product-4.jpg";
import p4Sand from "@/assets/product-4-sand.jpg";
import p4Black from "@/assets/product-4-black.jpg";
import p5 from "@/assets/product-5.jpg";
import p5Black from "@/assets/product-5-black.jpg";
import p5Ivory from "@/assets/product-5-ivory.jpg";
import p6 from "@/assets/product-6.jpg";
import p6Black from "@/assets/product-6-black.jpg";
import p6Ivory from "@/assets/product-6-ivory.jpg";

export type Category =
  | "Dresses"
  | "Knitwear"
  | "Tops"
  | "Bottoms"
  | "Outerwear"
  | "Accessories";

export type Color = { name: string; hex: string };

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  images: Record<string, string>;
  category: Category;
  colors: Color[];
  sizes: string[];
  bestSeller?: boolean;
};

export const CLOTHING_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
export const ACCESSORY_SIZES = ["One Size"];

const NUDE: Color = { name: "Nude", hex: "#e8d5c4" };
const BLUSH: Color = { name: "Blush", hex: "#f4d5d0" };
const IVORY: Color = { name: "Ivory", hex: "#f5efe6" };
const SAND: Color = { name: "Sand", hex: "#d9c7a7" };
const CAMEL: Color = { name: "Camel", hex: "#b58867" };
const BLACK: Color = { name: "Black", hex: "#1a1a1a" };
const OLIVE: Color = { name: "Olive", hex: "#8a8a5c" };
const ROSE: Color = { name: "Rose", hex: "#d99a9a" };

export const PRODUCTS: Product[] = [
  // Knitwear
  { id: "k1", name: "Bella Knit Sweater", price: 68, image: p1, images: { Nude: p1Nude, Blush: p1Blush }, category: "Knitwear", colors: [NUDE, IVORY, BLUSH], sizes: CLOTHING_SIZES, bestSeller: true },
  { id: "k2", name: "Chunky Cable Cardigan", price: 82, image: p1, images: { Ivory: p1, Black: p1 }, category: "Knitwear", colors: [CAMEL, IVORY, BLACK], sizes: CLOTHING_SIZES },
  { id: "k3", name: "Ribbed Turtleneck", price: 58, image: p1, images: { Black: p1, Ivory: p1 }, category: "Knitwear", colors: [BLACK, IVORY, ROSE], sizes: CLOTHING_SIZES },
  { id: "k4", name: "Cashmere Blend Pullover", price: 120, image: p1, images: { Nude: p1Nude }, category: "Knitwear", colors: [NUDE, SAND], sizes: CLOTHING_SIZES },

  // Dresses
  { id: "d1", name: "Rosé Chiffon Dress", price: 89, image: p2, images: { Ivory: p2Ivory }, category: "Dresses", colors: [BLUSH, IVORY], sizes: CLOTHING_SIZES, bestSeller: true },
  { id: "d2", name: "Slip Satin Midi", price: 95, image: p2, images: { Black: p2Black }, category: "Dresses", colors: [NUDE, BLACK, ROSE], sizes: CLOTHING_SIZES, bestSeller: true },
  { id: "d3", name: "Linen Wrap Dress", price: 78, image: p2, images: { Ivory: p2Ivory }, category: "Dresses", colors: [IVORY, SAND, OLIVE], sizes: CLOTHING_SIZES },
  { id: "d4", name: "Tiered Maxi Dress", price: 110, image: p2, images: { Ivory: p2Ivory, Black: p2Black }, category: "Dresses", colors: [BLUSH, IVORY, BLACK], sizes: CLOTHING_SIZES },

  // Tops
  { id: "t1", name: "Satin Blouse Ivory", price: 54, image: p3, images: { Nude: p3Nude, Black: p3Black, Ivory: p3 }, category: "Tops", colors: [IVORY, BLUSH, BLACK], sizes: CLOTHING_SIZES, bestSeller: true },
  { id: "t2", name: "Puff Sleeve Blouse", price: 62, image: p3, images: { Ivory: p3 }, category: "Tops", colors: [IVORY, ROSE], sizes: CLOTHING_SIZES },
  { id: "t3", name: "Silk Camisole", price: 48, image: p3, images: { Nude: p3Nude, Black: p3Black, Ivory: p3 }, category: "Tops", colors: [NUDE, BLACK, IVORY], sizes: CLOTHING_SIZES },
  { id: "t4", name: "Linen Button-Up", price: 58, image: p3, images: { Ivory: p3 }, category: "Tops", colors: [IVORY, SAND, OLIVE], sizes: CLOTHING_SIZES },

  // Bottoms
  { id: "b1", name: "Cream Wide-Leg Trousers", price: 72, image: p4, images: { Sand: p4Sand, Black: p4Black, Ivory: p4 }, category: "Bottoms", colors: [IVORY, SAND, BLACK], sizes: CLOTHING_SIZES, bestSeller: true },
  { id: "b2", name: "High-Waist Tailored Pants", price: 78, image: p4, images: { Black: p4Black }, category: "Bottoms", colors: [BLACK, CAMEL], sizes: CLOTHING_SIZES },
  { id: "b3", name: "Pleated Midi Skirt", price: 64, image: p4, images: { Black: p4Black, Ivory: p4 }, category: "Bottoms", colors: [BLUSH, IVORY, BLACK], sizes: CLOTHING_SIZES },
  { id: "b4", name: "Linen Bermuda Shorts", price: 52, image: p4, images: { Sand: p4Sand, Ivory: p4 }, category: "Bottoms", colors: [IVORY, SAND, OLIVE], sizes: CLOTHING_SIZES },

  // Outerwear
  { id: "o1", name: "Camel Belted Trench", price: 145, image: p6, images: { Black: p6Black, Ivory: p6Ivory }, category: "Outerwear", colors: [CAMEL, IVORY, BLACK], sizes: CLOTHING_SIZES, bestSeller: true },
  { id: "o2", name: "Wool Longline Coat", price: 185, image: p6, images: { Black: p6Black, Ivory: p6Ivory }, category: "Outerwear", colors: [CAMEL, BLACK, IVORY], sizes: CLOTHING_SIZES },
  { id: "o3", name: "Cropped Blazer", price: 98, image: p6, images: { Black: p6Black, Ivory: p6Ivory }, category: "Outerwear", colors: [IVORY, BLACK, SAND], sizes: CLOTHING_SIZES },
  { id: "o4", name: "Quilted Puffer Jacket", price: 128, image: p6, images: { Black: p6Black, Nude: p6 }, category: "Outerwear", colors: [NUDE, BLACK, OLIVE], sizes: CLOTHING_SIZES },

  // Accessories
  { id: "a1", name: "Florentino Tote Nude", price: 95, image: p5, images: { Black: p5Black, Ivory: p5Ivory }, category: "Accessories", colors: [NUDE, CAMEL, BLACK], sizes: ACCESSORY_SIZES, bestSeller: true },
  { id: "a2", name: "Silk Hair Scarf", price: 28, image: p5, images: { Ivory: p5Ivory }, category: "Accessories", colors: [BLUSH, IVORY, ROSE], sizes: ACCESSORY_SIZES },
  { id: "a3", name: "Leather Belt", price: 42, image: p5, images: { Black: p5Black }, category: "Accessories", colors: [CAMEL, BLACK], sizes: ["S", "M", "L"] },
  { id: "a4", name: "Mini Crossbody Bag", price: 78, image: p5, images: { Black: p5Black, Ivory: p5Ivory }, category: "Accessories", colors: [NUDE, BLACK, IVORY], sizes: ACCESSORY_SIZES },
];

export type Outfit = {
  id: string;
  name: string;
  description: string;
  productIds: string[]; // 2 products
};

export const OUTFITS: Outfit[] = [
  {
    id: "of1",
    name: "Weekend Brunch",
    description: "Soft knit sweater paired with flowing wide-leg trousers.",
    productIds: ["k1", "b1"],
  },
  {
    id: "of2",
    name: "Office Chic",
    description: "A satin blouse tucked into tailored high-waist pants.",
    productIds: ["t1", "b2"],
  },
  {
    id: "of3",
    name: "City Layer",
    description: "Ribbed turtleneck with a pleated midi skirt for effortless days.",
    productIds: ["k3", "b3"],
  },
  {
    id: "of4",
    name: "Evening Glow",
    description: "Slip satin dress finished with our signature belted trench.",
    productIds: ["d2", "o1"],
  },
];

export const OUTFIT_DISCOUNT = 0.15; // 15% off bundle

export const getOutfitProducts = (o: Outfit): Product[] =>
  o.productIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as Product[];

export const outfitPrice = (o: Outfit): number => {
  const sum = getOutfitProducts(o).reduce((s, p) => s + p.price, 0);
  return Math.round(sum * (1 - OUTFIT_DISCOUNT));
};

export const outfitOriginalPrice = (o: Outfit): number =>
  getOutfitProducts(o).reduce((s, p) => s + p.price, 0);

export const CATEGORY_ROUTES = [
  { category: "Dresses", path: "/dresses" },
  { category: "Knitwear", path: "/knitwear" },
  { category: "Tops", path: "/tops" },
  { category: "Bottoms", path: "/bottoms" },
  { category: "Outerwear", path: "/outerwear" },
  { category: "Accessories", path: "/accessories" },
] as const;

export const NAV_LINKS = [
  ...CATEGORY_ROUTES,
  { category: "Outfits", path: "/outfits" },
] as const;

export const WHATSAPP_NUMBER = "96103505664";

export const variantKey = (id: string, color: string, size: string) =>
  `${id}::${color}::${size}`;
