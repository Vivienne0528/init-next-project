const CHUNK_PUBLIC_PATH = "server/pages/index.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_bf671b14._.js");
runtime.loadChunk("server/chunks/ssr/[root-of-the-server]__93ade7bd._.js");
runtime.loadChunk(
  "server/chunks/ssr/node_modules_@chakra-ui_react_dist_esm_5cf1264f._.js",
);
runtime.loadChunk(
  "server/chunks/ssr/node_modules_react-icons_lu_index_mjs_2828a6d6._.js",
);
runtime.loadChunk(
  "server/chunks/ssr/node_modules_react-icons_lib_6322dabf._.js",
);
runtime.loadChunk("server/chunks/ssr/node_modules_@emotion_125d9758._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@zag-js_f3292d51._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@floating-ui_ea67b7e3._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_3828eb87._.js");
runtime.loadChunk("server/chunks/ssr/[root-of-the-server]__947a57af._.js");
runtime.loadChunk("server/chunks/ssr/_dbb25615._.js");
runtime.getOrInstantiateRuntimeModule(
  '[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => "[project]/src/pages/index.tsx [ssr] (ecmascript)", INNER_DOCUMENT => "[project]/src/pages/_document.tsx [ssr] (ecmascript)", INNER_APP => "[project]/src/pages/_app.tsx [ssr] (ecmascript)" } [ssr] (ecmascript)',
  CHUNK_PUBLIC_PATH,
);
module.exports = runtime.getOrInstantiateRuntimeModule(
  '[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => "[project]/src/pages/index.tsx [ssr] (ecmascript)", INNER_DOCUMENT => "[project]/src/pages/_document.tsx [ssr] (ecmascript)", INNER_APP => "[project]/src/pages/_app.tsx [ssr] (ecmascript)" } [ssr] (ecmascript)',
  CHUNK_PUBLIC_PATH,
).exports;
