"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/DetailedContainer/[id]",{

/***/ "./src/components/DetailedPost.js":
/*!****************************************!*\
  !*** ./src/components/DetailedPost.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data.json */ \"./src/data/data.json\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    \\n    font-size:15px;\\n    border-bottom:1px solid grey;\\n    padding:5px;\\n    \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n//메인화면에서 보이는 포스트\n\n\n\nvar DetailedPost = function(param) {\n    var id = param.id;\n    var postObj = _data_data_json__WEBPACK_IMPORTED_MODULE_2__.filter(function(post) {\n        return post.id === id;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostWrapper, {\n        children: postObj.title\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedPost.js\",\n        lineNumber: 12,\n        columnNumber: 7\n    }, _this);\n};\n_c = DetailedPost;\nvar PostWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section(_templateObject());\n_c1 = PostWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailedPost);\nvar _c, _c1;\n$RefreshReg$(_c, \"DetailedPost\");\n$RefreshReg$(_c1, \"PostWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZXRhaWxlZFBvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGQTtBQUV1QztBQUNiO0FBQ1c7QUFFckMsSUFBTUcsWUFBWSxHQUFHLGdCQUFZO1FBQVRDLEVBQUUsU0FBRkEsRUFBRTtJQUN2QixJQUFNQyxPQUFPLEdBQUdILG1EQUFXLENBQUMsU0FBQ0ssSUFBSTtlQUFLQSxJQUFJLENBQUNILEVBQUUsS0FBS0EsRUFBRTtLQUFBLENBQUM7SUFHdEQscUJBQ0ksOERBQUNJLFdBQVc7a0JBQ1hILE9BQU8sQ0FBQ0ksS0FBSzs7Ozs7YUFDQSxDQUNsQjtDQUNDO0FBVEdOLEtBQUFBLFlBQVk7QUFXbEIsSUFBTUssV0FBVyxHQUFHUixpRUFBYyxtQkFLN0I7QUFMQ1EsTUFBQUEsV0FBVztBQU1qQiwrREFBZUwsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RldGFpbGVkUG9zdC5qcz80OTg2Il0sInNvdXJjZXNDb250ZW50IjpbIi8v66mU7J247ZmU66m07JeQ7IScIOuztOydtOuKlCDtj6zsiqTtirhcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9kYXRhLmpzb24nO1xyXG5cclxuY29uc3QgRGV0YWlsZWRQb3N0ID0gKHsgaWQgfSkgPT4ge1xyXG4gICBjb25zdCBwb3N0T2JqID0gZGF0YS5maWx0ZXIoKHBvc3QpID0+IHBvc3QuaWQgPT09IGlkKTtcclxuICAgIFxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxQb3N0V3JhcHBlcj5cclxuICAgICAge3Bvc3RPYmoudGl0bGV9XHJcbiAgICAgIDwvUG9zdFdyYXBwZXI+XHJcbik7XHJcbiAgfVxyXG5cclxuY29uc3QgUG9zdFdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIFxyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBncmV5O1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBgXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbGVkUG9zdDsiXSwibmFtZXMiOlsic3R5bGVkIiwiUmVhY3QiLCJkYXRhIiwiRGV0YWlsZWRQb3N0IiwiaWQiLCJwb3N0T2JqIiwiZmlsdGVyIiwicG9zdCIsIlBvc3RXcmFwcGVyIiwidGl0bGUiLCJzZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DetailedPost.js\n");

/***/ })

});