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

/***/ "./pages/DetailedPost/[id].js":
/*!************************************!*\
  !*** ./pages/DetailedPost/[id].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/GlobalStyle */ \"./src/GlobalStyle.js\");\n/* harmony import */ var _src_styles_DetailedPostStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/styles/DetailedPostStyle */ \"./src/styles/DetailedPostStyle.js\");\n/* harmony import */ var _src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/hooks/useNavigateHome */ \"./src/hooks/useNavigateHome.js\");\n/* harmony import */ var _src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/styles/EditorStyle */ \"./src/styles/EditorStyle.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DetailContainer() {\n    _s();\n    var navigateHome = (0,_src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    var numbering = Number(id);\n    var currentPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__.PostListState);\n    var ref = _slicedToArray(currentPostList.filter(function(post) {\n        return post.postNum === numbering;\n    }), 1), postObj = ref[0];\n    var setPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__.PostListState);\n    var onHandleDelete = function() {\n        setPostList(function(item1) {\n            return item1.filter(function(item) {\n                return item.postNum !== postObj.postNum;\n            });\n        });\n        navigateHome();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Header, {\n                children: \"\\uAE00 \\uC0C1\\uC138\\uBCF4\\uAE30\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.CenteringWrapper, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_DetailedPostStyle__WEBPACK_IMPORTED_MODULE_6__.PostTitle, {\n                            children: postObj === null || postObj === void 0 ? void 0 : postObj.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_DetailedPostStyle__WEBPACK_IMPORTED_MODULE_6__.PostContent, {\n                            children: postObj === null || postObj === void 0 ? void 0 : postObj.content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_DetailedPostStyle__WEBPACK_IMPORTED_MODULE_6__.PostDate, {\n                            children: postObj === null || postObj === void 0 ? void 0 : postObj.date\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"/EditPost/[id]\",\n                            as: \"/EditPost/\".concat(postNum),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_8__.PostHandleButton, {\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this)\n                        }, id, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_8__.PostHandleButton, {\n                            onClick: onHandleDelete,\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(DetailContainer, \"+4vdjSwsl+8zBPvaw23tRKbCRkI=\", false, function() {\n    return [\n        _src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState\n    ];\n});\n_c = DetailContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailContainer);\nvar _c;\n$RefreshReg$(_c, \"DetailContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EZXRhaWxlZFBvc3QvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0M7QUFDbUI7QUFDSDtBQUMzQjtBQUMrQztBQUtoQztBQUNrQjtBQUNFOztBQUVoRSxTQUFTYyxlQUFlLEdBQUc7O0lBQ3pCLElBQU1DLFlBQVksR0FBR0gsc0VBQWUsRUFBRTtJQUN0QyxJQUFNSSxNQUFNLEdBQUdmLHNEQUFTLEVBQUU7SUFDMUIsSUFBTSxFQUFJLEdBQUtlLE1BQU0sQ0FBQ0UsS0FBSyxDQUFuQkQsRUFBRTtJQUNWLElBQU1FLFNBQVMsR0FBR0MsTUFBTSxDQUFDSCxFQUFFLENBQUM7SUFDNUIsSUFBTUksZUFBZSxHQUFHbkIsc0RBQWMsQ0FBQ0UsNkRBQWEsQ0FBQztJQUVyRCxJQUFrQmlCLEdBQTRELGtCQUE1REEsZUFBZSxDQUFDQyxNQUFNLENBQUMsU0FBQ0MsSUFBSTtlQUFLQSxJQUFJLENBQUNDLE9BQU8sS0FBS0wsU0FBUztLQUFBLENBQUMsTUFBdkVNLE9BQU8sR0FBSUosR0FBNEQsR0FBaEU7SUFFZCxJQUFNSyxXQUFXLEdBQUd2Qix5REFBaUIsQ0FBQ0MsNkRBQWEsQ0FBQztJQUVwRCxJQUFNdUIsY0FBYyxHQUFHLFdBQU07UUFDM0JELFdBQVcsQ0FBQyxTQUFDRSxLQUFJO21CQUFLQSxLQUFJLENBQUNOLE1BQU0sQ0FBQyxTQUFDTSxJQUFJO3VCQUFLQSxJQUFJLENBQUNKLE9BQU8sS0FBS0MsT0FBTyxDQUFDRCxPQUFPO2FBQUEsQ0FBQztTQUFBLENBQUMsQ0FBQztRQUMvRVQsWUFBWSxFQUFFLENBQUM7S0FDaEI7SUFDRCxxQkFDRTs7MEJBQ0UsOERBQUNSLG9EQUFNOzBCQUFDLGlDQUFNOzs7OztvQkFBUzswQkFDdkIsOERBQUNDLDhEQUFnQjswQkFDZiw0RUFBQ0YsdURBQVM7O3NDQUNSLDhEQUFDSyxvRUFBUztzQ0FBRWMsT0FBTyxhQUFQQSxPQUFPLFdBQU8sR0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxPQUFPLENBQUVJLEtBQUs7Ozs7O2dDQUFhO3NDQUN2Qyw4REFBQ3BCLHNFQUFXO3NDQUFFZ0IsT0FBTyxhQUFQQSxPQUFPLFdBQVMsR0FBaEJBLEtBQUFBLENBQWdCLEdBQWhCQSxPQUFPLENBQUVLLE9BQU87Ozs7O2dDQUFlO3NDQUM3Qyw4REFBQ3BCLG1FQUFRO3NDQUFFZSxPQUFPLGFBQVBBLE9BQU8sV0FBTSxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLE9BQU8sQ0FBRU0sSUFBSTs7Ozs7Z0NBQVk7c0NBRXBDLDhEQUFDMUIsa0RBQUk7NEJBQVUyQixJQUFJLEVBQUUsZ0JBQWdCOzRCQUFFQyxFQUFFLEVBQUUsWUFBVyxDQUFVLE9BQVJULE9BQU8sQ0FBRTtzQ0FDL0QsNEVBQUNYLHFFQUFnQjswQ0FBQyxNQUFJOzs7OztvQ0FBbUI7MkJBRGhDSSxFQUFFOzs7O2dDQUVOO3NDQUVQLDhEQUFDSixxRUFBZ0I7NEJBQUNxQixPQUFPLEVBQUVQLGNBQWM7c0NBQUUsUUFBTTs7Ozs7Z0NBQW1COzs7Ozs7d0JBQzFEOzs7OztvQkFDSzs7b0JBQ2xCLENBQ0g7Q0FDSDtHQWpDUWIsZUFBZTs7UUFDREYsa0VBQWU7UUFDckJYLGtEQUFTO1FBR0FDLGtEQUFjO1FBSWxCQyxxREFBaUI7OztBQVQ5QlcsS0FBQUEsZUFBZTtBQW1DeEIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9EZXRhaWxlZFBvc3QvW2lkXS5qcz85Y2ExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlLCB1c2VTZXRSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCB7IFBvc3RMaXN0U3RhdGUgfSBmcm9tICcuLi8uLi9zcmMvcmVjb2lsL3JlY29pbCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGVyLCBDZW50ZXJpbmdXcmFwcGVyIH0gZnJvbSAnLi4vLi4vc3JjL0dsb2JhbFN0eWxlJztcclxuaW1wb3J0IHtcclxuICBQb3N0Q29udGVudCxcclxuICBQb3N0RGF0ZSxcclxuICBQb3N0VGl0bGUsXHJcbn0gZnJvbSAnLi4vLi4vc3JjL3N0eWxlcy9EZXRhaWxlZFBvc3RTdHlsZSc7XHJcbmltcG9ydCB1c2VOYXZpZ2F0ZUhvbWUgZnJvbSAnLi4vLi4vc3JjL2hvb2tzL3VzZU5hdmlnYXRlSG9tZSc7XHJcbmltcG9ydCB7IFBvc3RIYW5kbGVCdXR0b24gfSBmcm9tICcuLi8uLi9zcmMvc3R5bGVzL0VkaXRvclN0eWxlJztcclxuXHJcbmZ1bmN0aW9uIERldGFpbENvbnRhaW5lcigpIHtcclxuICBjb25zdCBuYXZpZ2F0ZUhvbWUgPSB1c2VOYXZpZ2F0ZUhvbWUoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgbnVtYmVyaW5nID0gTnVtYmVyKGlkKTtcclxuICBjb25zdCBjdXJyZW50UG9zdExpc3QgPSB1c2VSZWNvaWxWYWx1ZShQb3N0TGlzdFN0YXRlKTtcclxuXHJcbiAgY29uc3QgW3Bvc3RPYmpdID0gY3VycmVudFBvc3RMaXN0LmZpbHRlcigocG9zdCkgPT4gcG9zdC5wb3N0TnVtID09PSBudW1iZXJpbmcpO1xyXG5cclxuICBjb25zdCBzZXRQb3N0TGlzdCA9IHVzZVNldFJlY29pbFN0YXRlKFBvc3RMaXN0U3RhdGUpO1xyXG5cclxuICBjb25zdCBvbkhhbmRsZURlbGV0ZSA9ICgpID0+IHtcclxuICAgIHNldFBvc3RMaXN0KChpdGVtKSA9PiBpdGVtLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5wb3N0TnVtICE9PSBwb3N0T2JqLnBvc3ROdW0pKTtcclxuICAgIG5hdmlnYXRlSG9tZSgpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXI+6riAIOyDgeyEuOuztOq4sDwvSGVhZGVyPlxyXG4gICAgICA8Q2VudGVyaW5nV3JhcHBlcj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPFBvc3RUaXRsZT57cG9zdE9iaj8udGl0bGV9PC9Qb3N0VGl0bGU+XHJcbiAgICAgICAgICA8UG9zdENvbnRlbnQ+e3Bvc3RPYmo/LmNvbnRlbnR9PC9Qb3N0Q29udGVudD5cclxuICAgICAgICAgIDxQb3N0RGF0ZT57cG9zdE9iaj8uZGF0ZX08L1Bvc3REYXRlPlxyXG5cclxuICAgICAgICAgIDxMaW5rIGtleT17aWR9IGhyZWY9eycvRWRpdFBvc3QvW2lkXSd9IGFzPXtgL0VkaXRQb3N0LyR7cG9zdE51bX1gfT5cclxuICAgICAgICAgICAgPFBvc3RIYW5kbGVCdXR0b24+RWRpdDwvUG9zdEhhbmRsZUJ1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICA8UG9zdEhhbmRsZUJ1dHRvbiBvbkNsaWNrPXtvbkhhbmRsZURlbGV0ZX0+RGVsZXRlPC9Qb3N0SGFuZGxlQnV0dG9uPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0NlbnRlcmluZ1dyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxDb250YWluZXI7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJ1c2VSb3V0ZXIiLCJ1c2VSZWNvaWxWYWx1ZSIsInVzZVNldFJlY29pbFN0YXRlIiwiUG9zdExpc3RTdGF0ZSIsIkxpbmsiLCJDb250YWluZXIiLCJIZWFkZXIiLCJDZW50ZXJpbmdXcmFwcGVyIiwiUG9zdENvbnRlbnQiLCJQb3N0RGF0ZSIsIlBvc3RUaXRsZSIsInVzZU5hdmlnYXRlSG9tZSIsIlBvc3RIYW5kbGVCdXR0b24iLCJEZXRhaWxDb250YWluZXIiLCJuYXZpZ2F0ZUhvbWUiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwibnVtYmVyaW5nIiwiTnVtYmVyIiwiY3VycmVudFBvc3RMaXN0IiwiZmlsdGVyIiwicG9zdCIsInBvc3ROdW0iLCJwb3N0T2JqIiwic2V0UG9zdExpc3QiLCJvbkhhbmRsZURlbGV0ZSIsIml0ZW0iLCJ0aXRsZSIsImNvbnRlbnQiLCJkYXRlIiwiaHJlZiIsImFzIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/DetailedPost/[id].js\n");

/***/ })

});