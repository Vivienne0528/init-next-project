const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk(
  "server/chunks/ssr/node_modules_@chakra-ui_react_dist_esm_7fa32d8d._.js",
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
runtime.loadChunk("server/chunks/ssr/[root-of-the-server]__bb0482dd._.js");
runtime.getOrInstantiateRuntimeModule(
  "[project]/src/pages/_app.tsx [ssr] (ecmascript)",
  CHUNK_PUBLIC_PATH,
);
module.exports = runtime.getOrInstantiateRuntimeModule(
  "[project]/src/pages/_app.tsx [ssr] (ecmascript)",
  CHUNK_PUBLIC_PATH,
).exports;
