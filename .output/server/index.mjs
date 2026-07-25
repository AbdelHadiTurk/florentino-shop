globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-25T14:47:40.326Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/CategoryPage-fMS-RSfm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"475-bfAmb0dEnnxOc9K3eGO+xyH6GSw\"",
		"mtime": "2026-07-25T14:47:39.521Z",
		"size": 1141,
		"path": "../public/assets/CategoryPage-fMS-RSfm.js"
	},
	"/assets/ProductGrid-C-CtVwz6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a32-lsdueTKeEKdZATVPWJUrUwo8/RI\"",
		"mtime": "2026-07-25T14:47:39.521Z",
		"size": 2610,
		"path": "../public/assets/ProductGrid-C-CtVwz6.js"
	},
	"/assets/accessories-CguVmGaU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f-dryUFl4eUg1HaoecUeg1NQIUGu8\"",
		"mtime": "2026-07-25T14:47:39.522Z",
		"size": 159,
		"path": "../public/assets/accessories-CguVmGaU.js"
	},
	"/assets/bottoms-CRg-Dgxf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-ICdMMCr8x+CikQN777Cn7v+sn+s\"",
		"mtime": "2026-07-25T14:47:39.522Z",
		"size": 155,
		"path": "../public/assets/bottoms-CRg-Dgxf.js"
	},
	"/assets/dresses-2RfNf9va.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-7iNinBeG4/knnCigYRCxoVnFIns\"",
		"mtime": "2026-07-25T14:47:39.522Z",
		"size": 155,
		"path": "../public/assets/dresses-2RfNf9va.js"
	},
	"/assets/hero-Bg4p-tYs.jpg": {
		"type": "image/jpeg",
		"etag": "\"cedd-9aIcKdJN5VMrap6Y5OMWE8NVCY4\"",
		"mtime": "2026-07-25T14:47:39.523Z",
		"size": 52957,
		"path": "../public/assets/hero-Bg4p-tYs.jpg"
	},
	"/assets/knitwear-EN_rue9o.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c-SfnvtTjqd1w42NEPgGCUyJ41VMc\"",
		"mtime": "2026-07-25T14:47:39.522Z",
		"size": 156,
		"path": "../public/assets/knitwear-EN_rue9o.js"
	},
	"/assets/outerwear-4j85nCIx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d-U1VSiZtS7QZVz5Fo1eZqhM4gbmM\"",
		"mtime": "2026-07-25T14:47:39.522Z",
		"size": 157,
		"path": "../public/assets/outerwear-4j85nCIx.js"
	},
	"/assets/outfits-BpB2-Vj4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1037-RUkJmQWLmE0y76nlBTi7qYHwf00\"",
		"mtime": "2026-07-25T14:47:39.523Z",
		"size": 4151,
		"path": "../public/assets/outfits-BpB2-Vj4.js"
	},
	"/assets/product-1-CYDaBjzs.jpg": {
		"type": "image/jpeg",
		"etag": "\"21b0e-j2OX2yZEUyUWZxgK+3DNy9Mx1dw\"",
		"mtime": "2026-07-25T14:47:39.523Z",
		"size": 137998,
		"path": "../public/assets/product-1-CYDaBjzs.jpg"
	},
	"/assets/index-3U5ppEMV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"58de6-pMra4iBwKwlYoEBNAip6tB8iDDw\"",
		"mtime": "2026-07-25T14:47:39.520Z",
		"size": 364006,
		"path": "../public/assets/index-3U5ppEMV.js"
	},
	"/assets/product-2-CHHcNFAx.jpg": {
		"type": "image/jpeg",
		"etag": "\"a18b-00NKdqLHVNc7d3pRLs6RK08qcag\"",
		"mtime": "2026-07-25T14:47:39.525Z",
		"size": 41355,
		"path": "../public/assets/product-2-CHHcNFAx.jpg"
	},
	"/assets/product-2-black-Dl8zTGxz.jpg": {
		"type": "image/jpeg",
		"etag": "\"eb48-UdTfXX+H+Yr9MNJnFy6rXyOqjjk\"",
		"mtime": "2026-07-25T14:47:39.525Z",
		"size": 60232,
		"path": "../public/assets/product-2-black-Dl8zTGxz.jpg"
	},
	"/assets/product-1-nude-Dixdjd8Y.jpg": {
		"type": "image/jpeg",
		"etag": "\"12515-YDo8LXFTee00qR+ylpl93BIu05Q\"",
		"mtime": "2026-07-25T14:47:39.524Z",
		"size": 75029,
		"path": "../public/assets/product-1-nude-Dixdjd8Y.jpg"
	},
	"/assets/product-2-ivory-4J9Ih5Vv.jpg": {
		"type": "image/jpeg",
		"etag": "\"96d6-/KSQnEiBameN3dpbTRCSTHj0X+E\"",
		"mtime": "2026-07-25T14:47:39.527Z",
		"size": 38614,
		"path": "../public/assets/product-2-ivory-4J9Ih5Vv.jpg"
	},
	"/assets/product-1-blush-u0g5HWHY.jpg": {
		"type": "image/jpeg",
		"etag": "\"21008-yzuJAptLx0ETM0RFvjX4YOEhtuc\"",
		"mtime": "2026-07-25T14:47:39.524Z",
		"size": 135176,
		"path": "../public/assets/product-1-blush-u0g5HWHY.jpg"
	},
	"/assets/product-3-KyMOtqYJ.jpg": {
		"type": "image/jpeg",
		"etag": "\"a7ce-8Q6S7z4ELxOJdmTCfYGrQK9NoRs\"",
		"mtime": "2026-07-25T14:47:39.528Z",
		"size": 42958,
		"path": "../public/assets/product-3-KyMOtqYJ.jpg"
	},
	"/assets/product-3-black-DfKELlQ1.jpg": {
		"type": "image/jpeg",
		"etag": "\"b93c-pOJlB18tj8zVxVckdadGQuAPftE\"",
		"mtime": "2026-07-25T14:47:39.529Z",
		"size": 47420,
		"path": "../public/assets/product-3-black-DfKELlQ1.jpg"
	},
	"/assets/product-3-nude-2WNY_QYI.jpg": {
		"type": "image/jpeg",
		"etag": "\"deb8-T4znWbDyDkDCpZWIcI/DzsyGBaQ\"",
		"mtime": "2026-07-25T14:47:39.530Z",
		"size": 57016,
		"path": "../public/assets/product-3-nude-2WNY_QYI.jpg"
	},
	"/assets/product-4-D4ZlMm-R.jpg": {
		"type": "image/jpeg",
		"etag": "\"7151-ffUXbmgDzGt9L+hZaHf2QiLi00o\"",
		"mtime": "2026-07-25T14:47:39.530Z",
		"size": 29009,
		"path": "../public/assets/product-4-D4ZlMm-R.jpg"
	},
	"/assets/product-4-black-D99XRqoS.jpg": {
		"type": "image/jpeg",
		"etag": "\"c1f0-1NVcnMo0J8sIeY05hjOD1LrXNRM\"",
		"mtime": "2026-07-25T14:47:39.530Z",
		"size": 49648,
		"path": "../public/assets/product-4-black-D99XRqoS.jpg"
	},
	"/assets/product-4-sand-DeFeSPCA.jpg": {
		"type": "image/jpeg",
		"etag": "\"87fe-0Oy4SiBCbGu4GTboWyamTjmkePU\"",
		"mtime": "2026-07-25T14:47:39.531Z",
		"size": 34814,
		"path": "../public/assets/product-4-sand-DeFeSPCA.jpg"
	},
	"/assets/product-5-GB4AKXLP.jpg": {
		"type": "image/jpeg",
		"etag": "\"b31d-dxJyyYtNAk2fC5hq312/E083MVg\"",
		"mtime": "2026-07-25T14:47:39.531Z",
		"size": 45853,
		"path": "../public/assets/product-5-GB4AKXLP.jpg"
	},
	"/assets/product-5-black-C3ta4BXf.jpg": {
		"type": "image/jpeg",
		"etag": "\"9993-rZ2LmpP9jZQC7YLBR2dBT4IXuMw\"",
		"mtime": "2026-07-25T14:47:39.531Z",
		"size": 39315,
		"path": "../public/assets/product-5-black-C3ta4BXf.jpg"
	},
	"/assets/product-5-ivory-Cqybkjk8.jpg": {
		"type": "image/jpeg",
		"etag": "\"a97a-h0FOMKWYOZV3WbqS74C7q5PUCpY\"",
		"mtime": "2026-07-25T14:47:39.531Z",
		"size": 43386,
		"path": "../public/assets/product-5-ivory-Cqybkjk8.jpg"
	},
	"/assets/product-6-DofHXou9.jpg": {
		"type": "image/jpeg",
		"etag": "\"baf5-FTV1vFEfcWS9NYU+vB3KGoCLKBM\"",
		"mtime": "2026-07-25T14:47:39.531Z",
		"size": 47861,
		"path": "../public/assets/product-6-DofHXou9.jpg"
	},
	"/assets/product-6-black-DVq3jxwY.jpg": {
		"type": "image/jpeg",
		"etag": "\"c3c4-ufNdqYxvOsX/dDNsODIXi7Nkk/0\"",
		"mtime": "2026-07-25T14:47:39.532Z",
		"size": 50116,
		"path": "../public/assets/product-6-black-DVq3jxwY.jpg"
	},
	"/assets/product-6-ivory-D092ehJf.jpg": {
		"type": "image/jpeg",
		"etag": "\"9958-AsP39xiyCVVmHEkgC46jV9jupy4\"",
		"mtime": "2026-07-25T14:47:39.532Z",
		"size": 39256,
		"path": "../public/assets/product-6-ivory-D092ehJf.jpg"
	},
	"/assets/routes-DC0poUFf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1afa-iFtkYuEGOHbML7/PAPpMbfkKfAg\"",
		"mtime": "2026-07-25T14:47:39.523Z",
		"size": 6906,
		"path": "../public/assets/routes-DC0poUFf.js"
	},
	"/assets/styles-Cnjfe5z4.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"12fa1-zMmv/RqM2qUigQPPK+UAGkKk/fQ\"",
		"mtime": "2026-07-25T14:47:39.532Z",
		"size": 77729,
		"path": "../public/assets/styles-Cnjfe5z4.css"
	},
	"/assets/tops-CvozwVrg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"98-yq43qSyHUJmVWBDaAxoTCqyH+J8\"",
		"mtime": "2026-07-25T14:47:39.523Z",
		"size": 152,
		"path": "../public/assets/tops-CvozwVrg.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_6hTiIa = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_6hTiIa
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
