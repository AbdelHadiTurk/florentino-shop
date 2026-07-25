import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as PRODUCTS } from "./shop-context-DjfzwQLT.mjs";
import { t as ProductGrid } from "./ProductGrid-CBivYfwt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CategoryPage-DX73DMji.js
var import_jsx_runtime = require_jsx_runtime();
var BLURBS = {
	Dresses: "Feminine silhouettes for every occasion — from daylight linens to satin evenings.",
	Knitwear: "Soft, cozy knits in nude and neutral tones to layer all season.",
	Tops: "Blouses, camis and button-ups that make everyday feel elevated.",
	Bottoms: "Trousers, skirts and shorts tailored for effortless movement.",
	Outerwear: "Coats, trenches and blazers to finish every look beautifully.",
	Accessories: "The finishing touch — bags, belts and silk scarves."
};
function CategoryPage({ category }) {
	const items = PRODUCTS.filter((p) => p.category === category);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-10 md:mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.3em] uppercase text-muted-foreground",
						children: "The Collection"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl md:text-5xl mt-3",
						children: category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground max-w-xl mx-auto",
						children: BLURBS[category]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { products: items })]
		})
	});
}
//#endregion
export { CategoryPage as t };
