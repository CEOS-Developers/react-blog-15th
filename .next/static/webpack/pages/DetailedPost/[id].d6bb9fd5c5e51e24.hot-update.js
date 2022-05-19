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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/GlobalStyle */ \"./src/GlobalStyle.js\");\n/* harmony import */ var _src_DetailPostStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/DetailPostStyle */ \"./src/DetailPostStyle.js\");\n/* harmony import */ var _src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/hooks/useNavigateHome */ \"./src/hooks/useNavigateHome.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DetailContainer() {\n    _s();\n    var navigateHome = (0,_src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    var numbering = Number(id);\n    var currentPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__.PostListState);\n    var ref = _slicedToArray(currentPostList.filter(function(post) {\n        return post.id === numbering;\n    }), 1), postObj = ref[0];\n    var setPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__.PostListState);\n    var onHandleDelete = function() {\n        setPostList(function(item1) {\n            return item1.filter(function(item) {\n                return item.id !== postObj.id;\n            });\n        });\n        navigateHome();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Header, {\n                    children: \"\\uB098\\uC758 \\uBE14\\uB85C\\uADF8\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_DetailPostStyle__WEBPACK_IMPORTED_MODULE_6__.PostTitle, {\n                    children: postObj === null || postObj === void 0 ? void 0 : postObj.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_DetailPostStyle__WEBPACK_IMPORTED_MODULE_6__.PostContent, {\n                    children: postObj === null || postObj === void 0 ? void 0 : postObj.content\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_DetailPostStyle__WEBPACK_IMPORTED_MODULE_6__.PostDate, {\n                    children: postObj === null || postObj === void 0 ? void 0 : postObj.date\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/EditPost/[id]\",\n                    as: \"/EditPost/\".concat(id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Edit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                }, id, false, {\n                    fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: onHandleDelete,\n                    children: \"Delete\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(DetailContainer, \"+4vdjSwsl+8zBPvaw23tRKbCRkI=\", false, function() {\n    return [\n        _src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState\n    ];\n});\n_c = DetailContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailContainer);\nvar _c;\n$RefreshReg$(_c, \"DetailContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EZXRhaWxlZFBvc3QvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDbUI7QUFDSDtBQUMzQjtBQUM2QjtBQUNtQjtBQUNmOztBQUU5RCxTQUFTVyxlQUFlLEdBQUc7O0lBQ3pCLElBQU1DLFlBQVksR0FBR0Ysc0VBQWUsRUFBRTtJQUN0QyxJQUFNRyxNQUFNLEdBQUdiLHNEQUFTLEVBQUU7SUFDMUIsSUFBTSxFQUFJLEdBQUthLE1BQU0sQ0FBQ0UsS0FBSyxDQUFuQkQsRUFBRTtJQUNWLElBQU1FLFNBQVMsR0FBR0MsTUFBTSxDQUFDSCxFQUFFLENBQUM7SUFDNUIsSUFBTUksZUFBZSxHQUFHakIsc0RBQWMsQ0FBQ0UsNkRBQWEsQ0FBQztJQUVyRCxJQUFrQmUsR0FBdUQsa0JBQXZEQSxlQUFlLENBQUNDLE1BQU0sQ0FBQyxTQUFDQyxJQUFJO2VBQUtBLElBQUksQ0FBQ04sRUFBRSxLQUFLRSxTQUFTO0tBQUEsQ0FBQyxNQUFsRUssT0FBTyxHQUFJSCxHQUF1RCxHQUEzRDtJQUVkLElBQU1JLFdBQVcsR0FBR3BCLHlEQUFpQixDQUFDQyw2REFBYSxDQUFDO0lBRXBELElBQU1vQixjQUFjLEdBQUcsV0FBTTtRQUMzQkQsV0FBVyxDQUFDLFNBQUNFLEtBQUk7bUJBQUtBLEtBQUksQ0FBQ0wsTUFBTSxDQUFDLFNBQUNLLElBQUk7dUJBQUtBLElBQUksQ0FBQ1YsRUFBRSxLQUFLTyxPQUFPLENBQUNQLEVBQUU7YUFBQSxDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBQ3JFRixZQUFZLEVBQUUsQ0FBQztLQUNoQjtJQUNELHFCQUNFO2tCQUNFLDRFQUFDUCx1REFBUzs7OEJBQ1IsOERBQUNDLG9EQUFNOzhCQUFDLGlDQUFNOzs7Ozt3QkFBUzs4QkFDdkIsOERBQUNHLDJEQUFTOzhCQUFFWSxPQUFPLGFBQVBBLE9BQU8sV0FBTyxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLE9BQU8sQ0FBRUksS0FBSzs7Ozs7d0JBQWE7OEJBQ3ZDLDhEQUFDbEIsNkRBQVc7OEJBQUVjLE9BQU8sYUFBUEEsT0FBTyxXQUFTLEdBQWhCQSxLQUFBQSxDQUFnQixHQUFoQkEsT0FBTyxDQUFFSyxPQUFPOzs7Ozt3QkFBZTs4QkFDN0MsOERBQUNsQiwwREFBUTs4QkFBRWEsT0FBTyxhQUFQQSxPQUFPLFdBQU0sR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxPQUFPLENBQUVNLElBQUk7Ozs7O3dCQUFZOzhCQUVwQyw4REFBQ3ZCLGtEQUFJO29CQUFVd0IsSUFBSSxFQUFFLGdCQUFnQjtvQkFBRUMsRUFBRSxFQUFFLFlBQVcsQ0FBSyxPQUFIZixFQUFFLENBQUU7OEJBQzFELDRFQUFDZ0IsUUFBTTtrQ0FBQyxNQUFJOzs7Ozs0QkFBUzttQkFEWmhCLEVBQUU7Ozs7d0JBRU47OEJBRVAsOERBQUNnQixRQUFNO29CQUFDQyxPQUFPLEVBQUVSLGNBQWM7OEJBQUUsUUFBTTs7Ozs7d0JBQVM7Ozs7OztnQkFDdEM7cUJBQ1gsQ0FDSDtDQUNIO0dBL0JRWixlQUFlOztRQUNERCxrRUFBZTtRQUNyQlYsa0RBQVM7UUFHQUMsa0RBQWM7UUFJbEJDLHFEQUFpQjs7O0FBVDlCUyxLQUFBQSxlQUFlO0FBaUN4QiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0RldGFpbGVkUG9zdC9baWRdLmpzPzljYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSwgdXNlU2V0UmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgeyBQb3N0TGlzdFN0YXRlIH0gZnJvbSAnLi4vLi4vc3JjL3JlY29pbC9yZWNvaWwnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRlciB9IGZyb20gJy4uLy4uL3NyYy9HbG9iYWxTdHlsZSc7XHJcbmltcG9ydCB7IFBvc3RDb250ZW50LCBQb3N0RGF0ZSwgUG9zdFRpdGxlIH0gZnJvbSAnLi4vLi4vc3JjL0RldGFpbFBvc3RTdHlsZSc7XHJcbmltcG9ydCB1c2VOYXZpZ2F0ZUhvbWUgZnJvbSAnLi4vLi4vc3JjL2hvb2tzL3VzZU5hdmlnYXRlSG9tZSc7XHJcblxyXG5mdW5jdGlvbiBEZXRhaWxDb250YWluZXIoKSB7XHJcbiAgY29uc3QgbmF2aWdhdGVIb21lID0gdXNlTmF2aWdhdGVIb21lKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IG51bWJlcmluZyA9IE51bWJlcihpZCk7XHJcbiAgY29uc3QgY3VycmVudFBvc3RMaXN0ID0gdXNlUmVjb2lsVmFsdWUoUG9zdExpc3RTdGF0ZSk7XHJcblxyXG4gIGNvbnN0IFtwb3N0T2JqXSA9IGN1cnJlbnRQb3N0TGlzdC5maWx0ZXIoKHBvc3QpID0+IHBvc3QuaWQgPT09IG51bWJlcmluZyk7XHJcblxyXG4gIGNvbnN0IHNldFBvc3RMaXN0ID0gdXNlU2V0UmVjb2lsU3RhdGUoUG9zdExpc3RTdGF0ZSk7XHJcblxyXG4gIGNvbnN0IG9uSGFuZGxlRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgc2V0UG9zdExpc3QoKGl0ZW0pID0+IGl0ZW0uZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBwb3N0T2JqLmlkKSk7XHJcbiAgICBuYXZpZ2F0ZUhvbWUoKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxIZWFkZXI+64KY7J2YIOu4lOuhnOq3uDwvSGVhZGVyPlxyXG4gICAgICAgIDxQb3N0VGl0bGU+e3Bvc3RPYmo/LnRpdGxlfTwvUG9zdFRpdGxlPlxyXG4gICAgICAgIDxQb3N0Q29udGVudD57cG9zdE9iaj8uY29udGVudH08L1Bvc3RDb250ZW50PlxyXG4gICAgICAgIDxQb3N0RGF0ZT57cG9zdE9iaj8uZGF0ZX08L1Bvc3REYXRlPlxyXG5cclxuICAgICAgICA8TGluayBrZXk9e2lkfSBocmVmPXsnL0VkaXRQb3N0L1tpZF0nfSBhcz17YC9FZGl0UG9zdC8ke2lkfWB9PlxyXG4gICAgICAgICAgPGJ1dHRvbj5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uSGFuZGxlRGVsZXRlfT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxDb250YWluZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VSZWNvaWxWYWx1ZSIsInVzZVNldFJlY29pbFN0YXRlIiwiUG9zdExpc3RTdGF0ZSIsIkxpbmsiLCJDb250YWluZXIiLCJIZWFkZXIiLCJQb3N0Q29udGVudCIsIlBvc3REYXRlIiwiUG9zdFRpdGxlIiwidXNlTmF2aWdhdGVIb21lIiwiRGV0YWlsQ29udGFpbmVyIiwibmF2aWdhdGVIb21lIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsIm51bWJlcmluZyIsIk51bWJlciIsImN1cnJlbnRQb3N0TGlzdCIsImZpbHRlciIsInBvc3QiLCJwb3N0T2JqIiwic2V0UG9zdExpc3QiLCJvbkhhbmRsZURlbGV0ZSIsIml0ZW0iLCJ0aXRsZSIsImNvbnRlbnQiLCJkYXRlIiwiaHJlZiIsImFzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/DetailedPost/[id].js\n");

