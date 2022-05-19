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

/***/ "./src/components/DetailedContainer.tsx":
/*!**********************************************!*\
  !*** ./src/components/DetailedContainer.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _recoil_recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recoil/recoil */ \"./src/recoil/recoil.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _GlobalStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../GlobalStyle */ \"./src/GlobalStyle.tsx\");\n/* harmony import */ var _styles_DetailedPostStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/DetailedPostStyle */ \"./src/styles/DetailedPostStyle.tsx\");\n/* harmony import */ var _hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useNavigateHome */ \"./src/hooks/useNavigateHome.tsx\");\n/* harmony import */ var _styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/EditorStyle */ \"./src/styles/EditorStyle.tsx\");\n/* harmony import */ var _hooks_useRouting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useRouting */ \"./src/hooks/useRouting.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DetailedContainer() {\n    _s();\n    var navigateHome = (0,_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    var numbering = (0,_hooks_useRouting__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n    var currentPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(_recoil_recoil__WEBPACK_IMPORTED_MODULE_2__.PostListState);\n    var setPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(_recoil_recoil__WEBPACK_IMPORTED_MODULE_2__.PostListState);\n    var ref = _slicedToArray(currentPostList.filter(function(post) {\n        return post.postNum === numbering;\n    }), 1), postObj = ref[0];\n    var onHandleDelete = function() {\n        setPostList(function(item1) {\n            return item1.filter(function(item) {\n                return item.postNum !== postObj.postNum;\n            });\n        });\n        navigateHome();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__.Header, {\n                children: \"Detailed Post\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedContainer.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__.CenteringWrapper, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_DetailedPostStyle__WEBPACK_IMPORTED_MODULE_5__.PostTitle, {\n                            children: postObj === null || postObj === void 0 ? void 0 : postObj.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedContainer.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_DetailedPostStyle__WEBPACK_IMPORTED_MODULE_5__.PostContent, {\n                            children: postObj === null || postObj === void 0 ? void 0 : postObj.content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedContainer.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_DetailedPostStyle__WEBPACK_IMPORTED_MODULE_5__.PostDate, {\n                            children: postObj === null || postObj === void 0 ? void 0 : postObj.date\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedContainer.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/EditPost/[id]\",\n                            as: \"/EditPost/\".concat(numbering),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__.PostHandleButton, {\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedContainer.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedContainer.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__.PostHandleButton, {\n                            onClick: onHandleDelete,\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedContainer.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedContainer.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedContainer.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(DetailedContainer, \"rbx2di/iIUNBrcFylquVxfJwFaE=\", false, function() {\n    return [\n        _hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _hooks_useRouting__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState\n    ];\n});\n_c = DetailedContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailedContainer);\nvar _c;\n$RefreshReg$(_c, \"DetailedContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZXRhaWxlZENvbnRhaW5lci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJEO0FBQ1Y7QUFDcEI7QUFDd0M7QUFLaEM7QUFDa0I7QUFDRTtBQUNaOztBQUU3QyxTQUFTYSxpQkFBaUIsR0FBRzs7SUFFM0IsSUFBTUMsWUFBWSxHQUFHSixrRUFBZSxFQUFFO0lBQ3RDLElBQU1LLFNBQVMsR0FBR0gsNkRBQVUsRUFBRTtJQUU5QixJQUFNSSxlQUFlLEdBQUdoQixzREFBYyxDQUFDRSx5REFBYSxDQUFDO0lBQ3JELElBQU1lLFdBQVcsR0FBR2hCLHlEQUFpQixDQUFDQyx5REFBYSxDQUFDO0lBRXBELElBQWtCYyxHQUE0RCxrQkFBNURBLGVBQWUsQ0FBQ0UsTUFBTSxDQUFDLFNBQUNDLElBQUk7ZUFBS0EsSUFBSSxDQUFDQyxPQUFPLEtBQUtMLFNBQVM7S0FBQSxDQUFDLE1BQXZFTSxPQUFPLEdBQUlMLEdBQTRELEdBQWhFO0lBRWQsSUFBTU0sY0FBYyxHQUFHLFdBQU07UUFDM0JMLFdBQVcsQ0FBQyxTQUFDTSxLQUFJO21CQUFLQSxLQUFJLENBQUNMLE1BQU0sQ0FBQyxTQUFDSyxJQUFJO3VCQUFLQSxJQUFJLENBQUNILE9BQU8sS0FBS0MsT0FBTyxDQUFDRCxPQUFPO2FBQUEsQ0FBQztTQUFBLENBQUMsQ0FBQztRQUMvRU4sWUFBWSxFQUFFLENBQUM7S0FDaEI7SUFFRCxxQkFDRTs7MEJBQ0UsOERBQUNULGdEQUFNOzBCQUFDLGVBQWE7Ozs7O29CQUFTOzBCQUM5Qiw4REFBQ0MsMERBQWdCOzBCQUNmLDRFQUFDRixtREFBUzs7c0NBQ1IsOERBQUNLLGdFQUFTO3NDQUFFWSxPQUFPLGFBQVBBLE9BQU8sV0FBTyxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLE9BQU8sQ0FBRUcsS0FBSzs7Ozs7Z0NBQWE7c0NBQ3ZDLDhEQUFDakIsa0VBQVc7c0NBQUVjLE9BQU8sYUFBUEEsT0FBTyxXQUFTLEdBQWhCQSxLQUFBQSxDQUFnQixHQUFoQkEsT0FBTyxDQUFFSSxPQUFPOzs7OztnQ0FBZTtzQ0FDN0MsOERBQUNqQiwrREFBUTtzQ0FBRWEsT0FBTyxhQUFQQSxPQUFPLFdBQU0sR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxPQUFPLENBQUVLLElBQUk7Ozs7O2dDQUFZO3NDQUNwQyw4REFBQ3ZCLGtEQUFJOzRCQUFDd0IsSUFBSSxFQUFFLGdCQUFnQjs0QkFBRUMsRUFBRSxFQUFFLFlBQVcsQ0FBWSxPQUFWYixTQUFTLENBQUU7c0NBQ3hELDRFQUFDSixpRUFBZ0I7MENBQUMsTUFBSTs7Ozs7b0NBQW1COzs7OztnQ0FDcEM7c0NBQ1AsOERBQUNBLGlFQUFnQjs0QkFBQ2tCLE9BQU8sRUFBRVAsY0FBYztzQ0FBRSxRQUFNOzs7OztnQ0FBbUI7Ozs7Ozt3QkFDMUQ7Ozs7O29CQUNLOztvQkFDbEIsQ0FDSDtDQUNIO0dBL0JRVCxpQkFBaUI7O1FBRUhILDhEQUFlO1FBQ2xCRSx5REFBVTtRQUVKWixrREFBYztRQUNsQkMscURBQWlCOzs7QUFOOUJZLEtBQUFBLGlCQUFpQjtBQWlDMUIsK0RBQWVBLGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RldGFpbGVkQ29udGFpbmVyLnRzeD9lMTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlY29pbFZhbHVlLCB1c2VTZXRSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCB7IFBvc3RMaXN0U3RhdGUgfSBmcm9tICcuLi9yZWNvaWwvcmVjb2lsJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkZXIsIENlbnRlcmluZ1dyYXBwZXIgfSBmcm9tICcuLi9HbG9iYWxTdHlsZSc7XHJcbmltcG9ydCB7XHJcbiAgUG9zdENvbnRlbnQsXHJcbiAgUG9zdERhdGUsXHJcbiAgUG9zdFRpdGxlLFxyXG59IGZyb20gJy4uL3N0eWxlcy9EZXRhaWxlZFBvc3RTdHlsZSc7XHJcbmltcG9ydCB1c2VOYXZpZ2F0ZUhvbWUgZnJvbSAnLi4vaG9va3MvdXNlTmF2aWdhdGVIb21lJztcclxuaW1wb3J0IHsgUG9zdEhhbmRsZUJ1dHRvbiB9IGZyb20gJy4uL3N0eWxlcy9FZGl0b3JTdHlsZSc7XHJcbmltcG9ydCB1c2VSb3V0aW5nIGZyb20gJy4uL2hvb2tzL3VzZVJvdXRpbmcnO1xyXG5cclxuZnVuY3Rpb24gRGV0YWlsZWRDb250YWluZXIoKSB7XHJcbiAgXHJcbiAgY29uc3QgbmF2aWdhdGVIb21lID0gdXNlTmF2aWdhdGVIb21lKCk7XHJcbiAgY29uc3QgbnVtYmVyaW5nID0gdXNlUm91dGluZygpO1xyXG5cclxuICBjb25zdCBjdXJyZW50UG9zdExpc3QgPSB1c2VSZWNvaWxWYWx1ZShQb3N0TGlzdFN0YXRlKTtcclxuICBjb25zdCBzZXRQb3N0TGlzdCA9IHVzZVNldFJlY29pbFN0YXRlKFBvc3RMaXN0U3RhdGUpO1xyXG5cclxuICBjb25zdCBbcG9zdE9ial0gPSBjdXJyZW50UG9zdExpc3QuZmlsdGVyKChwb3N0KSA9PiBwb3N0LnBvc3ROdW0gPT09IG51bWJlcmluZyk7XHJcblxyXG4gIGNvbnN0IG9uSGFuZGxlRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgc2V0UG9zdExpc3QoKGl0ZW0pID0+IGl0ZW0uZmlsdGVyKChpdGVtKSA9PiBpdGVtLnBvc3ROdW0gIT09IHBvc3RPYmoucG9zdE51bSkpO1xyXG4gICAgbmF2aWdhdGVIb21lKCk7XHJcbiAgfTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlcj5EZXRhaWxlZCBQb3N0PC9IZWFkZXI+XHJcbiAgICAgIDxDZW50ZXJpbmdXcmFwcGVyPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8UG9zdFRpdGxlPntwb3N0T2JqPy50aXRsZX08L1Bvc3RUaXRsZT5cclxuICAgICAgICAgIDxQb3N0Q29udGVudD57cG9zdE9iaj8uY29udGVudH08L1Bvc3RDb250ZW50PlxyXG4gICAgICAgICAgPFBvc3REYXRlPntwb3N0T2JqPy5kYXRlfTwvUG9zdERhdGU+XHJcbiAgICAgICAgICA8TGluayBocmVmPXsnL0VkaXRQb3N0L1tpZF0nfSBhcz17YC9FZGl0UG9zdC8ke251bWJlcmluZ31gfT5cclxuICAgICAgICAgICAgPFBvc3RIYW5kbGVCdXR0b24+RWRpdDwvUG9zdEhhbmRsZUJ1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxQb3N0SGFuZGxlQnV0dG9uIG9uQ2xpY2s9e29uSGFuZGxlRGVsZXRlfT5EZWxldGU8L1Bvc3RIYW5kbGVCdXR0b24+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQ2VudGVyaW5nV3JhcHBlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbGVkQ29udGFpbmVyOyJdLCJuYW1lcyI6WyJ1c2VSZWNvaWxWYWx1ZSIsInVzZVNldFJlY29pbFN0YXRlIiwiUG9zdExpc3RTdGF0ZSIsIkxpbmsiLCJDb250YWluZXIiLCJIZWFkZXIiLCJDZW50ZXJpbmdXcmFwcGVyIiwiUG9zdENvbnRlbnQiLCJQb3N0RGF0ZSIsIlBvc3RUaXRsZSIsInVzZU5hdmlnYXRlSG9tZSIsIlBvc3RIYW5kbGVCdXR0b24iLCJ1c2VSb3V0aW5nIiwiRGV0YWlsZWRDb250YWluZXIiLCJuYXZpZ2F0ZUhvbWUiLCJudW1iZXJpbmciLCJjdXJyZW50UG9zdExpc3QiLCJzZXRQb3N0TGlzdCIsImZpbHRlciIsInBvc3QiLCJwb3N0TnVtIiwicG9zdE9iaiIsIm9uSGFuZGxlRGVsZXRlIiwiaXRlbSIsInRpdGxlIiwiY29udGVudCIsImRhdGUiLCJocmVmIiwiYXMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DetailedContainer.tsx\n");

/***/ })

});