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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/GlobalStyle */ \"./src/GlobalStyle.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DetailContainer() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var navigateHome = function() {\n        return router.push(\"/MainPage\");\n    };\n    var id = router.query.id;\n    var numbering = Number(id);\n    var currentPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__.PostListState);\n    var ref = _slicedToArray(currentPostList.filter(function(post) {\n        return post.id === numbering;\n    }), 1), postObj = ref[0]; //id를 이용해서 post filter\n    var setPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__.PostListState);\n    var onHandleDelete = function() {\n        setPostList(function(item1) {\n            return item1.filter(function(item) {\n                return item.id !== postObj.id;\n            });\n        });\n        navigateHome();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: postObj === null || postObj === void 0 ? void 0 : postObj.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: postObj === null || postObj === void 0 ? void 0 : postObj.content\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: postObj === null || postObj === void 0 ? void 0 : postObj.date\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/ModifiedPost/[id]\",\n                    as: \"/ModifiedPost/\".concat(numbering),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"\\uC218\\uC815\\uD558\\uAE30\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: onHandleDelete,\n                    children: \"Delete\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(DetailContainer, \"8XUFJTHjNaCDHaQ/nL7MiGXRtzY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState\n    ];\n});\n_c = DetailContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailContainer);\nvar _c;\n$RefreshReg$(_c, \"DetailContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EZXRhaWxlZFBvc3QvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2tCO0FBQ0Y7QUFDM0I7QUFDMEI7O0FBRXZELFNBQVNPLGVBQWUsR0FBRzs7SUFDekIsSUFBTUMsTUFBTSxHQUFHUixzREFBUyxFQUFFO0lBQzFCLElBQU1TLFlBQVksR0FBRztlQUFNRCxNQUFNLENBQUNFLElBQUksQ0FBQyxXQUFXLENBQUM7S0FBQTtJQUNuRCxJQUFNLEVBQUksR0FBS0YsTUFBTSxDQUFDSSxLQUFLLENBQW5CRCxFQUFFO0lBQ1YsSUFBTUUsU0FBUyxHQUFHQyxNQUFNLENBQUNILEVBQUUsQ0FBQztJQUM1QixJQUFNSSxlQUFlLEdBQUdkLHNEQUFjLENBQUNFLDZEQUFhLENBQUM7SUFFckQsSUFBa0JZLEdBQXVELGtCQUF2REEsZUFBZSxDQUFDQyxNQUFNLENBQUMsU0FBQ0MsSUFBSTtlQUFLQSxJQUFJLENBQUNOLEVBQUUsS0FBS0UsU0FBUztLQUFBLENBQUMsTUFBbEVLLE9BQU8sR0FBSUgsR0FBdUQsR0FBM0QsRUFBNkQ7SUFFakUsSUFBSkksV0FBVyxHQUFHakIseURBQWlCLENBQUNDLDZEQUFhLENBQUM7SUFFcEQsSUFBTWlCLGNBQWMsR0FBRyxXQUFNO1FBQzNCRCxXQUFXLENBQUMsU0FBQ0UsS0FBSTttQkFBS0EsS0FBSSxDQUFDTCxNQUFNLENBQUMsU0FBQ0ssSUFBSTt1QkFBS0EsSUFBSSxDQUFDVixFQUFFLEtBQUtPLE9BQU8sQ0FBQ1AsRUFBRTthQUFBLENBQUM7U0FBQSxDQUFDLENBQUM7UUFDckVGLFlBQVksRUFBRSxDQUFDO0tBQ2hCO0lBQ0QscUJBQ0U7a0JBQ0UsNEVBQUNKLHVEQUFTOzs4QkFDViw4REFBQ2lCLEtBQUc7OEJBQUVKLE9BQU8sYUFBUEEsT0FBTyxXQUFPLEdBQWRBLEtBQUFBLENBQWMsR0FBZEEsT0FBTyxDQUFFSyxLQUFLOzs7Ozt3QkFBTzs4QkFDM0IsOERBQUNELEtBQUc7OEJBQUVKLE9BQU8sYUFBUEEsT0FBTyxXQUFTLEdBQWhCQSxLQUFBQSxDQUFnQixHQUFoQkEsT0FBTyxDQUFFTSxPQUFPOzs7Ozt3QkFBTzs4QkFDN0IsOERBQUNGLEtBQUc7OEJBQUVKLE9BQU8sYUFBUEEsT0FBTyxXQUFNLEdBQWJBLEtBQUFBLENBQWEsR0FBYkEsT0FBTyxDQUFFTyxJQUFJOzs7Ozt3QkFBTzs4QkFDMUIsOERBQUNyQixrREFBSTtvQkFDTHNCLElBQUksRUFBRSxvQkFBb0I7b0JBQzFCQyxFQUFFLEVBQUUsZ0JBQWUsQ0FBWSxPQUFWZCxTQUFTLENBQUU7OEJBQzlCLDRFQUFDZSxRQUFNO2tDQUFDLDBCQUFJOzs7Ozs0QkFBUzs7Ozs7d0JBQ2hCOzhCQUNQLDhEQUFDQSxRQUFNO29CQUFDQyxPQUFPLEVBQUVULGNBQWM7OEJBQUUsUUFBTTs7Ozs7d0JBQVM7Ozs7OztnQkFDcEM7cUJBQ1gsQ0FDSDtDQUNIO0dBOUJRYixlQUFlOztRQUNQUCxrREFBUztRQUlBQyxrREFBYztRQUlsQkMscURBQWlCOzs7QUFUOUJLLEtBQUFBLGVBQWU7QUFpQ3hCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGV0YWlsZWRQb3N0L1tpZF0uanM/OWNhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlLCB1c2VTZXRSZWNvaWxTdGF0ZX0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IHsgUG9zdExpc3RTdGF0ZSB9IGZyb20gJy4uLy4uL3NyYy9yZWNvaWwvcmVjb2lsJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtDb250YWluZXIsSGVhZGVyfSBmcm9tICcuLi8uLi9zcmMvR2xvYmFsU3R5bGUnO1xyXG5cclxuZnVuY3Rpb24gRGV0YWlsQ29udGFpbmVyKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG5hdmlnYXRlSG9tZSA9ICgpID0+IHJvdXRlci5wdXNoKCcvTWFpblBhZ2UnKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgbnVtYmVyaW5nID0gTnVtYmVyKGlkKTtcclxuICBjb25zdCBjdXJyZW50UG9zdExpc3QgPSB1c2VSZWNvaWxWYWx1ZShQb3N0TGlzdFN0YXRlKTtcclxuXHJcbiAgY29uc3QgW3Bvc3RPYmpdID0gY3VycmVudFBvc3RMaXN0LmZpbHRlcigocG9zdCkgPT4gcG9zdC5pZCA9PT0gbnVtYmVyaW5nKTsgLy9pZOulvCDsnbTsmqntlbTshJwgcG9zdCBmaWx0ZXJcclxuXHJcbiAgY29uc3Qgc2V0UG9zdExpc3QgPSB1c2VTZXRSZWNvaWxTdGF0ZShQb3N0TGlzdFN0YXRlKTtcclxuICBcclxuICBjb25zdCBvbkhhbmRsZURlbGV0ZSA9ICgpID0+IHtcclxuICAgIHNldFBvc3RMaXN0KChpdGVtKSA9PiBpdGVtLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gcG9zdE9iai5pZCkpO1xyXG4gICAgbmF2aWdhdGVIb21lKCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgPGRpdj57cG9zdE9iaj8udGl0bGV9PC9kaXY+XHJcbiAgICAgIDxkaXY+e3Bvc3RPYmo/LmNvbnRlbnR9PC9kaXY+XHJcbiAgICAgIDxkaXY+e3Bvc3RPYmo/LmRhdGV9PC9kaXY+XHJcbiAgICAgIDxMaW5rIFxyXG4gICAgICBocmVmPXsnL01vZGlmaWVkUG9zdC9baWRdJ31cclxuICAgICAgYXM9e2AvTW9kaWZpZWRQb3N0LyR7bnVtYmVyaW5nfWB9PlxyXG4gICAgICAgIDxidXR0b24+7IiY7KCV7ZWY6riwPC9idXR0b24+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkhhbmRsZURlbGV0ZX0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbENvbnRhaW5lcjtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVJlY29pbFZhbHVlIiwidXNlU2V0UmVjb2lsU3RhdGUiLCJQb3N0TGlzdFN0YXRlIiwiTGluayIsIkNvbnRhaW5lciIsIkhlYWRlciIsIkRldGFpbENvbnRhaW5lciIsInJvdXRlciIsIm5hdmlnYXRlSG9tZSIsInB1c2giLCJpZCIsInF1ZXJ5IiwibnVtYmVyaW5nIiwiTnVtYmVyIiwiY3VycmVudFBvc3RMaXN0IiwiZmlsdGVyIiwicG9zdCIsInBvc3RPYmoiLCJzZXRQb3N0TGlzdCIsIm9uSGFuZGxlRGVsZXRlIiwiaXRlbSIsImRpdiIsInRpdGxlIiwiY29udGVudCIsImRhdGUiLCJocmVmIiwiYXMiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/DetailedPost/[id].js\n");

/***/ })

});