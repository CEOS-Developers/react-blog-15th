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

/***/ "./pages/MainPage.js":
/*!***************************!*\
  !*** ./pages/MainPage.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_MainPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/MainPost */ \"./src/components/MainPost.js\");\n/* harmony import */ var _src_data_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/data/data.json */ \"./src/data/data.json\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    \\n    width : 1000px;\\n    margin 0 auto;\\n    \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\n    font-size:30px;\\n    \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    \\n    font-size:15px;\\n    \"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\n//각 포스트들의 제목과 작성 날짜를 리스트 형태로\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MainPage() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var id = router.query.id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                    children: \"\\uB098\\uC758 \\uBE14\\uB85C\\uADF8\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/EditorPage\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostingButton, {\n                        children: \"\\uD3EC\\uC2A4\\uD2B8 \\uC4F0\\uAE30\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, this),\n                _src_data_data_json__WEBPACK_IMPORTED_MODULE_3__.map(function(param) {\n                    var title = param.title, date = param.date, content = param.content;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/DetailedContainer/[id]\",\n                        as: \"/DetailedContainer/\".concat(title),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MainPost__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: title,\n                            date: date,\n                            content: content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, _this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n            lineNumber: 15,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n};\n_s(MainPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = MainPage;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c1 = Container;\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].header(_templateObject1());\n_c2 = Header;\nvar PostingButton = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].button(_templateObject2());\n_c3 = PostingButton;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"MainPage\");\n$RefreshReg$(_c1, \"Container\");\n$RefreshReg$(_c2, \"Header\");\n$RefreshReg$(_c3, \"PostingButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9NYWluUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFDdUM7QUFDVjtBQUNxQjtBQUNUO0FBRW5COztBQUNQLFNBQVNLLFFBQVEsR0FBRTs7O0lBRTlCLElBQU1DLE1BQU0sR0FBR0Ysc0RBQVMsRUFBRTtJQUMxQixJQUFNLEVBQUcsR0FBSUUsTUFBTSxDQUFDRSxLQUFLLENBQWxCRCxFQUFFO0lBRVQscUJBQ0k7a0JBQ0EsNEVBQUNFLFNBQVM7OzhCQUNOLDhEQUFDQyxNQUFNOzhCQUFDLGlDQUFNOzs7Ozt3QkFBbUI7OEJBQ3ZCLDhEQUFUVCxrREFBSTtvQkFBQ1UsSUFBSSxFQUFDLGFBQWE7OEJBQ3BCLDRFQUFDQyxhQUFhO2tDQUFDLGlDQUFNOzs7Ozs0QkFBZ0I7Ozs7O3dCQUNsQztnQkFFTlQsb0RBQVEsQ0FBQzt3QkFBRVcsS0FBSyxTQUFMQSxLQUFLLEVBQUNDLElBQUksU0FBSkEsSUFBSSxFQUFDQyxPQUFPLFNBQVBBLE9BQU87eUNBQzlCLDhEQUFDZixrREFBSTt3QkFBQ1UsSUFBSSxFQUFFLHlCQUF5Qjt3QkFBRU0sRUFBRSxFQUFJLHFCQUFvQixDQUFRLE9BQU5ILEtBQUssQ0FBRTtrQ0FDMUUsNEVBQUNaLGdFQUFROzRCQUFDWSxLQUFLLEVBQUVBLEtBQUs7NEJBQUVDLElBQUksRUFBRUEsSUFBSTs0QkFBRUMsT0FBTyxFQUFFQSxPQUFPOzs7OztpQ0FBRzs7Ozs7NkJBQ2hEO2lCQUFBLENBQUM7Ozs7OztnQkFFQTtxQkFFVCxDQUNMO0NBRUw7R0F2QnVCWCxRQUFROztRQUViRCxrREFBUzs7O0FBRkpDLEtBQUFBLFFBQVE7QUF5QmhDLElBQU1JLFNBQVMsR0FBR1QsNkRBQVUsbUJBSXZCO0FBSkNTLE1BQUFBLFNBQVM7QUFLWCxJQUFNQyxNQUFNLEdBQUdWLGdFQUFhLG9CQUczQjtBQUhLVSxNQUFBQSxNQUFNO0FBS1osSUFBTUUsYUFBYSxHQUFHWixnRUFBYSxvQkFHbEM7QUFIS1ksTUFBQUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9NYWluUGFnZS5qcz8yN2ZiIl0sInNvdXJjZXNDb250ZW50IjpbIi8v6rCBIO2PrOyKpO2KuOuTpOydmCDsoJzrqqnqs7wg7J6R7ISxIOuCoOynnOulvCDrpqzsiqTtirgg7ZiV7YOc66GcXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBNYWluUG9zdCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvTWFpblBvc3RcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL3NyYy9kYXRhL2RhdGEuanNvblwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXJcclxuIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5QYWdlKCl7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+64KY7J2YIOu4lOuhnOq3uDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL0VkaXRvclBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxQb3N0aW5nQnV0dG9uPu2PrOyKpO2KuCDsk7DquLA8L1Bvc3RpbmdCdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIHtkYXRhLm1hcCgoe3RpdGxlLGRhdGUsY29udGVudH0pPT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvRGV0YWlsZWRDb250YWluZXIvW2lkXVwifSBhcyA9IHtgL0RldGFpbGVkQ29udGFpbmVyLyR7dGl0bGV9YH0+XHJcbiAgICAgICAgICAgIDxNYWluUG9zdCB0aXRsZT17dGl0bGV9IGRhdGU9e2RhdGV9IGNvbnRlbnQ9e2NvbnRlbnR9Lz5cclxuICAgICAgICAgICAgPC9MaW5rPil9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxuICAgIFxyXG59XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgXHJcbiAgICB3aWR0aCA6IDEwMDBweDtcclxuICAgIG1hcmdpbiAwIGF1dG87XHJcbiAgICBgXHJcbiAgICBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG5cclxuICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgYFxyXG5cclxuICAgIGNvbnN0IFBvc3RpbmdCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgXHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIGAiXSwibmFtZXMiOlsic3R5bGVkIiwiTGluayIsIk1haW5Qb3N0IiwiZGF0YSIsInVzZVJvdXRlciIsIk1haW5QYWdlIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsIkNvbnRhaW5lciIsIkhlYWRlciIsImhyZWYiLCJQb3N0aW5nQnV0dG9uIiwibWFwIiwidGl0bGUiLCJkYXRlIiwiY29udGVudCIsImFzIiwiZGl2IiwiaGVhZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/MainPage.js\n");

/***/ })

});