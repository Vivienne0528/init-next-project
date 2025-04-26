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
  "[externals]/next-themes [external] (next-themes, esm_import)": (
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
          const mod = await __turbopack_context__.y("next-themes");

          __turbopack_context__.n(mod);
          __turbopack_async_result__();
        } catch (e) {
          __turbopack_async_result__(e);
        }
      },
      true,
    );
  },
  "[project]/src/components/ui/color-mode.tsx [ssr] (ecmascript)": (
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
            ColorModeIcon: () => ColorModeIcon,
            DarkMode: () => DarkMode,
            LightMode: () => LightMode,
            useColorMode: () => useColorMode,
            useColorModeValue: () => useColorModeValue,
          });
          var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ =
            __turbopack_context__.i(
              "[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)",
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$span$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/@chakra-ui/react/dist/esm/components/box/span.js [ssr] (ecmascript)",
            );
          var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$29$__ =
            __turbopack_context__.i(
              "[externals]/next-themes [external] (next-themes, esm_import)",
            );
          var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ =
            __turbopack_context__.i(
              "[externals]/react [external] (react, cjs)",
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/react-icons/lu/index.mjs [ssr] (ecmascript)",
            );
          var __turbopack_async_dependencies__ =
            __turbopack_handle_async_dependencies__([
              __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$29$__,
            ]);
          [
            __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$29$__,
          ] = __turbopack_async_dependencies__.then
            ? (await __turbopack_async_dependencies__)()
            : __turbopack_async_dependencies__;
          ("use client");
          function useColorMode() {
            const { resolvedTheme, setTheme } = (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$29$__[
              "useTheme"
            ])();
            const toggleColorMode = () => {
              setTheme(resolvedTheme === "dark" ? "light" : "dark");
            };
            return {
              colorMode: resolvedTheme,
              setColorMode: setTheme,
              toggleColorMode,
            };
          }
          function useColorModeValue(light, dark) {
            const { colorMode } = useColorMode();
            return colorMode === "dark" ? dark : light;
          }
          function ColorModeIcon() {
            const { colorMode } = useColorMode();
            return colorMode === "dark"
              ? /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__[
                    "LuMoon"
                  ],
                  {},
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/components/ui/color-mode.tsx",
                    lineNumber: 49,
                    columnNumber: 33,
                  },
                  this,
                )
              : /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__[
                    "LuSun"
                  ],
                  {},
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/components/ui/color-mode.tsx",
                    lineNumber: 49,
                    columnNumber: 46,
                  },
                  this,
                );
          }
          const LightMode = /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
            "forwardRef"
          ])(function LightMode(props, ref) {
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$span$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__[
                "Span"
              ],
              {
                color: "fg",
                display: "contents",
                className: "chakra-theme light",
                colorPalette: "gray",
                colorScheme: "light",
                ref: ref,
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/color-mode.tsx",
                lineNumber: 84,
                columnNumber: 7,
              },
              this,
            );
          });
          const DarkMode = /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
            "forwardRef"
          ])(function DarkMode(props, ref) {
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$span$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__[
                "Span"
              ],
              {
                color: "fg",
                display: "contents",
                className: "chakra-theme dark",
                colorPalette: "gray",
                colorScheme: "dark",
                ref: ref,
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/color-mode.tsx",
                lineNumber: 100,
                columnNumber: 7,
              },
              this,
            );
          });
          __turbopack_async_result__();
        } catch (e) {
          __turbopack_async_result__(e);
        }
      },
      false,
    );
  },
  "[project]/src/components/ui/provider.tsx [ssr] (ecmascript)": (
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
            Provider: () => Provider,
          });
          var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ =
            __turbopack_context__.i(
              "[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)",
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$styled$2d$system$2f$provider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/@chakra-ui/react/dist/esm/styled-system/provider.js [ssr] (ecmascript)",
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$preset$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/@chakra-ui/react/dist/esm/preset.js [ssr] (ecmascript)",
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$color$2d$mode$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/color-mode.tsx [ssr] (ecmascript)",
            );
          var __turbopack_async_dependencies__ =
            __turbopack_handle_async_dependencies__([
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$color$2d$mode$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
            ]);
          [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$color$2d$mode$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
          ] = __turbopack_async_dependencies__.then
            ? (await __turbopack_async_dependencies__)()
            : __turbopack_async_dependencies__;
          ("use client");
          function Provider(props) {
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$styled$2d$system$2f$provider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__[
                "ChakraProvider"
              ],
              {
                value:
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$preset$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__[
                    "defaultSystem"
                  ],
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$color$2d$mode$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__[
                    "ColorModeProvider"
                  ],
                  {
                    ...props,
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/components/ui/provider.tsx",
                    lineNumber: 9,
                    columnNumber: 7,
                  },
                  this,
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/provider.tsx",
                lineNumber: 8,
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
  "[externals]/react-redux [external] (react-redux, esm_import)": (
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
          const mod = await __turbopack_context__.y("react-redux");

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
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$provider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/provider.tsx [ssr] (ecmascript)",
            );
          var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__ =
            __turbopack_context__.i(
              "[externals]/react-redux [external] (react-redux, esm_import)",
            );
          var __turbopack_async_dependencies__ =
            __turbopack_handle_async_dependencies__([
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$provider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__,
            ]);
          [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$provider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__,
          ] = __turbopack_async_dependencies__.then
            ? (await __turbopack_async_dependencies__)()
            : __turbopack_async_dependencies__;
          function App({ Component, pageProps }) {
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__[
                "Provider"
              ],
              {
                store:
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__[
                    "store"
                  ],
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$provider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__[
                    "Provider"
                  ],
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
                        lineNumber: 11,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/_app.tsx",
                    lineNumber: 10,
                    columnNumber: 7,
                  },
                  this,
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/src/pages/_app.tsx",
                lineNumber: 9,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__947a57af._.js.map
