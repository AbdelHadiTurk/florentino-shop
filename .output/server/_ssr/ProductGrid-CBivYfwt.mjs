import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { m as useShop } from "./shop-context-DjfzwQLT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductGrid-CBivYfwt.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	const { selection, pickErrors, setPick, addToCart } = useShop();
	const sel = selection[product.id] || {
		color: "",
		size: ""
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden rounded-2xl bg-secondary aspect-[4/5]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: sel.color ? product.images[sel.color] || product.image : product.image,
					alt: product.name,
					loading: "lazy",
					width: 1024,
					height: 1280,
					className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg truncate",
						children: product.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-muted-foreground mt-1",
						children: product.category
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-lg font-medium shrink-0",
					children: ["$", product.price]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-2",
					children: ["Color", sel.color ? `: ${sel.color}` : ""]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: product.colors.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setPick(product.id, { color: c.name }),
						title: c.name,
						"aria-label": c.name,
						className: `h-7 w-7 rounded-full border-2 transition-transform ${sel.color === c.name ? "border-foreground scale-110" : "border-border hover:scale-105"}`,
						style: { background: c.hex }
					}, c.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-2",
					children: ["Size", sel.size ? `: ${sel.size}` : ""]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: product.sizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setPick(product.id, { size: s }),
						className: `min-w-9 px-2.5 h-8 rounded-full text-xs border transition-colors ${sel.size === s ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"}`,
						children: s
					}, s))
				})]
			}),
			pickErrors[product.id] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-destructive mt-2",
				children: pickErrors[product.id]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => addToCart(product),
				className: "mt-4 w-full rounded-full py-3 text-sm font-medium uppercase tracking-wider bg-foreground text-background hover:opacity-90 transition-opacity",
				children: "Add to Cart"
			})
		]
	});
}
function ProductGrid({ products }) {
	if (products.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-center text-muted-foreground py-16",
		children: "No products in this category yet."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
		children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
	});
}
//#endregion
export { ProductGrid as t };
