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

/***/ "./pages/MainPage.tsx":
/*!****************************!*\
  !*** ./pages/MainPage.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_MainPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/MainPost */ \"./src/components/MainPost.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/recoil/recoil */ \"./src/recoil/recoil.tsx\");\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/GlobalStyle */ \"./src/GlobalStyle.tsx\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin: 1rem;\\n  padding: 1rem;\\n  font-size: 15px;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\n  border: none;\\n  border-radius: 100px;\\n\\n  cursor: pointer;\\n\\n  &:hover{\\n    opacity:0.7;\\n    transform: scale(1.3);\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 1%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  text-decoration: none;\\n  font-size: 20px;\\n  font-weight: bold;\\n  margin-top: 0.3rem;\\n\\n  cursor: pointer;\\n\\n  &:hover{\\n    opacity:0.2;\\n    \\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MainPage() {\n    var _this = this;\n    _s();\n    var currentPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_4__.PostListState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Header, {\n                children: \"Post List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostListWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/EditPost/[id]\",\n                        as: \"/EditPost/0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostingButton, {\n                            children: \"+\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    currentPostList.map(function(param) {\n                        var postNum = param.postNum, title = param.title, date = param.date, content = param.content, id = param.id;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/DetailedPost/[id]\",\n                                    as: \"/DetailedPost/\".concat(postNum),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostLink, {\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, id, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MainPost__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    date: date,\n                                    content: content\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(MainPage, \"Hd/288D1nvy5R7S5ldkn+o2a1eA=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue\n    ];\n});\n_c = MainPage;\nvar PostingButton = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].button(_templateObject());\n_c1 = PostingButton;\nvar PostListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c2 = PostListWrapper;\nvar PostLink = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].a(_templateObject2());\n_c3 = PostLink;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"MainPage\");\n$RefreshReg$(_c1, \"PostingButton\");\n$RefreshReg$(_c2, \"PostListWrapper\");\n$RefreshReg$(_c3, \"PostLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9NYWluUGFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNWO0FBQ3FCO0FBQ1Y7QUFDYTtBQUNFOztBQUV4QyxTQUFTTyxRQUFRLEdBQUc7OztJQUNqQyxJQUFNQyxlQUFlLEdBQUdMLHNEQUFjLENBQUNDLDZEQUFhLENBQUM7SUFFckQscUJBQ0U7OzBCQUNFLDhEQUFDRSxvREFBTTswQkFBQyxXQUFTOzs7OztvQkFBUzswQkFDMUIsOERBQUNHLE9BQUs7Ozs7b0JBQVM7MEJBQ2YsOERBQUNDLGVBQWU7O2tDQUNkLDhEQUFDVCxrREFBSTt3QkFBQ1UsSUFBSSxFQUFFLGdCQUFnQjt3QkFBRUMsRUFBRSxFQUFHLGFBQVc7a0NBQzVDLDRFQUFDQyxhQUFhO3NDQUFDLEdBQUM7Ozs7O2dDQUFnQjs7Ozs7NEJBQzNCO29CQUVOTCxlQUFlLENBQUNNLEdBQUcsQ0FBQyxnQkFBMEM7NEJBQXZDQyxPQUFPLFNBQVBBLE9BQU8sRUFBQ0MsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsRUFBRSxTQUFGQSxFQUFFO3dCQUN0RCxxQkFDRSw4REFBQ2QsdURBQVM7OzhDQUNSLDhEQUFDSixrREFBSTtvQ0FFSFUsSUFBSSxFQUFFLG9CQUFvQjtvQ0FDMUJDLEVBQUUsRUFBRSxnQkFBZSxDQUFVLE9BQVJHLE9BQU8sQ0FBRTs4Q0FFOUIsNEVBQUNLLFFBQVE7a0RBQUVKLEtBQUs7Ozs7OzZDQUFZO21DQUp2QkcsRUFBRTs7Ozt5Q0FLRjs4Q0FDUCw4REFBQ2pCLGdFQUFRO29DQUFDZSxJQUFJLEVBQUVBLElBQUk7b0NBQUVDLE9BQU8sRUFBRUEsT0FBTzs7Ozs7eUNBQUk7Ozs7OztpQ0FDaEMsQ0FDWjtxQkFDSCxDQUFDOzs7Ozs7b0JBQ2M7O29CQUNqQixDQUNIO0NBQ0g7R0E3QnVCWCxRQUFROztRQUNOSixrREFBYzs7O0FBRGhCSSxLQUFBQSxRQUFRO0FBK0JoQyxJQUFNTSxhQUFhLEdBQUdiLGdFQUFhLG1CQWNsQztBQWRLYSxNQUFBQSxhQUFhO0FBZ0JuQixJQUFNSCxlQUFlLEdBQUdWLDZEQUFVLG9CQU1qQztBQU5LVSxNQUFBQSxlQUFlO0FBUXJCLElBQU1VLFFBQVEsR0FBR3BCLDJEQUFRLG9CQVl4QjtBQVpLb0IsTUFBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9NYWluUGFnZS50c3g/N2IwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IE1haW5Qb3N0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL01haW5Qb3N0JztcclxuaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUgfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgeyBQb3N0TGlzdFN0YXRlIH0gZnJvbSAnLi4vc3JjL3JlY29pbC9yZWNvaWwnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRlciB9IGZyb20gJy4uL3NyYy9HbG9iYWxTdHlsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluUGFnZSgpIHtcclxuICBjb25zdCBjdXJyZW50UG9zdExpc3QgPSB1c2VSZWNvaWxWYWx1ZShQb3N0TGlzdFN0YXRlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXI+UG9zdCBMaXN0PC9IZWFkZXI+XHJcbiAgICAgIDxpbnB1dD48L2lucHV0PlxyXG4gICAgICA8UG9zdExpc3RXcmFwcGVyPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9eycvRWRpdFBvc3QvW2lkXSd9IGFzPXtgL0VkaXRQb3N0LzBgfT5cclxuICAgICAgICAgIDxQb3N0aW5nQnV0dG9uPis8L1Bvc3RpbmdCdXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICB7Y3VycmVudFBvc3RMaXN0Lm1hcCgoeyBwb3N0TnVtLHRpdGxlLCBkYXRlLCBjb250ZW50LCBpZCB9KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgaHJlZj17Jy9EZXRhaWxlZFBvc3QvW2lkXSd9XHJcbiAgICAgICAgICAgICAgICBhcz17YC9EZXRhaWxlZFBvc3QvJHtwb3N0TnVtfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBvc3RMaW5rPnt0aXRsZX08L1Bvc3RMaW5rPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TWFpblBvc3QgZGF0ZT17ZGF0ZX0gY29udGVudD17Y29udGVudH0gLz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L1Bvc3RMaXN0V3JhcHBlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFBvc3RpbmdCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIG1hcmdpbjogMXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OjAuNztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0TGlzdFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDElO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdExpbmsgPSBzdHlsZWQuYWBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi10b3A6IDAuM3JlbTtcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmhvdmVye1xyXG4gICAgb3BhY2l0eTowLjI7XHJcbiAgICBcclxuICB9XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJMaW5rIiwiTWFpblBvc3QiLCJ1c2VSZWNvaWxWYWx1ZSIsIlBvc3RMaXN0U3RhdGUiLCJDb250YWluZXIiLCJIZWFkZXIiLCJNYWluUGFnZSIsImN1cnJlbnRQb3N0TGlzdCIsImlucHV0IiwiUG9zdExpc3RXcmFwcGVyIiwiaHJlZiIsImFzIiwiUG9zdGluZ0J1dHRvbiIsIm1hcCIsInBvc3ROdW0iLCJ0aXRsZSIsImRhdGUiLCJjb250ZW50IiwiaWQiLCJQb3N0TGluayIsImJ1dHRvbiIsImRpdiIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/MainPage.tsx\n");

/***/ })

});