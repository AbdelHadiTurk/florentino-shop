import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { a as ShopProvider, d as itemUnitPrice, f as outfitOriginalPrice, i as PRODUCTS, l as itemImage, m as useShop, o as WHATSAPP_NUMBER, s as cartKey, t as CATEGORY_ROUTES, u as itemName } from "./shop-context-DjfzwQLT.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D1ADCVb_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Cnjfe5z4.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function ShopLayout({ children }) {
	const { cart, cartOpen, setCartOpen, cartCount, total, updateQty, removeItem } = useShop();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [categoriesOpen, setCategoriesOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		location: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const dropdownRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const onClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setCategoriesOpen(false);
		};
		document.addEventListener("mousedown", onClickOutside);
		return () => document.removeEventListener("mousedown", onClickOutside);
	}, []);
	const orderViaWhatsApp = () => {
		const e = {};
		if (!form.name.trim()) e.name = "Required";
		if (!form.phone.trim()) e.phone = "Required";
		if (!form.location.trim()) e.location = "Required";
		if (cart.length === 0) e.cart = "Your cart is empty";
		setErrors(e);
		if (Object.keys(e).length) return;
		const lines = [
			"Hello, I want to order from Florentino:",
			"",
			`Name: ${form.name}`,
			`Phone: ${form.phone}`,
			`Location: ${form.location}`,
			"",
			"Order:"
		];
		for (const i of cart) if (i.kind === "single") lines.push(`• ${i.product.name} — Color: ${i.color}, Size: ${i.size} — x${i.qty} — $${i.product.price * i.qty}`);
		else {
			const unit = itemUnitPrice(i);
			const original = outfitOriginalPrice(i.outfit);
			lines.push(`• OUTFIT: ${i.outfit.name} — x${i.qty} — $${unit * i.qty} (was $${original * i.qty}, 15% off)`);
			for (const pick of i.picks) {
				const p = PRODUCTS.find((x) => x.id === pick.productId);
				if (p) lines.push(`    – ${p.name} — Color: ${pick.color}, Size: ${pick.size}`);
			}
		}
		lines.push("", `Total: $${total}`);
		const msg = encodeURIComponent(lines.join("\n"));
		window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: `fixed top-0 inset-x-0 z-40 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur border-b border-border py-3" : "py-5"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 flex items-center justify-between gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "font-display text-2xl md:text-3xl font-semibold tracking-wide truncate",
							children: "Florentino"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden lg:flex items-center gap-6 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									activeOptions: { exact: true },
									className: "hover:opacity-70 transition-opacity",
									activeProps: { className: "font-semibold" },
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									ref: dropdownRef,
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setCategoriesOpen((open) => !open),
										className: "flex items-center gap-1 hover:opacity-70 transition-opacity",
										children: ["Categories", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-xs transition-transform ${categoriesOpen ? "rotate-180" : ""}`,
											children: "▾"
										})]
									}), categoriesOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute left-0 top-full mt-3 w-56 overflow-hidden rounded-2xl border border-border/70 bg-background/95 shadow-xl backdrop-blur",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "max-h-64 overflow-y-auto py-2",
											children: CATEGORY_ROUTES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: c.path,
												onClick: () => setCategoriesOpen(false),
												className: "block px-4 py-2 text-sm hover:bg-muted",
												activeProps: { className: "font-semibold" },
												children: c.category
											}, c.path))
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/outfits",
									className: "hover:opacity-70 transition-opacity",
									activeProps: { className: "font-semibold" },
									children: "Outfits"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#about",
									className: "hover:opacity-70 transition-opacity",
									children: "About us"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#location",
									className: "hover:opacity-70 transition-opacity",
									children: "Our location"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setCartOpen(true),
							className: "relative shrink-0 rounded-full border border-foreground/20 px-4 py-2 text-sm hover:bg-foreground hover:text-background transition-colors",
							"aria-label": "Open cart",
							children: ["Cart", cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-2 -right-2 h-5 w-5 grid place-items-center rounded-full bg-accent text-accent-foreground text-xs font-medium",
								children: cartCount
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:hidden mt-3 border-t border-border/50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-6 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									activeOptions: { exact: true },
									className: "whitespace-nowrap",
									activeProps: { className: "font-semibold" },
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setCategoriesOpen((open) => !open),
									className: "whitespace-nowrap",
									children: "Categories"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/outfits",
									className: "whitespace-nowrap",
									activeProps: { className: "font-semibold" },
									children: "Outfits"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#about",
									className: "whitespace-nowrap",
									children: "About us"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#location",
									className: "whitespace-nowrap",
									children: "Our location"
								})
							]
						}), categoriesOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 max-h-56 overflow-y-auto rounded-xl border border-border/60 bg-background/95 p-2 shadow-sm",
							children: CATEGORY_ROUTES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: c.path,
								onClick: () => setCategoriesOpen(false),
								className: "block rounded-lg px-3 py-2 text-sm hover:bg-muted",
								children: c.category
							}, c.path))
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "pt-28 md:pt-32",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border py-8 text-center text-sm text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Florentino. Crafted with love."
				]
			}),
			cartOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-foreground/40 animate-fade-in",
					onClick: () => setCartOpen(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "absolute right-0 top-0 h-full w-full max-w-md bg-background shadow-2xl flex flex-col animate-fade-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between p-6 border-b border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl",
								children: "Your Bag"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setCartOpen(false),
								"aria-label": "Close",
								className: "text-2xl leading-none",
								children: "×"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 overflow-y-auto p-6 space-y-4",
							children: [
								cart.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-center text-muted-foreground py-12",
									children: "Your bag is empty."
								}),
								cart.map((i) => {
									const k = cartKey(i);
									const unit = itemUnitPrice(i);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-[80px_minmax(0,1fr)_auto] gap-3 items-start",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: itemImage(i),
												alt: itemName(i),
												className: "h-20 w-20 rounded-xl object-cover shrink-0"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-medium truncate",
														children: i.kind === "outfit" ? `Outfit: ${i.outfit.name}` : i.product.name
													}),
													i.kind === "single" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-xs text-muted-foreground mt-0.5",
														children: [
															i.color,
															" · Size ",
															i.size
														]
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
														className: "text-xs text-muted-foreground mt-0.5 space-y-0.5",
														children: i.picks.map((pk) => {
															return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
																className: "truncate",
																children: [
																	PRODUCTS.find((x) => x.id === pk.productId)?.name,
																	" — ",
																	pk.color,
																	", ",
																	pk.size
																]
															}, pk.productId);
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-sm text-muted-foreground mt-1",
														children: [
															"$",
															unit,
															i.kind === "outfit" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "line-through ml-2 text-xs",
																children: ["$", outfitOriginalPrice(i.outfit)]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-2 inline-flex items-center border border-border rounded-full",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																onClick: () => updateQty(k, -1),
																className: "px-3 py-1",
																children: "−"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "px-3 text-sm",
																children: i.qty
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																onClick: () => updateQty(k, 1),
																className: "px-3 py-1",
																children: "+"
															})
														]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => removeItem(k),
												className: "text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground shrink-0",
												children: "Remove"
											})
										]
									}, k);
								}),
								cart.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-6 border-t border-border space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-display text-lg",
										children: "Your details"
									}), [
										"name",
										"phone",
										"location"
									].map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: field === "phone" ? "tel" : "text",
										placeholder: field.charAt(0).toUpperCase() + field.slice(1),
										value: form[field],
										onChange: (e) => setForm({
											...form,
											[field]: e.target.value
										}),
										className: "w-full rounded-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground"
									}), errors[field] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-destructive mt-1 ml-4",
										children: errors[field]
									})] }, field))]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border p-6 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm uppercase tracking-widest text-muted-foreground",
										children: "Total"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-2xl",
										children: ["$", total]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: orderViaWhatsApp,
									disabled: cart.length === 0,
									className: "w-full btn-primary disabled:opacity-40 disabled:cursor-not-allowed",
									style: {
										background: "#25D366",
										color: "white"
									},
									children: "Order via WhatsApp"
								}),
								errors.cart && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-destructive text-center",
									children: errors.cart
								})
							]
						})
					]
				})]
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn-primary",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-primary",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "btn-outline",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Florentino — Elegant Women's Fashion" },
			{
				name: "description",
				content: "Florentino — feminine, elegant clothing for the modern woman. Shop dresses, knits, coats and more."
			},
			{
				property: "og:title",
				content: "Florentino — Elegant Women's Fashion"
			},
			{
				property: "og:description",
				content: "Florentino — feminine, elegant clothing for the modern woman. Shop dresses, knits, coats and more."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Florentino — Elegant Women's Fashion"
			},
			{
				name: "twitter:description",
				content: "Florentino — feminine, elegant clothing for the modern woman. Shop dresses, knits, coats and more."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/369e1156-bec5-493f-a12a-535fb239d065/id-preview-e3904707--bc893ec6-b0c5-4543-bff6-7fb2600d59d2.lovable.app-1783968303165.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/369e1156-bec5-493f-a12a-535fb239d065/id-preview-e3904707--bc893ec6-b0c5-4543-bff6-7fb2600d59d2.lovable.app-1783968303165.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) })
	});
}
var $$splitComponentImporter$7 = () => import("./routes-2b_h7oLA.mjs");
var Route$7 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({ meta: [{ title: "Florentino — Elegant Women's Fashion" }, {
		name: "description",
		content: "Florentino — feminine, elegant clothing for the modern woman. Discover our best-selling dresses, knits, tops and more."
	}] })
});
var $$splitComponentImporter$6 = () => import("./accessories-SiXauucv.mjs");
var Route$6 = createFileRoute("/accessories")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({ meta: [{ title: "Accessories — Florentino" }, {
		name: "description",
		content: "Bags, belts and silk hair scarves — the finishing touch. Shop Florentino accessories."
	}] })
});
var $$splitComponentImporter$5 = () => import("./bottoms-jX0Jl4tX.mjs");
var Route$5 = createFileRoute("/bottoms")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: "Bottoms — Florentino" }, {
		name: "description",
		content: "Wide-leg trousers, tailored pants, skirts and shorts. Shop Florentino bottoms."
	}] })
});
var $$splitComponentImporter$4 = () => import("./dresses-CeC0Dsgs.mjs");
var Route$4 = createFileRoute("/dresses")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "Dresses — Florentino" }, {
		name: "description",
		content: "Feminine dresses — from linen day dresses to satin evening midis. Shop Florentino's dress collection."
	}] })
});
var $$splitComponentImporter$3 = () => import("./knitwear-D-IRtzE9.mjs");
var Route$3 = createFileRoute("/knitwear")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Knitwear — Florentino" }, {
		name: "description",
		content: "Soft sweaters, cardigans and turtlenecks in nude and neutral tones. Shop Florentino knitwear."
	}] })
});
var $$splitComponentImporter$2 = () => import("./outerwear-CKus4V6i.mjs");
var Route$2 = createFileRoute("/outerwear")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Outerwear — Florentino" }, {
		name: "description",
		content: "Trenches, wool coats, blazers and puffers to complete every look. Shop Florentino outerwear."
	}] })
});
var $$splitComponentImporter$1 = () => import("./outfits-BW5EBmk4.mjs");
var Route$1 = createFileRoute("/outfits")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [
		{ title: "Outfits — Florentino" },
		{
			name: "description",
			content: "Complete Florentino looks — curated outfit bundles pairing our best pieces at 10% off."
		},
		{
			property: "og:title",
			content: "Outfits — Florentino"
		},
		{
			property: "og:description",
			content: "Curated Florentino outfit bundles at 10% off."
		}
	] })
});
var $$splitComponentImporter = () => import("./tops-B5Y078ZP.mjs");
var Route = createFileRoute("/tops")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: "Tops — Florentino" }, {
		name: "description",
		content: "Blouses, camisoles and button-ups that elevate every day. Shop Florentino tops."
	}] })
});
var rootRouteChildren = {
	IndexRoute: Route$7.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	AccessoriesRoute: Route$6.update({
		id: "/accessories",
		path: "/accessories",
		getParentRoute: () => Route$8
	}),
	BottomsRoute: Route$5.update({
		id: "/bottoms",
		path: "/bottoms",
		getParentRoute: () => Route$8
	}),
	DressesRoute: Route$4.update({
		id: "/dresses",
		path: "/dresses",
		getParentRoute: () => Route$8
	}),
	KnitwearRoute: Route$3.update({
		id: "/knitwear",
		path: "/knitwear",
		getParentRoute: () => Route$8
	}),
	OuterwearRoute: Route$2.update({
		id: "/outerwear",
		path: "/outerwear",
		getParentRoute: () => Route$8
	}),
	OutfitsRoute: Route$1.update({
		id: "/outfits",
		path: "/outfits",
		getParentRoute: () => Route$8
	}),
	TopsRoute: Route.update({
		id: "/tops",
		path: "/tops",
		getParentRoute: () => Route$8
	})
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
