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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/GlobalStyle */ \"./src/GlobalStyle.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DetailContainer() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var navigateHome = function() {\n        return router.push(\"/MainPage\");\n    };\n    var id = router.query.id;\n    var numbering = Number(id);\n    var currentPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__.PostListState);\n    var ref = _slicedToArray(currentPostList.filter(function(post) {\n        return post.id === numbering;\n    }), 1), postObj = ref[0]; //id를 이용해서 post filter\n    var setPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__.PostListState);\n    var onHandleDelete = function() {\n        setPostList(function(item1) {\n            return item1.filter(function(item) {\n                return item.id !== postObj.id;\n            });\n        });\n        navigateHome();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Header, {\n                    children: \"\\uB098\\uC758 \\uBE14\\uB85C\\uADF8\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: postObj === null || postObj === void 0 ? void 0 : postObj.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: postObj === null || postObj === void 0 ? void 0 : postObj.content\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: postObj === null || postObj === void 0 ? void 0 : postObj.date\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/ModifiedPost/[id]\",\n                    as: \"/ModifiedPost/\".concat(numbering),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"\\uC218\\uC815\\uD558\\uAE30\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: onHandleDelete,\n                    children: \"Delete\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(DetailContainer, \"8XUFJTHjNaCDHaQ/nL7MiGXRtzY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState\n    ];\n});\n_c = DetailContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailContainer);\nvar _c;\n$RefreshReg$(_c, \"DetailContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EZXRhaWxlZFBvc3QvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2tCO0FBQ0Y7QUFDM0I7QUFDMEI7O0FBRXZELFNBQVNPLGVBQWUsR0FBRzs7SUFDekIsSUFBTUMsTUFBTSxHQUFHUixzREFBUyxFQUFFO0lBQzFCLElBQU1TLFlBQVksR0FBRztlQUFNRCxNQUFNLENBQUNFLElBQUksQ0FBQyxXQUFXLENBQUM7S0FBQTtJQUNuRCxJQUFNLEVBQUksR0FBS0YsTUFBTSxDQUFDSSxLQUFLLENBQW5CRCxFQUFFO0lBQ1YsSUFBTUUsU0FBUyxHQUFHQyxNQUFNLENBQUNILEVBQUUsQ0FBQztJQUM1QixJQUFNSSxlQUFlLEdBQUdkLHNEQUFjLENBQUNFLDZEQUFhLENBQUM7SUFFckQsSUFBa0JZLEdBQXVELGtCQUF2REEsZUFBZSxDQUFDQyxNQUFNLENBQUMsU0FBQ0MsSUFBSTtlQUFLQSxJQUFJLENBQUNOLEVBQUUsS0FBS0UsU0FBUztLQUFBLENBQUMsTUFBbEVLLE9BQU8sR0FBSUgsR0FBdUQsR0FBM0QsRUFBNkQ7SUFFakUsSUFBSkksV0FBVyxHQUFHakIseURBQWlCLENBQUNDLDZEQUFhLENBQUM7SUFFcEQsSUFBTWlCLGNBQWMsR0FBRyxXQUFNO1FBQzNCRCxXQUFXLENBQUMsU0FBQ0UsS0FBSTttQkFBS0EsS0FBSSxDQUFDTCxNQUFNLENBQUMsU0FBQ0ssSUFBSTt1QkFBS0EsSUFBSSxDQUFDVixFQUFFLEtBQUtPLE9BQU8sQ0FBQ1AsRUFBRTthQUFBLENBQUM7U0FBQSxDQUFDLENBQUM7UUFDckVGLFlBQVksRUFBRSxDQUFDO0tBQ2hCO0lBQ0QscUJBQ0U7a0JBQ0UsNEVBQUNKLHVEQUFTOzs4QkFDUiw4REFBQ0Msb0RBQU07OEJBQUMsaUNBQU07Ozs7O3dCQUFtQjs4QkFDekIsOERBQVRnQixLQUFHOzhCQUFFSixPQUFPLGFBQVBBLE9BQU8sV0FBTyxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLE9BQU8sQ0FBRUssS0FBSzs7Ozs7d0JBQU87OEJBQzNCLDhEQUFDRCxLQUFHOzhCQUFFSixPQUFPLGFBQVBBLE9BQU8sV0FBUyxHQUFoQkEsS0FBQUEsQ0FBZ0IsR0FBaEJBLE9BQU8sQ0FBRU0sT0FBTzs7Ozs7d0JBQU87OEJBQzdCLDhEQUFDRixLQUFHOzhCQUFFSixPQUFPLGFBQVBBLE9BQU8sV0FBTSxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLE9BQU8sQ0FBRU8sSUFBSTs7Ozs7d0JBQU87OEJBQzFCLDhEQUFDckIsa0RBQUk7b0JBQ0xzQixJQUFJLEVBQUUsb0JBQW9CO29CQUMxQkMsRUFBRSxFQUFFLGdCQUFlLENBQVksT0FBVmQsU0FBUyxDQUFFOzhCQUM5Qiw0RUFBQ2UsUUFBTTtrQ0FBQywwQkFBSTs7Ozs7NEJBQVM7Ozs7O3dCQUNoQjs4QkFDUCw4REFBQ0EsUUFBTTtvQkFBQ0MsT0FBTyxFQUFFVCxjQUFjOzhCQUFFLFFBQU07Ozs7O3dCQUFTOzs7Ozs7Z0JBQ3BDO3FCQUNYLENBQ0g7Q0FDSDtHQS9CUWIsZUFBZTs7UUFDUFAsa0RBQVM7UUFJQUMsa0RBQWM7UUFJbEJDLHFEQUFpQjs7O0FBVDlCSyxLQUFBQSxlQUFlO0FBa0N4QiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0RldGFpbGVkUG9zdC9baWRdLmpzPzljYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSwgdXNlU2V0UmVjb2lsU3RhdGV9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCB7IFBvc3RMaXN0U3RhdGUgfSBmcm9tICcuLi8uLi9zcmMvcmVjb2lsL3JlY29pbCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7Q29udGFpbmVyLEhlYWRlcn0gZnJvbSAnLi4vLi4vc3JjL0dsb2JhbFN0eWxlJztcclxuXHJcbmZ1bmN0aW9uIERldGFpbENvbnRhaW5lcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBuYXZpZ2F0ZUhvbWUgPSAoKSA9PiByb3V0ZXIucHVzaCgnL01haW5QYWdlJyk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IG51bWJlcmluZyA9IE51bWJlcihpZCk7XHJcbiAgY29uc3QgY3VycmVudFBvc3RMaXN0ID0gdXNlUmVjb2lsVmFsdWUoUG9zdExpc3RTdGF0ZSk7XHJcblxyXG4gIGNvbnN0IFtwb3N0T2JqXSA9IGN1cnJlbnRQb3N0TGlzdC5maWx0ZXIoKHBvc3QpID0+IHBvc3QuaWQgPT09IG51bWJlcmluZyk7IC8vaWTrpbwg7J207Jqp7ZW07IScIHBvc3QgZmlsdGVyXHJcblxyXG4gIGNvbnN0IHNldFBvc3RMaXN0ID0gdXNlU2V0UmVjb2lsU3RhdGUoUG9zdExpc3RTdGF0ZSk7XHJcbiAgXHJcbiAgY29uc3Qgb25IYW5kbGVEZWxldGUgPSAoKSA9PiB7XHJcbiAgICBzZXRQb3N0TGlzdCgoaXRlbSkgPT4gaXRlbS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHBvc3RPYmouaWQpKTtcclxuICAgIG5hdmlnYXRlSG9tZSgpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEhlYWRlcj7rgpjsnZgg67iU66Gc6re4PC9IZWFkZXI+XHJcbiAgICAgIDxkaXY+e3Bvc3RPYmo/LnRpdGxlfTwvZGl2PlxyXG4gICAgICA8ZGl2Pntwb3N0T2JqPy5jb250ZW50fTwvZGl2PlxyXG4gICAgICA8ZGl2Pntwb3N0T2JqPy5kYXRlfTwvZGl2PlxyXG4gICAgICA8TGluayBcclxuICAgICAgaHJlZj17Jy9Nb2RpZmllZFBvc3QvW2lkXSd9XHJcbiAgICAgIGFzPXtgL01vZGlmaWVkUG9zdC8ke251bWJlcmluZ31gfT5cclxuICAgICAgICA8YnV0dG9uPuyImOygle2VmOq4sDwvYnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17b25IYW5kbGVEZWxldGV9PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxDb250YWluZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VSZWNvaWxWYWx1ZSIsInVzZVNldFJlY29pbFN0YXRlIiwiUG9zdExpc3RTdGF0ZSIsIkxpbmsiLCJDb250YWluZXIiLCJIZWFkZXIiLCJEZXRhaWxDb250YWluZXIiLCJyb3V0ZXIiLCJuYXZpZ2F0ZUhvbWUiLCJwdXNoIiwiaWQiLCJxdWVyeSIsIm51bWJlcmluZyIsIk51bWJlciIsImN1cnJlbnRQb3N0TGlzdCIsImZpbHRlciIsInBvc3QiLCJwb3N0T2JqIiwic2V0UG9zdExpc3QiLCJvbkhhbmRsZURlbGV0ZSIsIml0ZW0iLCJkaXYiLCJ0aXRsZSIsImNvbnRlbnQiLCJkYXRlIiwiaHJlZiIsImFzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/DetailedPost/[id].js\n");

/***/ })

});