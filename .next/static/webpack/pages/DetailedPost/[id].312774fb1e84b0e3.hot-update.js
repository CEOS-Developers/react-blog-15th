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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/GlobalStyle */ \"./src/GlobalStyle.js\");\n/* harmony import */ var _src_DetailPostStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/DetailPostStyle */ \"./src/DetailPostStyle.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DetailContainer() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var navigateHome = function() {\n        return router.push(\"/MainPage\");\n    };\n    var id = router.query.id;\n    var numbering = Number(id);\n    var currentPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__.PostListState);\n    var ref = _slicedToArray(currentPostList.filter(function(post) {\n        return post.id === numbering;\n    }), 1), postObj = ref[0]; //id를 이용해서 post filter\n    var setPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__.PostListState);\n    var onHandleDelete = function() {\n        setPostList(function(item1) {\n            return item1.filter(function(item) {\n                return item.id !== postObj.id;\n            });\n        });\n        navigateHome();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Header, {\n                    children: \"\\uB098\\uC758 \\uBE14\\uB85C\\uADF8\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_DetailPostStyle__WEBPACK_IMPORTED_MODULE_6__.PostTitle, {\n                    children: postObj === null || postObj === void 0 ? void 0 : postObj.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_DetailPostStyle__WEBPACK_IMPORTED_MODULE_6__.PostContent, {\n                    children: postObj === null || postObj === void 0 ? void 0 : postObj.content\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_DetailPostStyle__WEBPACK_IMPORTED_MODULE_6__.PostDate, {\n                    children: postObj === null || postObj === void 0 ? void 0 : postObj.date\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/ModifiedPost/[id]\",\n                    as: \"/ModifiedPost/\".concat(numbering),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"\\uC218\\uC815\\uD558\\uAE30\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: onHandleDelete,\n                    children: \"Delete\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(DetailContainer, \"8XUFJTHjNaCDHaQ/nL7MiGXRtzY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState\n    ];\n});\n_c = DetailContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailContainer);\nvar _c;\n$RefreshReg$(_c, \"DetailContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EZXRhaWxlZFBvc3QvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNrQjtBQUNGO0FBQzNCO0FBQzBCO0FBQ2tCOztBQUV6RSxTQUFTVSxlQUFlLEdBQUc7O0lBQ3pCLElBQU1DLE1BQU0sR0FBR1gsc0RBQVMsRUFBRTtJQUMxQixJQUFNWSxZQUFZLEdBQUc7ZUFBTUQsTUFBTSxDQUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQUE7SUFDbkQsSUFBTSxFQUFJLEdBQUtGLE1BQU0sQ0FBQ0ksS0FBSyxDQUFuQkQsRUFBRTtJQUNWLElBQU1FLFNBQVMsR0FBR0MsTUFBTSxDQUFDSCxFQUFFLENBQUM7SUFDNUIsSUFBTUksZUFBZSxHQUFHakIsc0RBQWMsQ0FBQ0UsNkRBQWEsQ0FBQztJQUVyRCxJQUFrQmUsR0FBdUQsa0JBQXZEQSxlQUFlLENBQUNDLE1BQU0sQ0FBQyxTQUFDQyxJQUFJO2VBQUtBLElBQUksQ0FBQ04sRUFBRSxLQUFLRSxTQUFTO0tBQUEsQ0FBQyxNQUFsRUssT0FBTyxHQUFJSCxHQUF1RCxHQUEzRCxFQUE2RDtJQUVqRSxJQUFKSSxXQUFXLEdBQUdwQix5REFBaUIsQ0FBQ0MsNkRBQWEsQ0FBQztJQUVwRCxJQUFNb0IsY0FBYyxHQUFHLFdBQU07UUFDM0JELFdBQVcsQ0FBQyxTQUFDRSxLQUFJO21CQUFLQSxLQUFJLENBQUNMLE1BQU0sQ0FBQyxTQUFDSyxJQUFJO3VCQUFLQSxJQUFJLENBQUNWLEVBQUUsS0FBS08sT0FBTyxDQUFDUCxFQUFFO2FBQUEsQ0FBQztTQUFBLENBQUMsQ0FBQztRQUNyRUYsWUFBWSxFQUFFLENBQUM7S0FDaEI7SUFDRCxxQkFDRTtrQkFDRSw0RUFBQ1AsdURBQVM7OzhCQUNSLDhEQUFDQyxvREFBTTs4QkFBQyxpQ0FBTTs7Ozs7d0JBQW1COzhCQUN6Qiw4REFBVEcsMkRBQVM7OEJBQUVZLE9BQU8sYUFBUEEsT0FBTyxXQUFPLEdBQWRBLEtBQUFBLENBQWMsR0FBZEEsT0FBTyxDQUFFSSxLQUFLOzs7Ozt3QkFBYTs4QkFDdkMsOERBQUNsQiw2REFBVzs4QkFBRWMsT0FBTyxhQUFQQSxPQUFPLFdBQVMsR0FBaEJBLEtBQUFBLENBQWdCLEdBQWhCQSxPQUFPLENBQUVLLE9BQU87Ozs7O3dCQUFlOzhCQUM3Qyw4REFBQ2xCLDBEQUFROzhCQUFFYSxPQUFPLGFBQVBBLE9BQU8sV0FBTSxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLE9BQU8sQ0FBRU0sSUFBSTs7Ozs7d0JBQVk7OEJBRXBDLDhEQUFDdkIsa0RBQUk7b0JBQ0x3QixJQUFJLEVBQUUsb0JBQW9CO29CQUMxQkMsRUFBRSxFQUFFLGdCQUFlLENBQVksT0FBVmIsU0FBUyxDQUFFOzhCQUM5Qiw0RUFBQ2MsUUFBTTtrQ0FBQywwQkFBSTs7Ozs7NEJBQVM7Ozs7O3dCQUNoQjs4QkFFUCw4REFBQ0EsUUFBTTtvQkFBQ0MsT0FBTyxFQUFFUixjQUFjOzhCQUFFLFFBQU07Ozs7O3dCQUFTOzs7Ozs7Z0JBQ3BDO3FCQUNYLENBQ0g7Q0FDSDtHQWpDUWIsZUFBZTs7UUFDUFYsa0RBQVM7UUFJQUMsa0RBQWM7UUFJbEJDLHFEQUFpQjs7O0FBVDlCUSxLQUFBQSxlQUFlO0FBb0N4QiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0RldGFpbGVkUG9zdC9baWRdLmpzPzljYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSwgdXNlU2V0UmVjb2lsU3RhdGV9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCB7IFBvc3RMaXN0U3RhdGUgfSBmcm9tICcuLi8uLi9zcmMvcmVjb2lsL3JlY29pbCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7Q29udGFpbmVyLEhlYWRlcn0gZnJvbSAnLi4vLi4vc3JjL0dsb2JhbFN0eWxlJztcclxuaW1wb3J0IHtQb3N0Q29udGVudCxQb3N0RGF0ZSxQb3N0VGl0bGV9IGZyb20gJy4uLy4uL3NyYy9EZXRhaWxQb3N0U3R5bGUnO1xyXG5cclxuZnVuY3Rpb24gRGV0YWlsQ29udGFpbmVyKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG5hdmlnYXRlSG9tZSA9ICgpID0+IHJvdXRlci5wdXNoKCcvTWFpblBhZ2UnKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgbnVtYmVyaW5nID0gTnVtYmVyKGlkKTtcclxuICBjb25zdCBjdXJyZW50UG9zdExpc3QgPSB1c2VSZWNvaWxWYWx1ZShQb3N0TGlzdFN0YXRlKTtcclxuXHJcbiAgY29uc3QgW3Bvc3RPYmpdID0gY3VycmVudFBvc3RMaXN0LmZpbHRlcigocG9zdCkgPT4gcG9zdC5pZCA9PT0gbnVtYmVyaW5nKTsgLy9pZOulvCDsnbTsmqntlbTshJwgcG9zdCBmaWx0ZXJcclxuXHJcbiAgY29uc3Qgc2V0UG9zdExpc3QgPSB1c2VTZXRSZWNvaWxTdGF0ZShQb3N0TGlzdFN0YXRlKTtcclxuICBcclxuICBjb25zdCBvbkhhbmRsZURlbGV0ZSA9ICgpID0+IHtcclxuICAgIHNldFBvc3RMaXN0KChpdGVtKSA9PiBpdGVtLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gcG9zdE9iai5pZCkpO1xyXG4gICAgbmF2aWdhdGVIb21lKCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZGVyPuuCmOydmCDruJTroZzqt7g8L0hlYWRlcj5cclxuICAgICAgPFBvc3RUaXRsZT57cG9zdE9iaj8udGl0bGV9PC9Qb3N0VGl0bGU+XHJcbiAgICAgIDxQb3N0Q29udGVudD57cG9zdE9iaj8uY29udGVudH08L1Bvc3RDb250ZW50PlxyXG4gICAgICA8UG9zdERhdGU+e3Bvc3RPYmo/LmRhdGV9PC9Qb3N0RGF0ZT5cclxuICAgICAgXHJcbiAgICAgIDxMaW5rIFxyXG4gICAgICBocmVmPXsnL01vZGlmaWVkUG9zdC9baWRdJ31cclxuICAgICAgYXM9e2AvTW9kaWZpZWRQb3N0LyR7bnVtYmVyaW5nfWB9PlxyXG4gICAgICAgIDxidXR0b24+7IiY7KCV7ZWY6riwPC9idXR0b24+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17b25IYW5kbGVEZWxldGV9PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxDb250YWluZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VSZWNvaWxWYWx1ZSIsInVzZVNldFJlY29pbFN0YXRlIiwiUG9zdExpc3RTdGF0ZSIsIkxpbmsiLCJDb250YWluZXIiLCJIZWFkZXIiLCJQb3N0Q29udGVudCIsIlBvc3REYXRlIiwiUG9zdFRpdGxlIiwiRGV0YWlsQ29udGFpbmVyIiwicm91dGVyIiwibmF2aWdhdGVIb21lIiwicHVzaCIsImlkIiwicXVlcnkiLCJudW1iZXJpbmciLCJOdW1iZXIiLCJjdXJyZW50UG9zdExpc3QiLCJmaWx0ZXIiLCJwb3N0IiwicG9zdE9iaiIsInNldFBvc3RMaXN0Iiwib25IYW5kbGVEZWxldGUiLCJpdGVtIiwidGl0bGUiLCJjb250ZW50IiwiZGF0ZSIsImhyZWYiLCJhcyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/DetailedPost/[id].js\n");

