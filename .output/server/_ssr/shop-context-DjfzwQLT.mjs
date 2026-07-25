import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-context-DjfzwQLT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var product_1_default = "/assets/product-1-CYDaBjzs.jpg";
var product_1_nude_default = "/assets/product-1-nude-Dixdjd8Y.jpg";
var product_1_blush_default = "/assets/product-1-blush-u0g5HWHY.jpg";
var product_2_default = "/assets/product-2-CHHcNFAx.jpg";
var product_2_ivory_default = "/assets/product-2-ivory-4J9Ih5Vv.jpg";
var product_2_black_default = "/assets/product-2-black-Dl8zTGxz.jpg";
var product_3_default = "/assets/product-3-KyMOtqYJ.jpg";
var product_3_nude_default = "/assets/product-3-nude-2WNY_QYI.jpg";
var product_3_black_default = "/assets/product-3-black-DfKELlQ1.jpg";
var product_4_default = "/assets/product-4-D4ZlMm-R.jpg";
var product_4_sand_default = "/assets/product-4-sand-DeFeSPCA.jpg";
var product_4_black_default = "/assets/product-4-black-D99XRqoS.jpg";
var product_5_default = "/assets/product-5-GB4AKXLP.jpg";
var product_5_black_default = "/assets/product-5-black-C3ta4BXf.jpg";
var product_5_ivory_default = "/assets/product-5-ivory-Cqybkjk8.jpg";
var product_6_default = "/assets/product-6-DofHXou9.jpg";
var product_6_black_default = "/assets/product-6-black-DVq3jxwY.jpg";
var product_6_ivory_default = "/assets/product-6-ivory-D092ehJf.jpg";
var CLOTHING_SIZES = [
	"XS",
	"S",
	"M",
	"L",
	"XL",
	"XXL"
];
var ACCESSORY_SIZES = ["One Size"];
var NUDE = {
	name: "Nude",
	hex: "#e8d5c4"
};
var BLUSH = {
	name: "Blush",
	hex: "#f4d5d0"
};
var IVORY = {
	name: "Ivory",
	hex: "#f5efe6"
};
var SAND = {
	name: "Sand",
	hex: "#d9c7a7"
};
var CAMEL = {
	name: "Camel",
	hex: "#b58867"
};
var BLACK = {
	name: "Black",
	hex: "#1a1a1a"
};
var OLIVE = {
	name: "Olive",
	hex: "#8a8a5c"
};
var ROSE = {
	name: "Rose",
	hex: "#d99a9a"
};
var PRODUCTS = [
	{
		id: "k1",
		name: "Bella Knit Sweater",
		price: 68,
		image: product_1_default,
		images: {
			Nude: product_1_nude_default,
			Blush: product_1_blush_default
		},
		category: "Knitwear",
		colors: [
			NUDE,
			IVORY,
			BLUSH
		],
		sizes: CLOTHING_SIZES,
		bestSeller: true
	},
	{
		id: "k2",
		name: "Chunky Cable Cardigan",
		price: 82,
		image: product_1_default,
		images: {
			Ivory: product_1_default,
			Black: product_1_default
		},
		category: "Knitwear",
		colors: [
			CAMEL,
			IVORY,
			BLACK
		],
		sizes: CLOTHING_SIZES
	},
	{
		id: "k3",
		name: "Ribbed Turtleneck",
		price: 58,
		image: product_1_default,
		images: {
			Black: product_1_default,
			Ivory: product_1_default
		},
		category: "Knitwear",
		colors: [
			BLACK,
			IVORY,
			ROSE
		],
		sizes: CLOTHING_SIZES
	},
	{
		id: "k4",
		name: "Cashmere Blend Pullover",
		price: 120,
		image: product_1_default,
		images: { Nude: product_1_nude_default },
		category: "Knitwear",
		colors: [NUDE, SAND],
		sizes: CLOTHING_SIZES
	},
	{
		id: "d1",
		name: "Rosé Chiffon Dress",
		price: 89,
		image: product_2_default,
		images: { Ivory: product_2_ivory_default },
		category: "Dresses",
		colors: [BLUSH, IVORY],
		sizes: CLOTHING_SIZES,
		bestSeller: true
	},
	{
		id: "d2",
		name: "Slip Satin Midi",
		price: 95,
		image: product_2_default,
		images: { Black: product_2_black_default },
		category: "Dresses",
		colors: [
			NUDE,
			BLACK,
			ROSE
		],
		sizes: CLOTHING_SIZES,
		bestSeller: true
	},
	{
		id: "d3",
		name: "Linen Wrap Dress",
		price: 78,
		image: product_2_default,
		images: { Ivory: product_2_ivory_default },
		category: "Dresses",
		colors: [
			IVORY,
			SAND,
			OLIVE
		],
		sizes: CLOTHING_SIZES
	},
	{
		id: "d4",
		name: "Tiered Maxi Dress",
		price: 110,
		image: product_2_default,
		images: {
			Ivory: product_2_ivory_default,
			Black: product_2_black_default
		},
		category: "Dresses",
		colors: [
			BLUSH,
			IVORY,
			BLACK
		],
		sizes: CLOTHING_SIZES
	},
	{
		id: "t1",
		name: "Satin Blouse Ivory",
		price: 54,
		image: product_3_default,
		images: {
			Nude: product_3_nude_default,
			Black: product_3_black_default,
			Ivory: product_3_default
		},
		category: "Tops",
		colors: [
			IVORY,
			BLUSH,
			BLACK
		],
		sizes: CLOTHING_SIZES,
		bestSeller: true
	},
	{
		id: "t2",
		name: "Puff Sleeve Blouse",
		price: 62,
		image: product_3_default,
		images: { Ivory: product_3_default },
		category: "Tops",
		colors: [IVORY, ROSE],
		sizes: CLOTHING_SIZES
	},
	{
		id: "t3",
		name: "Silk Camisole",
		price: 48,
		image: product_3_default,
		images: {
			Nude: product_3_nude_default,
			Black: product_3_black_default,
			Ivory: product_3_default
		},
		category: "Tops",
		colors: [
			NUDE,
			BLACK,
			IVORY
		],
		sizes: CLOTHING_SIZES
	},
	{
		id: "t4",
		name: "Linen Button-Up",
		price: 58,
		image: product_3_default,
		images: { Ivory: product_3_default },
		category: "Tops",
		colors: [
			IVORY,
			SAND,
			OLIVE
		],
		sizes: CLOTHING_SIZES
	},
	{
		id: "b1",
		name: "Cream Wide-Leg Trousers",
		price: 72,
		image: product_4_default,
		images: {
			Sand: product_4_sand_default,
			Black: product_4_black_default,
			Ivory: product_4_default
		},
		category: "Bottoms",
		colors: [
			IVORY,
			SAND,
			BLACK
		],
		sizes: CLOTHING_SIZES,
		bestSeller: true
	},
	{
		id: "b2",
		name: "High-Waist Tailored Pants",
		price: 78,
		image: product_4_default,
		images: { Black: product_4_black_default },
		category: "Bottoms",
		colors: [BLACK, CAMEL],
		sizes: CLOTHING_SIZES
	},
	{
		id: "b3",
		name: "Pleated Midi Skirt",
		price: 64,
		image: product_4_default,
		images: {
			Black: product_4_black_default,
			Ivory: product_4_default
		},
		category: "Bottoms",
		colors: [
			BLUSH,
			IVORY,
			BLACK
		],
		sizes: CLOTHING_SIZES
	},
	{
		id: "b4",
		name: "Linen Bermuda Shorts",
		price: 52,
		image: product_4_default,
		images: {
			Sand: product_4_sand_default,
			Ivory: product_4_default
		},
		category: "Bottoms",
		colors: [
			IVORY,
			SAND,
			OLIVE
		],
		sizes: CLOTHING_SIZES
	},
	{
		id: "o1",
		name: "Camel Belted Trench",
		price: 145,
		image: product_6_default,
		images: {
			Black: product_6_black_default,
			Ivory: product_6_ivory_default
		},
		category: "Outerwear",
		colors: [
			CAMEL,
			IVORY,
			BLACK
		],
		sizes: CLOTHING_SIZES,
		bestSeller: true
	},
	{
		id: "o2",
		name: "Wool Longline Coat",
		price: 185,
		image: product_6_default,
		images: {
			Black: product_6_black_default,
			Ivory: product_6_ivory_default
		},
		category: "Outerwear",
		colors: [
			CAMEL,
			BLACK,
			IVORY
		],
		sizes: CLOTHING_SIZES
	},
	{
		id: "o3",
		name: "Cropped Blazer",
		price: 98,
		image: product_6_default,
		images: {
			Black: product_6_black_default,
			Ivory: product_6_ivory_default
		},
		category: "Outerwear",
		colors: [
			IVORY,
			BLACK,
			SAND
		],
		sizes: CLOTHING_SIZES
	},
	{
		id: "o4",
		name: "Quilted Puffer Jacket",
		price: 128,
		image: product_6_default,
		images: {
			Black: product_6_black_default,
			Nude: product_6_default
		},
		category: "Outerwear",
		colors: [
			NUDE,
			BLACK,
			OLIVE
		],
		sizes: CLOTHING_SIZES
	},
	{
		id: "a1",
		name: "Florentino Tote Nude",
		price: 95,
		image: product_5_default,
		images: {
			Black: product_5_black_default,
			Ivory: product_5_ivory_default
		},
		category: "Accessories",
		colors: [
			NUDE,
			CAMEL,
			BLACK
		],
		sizes: ACCESSORY_SIZES,
		bestSeller: true
	},
	{
		id: "a2",
		name: "Silk Hair Scarf",
		price: 28,
		image: product_5_default,
		images: { Ivory: product_5_ivory_default },
		category: "Accessories",
		colors: [
			BLUSH,
			IVORY,
			ROSE
		],
		sizes: ACCESSORY_SIZES
	},
	{
		id: "a3",
		name: "Leather Belt",
		price: 42,
		image: product_5_default,
		images: { Black: product_5_black_default },
		category: "Accessories",
		colors: [CAMEL, BLACK],
		sizes: [
			"S",
			"M",
			"L"
		]
	},
	{
		id: "a4",
		name: "Mini Crossbody Bag",
		price: 78,
		image: product_5_default,
		images: {
			Black: product_5_black_default,
			Ivory: product_5_ivory_default
		},
		category: "Accessories",
		colors: [
			NUDE,
			BLACK,
			IVORY
		],
		sizes: ACCESSORY_SIZES
	}
];
var OUTFITS = [
	{
		id: "of1",
		name: "Weekend Brunch",
		description: "Soft knit sweater paired with flowing wide-leg trousers.",
		productIds: ["k1", "b1"]
	},
	{
		id: "of2",
		name: "Office Chic",
		description: "A satin blouse tucked into tailored high-waist pants.",
		productIds: ["t1", "b2"]
	},
	{
		id: "of3",
		name: "City Layer",
		description: "Ribbed turtleneck with a pleated midi skirt for effortless days.",
		productIds: ["k3", "b3"]
	},
	{
		id: "of4",
		name: "Evening Glow",
		description: "Slip satin dress finished with our signature belted trench.",
		productIds: ["d2", "o1"]
	}
];
var OUTFIT_DISCOUNT = .15;
var getOutfitProducts = (o) => o.productIds.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
var outfitPrice = (o) => {
	const sum = getOutfitProducts(o).reduce((s, p) => s + p.price, 0);
	return Math.round(sum * (1 - OUTFIT_DISCOUNT));
};
var outfitOriginalPrice = (o) => getOutfitProducts(o).reduce((s, p) => s + p.price, 0);
var CATEGORY_ROUTES = [
	{
		category: "Dresses",
		path: "/dresses"
	},
	{
		category: "Knitwear",
		path: "/knitwear"
	},
	{
		category: "Tops",
		path: "/tops"
	},
	{
		category: "Bottoms",
		path: "/bottoms"
	},
	{
		category: "Outerwear",
		path: "/outerwear"
	},
	{
		category: "Accessories",
		path: "/accessories"
	}
];
var NAV_LINKS = [...CATEGORY_ROUTES, {
	category: "Outfits",
	path: "/outfits"
}];
var WHATSAPP_NUMBER = "96103505664";
var cartKey = (i) => i.kind === "single" ? `single::${i.product.id}::${i.color}::${i.size}` : `outfit::${i.outfit.id}::${i.picks.map((p) => `${p.productId}-${p.color}-${p.size}`).join("+")}`;
var itemUnitPrice = (i) => i.kind === "single" ? i.product.price : outfitPrice(i.outfit);
var itemName = (i) => i.kind === "single" ? i.product.name : i.outfit.name;
var itemImage = (i) => {
	if (i.kind === "single") return i.product.images[i.color] || i.product.image;
	const first = PRODUCTS.find((p) => p.id === i.picks[0]?.productId);
	if (!first) return "";
	return first.images[i.picks[0].color] || first.image;
};
var ShopContext = (0, import_react.createContext)(null);
function ShopProvider({ children }) {
	const [cart, setCart] = (0, import_react.useState)([]);
	const [cartOpen, setCartOpen] = (0, import_react.useState)(false);
	const [selection, setSelection] = (0, import_react.useState)({});
	const [pickErrors, setPickErrors] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem("florentino-cart");
			if (!raw) return;
			const stored = JSON.parse(raw);
			const restored = [];
			for (const i of stored) if (i.kind === "single") {
				const p = PRODUCTS.find((x) => x.id === i.id);
				if (p) restored.push({
					kind: "single",
					product: p,
					color: i.color,
					size: i.size,
					qty: i.qty
				});
			} else if (i.kind === "outfit") {
				const o = OUTFITS.find((x) => x.id === i.outfitId);
				if (o) restored.push({
					kind: "outfit",
					outfit: o,
					picks: i.picks,
					qty: i.qty
				});
			}
			setCart(restored);
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		const stored = cart.map((c) => c.kind === "single" ? {
			kind: "single",
			id: c.product.id,
			color: c.color,
			size: c.size,
			qty: c.qty
		} : {
			kind: "outfit",
			outfitId: c.outfit.id,
			picks: c.picks,
			qty: c.qty
		});
		localStorage.setItem("florentino-cart", JSON.stringify(stored));
	}, [cart]);
	const cartCount = cart.reduce((s, c) => s + c.qty, 0);
	const total = cart.reduce((s, c) => s + c.qty * itemUnitPrice(c), 0);
	const setPick = (0, import_react.useCallback)((id, patch) => {
		setSelection((s) => ({
			...s,
			[id]: {
				...s[id] || {
					color: "",
					size: ""
				},
				...patch
			}
		}));
		setPickErrors((e) => ({
			...e,
			[id]: ""
		}));
	}, []);
	const addToCart = (0, import_react.useCallback)((p) => {
		const sel = selection[p.id] || {
			color: "",
			size: ""
		};
		if (!sel.color || !sel.size) {
			setPickErrors((e) => ({
				...e,
				[p.id]: "Please select color and size"
			}));
			return;
		}
		setCart((c) => {
			const newItem = {
				kind: "single",
				product: p,
				color: sel.color,
				size: sel.size,
				qty: 1
			};
			const k = cartKey(newItem);
			if (c.find((i) => cartKey(i) === k)) return c.map((i) => cartKey(i) === k ? {
				...i,
				qty: i.qty + 1
			} : i);
			return [...c, newItem];
		});
		setCartOpen(true);
	}, [selection]);
	const addOutfitToCart = (0, import_react.useCallback)((o) => {
		const picks = [];
		for (const pid of o.productIds) {
			const sel = selection[`${o.id}:${pid}`] || {
				color: "",
				size: ""
			};
			if (!sel.color || !sel.size) {
				setPickErrors((e) => ({
					...e,
					[o.id]: "Please pick color & size for every piece"
				}));
				return;
			}
			picks.push({
				productId: pid,
				color: sel.color,
				size: sel.size
			});
		}
		setCart((c) => {
			const newItem = {
				kind: "outfit",
				outfit: o,
				picks,
				qty: 1
			};
			const k = cartKey(newItem);
			if (c.find((i) => cartKey(i) === k)) return c.map((i) => cartKey(i) === k ? {
				...i,
				qty: i.qty + 1
			} : i);
			return [...c, newItem];
		});
		setCartOpen(true);
	}, [selection]);
	const updateQty = (0, import_react.useCallback)((key, delta) => setCart((c) => c.map((i) => cartKey(i) === key ? {
		...i,
		qty: i.qty + delta
	} : i).filter((i) => i.qty > 0)), []);
	const removeItem = (0, import_react.useCallback)((key) => setCart((c) => c.filter((i) => cartKey(i) !== key)), []);
	const value = (0, import_react.useMemo)(() => ({
		cart,
		cartOpen,
		setCartOpen,
		cartCount,
		total,
		selection,
		pickErrors,
		setPick,
		addToCart,
		addOutfitToCart,
		updateQty,
		removeItem
	}), [
		cart,
		cartOpen,
		cartCount,
		total,
		selection,
		pickErrors,
		setPick,
		addToCart,
		addOutfitToCart,
		updateQty,
		removeItem
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopContext.Provider, {
		value,
		children
	});
}
function useShop() {
	const ctx = (0, import_react.useContext)(ShopContext);
	if (!ctx) throw new Error("useShop must be used within ShopProvider");
	return ctx;
}
//#endregion
export { ShopProvider as a, getOutfitProducts as c, itemUnitPrice as d, outfitOriginalPrice as f, PRODUCTS as i, itemImage as l, useShop as m, NAV_LINKS as n, WHATSAPP_NUMBER as o, outfitPrice as p, OUTFITS as r, cartKey as s, CATEGORY_ROUTES as t, itemName as u };
