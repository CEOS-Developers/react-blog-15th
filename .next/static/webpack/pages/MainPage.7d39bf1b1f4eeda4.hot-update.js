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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_MainPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/MainPost */ \"./src/components/MainPost.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/recoil/recoil */ \"./src/recoil/recoil.tsx\");\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/GlobalStyle */ \"./src/GlobalStyle.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin: 1rem;\\n  padding: 1rem;\\n  font-size: 15px;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\n  border: none;\\n  border-radius: 100px;\\n\\n  cursor: pointer;\\n\\n  &:hover{\\n    opacity:0.7;\\n    transform: scale(1.3);\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 1%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  text-decoration: none;\\n  font-size: 20px;\\n  font-weight: bold;\\n  margin-top: 0.3rem;\\n\\n  cursor: pointer;\\n\\n  &:hover{\\n    opacity:0.2;\\n    \\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MainPage() {\n    var _this = this;\n    _s();\n    var currentPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_4__.PostListState);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\"), search = ref[0], setSearch = ref[1];\n    var searchFriend = currentPostList.filter(function(post) {\n        return post.title.includes(search);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Header, {\n                children: \"Post List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostListWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/EditPost/[id]\",\n                        as: \"/EditPost/0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostingButton, {\n                            children: \"+\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    currentPostList.map(function(param) {\n                        var postNum = param.postNum, title = param.title, date = param.date, content = param.content, id = param.id;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/DetailedPost/[id]\",\n                                    as: \"/DetailedPost/\".concat(postNum),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostLink, {\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, id, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MainPost__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    date: date,\n                                    content: content\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\MainPage.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(MainPage, \"SFimoFOdkdubJJS/1q6/IleiE2c=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue\n    ];\n});\n_c = MainPage;\nvar PostingButton = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].button(_templateObject());\n_c1 = PostingButton;\nvar PostListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject1());\n_c2 = PostListWrapper;\nvar PostLink = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].a(_templateObject2());\n_c3 = PostLink;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"MainPage\");\n$RefreshReg$(_c1, \"PostingButton\");\n$RefreshReg$(_c2, \"PostListWrapper\");\n$RefreshReg$(_c3, \"PostLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9NYWluUGFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1Y7QUFDcUI7QUFDVjtBQUNhO0FBQ0U7QUFDdEI7O0FBRWxCLFNBQVNRLFFBQVEsR0FBRzs7O0lBQ2pDLElBQU1DLGVBQWUsR0FBR04sc0RBQWMsQ0FBQ0MsNkRBQWEsQ0FBQztJQUNyRCxJQUE0QkcsR0FBb0IsR0FBcEJBLCtDQUFRLENBQVMsRUFBRSxDQUFDLEVBVmxELE1BVWUsR0FBZUEsR0FBb0IsR0FBbkMsRUFWZixTQVUwQixHQUFJQSxHQUFvQixHQUF4QjtJQUd4QixJQUFNSyxZQUFZLEdBQUdILGVBQWUsQ0FBQ0ksTUFBTSxDQUFDLFNBQUNDLElBQUksRUFBSztRQUNwRCxPQUFPQSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDTixNQUFNLENBQUMsQ0FBQztLQUNwQyxDQUFDO0lBQ0YscUJBQ0U7OzBCQUNFLDhEQUFDSixvREFBTTswQkFBQyxXQUFTOzs7OztvQkFBUzswQkFFMUIsOERBQUNXLGVBQWU7O2tDQUNkLDhEQUFDQyxPQUFLOzs7OzRCQUFTO2tDQUNmLDhEQUFDakIsa0RBQUk7d0JBQUNrQixJQUFJLEVBQUUsZ0JBQWdCO3dCQUFFQyxFQUFFLEVBQUcsYUFBVztrQ0FDNUMsNEVBQUNDLGFBQWE7c0NBQUMsR0FBQzs7Ozs7Z0NBQWdCOzs7Ozs0QkFDM0I7b0JBRU5aLGVBQWUsQ0FBQ2EsR0FBRyxDQUFDLGdCQUEwQzs0QkFBdkNDLE9BQU8sU0FBUEEsT0FBTyxFQUFDUixLQUFLLFNBQUxBLEtBQUssRUFBRVMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxFQUFFLFNBQUZBLEVBQUU7d0JBQ3RELHFCQUNFLDhEQUFDckIsdURBQVM7OzhDQUNSLDhEQUFDSixrREFBSTtvQ0FFSGtCLElBQUksRUFBRSxvQkFBb0I7b0NBQzFCQyxFQUFFLEVBQUUsZ0JBQWUsQ0FBVSxPQUFSRyxPQUFPLENBQUU7OENBRTlCLDRFQUFDSSxRQUFRO2tEQUFFWixLQUFLOzs7Ozs2Q0FBWTttQ0FKdkJXLEVBQUU7Ozs7eUNBS0Y7OENBQ1AsOERBQUN4QixnRUFBUTtvQ0FBQ3NCLElBQUksRUFBRUEsSUFBSTtvQ0FBRUMsT0FBTyxFQUFFQSxPQUFPOzs7Ozt5Q0FBSTs7Ozs7O2lDQUNoQyxDQUNaO3FCQUNILENBQUM7Ozs7OztvQkFDYzs7b0JBQ2pCLENBQ0g7Q0FDSDtHQW5DdUJqQixRQUFROztRQUNOTCxrREFBYzs7O0FBRGhCSyxLQUFBQSxRQUFRO0FBcUNoQyxJQUFNYSxhQUFhLEdBQUdyQixnRUFBYSxtQkFjbEM7QUFkS3FCLE1BQUFBLGFBQWE7QUFnQm5CLElBQU1KLGVBQWUsR0FBR2pCLDZEQUFVLG9CQU1qQztBQU5LaUIsTUFBQUEsZUFBZTtBQVFyQixJQUFNVSxRQUFRLEdBQUczQiwyREFBUSxvQkFZeEI7QUFaSzJCLE1BQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTWFpblBhZ2UudHN4PzdiMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBNYWluUG9zdCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NYWluUG9zdCc7XHJcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlIH0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IHsgUG9zdExpc3RTdGF0ZSB9IGZyb20gJy4uL3NyYy9yZWNvaWwvcmVjb2lsJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkZXIgfSBmcm9tICcuLi9zcmMvR2xvYmFsU3R5bGUnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5QYWdlKCkge1xyXG4gIGNvbnN0IGN1cnJlbnRQb3N0TGlzdCA9IHVzZVJlY29pbFZhbHVlKFBvc3RMaXN0U3RhdGUpO1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cclxuXHJcbiAgY29uc3Qgc2VhcmNoRnJpZW5kID0gY3VycmVudFBvc3RMaXN0LmZpbHRlcigocG9zdCkgPT4ge1xyXG4gICAgcmV0dXJuIHBvc3QudGl0bGUuaW5jbHVkZXMoc2VhcmNoKTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlcj5Qb3N0IExpc3Q8L0hlYWRlcj5cclxuICAgICAgXHJcbiAgICAgIDxQb3N0TGlzdFdyYXBwZXI+XHJcbiAgICAgICAgPGlucHV0PjwvaW5wdXQ+XHJcbiAgICAgICAgPExpbmsgaHJlZj17Jy9FZGl0UG9zdC9baWRdJ30gYXM9e2AvRWRpdFBvc3QvMGB9PlxyXG4gICAgICAgICAgPFBvc3RpbmdCdXR0b24+KzwvUG9zdGluZ0J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIHtjdXJyZW50UG9zdExpc3QubWFwKCh7IHBvc3ROdW0sdGl0bGUsIGRhdGUsIGNvbnRlbnQsIGlkIH0pID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgICAgICBocmVmPXsnL0RldGFpbGVkUG9zdC9baWRdJ31cclxuICAgICAgICAgICAgICAgIGFzPXtgL0RldGFpbGVkUG9zdC8ke3Bvc3ROdW19YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UG9zdExpbms+e3RpdGxlfTwvUG9zdExpbms+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxNYWluUG9zdCBkYXRlPXtkYXRlfSBjb250ZW50PXtjb250ZW50fSAvPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvUG9zdExpc3RXcmFwcGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUG9zdGluZ0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjpob3ZlcntcclxuICAgIG9wYWNpdHk6MC43O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFBvc3RMaXN0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0TGluayA9IHN0eWxlZC5hYFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OjAuMjtcclxuICAgIFxyXG4gIH1cclxuYDtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkxpbmsiLCJNYWluUG9zdCIsInVzZVJlY29pbFZhbHVlIiwiUG9zdExpc3RTdGF0ZSIsIkNvbnRhaW5lciIsIkhlYWRlciIsInVzZVN0YXRlIiwiTWFpblBhZ2UiLCJjdXJyZW50UG9zdExpc3QiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzZWFyY2hGcmllbmQiLCJmaWx0ZXIiLCJwb3N0IiwidGl0bGUiLCJpbmNsdWRlcyIsIlBvc3RMaXN0V3JhcHBlciIsImlucHV0IiwiaHJlZiIsImFzIiwiUG9zdGluZ0J1dHRvbiIsIm1hcCIsInBvc3ROdW0iLCJkYXRlIiwiY29udGVudCIsImlkIiwiUG9zdExpbmsiLCJidXR0b24iLCJkaXYiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/MainPage.tsx\n");

/***/ })

});