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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_MainPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/MainPost */ \"./src/components/MainPost.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/GlobalStyle */ \"./src/GlobalStyle.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin: 0.5rem;\\n  font-size: 15px;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n//각 포스트들의 제목과 작성 날짜를 리스트 형태로\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MainPage() {\n    var _this = this;\n    _s();\n    var currentPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_4__.PostListState);\n    console.log(currentPostList[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Header, {\n                children: \"\\uB098\\uC758 \\uBE14\\uB85C\\uADF8\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            currentPostList.map(function(param) {\n                var title = param.title, date = param.date, content = param.content, id = param.id;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/DetailedPost/[id]\",\n                            as: \"/DetailedPost/\".concat(id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                                lineNumber: 25,\n                                columnNumber: 15\n                            }, _this)\n                        }, id, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MainPost__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            date: date,\n                            content: content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/EditorPage\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostingButton, {\n                    children: \"\\uD3EC\\uC2A4\\uD2B8 \\uC4F0\\uAE30\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(MainPage, \"Hd/288D1nvy5R7S5ldkn+o2a1eA=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue\n    ];\n});\n_c = MainPage;\nvar PostingButton = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].button(_templateObject());\n_c1 = PostingButton;\nvar _c, _c1;\n$RefreshReg$(_c, \"MainPage\");\n$RefreshReg$(_c1, \"PostingButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9NYWluUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFDdUM7QUFDVjtBQUNxQjtBQUNWO0FBQ2E7QUFDVDs7QUFFN0IsU0FBU00sUUFBUSxHQUFHOzs7SUFDakMsSUFBTUMsZUFBZSxHQUFHSixzREFBYyxDQUFDQyw2REFBYSxDQUFDO0lBRXJESSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMscUJBQ0U7OzBCQUNFLDhEQUFDRixvREFBTTswQkFBQyxpQ0FBTTs7Ozs7b0JBQW1CO1lBRXRCRSxlQUFLLENBQUNHLEdBQUcsQ0FBQyxnQkFBa0M7b0JBQS9CQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxFQUFFLFNBQUZBLEVBQUU7Z0JBQzlDLHFCQUNFOztzQ0FDRSw4REFBQ2Isa0RBQUk7NEJBRUhjLElBQUksRUFBRSxvQkFBb0I7NEJBQzFCQyxFQUFFLEVBQUUsZ0JBQWUsQ0FBSyxPQUFIRixFQUFFLENBQUU7c0NBRXpCLDRFQUFDRyxHQUFDOzBDQUFFTixLQUFLOzs7OztxQ0FBSzsyQkFKVEcsRUFBRTs7OztpQ0FLRjtzQ0FDUCw4REFBQ1osZ0VBQVE7NEJBQUNVLElBQUksRUFBRUEsSUFBSTs0QkFBRUMsT0FBTyxFQUFFQSxPQUFPOzs7OztpQ0FBSTs7Z0NBQ3pDLENBQ0g7YUFDSCxDQUFDOzBCQUVGLDhEQUFDWixrREFBSTtnQkFBQ2MsSUFBSSxFQUFDLGFBQWE7MEJBQ3RCLDRFQUFDRyxhQUFhOzhCQUFDLGlDQUFNOzs7Ozt3QkFBZ0I7Ozs7O29CQUNoQzs7b0JBQ04sQ0FDSDtDQUNIO0dBNUJ1QlosUUFBUTs7UUFDTkgsa0RBQWM7OztBQURoQkcsS0FBQUEsUUFBUTtBQThCaEMsSUFBTVksYUFBYSxHQUFHbEIsZ0VBQWEsbUJBR2xDO0FBSEtrQixNQUFBQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL01haW5QYWdlLmpzPzI3ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy/qsIEg7Y+s7Iqk7Yq465Ok7J2YIOygnOuqqeqzvCDsnpHshLEg64Kg7Kec66W8IOumrOyKpO2KuCDtmJXtg5zroZxcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBNYWluUG9zdCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NYWluUG9zdCc7XHJcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlIH0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IHsgUG9zdExpc3RTdGF0ZSB9IGZyb20gJy4uL3NyYy9yZWNvaWwvcmVjb2lsJztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vc3JjL0dsb2JhbFN0eWxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5QYWdlKCkge1xyXG4gIGNvbnN0IGN1cnJlbnRQb3N0TGlzdCA9IHVzZVJlY29pbFZhbHVlKFBvc3RMaXN0U3RhdGUpO1xyXG5cclxuICBjb25zb2xlLmxvZyhjdXJyZW50UG9zdExpc3RbMF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyPuuCmOydmCDruJTroZzqt7g8L0hlYWRlcj5cclxuXHJcbiAgICAgIHtjdXJyZW50UG9zdExpc3QubWFwKCh7IHRpdGxlLCBkYXRlLCBjb250ZW50LCBpZCB9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgICBocmVmPXsnL0RldGFpbGVkUG9zdC9baWRdJ31cclxuICAgICAgICAgICAgICBhcz17YC9EZXRhaWxlZFBvc3QvJHtpZH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TWFpblBvc3QgZGF0ZT17ZGF0ZX0gY29udGVudD17Y29udGVudH0gLz4gXHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvRWRpdG9yUGFnZVwiPlxyXG4gICAgICAgIDxQb3N0aW5nQnV0dG9uPu2PrOyKpO2KuCDsk7DquLA8L1Bvc3RpbmdCdXR0b24+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFBvc3RpbmdCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIG1hcmdpbjogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuYDtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkxpbmsiLCJNYWluUG9zdCIsInVzZVJlY29pbFZhbHVlIiwiUG9zdExpc3RTdGF0ZSIsIkhlYWRlciIsIk1haW5QYWdlIiwiY3VycmVudFBvc3RMaXN0IiwiY29uc29sZSIsImxvZyIsIm1hcCIsInRpdGxlIiwiZGF0ZSIsImNvbnRlbnQiLCJpZCIsImhyZWYiLCJhcyIsImEiLCJQb3N0aW5nQnV0dG9uIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/MainPage.js\n");

/***/ })

});