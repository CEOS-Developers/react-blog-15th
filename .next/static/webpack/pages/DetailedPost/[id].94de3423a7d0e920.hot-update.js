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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DetailContainer() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var navigateHome = function() {\n        return router.push(\"/MainPage\");\n    };\n    var id = router.query.id;\n    var numbering = Number(id);\n    var currentPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__.PostListState);\n    var ref = _slicedToArray(currentPostList.filter(function(post) {\n        return post.id === numbering;\n    }), 1), postObj = ref[0]; //id를 이용해서 post filter\n    var setPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__.PostListState);\n    var onHandleDelete = function(postId) {\n        navigateHome();\n        setPostList(currentPostList.filter(function(item) {\n            return item.id !== postId;\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: postObj.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: postObj.content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: postObj.date\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/EditorPage\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Edit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return onHandleDelete(postObj.id);\n                },\n                children: \"Remove\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(DetailContainer, \"8XUFJTHjNaCDHaQ/nL7MiGXRtzY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState\n    ];\n});\n_c = DetailContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailContainer);\nvar _c;\n$RefreshReg$(_c, \"DetailContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EZXRhaWxlZFBvc3QvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDbUI7QUFDSDtBQUMzQjs7QUFFN0IsU0FBU0ssZUFBZSxHQUFHOztJQUN6QixJQUFNQyxNQUFNLEdBQUdOLHNEQUFTLEVBQUU7SUFDMUIsSUFBTU8sWUFBWSxHQUFHO2VBQU1ELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUFBO0lBQ25ELElBQU0sRUFBSSxHQUFLRixNQUFNLENBQUNJLEtBQUssQ0FBbkJELEVBQUU7SUFDVixJQUFNRSxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0gsRUFBRSxDQUFDO0lBQzVCLElBQU1JLGVBQWUsR0FBR1osc0RBQWMsQ0FBQ0UsNkRBQWEsQ0FBQztJQUVyRCxJQUFrQlUsR0FBdUQsa0JBQXZEQSxlQUFlLENBQUNDLE1BQU0sQ0FBQyxTQUFDQyxJQUFJO2VBQUtBLElBQUksQ0FBQ04sRUFBRSxLQUFLRSxTQUFTO0tBQUEsQ0FBQyxNQUFsRUssT0FBTyxHQUFJSCxHQUF1RCxHQUEzRCxFQUE2RDtJQUUzRSxJQUFNSSxXQUFXLEdBQUdmLHlEQUFpQixDQUFDQyw2REFBYSxDQUFDO0lBQ3BELElBQU1lLGNBQWMsR0FBRyxTQUFDQyxNQUFNLEVBQUs7UUFDakNaLFlBQVksRUFBRSxDQUFDO1FBQ2ZVLFdBQVcsQ0FBQ0osZUFBZSxDQUFDQyxNQUFNLENBQUMsU0FBQ00sSUFBSTttQkFBS0EsSUFBSSxDQUFDWCxFQUFFLEtBQUtVLE1BQU07U0FBQSxDQUFDLENBQUMsQ0FBQztLQUNuRTtJQUNELHFCQUNFOzswQkFDRSw4REFBQ0UsS0FBRzswQkFBRUwsT0FBTyxDQUFDTSxLQUFLOzs7OztvQkFBTzswQkFDMUIsOERBQUNELEtBQUc7MEJBQUVMLE9BQU8sQ0FBQ08sT0FBTzs7Ozs7b0JBQU87MEJBQzVCLDhEQUFDRixLQUFHOzBCQUFFTCxPQUFPLENBQUNRLElBQUk7Ozs7O29CQUFPOzBCQUN6Qiw4REFBQ3BCLGtEQUFJO2dCQUFDcUIsSUFBSSxFQUFDLGFBQWE7MEJBQ3RCLDRFQUFDQyxRQUFNOzhCQUFDLE1BQUk7Ozs7O3dCQUFTOzs7OztvQkFDaEI7MEJBQ1AsOERBQUNBLFFBQU07Z0JBQUNDLE9BQU8sRUFBRTsyQkFBTVQsY0FBYyxDQUFDRixPQUFPLENBQUNQLEVBQUUsQ0FBQztpQkFBQTswQkFBRSxRQUFNOzs7OztvQkFBUzs7b0JBQ2pFLENBQ0g7Q0FDSDtHQXpCUUosZUFBZTs7UUFDUEwsa0RBQVM7UUFJQUMsa0RBQWM7UUFJbEJDLHFEQUFpQjs7O0FBVDlCRyxLQUFBQSxlQUFlO0FBMkJ4QiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0RldGFpbGVkUG9zdC9baWRdLmpzPzljYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSwgdXNlU2V0UmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgeyBQb3N0TGlzdFN0YXRlIH0gZnJvbSAnLi4vLi4vc3JjL3JlY29pbC9yZWNvaWwnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gRGV0YWlsQ29udGFpbmVyKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG5hdmlnYXRlSG9tZSA9ICgpID0+IHJvdXRlci5wdXNoKCcvTWFpblBhZ2UnKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgbnVtYmVyaW5nID0gTnVtYmVyKGlkKTtcclxuICBjb25zdCBjdXJyZW50UG9zdExpc3QgPSB1c2VSZWNvaWxWYWx1ZShQb3N0TGlzdFN0YXRlKTtcclxuXHJcbiAgY29uc3QgW3Bvc3RPYmpdID0gY3VycmVudFBvc3RMaXN0LmZpbHRlcigocG9zdCkgPT4gcG9zdC5pZCA9PT0gbnVtYmVyaW5nKTsgLy9pZOulvCDsnbTsmqntlbTshJwgcG9zdCBmaWx0ZXJcclxuXHJcbiAgY29uc3Qgc2V0UG9zdExpc3QgPSB1c2VTZXRSZWNvaWxTdGF0ZShQb3N0TGlzdFN0YXRlKTtcclxuICBjb25zdCBvbkhhbmRsZURlbGV0ZSA9IChwb3N0SWQpID0+IHtcclxuICAgIG5hdmlnYXRlSG9tZSgpO1xyXG4gICAgc2V0UG9zdExpc3QoY3VycmVudFBvc3RMaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gcG9zdElkKSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj57cG9zdE9iai50aXRsZX08L2Rpdj5cclxuICAgICAgPGRpdj57cG9zdE9iai5jb250ZW50fTwvZGl2PlxyXG4gICAgICA8ZGl2Pntwb3N0T2JqLmRhdGV9PC9kaXY+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvRWRpdG9yUGFnZVwiPlxyXG4gICAgICAgIDxidXR0b24+RWRpdDwvYnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25IYW5kbGVEZWxldGUocG9zdE9iai5pZCl9PlJlbW92ZTwvYnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsQ29udGFpbmVyO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlUmVjb2lsVmFsdWUiLCJ1c2VTZXRSZWNvaWxTdGF0ZSIsIlBvc3RMaXN0U3RhdGUiLCJMaW5rIiwiRGV0YWlsQ29udGFpbmVyIiwicm91dGVyIiwibmF2aWdhdGVIb21lIiwicHVzaCIsImlkIiwicXVlcnkiLCJudW1iZXJpbmciLCJOdW1iZXIiLCJjdXJyZW50UG9zdExpc3QiLCJmaWx0ZXIiLCJwb3N0IiwicG9zdE9iaiIsInNldFBvc3RMaXN0Iiwib25IYW5kbGVEZWxldGUiLCJwb3N0SWQiLCJpdGVtIiwiZGl2IiwidGl0bGUiLCJjb250ZW50IiwiZGF0ZSIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/DetailedPost/[id].js\n");

/***/ })

});