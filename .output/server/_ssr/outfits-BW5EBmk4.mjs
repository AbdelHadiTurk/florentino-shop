import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as getOutfitProducts, f as outfitOriginalPrice, m as useShop, p as outfitPrice, r as OUTFITS } from "./shop-context-DjfzwQLT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/outfits-BW5EBmk4.js
var import_jsx_runtime = require_jsx_runtime();
function OutfitPieceSelector({ outfit, product }) {
	const { selection, setPick } = useShop();
	const key = `${outfit.id}:${product.id}`;
	const sel = selection[key] || {
		color: "",
		size: ""
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-3 rounded-2xl border border-border p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: sel.color ? product.images[sel.color] || product.image : product.image,
			alt: product.name,
			className: "h-24 w-20 rounded-xl object-cover shrink-0"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium text-sm truncate",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: ["$", product.price]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-1",
						children: ["Color", sel.color ? `: ${sel.color}` : ""]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: product.colors.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setPick(key, { color: c.name }),
							title: c.name,
							"aria-label": c.name,
							className: `h-5 w-5 rounded-full border-2 transition-transform ${sel.color === c.name ? "border-foreground scale-110" : "border-border"}`,
							style: { background: c.hex }
						}, c.name))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-1",
						children: ["Size", sel.size ? `: ${sel.size}` : ""]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1",
						children: product.sizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setPick(key, { size: s }),
							className: `min-w-7 px-2 h-6 rounded-full text-[10px] border transition-colors ${sel.size === s ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"}`,
							children: s
						}, s))
					})]
				})
			]
		})]
	});
}
function OutfitCard({ outfit }) {
	const { selection, pickErrors, addOutfitToCart } = useShop();
	const products = getOutfitProducts(outfit);
	const price = outfitPrice(outfit);
	const original = outfitOriginalPrice(outfit);
	const firstPick = selection[`${outfit.id}:${products[0]?.id}`];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col rounded-3xl bg-secondary/40 p-4 md:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-2xl bg-secondary aspect-[4/5]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: firstPick?.color && products[0] ? products[0].images[firstPick.color] || products[0].image : products[0]?.image,
					alt: outfit.name,
					className: "h-full w-full object-cover",
					loading: "lazy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-3 left-3 bg-foreground text-background text-xs uppercase tracking-widest px-3 py-1 rounded-full",
					children: "Save 15%"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl truncate",
						children: outfit.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-1",
						children: outfit.description
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-lg font-medium",
						children: ["$", price]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground line-through",
						children: ["$", original]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-3",
				children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutfitPieceSelector, {
					outfit,
					product: p
				}, p.id))
			}),
			pickErrors[outfit.id] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-destructive mt-2",
				children: pickErrors[outfit.id]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => addOutfitToCart(outfit),
				className: "mt-4 w-full rounded-full py-3 text-sm font-medium uppercase tracking-wider bg-foreground text-background hover:opacity-90 transition-opacity",
				children: ["Add Outfit — $", price]
			})
		]
	});
}
function OutfitGrid({ outfits }) {
	if (outfits.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-center text-muted-foreground py-16",
		children: "No outfits yet."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",
		children: outfits.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutfitCard, { outfit: o }, o.id))
	});
}
function OutfitsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-10 md:mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.3em] uppercase text-muted-foreground",
						children: "Styled by Florentino"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl md:text-5xl mt-3",
						children: "Outfits"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground max-w-xl mx-auto",
						children: "Complete looks pairing our favorite pieces — every outfit bundle is 15% off the sum of its parts."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutfitGrid, { outfits: OUTFITS })]
		})
	});
}
//#endregion
export { OutfitsPage as component };
