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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_MainPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/MainPost */ \"./src/components/MainPost.js\");\n/* harmony import */ var _src_data_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/data/data.json */ \"./src/data/data.json\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/recoil/recoil */ \"./src/recoil/recoil.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    \\n    width : 1000px;\\n    margin 0 auto;\\n    \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\n    font-size:30px;\\n    \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    \\n    font-size:15px;\\n    \"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\n//각 포스트들의 제목과 작성 날짜를 리스트 형태로\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MainPage() {\n    var _this = this;\n    _s();\n    var currentPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_6__.PostListState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                children: \"\\uB098\\uC758 \\uBE14\\uB85C\\uADF8\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            currentPostList.map(function(param) {\n                var title = param.title, date = param.date, content = param.content, id = param.id;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/DetailedContainer/[id]\",\n                            as: \"/DetailedContainer/\".concat(id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                                lineNumber: 22,\n                                columnNumber: 16\n                            }, _this)\n                        }, id, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                            lineNumber: 21,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MainPost__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: title,\n                            date: date,\n                            content: content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                            lineNumber: 24,\n                            columnNumber: 16\n                        }, _this)\n                    ]\n                }, void 0, true);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/EditorPage\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostingButton, {\n                    children: \"\\uD3EC\\uC2A4\\uD2B8 \\uC4F0\\uAE30\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                lineNumber: 28,\n                columnNumber: 15\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(MainPage, \"Hd/288D1nvy5R7S5ldkn+o2a1eA=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue\n    ];\n});\n_c = MainPage;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].header(_templateObject1());\n_c1 = Header;\nvar PostingButton = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].button(_templateObject2());\n_c2 = PostingButton;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"MainPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"PostingButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9NYWluUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQUN1QztBQUNWO0FBQ3FCO0FBQ1Q7QUFDRjtBQUNDO0FBQ2E7O0FBQ3RDLFNBQVNPLFFBQVEsR0FBRTs7O0lBRTlCLElBQU1DLGVBQWUsR0FBR0gsc0RBQWMsQ0FBQ0MsNkRBQWEsQ0FBQztJQUVyRCxxQkFDSTs7MEJBQ0ksOERBQUNHLE1BQU07MEJBQUMsaUNBQU07Ozs7O29CQUFtQjtZQUV0QkQsZUFBSyxDQUFDRSxHQUFHLENBQUMsZ0JBQ3JCO29CQUR1QkMsS0FBSyxTQUFMQSxLQUFLLEVBQUNDLElBQUksU0FBSkEsSUFBSSxFQUFDQyxPQUFPLFNBQVBBLE9BQU8sRUFBQ0MsRUFBRSxTQUFGQSxFQUFFO2dCQUV4QyxxQkFDQTs7c0NBQ0EsOERBQUNiLGtEQUFJOzRCQUFVYyxJQUFJLEVBQUUseUJBQXlCOzRCQUFFQyxFQUFFLEVBQUkscUJBQW9CLENBQUssT0FBSEYsRUFBRSxDQUFFO3NDQUNqRiw0RUFBQ0csR0FBQzswQ0FBRU4sS0FBSzs7Ozs7cUNBQUs7MkJBREZHLEVBQUU7Ozs7aUNBRVA7c0NBQ1AsOERBQUNaLGdFQUFROzRCQUFDUyxLQUFLLEVBQUVBLEtBQUs7NEJBQUVDLElBQUksRUFBRUEsSUFBSTs0QkFBRUMsT0FBTyxFQUFFQSxPQUFPOzs7OztpQ0FBRzs7Z0NBQ3ZELENBQ0Q7YUFDRCxDQUNBOzBCQUFDLDhEQUFDWixrREFBSTtnQkFBQ2MsSUFBSSxFQUFDLGFBQWE7MEJBQ3RCLDRFQUFDRyxhQUFhOzhCQUFDLGlDQUFNOzs7Ozt3QkFBZ0I7Ozs7O29CQUNsQzs7b0JBRVIsQ0FDTDtDQUVMO0dBMUJ1QlgsUUFBUTs7UUFFSkYsa0RBQWM7OztBQUZsQkUsS0FBQUEsUUFBUTtBQTRCaEMsSUFBTVksU0FBUyxHQUFHbkIsNkRBQVUsbUJBSXZCO0FBQ0QsSUFBTVMsTUFBTSxHQUFHVCxnRUFBYSxvQkFHM0I7QUFIS1MsTUFBQUEsTUFBTTtBQUtaLElBQU1TLGFBQWEsR0FBR2xCLGdFQUFhLG9CQUdsQztBQUhLa0IsTUFBQUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9NYWluUGFnZS5qcz8yN2ZiIl0sInNvdXJjZXNDb250ZW50IjpbIi8v6rCBIO2PrOyKpO2KuOuTpOydmCDsoJzrqqnqs7wg7J6R7ISxIOuCoOynnOulvCDrpqzsiqTtirgg7ZiV7YOc66GcXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBNYWluUG9zdCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvTWFpblBvc3RcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL3NyYy9kYXRhL2RhdGEuanNvblwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gXCJyZWNvaWxcIjtcclxuaW1wb3J0IHsgUG9zdExpc3RTdGF0ZSB9IGZyb20gXCIuLi9zcmMvcmVjb2lsL3JlY29pbFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluUGFnZSgpe1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRQb3N0TGlzdCA9IHVzZVJlY29pbFZhbHVlKFBvc3RMaXN0U3RhdGUpO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlcj7rgpjsnZgg67iU66Gc6re4PC9IZWFkZXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7Y3VycmVudFBvc3RMaXN0Lm1hcCgoe3RpdGxlLGRhdGUsY29udGVudCxpZH0pPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aWR9IGhyZWY9e1wiL0RldGFpbGVkQ29udGFpbmVyL1tpZF1cIn0gYXMgPSB7YC9EZXRhaWxlZENvbnRhaW5lci8ke2lkfWB9PlxyXG4gICAgICAgICAgICAgICA8YT57dGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgIDxNYWluUG9zdCB0aXRsZT17dGl0bGV9IGRhdGU9e2RhdGV9IGNvbnRlbnQ9e2NvbnRlbnR9Lz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKX08TGluayBocmVmPVwiL0VkaXRvclBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxQb3N0aW5nQnV0dG9uPu2PrOyKpO2KuCDsk7DquLA8L1Bvc3RpbmdCdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG4gICAgXHJcbn1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBcclxuICAgIHdpZHRoIDogMTAwMHB4O1xyXG4gICAgbWFyZ2luIDAgYXV0bztcclxuICAgIGBcclxuICAgIGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcblxyXG4gICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICBgXHJcblxyXG4gICAgY29uc3QgUG9zdGluZ0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJMaW5rIiwiTWFpblBvc3QiLCJkYXRhIiwidXNlUm91dGVyIiwidXNlUmVjb2lsVmFsdWUiLCJQb3N0TGlzdFN0YXRlIiwiTWFpblBhZ2UiLCJjdXJyZW50UG9zdExpc3QiLCJIZWFkZXIiLCJtYXAiLCJ0aXRsZSIsImRhdGUiLCJjb250ZW50IiwiaWQiLCJocmVmIiwiYXMiLCJhIiwiUG9zdGluZ0J1dHRvbiIsIkNvbnRhaW5lciIsImRpdiIsImhlYWRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/MainPage.js\n");

/***/ })

});