import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as getOutfitProducts, i as PRODUCTS, n as NAV_LINKS, o as WHATSAPP_NUMBER, r as OUTFITS } from "./shop-context-DjfzwQLT.mjs";
import { t as ProductGrid } from "./ProductGrid-CBivYfwt.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-2b_h7oLA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-Bg4p-tYs.jpg";
function CategoryTile({ to, label, sublabel, images }) {
	const [idx, setIdx] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (images.length <= 1) return;
		const t = setInterval(() => {
			setIdx((i) => (i + 1) % images.length);
		}, 5e3);
		return () => clearInterval(t);
	}, [images.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "group relative overflow-hidden rounded-2xl aspect-[4/5] bg-background shadow-sm block",
		children: [
			images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: label,
				className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 group-hover:scale-105 ${i === idx ? "opacity-100" : "opacity-0"}`
			}, src + i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-4 left-4 right-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl text-background",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-background/80 mt-1",
					children: sublabel
				})]
			})
		]
	});
}
function Index() {
	const bestSellers = PRODUCTS.filter((p) => p.bestSeller);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "home",
			className: "relative overflow-hidden",
			style: { background: "linear-gradient(135deg, var(--nude), var(--blush))" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center py-16 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4",
							children: "New Collection · SS26"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl md:text-7xl font-medium leading-[1.05]",
							children: [
								"Elegance,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								" effortlessly worn."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-base md:text-lg text-muted-foreground max-w-md",
							children: "Florentino curates timeless pieces for the modern woman — soft silhouettes, whispered tones, quiet luxury."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#best-sellers",
								className: "btn-primary",
								children: "Shop best sellers"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dresses",
								className: "btn-outline",
								children: "Browse dresses"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative animate-fade-in",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_default,
							alt: "Florentino hero",
							className: "h-full w-full object-cover",
							width: 1024,
							height: 1280
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-6 -left-6 hidden md:block bg-background rounded-2xl px-5 py-4 shadow-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: "Handpicked"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl",
							children: "New arrivals"
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "best-sellers",
			className: "py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.3em] uppercase text-muted-foreground",
							children: "Loved by all"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl md:text-5xl mt-3",
							children: "Best Sellers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground max-w-xl mx-auto",
							children: "The pieces our community keeps coming back to — timeless, adored, and ready to wear."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { products: bestSellers })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 md:py-24",
			style: { background: "var(--sand)" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.3em] uppercase text-muted-foreground",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl md:text-5xl mt-3",
						children: "Shop by Category"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6",
					children: NAV_LINKS.map((c) => {
						const isOutfits = c.path === "/outfits";
						const images = isOutfits ? Array.from(new Set(OUTFITS.flatMap((o) => getOutfitProducts(o).flatMap((p) => [p.image, ...Object.values(p.images)])))) : Array.from(new Set(PRODUCTS.filter((p) => p.category === c.category).flatMap((p) => [p.image, ...Object.values(p.images)])));
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryTile, {
							to: c.path,
							label: c.category,
							sublabel: isOutfits ? "Save 15% →" : "Shop now →",
							images
						}, c.path);
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "about",
			className: "py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.3em] uppercase text-muted-foreground",
						children: "About Florentino"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl md:text-5xl mt-3",
						children: "A love letter to feminine style"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-base md:text-lg text-muted-foreground leading-relaxed",
						children: "Born from a passion for timeless silhouettes and soft, sun-washed tones, Florentino is a small boutique dedicated to women who dress with intention. Every piece is chosen for the way it feels against the skin, the way it moves in the light, and the way it makes you feel — quietly, undeniably beautiful."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "contact",
			className: "py-20 md:py-28",
			style: { background: "var(--nude)" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.3em] uppercase text-muted-foreground",
						children: "Get in touch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl md:text-5xl mt-3",
						children: "Let's talk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Orders, questions, styling — we're here."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `https://wa.me/${WHATSAPP_NUMBER}`,
							target: "_blank",
							rel: "noreferrer",
							className: "btn-primary",
							children: "WhatsApp us"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.instagram.com/florentino_shop",
							target: "_blank",
							rel: "noreferrer",
							className: "btn-outline",
							children: "@florentino_shop"
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "location",
			className: "py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-5xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-3xl bg-secondary/40 p-8 md:p-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-0 right-0 bg-foreground text-background text-xs uppercase tracking-widest px-4 py-2 rounded-bl-2xl",
							children: "5% Off"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.3em] uppercase text-muted-foreground",
							children: "Visit us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl md:text-4xl mt-3",
							children: "Come say hello"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground max-w-xl mx-auto",
							children: "Step into our boutique and enjoy 5% off your in-store purchase. We would love to style you in person."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://maps.app.goo.gl/ZpSJ7op9a9AX3EZP8?g_st=ic",
							target: "_blank",
							rel: "noreferrer",
							className: "btn-primary mt-8",
							children: "Open in Google Maps"
						})
					]
				})
			})
		})
	] });
}
//#endregion
export { Index as component };
