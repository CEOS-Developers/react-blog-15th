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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostContent\": function() { return /* binding */ PostContent; },\n/* harmony export */   \"PostTitle\": function() { return /* binding */ PostTitle; },\n/* harmony export */   \"PostWrapper\": function() { return /* binding */ PostWrapper; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  border-bottom: 1px solid grey;\\n  padding: 5px;\\n  cursor: pointer;\\n\\n  display: flex;\\n  flex-direction: column;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 20px;\\n  font-weight: bold;\\n  flex: 0.3;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin-top: 0.5rem;\\n  font-size: 15px;\\n  flex: 0.3;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 12px;\\n  flex: 0.3;\\n  color: grey;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\n\n//메인 화면에서 보이는 포스트\n\n\nvar MainPost = function(param) {\n    var date = param.date, content = param.content;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostWrapper, {\n        date: date,\n        content: content,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostContent, {\n                children: content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\MainPost.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostDate, {\n                children: date\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\MainPost.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\MainPost.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_c = MainPost;\nvar PostWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section(_templateObject());\n_c1 = PostWrapper;\nvar PostTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject1());\nvar PostContent = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c2 = PostContent;\nvar PostDate = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c3 = PostDate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainPost);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"MainPost\");\n$RefreshReg$(_c1, \"PostWrapper\");\n$RefreshReg$(_c2, \"PostContent\");\n$RefreshReg$(_c3, \"PostDate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluUG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGQTtBQUV1QztBQUNiO0FBRTFCLElBQU1FLFFBQVEsR0FBRyxnQkFBdUI7UUFBcEJDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxPQUFPLFNBQVBBLE9BQU87SUFDL0IscUJBQ0UsOERBQUNDLFdBQVc7UUFBQ0YsSUFBSSxFQUFFQSxJQUFJO1FBQUVDLE9BQU8sRUFBRUEsT0FBTzs7MEJBQ3ZDLDhEQUFDRSxXQUFXOzBCQUFFRixPQUFPOzs7OztxQkFBZTswQkFDcEMsOERBQUNHLFFBQVE7MEJBQUVKLElBQUk7Ozs7O3FCQUFZOzs7Ozs7YUFDZixDQUNkO0NBQ0g7QUFQS0QsS0FBQUEsUUFBUTtBQVNQLElBQU1HLFdBQVcsR0FBR0wsaUVBQWMsbUJBT3hDLENBQUM7QUFQV0ssTUFBQUEsV0FBVztBQVFqQixJQUFNSSxTQUFTLEdBQUdULDZEQUFVLG9CQUlsQyxDQUFDO0FBQ0ssSUFBTU0sV0FBVyxHQUFHTiw2REFBVSxvQkFJcEMsQ0FBQztBQUpXTSxNQUFBQSxXQUFXO0FBS3hCLElBQU1DLFFBQVEsR0FBR1AsNkRBQVUsb0JBSTFCO0FBSktPLE1BQUFBLFFBQVE7QUFLZCwrREFBZUwsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW5Qb3N0LmpzP2JlN2UiXSwic291cmNlc0NvbnRlbnQiOlsiLy/rqZTsnbgg7ZmU66m07JeQ7IScIOuztOydtOuKlCDtj6zsiqTtirhcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTWFpblBvc3QgPSAoeyBkYXRlLCBjb250ZW50IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBvc3RXcmFwcGVyIGRhdGU9e2RhdGV9IGNvbnRlbnQ9e2NvbnRlbnR9PlxyXG4gICAgICA8UG9zdENvbnRlbnQ+e2NvbnRlbnR9PC9Qb3N0Q29udGVudD5cclxuICAgICAgPFBvc3REYXRlPntkYXRlfTwvUG9zdERhdGU+XHJcbiAgICA8L1Bvc3RXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdFdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBQb3N0VGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmbGV4OiAwLjM7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBQb3N0Q29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmbGV4OiAwLjM7XHJcbmA7XHJcbmNvbnN0IFBvc3REYXRlID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZmxleDogMC4zO1xyXG4gIGNvbG9yOiBncmV5O1xyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBNYWluUG9zdDtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlJlYWN0IiwiTWFpblBvc3QiLCJkYXRlIiwiY29udGVudCIsIlBvc3RXcmFwcGVyIiwiUG9zdENvbnRlbnQiLCJQb3N0RGF0ZSIsInNlY3Rpb24iLCJQb3N0VGl0bGUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MainPost.js\n");

/***/ })

});