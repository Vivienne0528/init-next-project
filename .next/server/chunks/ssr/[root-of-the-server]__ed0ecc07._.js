module.exports = {
  "[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var {
      g: global,
      __dirname,
      a: __turbopack_async_module__,
    } = __turbopack_context__;
    __turbopack_async_module__(
      async (
        __turbopack_handle_async_dependencies__,
        __turbopack_async_result__,
      ) => {
        try {
          const mod = await __turbopack_context__.y("@reduxjs/toolkit");

          __turbopack_context__.n(mod);
          __turbopack_async_result__();
        } catch (e) {
          __turbopack_async_result__(e);
        }
      },
      true,
    );
  },
  "[project]/src/store/store.ts [ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var {
      g: global,
      __dirname,
      a: __turbopack_async_module__,
    } = __turbopack_context__;
    __turbopack_async_module__(
      async (
        __turbopack_handle_async_dependencies__,
        __turbopack_async_result__,
      ) => {
        try {
          __turbopack_context__.s({
            store: () => store,
          });
          var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__ =
            __turbopack_context__.i(
              "[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import)",
            );
          var __turbopack_async_dependencies__ =
            __turbopack_handle_async_dependencies__([
              __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__,
            ]);
          [
            __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__,
          ] = __turbopack_async_dependencies__.then
            ? (await __turbopack_async_dependencies__)()
            : __turbopack_async_dependencies__;
          const store = (0,
          __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$29$__[
            "configureStore"
          ])({
            reducer: {},
          });
          __turbopack_async_result__();
        } catch (e) {
          __turbopack_async_result__(e);
        }
      },
      false,
    );
  },
  "[externals]/@chakra-ui/react [external] (@chakra-ui/react, esm_import)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var {
      g: global,
      __dirname,
      a: __turbopack_async_module__,
    } = __turbopack_context__;
    __turbopack_async_module__(
      async (
        __turbopack_handle_async_dependencies__,
        __turbopack_async_result__,
      ) => {
        try {
          const mod = await __turbopack_context__.y("@chakra-ui/react");

          __turbopack_context__.n(mod);
          __turbopack_async_result__();
        } catch (e) {
          __turbopack_async_result__(e);
        }
      },
      true,
    );
  },
  "[project]/src/pages/_app.tsx [ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var {
      g: global,
      __dirname,
      a: __turbopack_async_module__,
    } = __turbopack_context__;
    __turbopack_async_module__(
      async (
        __turbopack_handle_async_dependencies__,
        __turbopack_async_result__,
      ) => {
        try {
          __turbopack_context__.s({
            default: () => App,
          });
          var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ =
            __turbopack_context__.i(
              "[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)",
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/store/store.ts [ssr] (ecmascript)",
            );
          var __TURBOPACK__imported__module__$5b$externals$5d2f40$chakra$2d$ui$2f$react__$5b$external$5d$__$2840$chakra$2d$ui$2f$react$2c$__esm_import$29$__ =
            __turbopack_context__.i(
              "[externals]/@chakra-ui/react [external] (@chakra-ui/react, esm_import)",
            );
          (() => {
            const e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })();
          var __turbopack_async_dependencies__ =
            __turbopack_handle_async_dependencies__([
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
              __TURBOPACK__imported__module__$5b$externals$5d2f40$chakra$2d$ui$2f$react__$5b$external$5d$__$2840$chakra$2d$ui$2f$react$2c$__esm_import$29$__,
            ]);
          [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
            __TURBOPACK__imported__module__$5b$externals$5d2f40$chakra$2d$ui$2f$react__$5b$external$5d$__$2840$chakra$2d$ui$2f$react$2c$__esm_import$29$__,
          ] = __turbopack_async_dependencies__.then
            ? (await __turbopack_async_dependencies__)()
            : __turbopack_async_dependencies__;
          function App({ Component, pageProps }) {
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
              "jsxDEV"
            ])(
              Provider,
              {
                store:
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__[
                    "store"
                  ],
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                  "jsxDEV"
                ])(
                  Provider,
                  {
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                      "jsxDEV"
                    ])(
                      Component,
                      {
                        ...pageProps,
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/pages/_app.tsx",
                        lineNumber: 12,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/_app.tsx",
                    lineNumber: 11,
                    columnNumber: 7,
                  },
                  this,
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/src/pages/_app.tsx",
                lineNumber: 10,
                columnNumber: 5,
              },
              this,
            );
          }
          __turbopack_async_result__();
        } catch (e) {
          __turbopack_async_result__(e);
        }
      },
      false,
    );
  },
};

//# sourceMappingURL=%5Broot-of-the-server%5D__ed0ecc07._.js.map
