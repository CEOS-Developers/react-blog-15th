"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/MainPost.js":
/*!************************************!*\
  !*** ./src/components/MainPost.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    \\n    font-size:15px;\\n    border-bottom:1px solid grey;\\n    padding:5px;\\n    \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n//메인 화면에서 보이는 포스트\n\n\nvar MainPost = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(_c = function(param, forwardref) {\n    var title = param.title, date = param.date, content = param.content;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostWrapper, {\n        title: title,\n        date: date,\n        content: content,\n        forwardRef: react__WEBPACK_IMPORTED_MODULE_1__.forwardRef,\n        children: [\n            title,\n            \" \",\n            date,\n            \" \",\n            content\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\src\\\\components\\\\MainPost.js\",\n        lineNumber: 8,\n        columnNumber: 7\n    }, _this);\n});\n_c1 = MainPost;\nvar PostWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section(_templateObject());\n_c2 = PostWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainPost);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"MainPost$React.forwardRef\");\n$RefreshReg$(_c1, \"MainPost\");\n$RefreshReg$(_c2, \"PostWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluUG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRkE7QUFFdUM7QUFDRztBQUUxQyxJQUFNRyxRQUFRLGlCQUFHRix1REFBZ0IsQ0FBQyxxQkFBeUJHLFVBQVUsRUFBSztRQUFyQ0MsS0FBSyxTQUFMQSxLQUFLLEVBQUNDLElBQUksU0FBSkEsSUFBSSxFQUFDQyxPQUFPLFNBQVBBLE9BQU87SUFDbkQscUJBQ0UsOERBQUNDLFdBQVc7UUFBQ0gsS0FBSyxFQUFFQSxLQUFLO1FBQUVDLElBQUksRUFBRUEsSUFBSTtRQUFFQyxPQUFPLEVBQUVBLE9BQU87UUFBRUwsVUFBVSxFQUFFQSw2Q0FBVTs7WUFDOUVHLEtBQUs7WUFBQyxHQUFDO1lBQUNDLElBQUk7WUFBQyxHQUFDO1lBQUNDLE9BQU87Ozs7OzthQUNULENBQ2xCO0NBQ0MsQ0FBQzs7QUFFSixJQUFNQyxXQUFXLEdBQUdSLGlFQUFjLG1CQUs3QjtBQUxDUSxNQUFBQSxXQUFXO0FBTWpCLCtEQUFlTCxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpblBvc3QuanM/YmU3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL+uplOyduCDtmZTrqbTsl5DshJwg67O07J2064qUIO2PrOyKpO2KuFxyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE1haW5Qb3N0ID0gUmVhY3QuZm9yd2FyZFJlZigoeyB0aXRsZSxkYXRlLGNvbnRlbnQgfSwgZm9yd2FyZHJlZikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFBvc3RXcmFwcGVyIHRpdGxlPXt0aXRsZX0gZGF0ZT17ZGF0ZX0gY29udGVudD17Y29udGVudH0gZm9yd2FyZFJlZj17Zm9yd2FyZFJlZn0+XHJcbiAgICAgIHt0aXRsZX0ge2RhdGV9IHtjb250ZW50fVxyXG4gICAgICA8L1Bvc3RXcmFwcGVyPlxyXG4pO1xyXG4gIH0pXHJcblxyXG5jb25zdCBQb3N0V3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgXHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGdyZXk7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGBcclxuZXhwb3J0IGRlZmF1bHQgTWFpblBvc3Q7Il0sIm5hbWVzIjpbInN0eWxlZCIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsIk1haW5Qb3N0IiwiZm9yd2FyZHJlZiIsInRpdGxlIiwiZGF0ZSIsImNvbnRlbnQiLCJQb3N0V3JhcHBlciIsInNlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MainPost.js\n");

/***/ })

});