/***/ }),

/***/ "./src/DetailPostStyle.js":
/*!********************************!*\
  !*** ./src/DetailPostStyle.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostContent\": function() { return /* binding */ PostContent; },\n/* harmony export */   \"PostDate\": function() { return /* binding */ PostDate; },\n/* harmony export */   \"PostTitle\": function() { return /* binding */ PostTitle; },\n/* harmony export */   \"PostWrapper\": function() { return /* binding */ PostWrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  border-bottom: 1px solid grey;\\n  padding: 5px;\\n  cursor: pointer;\\n\\n  display: flex;\\n  flex-direction: column;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin-top:0.2rem;\\n  font-size: 25px;\\n  font-weight: bold;\\n  flex: 0.3;\\n  border-bottom:1px solid grey\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin-top: 0.5rem;\\n  font-size: 15px;\\n  flex: 0.3;\\n  height:300px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 12px;\\n  flex: 0.3;\\n  color: grey;\\n  margin-top:0.5rem;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\n\nvar PostWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section(_templateObject());\nvar PostTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject1());\nvar PostContent = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\nvar PostDate = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvRGV0YWlsUG9zdFN0eWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFaEMsSUFBTUMsV0FBVyxHQUFHRCxpRUFBYyxtQkFPeEMsQ0FBQztBQUNLLElBQU1HLFNBQVMsR0FBR0gsNkRBQVUsb0JBTWxDLENBQUM7QUFDSyxJQUFNSyxXQUFXLEdBQUdMLDZEQUFVLG9CQUtwQyxDQUFDO0FBQ0ssSUFBTU0sUUFBUSxHQUFHTiw2REFBVSxvQkFLakMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvRGV0YWlsUG9zdFN0eWxlLmpzPzcwNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0V3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFBvc3RUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDowLjJyZW07XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZsZXg6IDAuMztcclxuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBncmV5XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBQb3N0Q29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmbGV4OiAwLjM7XHJcbiAgaGVpZ2h0OjMwMHB4O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgUG9zdERhdGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmbGV4OiAwLjM7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgbWFyZ2luLXRvcDowLjVyZW07XHJcbmA7Il0sIm5hbWVzIjpbInN0eWxlZCIsIlBvc3RXcmFwcGVyIiwic2VjdGlvbiIsIlBvc3RUaXRsZSIsImRpdiIsIlBvc3RDb250ZW50IiwiUG9zdERhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/DetailPostStyle.js\n");

/***/ })

});