"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/MainPage",{

/***/ "./pages/MainPage.js":
/*!***************************!*\
  !*** ./pages/MainPage.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_MainPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/MainPost */ \"./src/components/MainPost.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/GlobalStyle */ \"./src/GlobalStyle.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin: 1rem;\\n  padding: 1rem;\\n  font-size: 15px;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\n  border: none;\\n  border-radius: 100px;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 3%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  text-decoration: none;\\n  font-size: 20px;\\n  font-weight: bold;\\n  margin-top: 0.3rem;\\n\\n  cursor: pointer;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MainPage() {\n    var _this = this;\n    _s();\n    var currentPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_4__.PostListState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Header, {\n                children: \"\\uAE00 \\uBAA9\\uB85D\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostListWrapper, {\n                children: [\n                    currentPostList.map(function(param) {\n                        var postNum = param.postNum, title = param.title, date = param.date, content = param.content, id = param.id;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/DetailedPost/[id]\",\n                                    as: \"/DetailedPost/\".concat(postNum),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostLink, {\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, id, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MainPost__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    date: date,\n                                    content: content\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/EditorPage\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostingButton, {\n                            children: \"+\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(MainPage, \"Hd/288D1nvy5R7S5ldkn+o2a1eA=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue\n    ];\n});\n_c = MainPage;\nvar PostingButton = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].button(_templateObject());\n_c1 = PostingButton;\nvar PostListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c2 = PostListWrapper;\nvar PostLink = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].a(_templateObject2());\n_c3 = PostLink;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"MainPage\");\n$RefreshReg$(_c1, \"PostingButton\");\n$RefreshReg$(_c2, \"PostListWrapper\");\n$RefreshReg$(_c3, \"PostLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9NYWluUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1Y7QUFDcUI7QUFDVjtBQUNhO0FBQ0U7O0FBRXhDLFNBQVNPLFFBQVEsR0FBRzs7O0lBQ2pDLElBQU1DLGVBQWUsR0FBR0wsc0RBQWMsQ0FBQ0MsNkRBQWEsQ0FBQztJQUVyRCxxQkFDRTs7MEJBQ0UsOERBQUNFLG9EQUFNOzBCQUFDLHFCQUFJOzs7OztvQkFBUzswQkFFckIsOERBQUNHLGVBQWU7O29CQUNiRCxlQUFlLENBQUNFLEdBQUcsQ0FBQyxnQkFBMEM7NEJBQXZDQyxPQUFPLFNBQVBBLE9BQU8sRUFBQ0MsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsRUFBRSxTQUFGQSxFQUFFO3dCQUN0RCxxQkFDRSw4REFBQ1YsdURBQVM7OzhDQUNSLDhEQUFDSixrREFBSTtvQ0FFSGUsSUFBSSxFQUFFLG9CQUFvQjtvQ0FDMUJDLEVBQUUsRUFBRSxnQkFBZSxDQUFVLE9BQVJOLE9BQU8sQ0FBRTs4Q0FFOUIsNEVBQUNPLFFBQVE7a0RBQUVOLEtBQUs7Ozs7OzZDQUFZO21DQUp2QkcsRUFBRTs7Ozt5Q0FLRjs4Q0FDUCw4REFBQ2IsZ0VBQVE7b0NBQUNXLElBQUksRUFBRUEsSUFBSTtvQ0FBRUMsT0FBTyxFQUFFQSxPQUFPOzs7Ozt5Q0FBSTs7Ozs7O2lDQUNoQyxDQUNaO3FCQUNILENBQUM7a0NBQ0YsOERBQUNiLGtEQUFJO3dCQUFDZSxJQUFJLEVBQUMsYUFBYTtrQ0FDdEIsNEVBQUNHLGFBQWE7c0NBQUMsR0FBQzs7Ozs7Z0NBQWdCOzs7Ozs0QkFDM0I7Ozs7OztvQkFDUzs7b0JBQ2pCLENBQ0g7Q0FDSDtHQTVCdUJaLFFBQVE7O1FBQ05KLGtEQUFjOzs7QUFEaEJJLEtBQUFBLFFBQVE7QUE4QmhDLElBQU1ZLGFBQWEsR0FBR25CLGdFQUFhLG1CQU9sQztBQVBLbUIsTUFBQUEsYUFBYTtBQVNuQixJQUFNVixlQUFlLEdBQUdULDZEQUFVLG9CQU1qQztBQU5LUyxNQUFBQSxlQUFlO0FBUXJCLElBQU1TLFFBQVEsR0FBR2xCLDJEQUFRLG9CQU94QjtBQVBLa0IsTUFBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9NYWluUGFnZS5qcz8yN2ZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTWFpblBvc3QgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTWFpblBvc3QnO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCB7IFBvc3RMaXN0U3RhdGUgfSBmcm9tICcuLi9zcmMvcmVjb2lsL3JlY29pbCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGVyIH0gZnJvbSAnLi4vc3JjL0dsb2JhbFN0eWxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5QYWdlKCkge1xyXG4gIGNvbnN0IGN1cnJlbnRQb3N0TGlzdCA9IHVzZVJlY29pbFZhbHVlKFBvc3RMaXN0U3RhdGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlcj7quIAg66qp66GdPC9IZWFkZXI+XHJcblxyXG4gICAgICA8UG9zdExpc3RXcmFwcGVyPlxyXG4gICAgICAgIHtjdXJyZW50UG9zdExpc3QubWFwKCh7IHBvc3ROdW0sdGl0bGUsIGRhdGUsIGNvbnRlbnQsIGlkIH0pID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgICAgICBocmVmPXsnL0RldGFpbGVkUG9zdC9baWRdJ31cclxuICAgICAgICAgICAgICAgIGFzPXtgL0RldGFpbGVkUG9zdC8ke3Bvc3ROdW19YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UG9zdExpbms+e3RpdGxlfTwvUG9zdExpbms+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxNYWluUG9zdCBkYXRlPXtkYXRlfSBjb250ZW50PXtjb250ZW50fSAvPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9FZGl0b3JQYWdlXCI+XHJcbiAgICAgICAgICA8UG9zdGluZ0J1dHRvbj4rPC9Qb3N0aW5nQnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9Qb3N0TGlzdFdyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBQb3N0aW5nQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBtYXJnaW46IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RMaXN0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMyU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0TGluayA9IHN0eWxlZC5hYFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJMaW5rIiwiTWFpblBvc3QiLCJ1c2VSZWNvaWxWYWx1ZSIsIlBvc3RMaXN0U3RhdGUiLCJDb250YWluZXIiLCJIZWFkZXIiLCJNYWluUGFnZSIsImN1cnJlbnRQb3N0TGlzdCIsIlBvc3RMaXN0V3JhcHBlciIsIm1hcCIsInBvc3ROdW0iLCJ0aXRsZSIsImRhdGUiLCJjb250ZW50IiwiaWQiLCJocmVmIiwiYXMiLCJQb3N0TGluayIsIlBvc3RpbmdCdXR0b24iLCJidXR0b24iLCJkaXYiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/MainPage.js\n");

/***/ })

});