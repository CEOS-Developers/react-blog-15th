"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/DetailedPost/[id]",{

/***/ "./pages/DetailedPost/[id].js":
/*!************************************!*\
  !*** ./pages/DetailedPost/[id].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/GlobalStyle */ \"./src/GlobalStyle.js\");\n/* harmony import */ var _src_styles_DetailedPostStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/styles/DetailedPostStyle */ \"./src/styles/DetailedPostStyle.js\");\n/* harmony import */ var _src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/hooks/useNavigateHome */ \"./src/hooks/useNavigateHome.js\");\n/* harmony import */ var _src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/styles/EditorStyle */ \"./src/styles/EditorStyle.js\");\n/* harmony import */ var _src_hooks_useRouting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/hooks/useRouting */ \"./src/hooks/useRouting.js\");\n/* harmony import */ var _src_components_DetailedContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/components/DetailedContent */ \"./src/components/DetailedContent.js\");\n\n\n\n\n\n\n\n\n\n\nfunction DetailContainer() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_DetailedContent__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_c = DetailContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailContainer);\nvar _c;\n$RefreshReg$(_c, \"DetailContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EZXRhaWxlZFBvc3QvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFBMkQ7QUFDSDtBQUMzQjtBQUMrQztBQUtoQztBQUNrQjtBQUNFO0FBQ1o7QUFDZTtBQUVuRSxTQUFTYyxlQUFlLEdBQUc7SUFDckIscUJBQ0Q7a0JBRUcsNEVBQUNELHVFQUFlOzs7O2dCQUFHO3FCQUVwQixDQUNIO0NBQ0g7QUFSUUMsS0FBQUEsZUFBZTtBQVl4QiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0RldGFpbGVkUG9zdC9baWRdLmpzPzljYTEiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlLCB1c2VTZXRSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCB7IFBvc3RMaXN0U3RhdGUgfSBmcm9tICcuLi8uLi9zcmMvcmVjb2lsL3JlY29pbCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGVyLCBDZW50ZXJpbmdXcmFwcGVyIH0gZnJvbSAnLi4vLi4vc3JjL0dsb2JhbFN0eWxlJztcclxuaW1wb3J0IHtcclxuICBQb3N0Q29udGVudCxcclxuICBQb3N0RGF0ZSxcclxuICBQb3N0VGl0bGUsXHJcbn0gZnJvbSAnLi4vLi4vc3JjL3N0eWxlcy9EZXRhaWxlZFBvc3RTdHlsZSc7XHJcbmltcG9ydCB1c2VOYXZpZ2F0ZUhvbWUgZnJvbSAnLi4vLi4vc3JjL2hvb2tzL3VzZU5hdmlnYXRlSG9tZSc7XHJcbmltcG9ydCB7IFBvc3RIYW5kbGVCdXR0b24gfSBmcm9tICcuLi8uLi9zcmMvc3R5bGVzL0VkaXRvclN0eWxlJztcclxuaW1wb3J0IHVzZVJvdXRpbmcgZnJvbSAnLi4vLi4vc3JjL2hvb2tzL3VzZVJvdXRpbmcnO1xyXG5pbXBvcnQgRGV0YWlsZWRDb250ZW50IGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0RldGFpbGVkQ29udGVudCc7XHJcblxyXG5mdW5jdGlvbiBEZXRhaWxDb250YWluZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgPD5cclxuICAgICAgXHJcbiAgICAgICAgPERldGFpbGVkQ29udGVudCAvPlxyXG5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiBcclxuICBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbENvbnRhaW5lcjtcclxuIl0sIm5hbWVzIjpbInVzZVJlY29pbFZhbHVlIiwidXNlU2V0UmVjb2lsU3RhdGUiLCJQb3N0TGlzdFN0YXRlIiwiTGluayIsIkNvbnRhaW5lciIsIkhlYWRlciIsIkNlbnRlcmluZ1dyYXBwZXIiLCJQb3N0Q29udGVudCIsIlBvc3REYXRlIiwiUG9zdFRpdGxlIiwidXNlTmF2aWdhdGVIb21lIiwiUG9zdEhhbmRsZUJ1dHRvbiIsInVzZVJvdXRpbmciLCJEZXRhaWxlZENvbnRlbnQiLCJEZXRhaWxDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/DetailedPost/[id].js\n");

/***/ })

});