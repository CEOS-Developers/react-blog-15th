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

/***/ "./src/components/DetailedContent.js":
/*!*******************************************!*\
  !*** ./src/components/DetailedContent.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/GlobalStyle */ \"./src/GlobalStyle.js\");\n/* harmony import */ var _src_styles_DetailedPostStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/styles/DetailedPostStyle */ \"./src/styles/DetailedPostStyle.js\");\n/* harmony import */ var _src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/hooks/useNavigateHome */ \"./src/hooks/useNavigateHome.js\");\n/* harmony import */ var _src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/styles/EditorStyle */ \"./src/styles/EditorStyle.js\");\n/* harmony import */ var _src_hooks_useRouting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/hooks/useRouting */ \"./src/hooks/useRouting.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DetailContainer() {\n    _s();\n    var navigateHome = (0,_src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    var numbering = (0,_src_hooks_useRouting__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n    var currentPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_2__.PostListState);\n    var setPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_2__.PostListState);\n    var ref = _slicedToArray(currentPostList.filter(function(post) {\n        return post.postNum === numbering;\n    }), 1), postObj = ref[0];\n    var onHandleDelete = function() {\n        setPostList(function(item1) {\n            return item1.filter(function(item) {\n                return item.postNum !== postObj.postNum;\n            });\n        });\n        navigateHome();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__.Header, {\n                children: \"\\uAE00 \\uC0C1\\uC138\\uBCF4\\uAE30\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedContent.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__.CenteringWrapper, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_DetailedPostStyle__WEBPACK_IMPORTED_MODULE_5__.PostTitle, {\n                            children: postObj === null || postObj === void 0 ? void 0 : postObj.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedContent.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_DetailedPostStyle__WEBPACK_IMPORTED_MODULE_5__.PostContent, {\n                            children: postObj === null || postObj === void 0 ? void 0 : postObj.content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedContent.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_DetailedPostStyle__WEBPACK_IMPORTED_MODULE_5__.PostDate, {\n                            children: postObj === null || postObj === void 0 ? void 0 : postObj.date\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedContent.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/EditPost/[id]\",\n                            as: \"/EditPost/\".concat(numbering),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__.PostHandleButton, {\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedContent.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedContent.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__.PostHandleButton, {\n                            onClick: onHandleDelete,\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedContent.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedContent.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedContent.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(DetailContainer, \"rbx2di/iIUNBrcFylquVxfJwFaE=\", false, function() {\n    return [\n        _src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _src_hooks_useRouting__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState\n    ];\n});\n_c = DetailContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailContainer);\nvar _c;\n$RefreshReg$(_c, \"DetailContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZXRhaWxlZENvbnRlbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJEO0FBQ0g7QUFDM0I7QUFDK0M7QUFLaEM7QUFDa0I7QUFDRTtBQUNaOztBQUVwRCxTQUFTYSxlQUFlLEdBQUc7O0lBRXpCLElBQU1DLFlBQVksR0FBR0osc0VBQWUsRUFBRTtJQUN0QyxJQUFNSyxTQUFTLEdBQUdILGlFQUFVLEVBQUU7SUFFOUIsSUFBTUksZUFBZSxHQUFHaEIsc0RBQWMsQ0FBQ0UsNkRBQWEsQ0FBQztJQUNyRCxJQUFNZSxXQUFXLEdBQUdoQix5REFBaUIsQ0FBQ0MsNkRBQWEsQ0FBQztJQUVwRCxJQUFrQmMsR0FBNEQsa0JBQTVEQSxlQUFlLENBQUNFLE1BQU0sQ0FBQyxTQUFDQyxJQUFJO2VBQUtBLElBQUksQ0FBQ0MsT0FBTyxLQUFLTCxTQUFTO0tBQUEsQ0FBQyxNQUF2RU0sT0FBTyxHQUFJTCxHQUE0RCxHQUFoRTtJQUVkLElBQU1NLGNBQWMsR0FBRyxXQUFNO1FBQzNCTCxXQUFXLENBQUMsU0FBQ00sS0FBSTttQkFBS0EsS0FBSSxDQUFDTCxNQUFNLENBQUMsU0FBQ0ssSUFBSTt1QkFBS0EsSUFBSSxDQUFDSCxPQUFPLEtBQUtDLE9BQU8sQ0FBQ0QsT0FBTzthQUFBLENBQUM7U0FBQSxDQUFDLENBQUM7UUFDL0VOLFlBQVksRUFBRSxDQUFDO0tBQ2hCO0lBRUQscUJBQ0U7OzBCQUNFLDhEQUFDVCxvREFBTTswQkFBQyxpQ0FBTTs7Ozs7b0JBQVM7MEJBQ3ZCLDhEQUFDQyw4REFBZ0I7MEJBQ2YsNEVBQUNGLHVEQUFTOztzQ0FDUiw4REFBQ0ssb0VBQVM7c0NBQUVZLE9BQU8sYUFBUEEsT0FBTyxXQUFPLEdBQWRBLEtBQUFBLENBQWMsR0FBZEEsT0FBTyxDQUFFRyxLQUFLOzs7OztnQ0FBYTtzQ0FDdkMsOERBQUNqQixzRUFBVztzQ0FBRWMsT0FBTyxhQUFQQSxPQUFPLFdBQVMsR0FBaEJBLEtBQUFBLENBQWdCLEdBQWhCQSxPQUFPLENBQUVJLE9BQU87Ozs7O2dDQUFlO3NDQUM3Qyw4REFBQ2pCLG1FQUFRO3NDQUFFYSxPQUFPLGFBQVBBLE9BQU8sV0FBTSxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLE9BQU8sQ0FBRUssSUFBSTs7Ozs7Z0NBQVk7c0NBQ3BDLDhEQUFDdkIsa0RBQUk7NEJBQUN3QixJQUFJLEVBQUUsZ0JBQWdCOzRCQUFFQyxFQUFFLEVBQUUsWUFBVyxDQUFZLE9BQVZiLFNBQVMsQ0FBRTtzQ0FDeEQsNEVBQUNKLHFFQUFnQjswQ0FBQyxNQUFJOzs7OztvQ0FBbUI7Ozs7O2dDQUNwQztzQ0FDUCw4REFBQ0EscUVBQWdCOzRCQUFDa0IsT0FBTyxFQUFFUCxjQUFjO3NDQUFFLFFBQU07Ozs7O2dDQUFtQjs7Ozs7O3dCQUMxRDs7Ozs7b0JBQ0s7O29CQUNsQixDQUNIO0NBQ0g7R0EvQlFULGVBQWU7O1FBRURILGtFQUFlO1FBQ2xCRSw2REFBVTtRQUVKWixrREFBYztRQUNsQkMscURBQWlCOzs7QUFOOUJZLEtBQUFBLGVBQWU7QUFpQ3hCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGV0YWlsZWRDb250ZW50LmpzPzQ2OTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUsIHVzZVNldFJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IHsgUG9zdExpc3RTdGF0ZSB9IGZyb20gJy4uLy4uL3NyYy9yZWNvaWwvcmVjb2lsJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkZXIsIENlbnRlcmluZ1dyYXBwZXIgfSBmcm9tICcuLi8uLi9zcmMvR2xvYmFsU3R5bGUnO1xyXG5pbXBvcnQge1xyXG4gIFBvc3RDb250ZW50LFxyXG4gIFBvc3REYXRlLFxyXG4gIFBvc3RUaXRsZSxcclxufSBmcm9tICcuLi8uLi9zcmMvc3R5bGVzL0RldGFpbGVkUG9zdFN0eWxlJztcclxuaW1wb3J0IHVzZU5hdmlnYXRlSG9tZSBmcm9tICcuLi8uLi9zcmMvaG9va3MvdXNlTmF2aWdhdGVIb21lJztcclxuaW1wb3J0IHsgUG9zdEhhbmRsZUJ1dHRvbiB9IGZyb20gJy4uLy4uL3NyYy9zdHlsZXMvRWRpdG9yU3R5bGUnO1xyXG5pbXBvcnQgdXNlUm91dGluZyBmcm9tICcuLi8uLi9zcmMvaG9va3MvdXNlUm91dGluZyc7XHJcblxyXG5mdW5jdGlvbiBEZXRhaWxDb250YWluZXIoKSB7XHJcbiAgXHJcbiAgY29uc3QgbmF2aWdhdGVIb21lID0gdXNlTmF2aWdhdGVIb21lKCk7XHJcbiAgY29uc3QgbnVtYmVyaW5nID0gdXNlUm91dGluZygpO1xyXG5cclxuICBjb25zdCBjdXJyZW50UG9zdExpc3QgPSB1c2VSZWNvaWxWYWx1ZShQb3N0TGlzdFN0YXRlKTtcclxuICBjb25zdCBzZXRQb3N0TGlzdCA9IHVzZVNldFJlY29pbFN0YXRlKFBvc3RMaXN0U3RhdGUpO1xyXG5cclxuICBjb25zdCBbcG9zdE9ial0gPSBjdXJyZW50UG9zdExpc3QuZmlsdGVyKChwb3N0KSA9PiBwb3N0LnBvc3ROdW0gPT09IG51bWJlcmluZyk7XHJcblxyXG4gIGNvbnN0IG9uSGFuZGxlRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgc2V0UG9zdExpc3QoKGl0ZW0pID0+IGl0ZW0uZmlsdGVyKChpdGVtKSA9PiBpdGVtLnBvc3ROdW0gIT09IHBvc3RPYmoucG9zdE51bSkpO1xyXG4gICAgbmF2aWdhdGVIb21lKCk7XHJcbiAgfTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlcj7quIAg7IOB7IS467O06riwPC9IZWFkZXI+XHJcbiAgICAgIDxDZW50ZXJpbmdXcmFwcGVyPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8UG9zdFRpdGxlPntwb3N0T2JqPy50aXRsZX08L1Bvc3RUaXRsZT5cclxuICAgICAgICAgIDxQb3N0Q29udGVudD57cG9zdE9iaj8uY29udGVudH08L1Bvc3RDb250ZW50PlxyXG4gICAgICAgICAgPFBvc3REYXRlPntwb3N0T2JqPy5kYXRlfTwvUG9zdERhdGU+XHJcbiAgICAgICAgICA8TGluayBocmVmPXsnL0VkaXRQb3N0L1tpZF0nfSBhcz17YC9FZGl0UG9zdC8ke251bWJlcmluZ31gfT5cclxuICAgICAgICAgICAgPFBvc3RIYW5kbGVCdXR0b24+RWRpdDwvUG9zdEhhbmRsZUJ1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxQb3N0SGFuZGxlQnV0dG9uIG9uQ2xpY2s9e29uSGFuZGxlRGVsZXRlfT5EZWxldGU8L1Bvc3RIYW5kbGVCdXR0b24+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQ2VudGVyaW5nV3JhcHBlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbENvbnRhaW5lcjsiXSwibmFtZXMiOlsidXNlUmVjb2lsVmFsdWUiLCJ1c2VTZXRSZWNvaWxTdGF0ZSIsIlBvc3RMaXN0U3RhdGUiLCJMaW5rIiwiQ29udGFpbmVyIiwiSGVhZGVyIiwiQ2VudGVyaW5nV3JhcHBlciIsIlBvc3RDb250ZW50IiwiUG9zdERhdGUiLCJQb3N0VGl0bGUiLCJ1c2VOYXZpZ2F0ZUhvbWUiLCJQb3N0SGFuZGxlQnV0dG9uIiwidXNlUm91dGluZyIsIkRldGFpbENvbnRhaW5lciIsIm5hdmlnYXRlSG9tZSIsIm51bWJlcmluZyIsImN1cnJlbnRQb3N0TGlzdCIsInNldFBvc3RMaXN0IiwiZmlsdGVyIiwicG9zdCIsInBvc3ROdW0iLCJwb3N0T2JqIiwib25IYW5kbGVEZWxldGUiLCJpdGVtIiwidGl0bGUiLCJjb250ZW50IiwiZGF0ZSIsImhyZWYiLCJhcyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/DetailedContent.js\n");

/***/ })

});