/***/ }),

/***/ "./src/hooks/useNavigateHome.js":
/*!**************************************!*\
  !*** ./src/hooks/useNavigateHome.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useNavigateHome; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _s = $RefreshSig$();\nfunction useNavigateHome() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    var navigateHome = function() {\n        return router.push(\"/MainPage\");\n    };\n    return navigateHome;\n};\n_s(useNavigateHome, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlTmF2aWdhdGVIb21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3Qzs7QUFFekIsU0FBU0MsZUFBZSxHQUFFOztJQUVyQyxJQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQUU7SUFDMUIsSUFBTUcsWUFBWSxHQUFHO2VBQU1ELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUFBO0lBR25ELE9BQU9ELFlBQVksQ0FBRTtDQUN4QjtHQVB1QkYsZUFBZTs7UUFFcEJELGtEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VOYXZpZ2F0ZUhvbWUuanM/ZDg1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VOYXZpZ2F0ZUhvbWUoKXtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlSG9tZSA9ICgpID0+IHJvdXRlci5wdXNoKCcvTWFpblBhZ2UnKVxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuKG5hdmlnYXRlSG9tZSk7XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VOYXZpZ2F0ZUhvbWUiLCJyb3V0ZXIiLCJuYXZpZ2F0ZUhvbWUiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useNavigateHome.js\n");

/***/ })

});