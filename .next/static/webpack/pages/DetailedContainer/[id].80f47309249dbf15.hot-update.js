"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/DetailedContainer/[id]",{

/***/ "./pages/DetailedContainer/[id].js":
/*!*****************************************!*\
  !*** ./pages/DetailedContainer/[id].js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_DetailedPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/DetailedPost */ \"./src/components/DetailedPost.js\");\n/* harmony import */ var _src_data_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/data/data.json */ \"./src/data/data.json\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DetailContainer() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    var numbering = Number(id);\n    var ref = _slicedToArray(_src_data_data_json__WEBPACK_IMPORTED_MODULE_3__.filter(function(post) {\n        return post.id === numbering;\n    }), 1), postObj = ref[0]; //id를 이용해서 post filter\n    var title = postObj.title; //각 내용들 변수에 저장\n    var content = postObj.content;\n    var date = postObj.date;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedContainer\\\\[id].js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedContainer\\\\[id].js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: date\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedContainer\\\\[id].js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_DetailedPost__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                numbering: numbering\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedContainer\\\\[id].js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(DetailContainer, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = DetailContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailContainer);\nvar _c;\n$RefreshReg$(_c, \"DetailContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EZXRhaWxlZENvbnRhaW5lci9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDdUI7QUFDakI7O0FBRTVDLFNBQVNHLGVBQWUsR0FBRTs7SUFFdEIsSUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBQzFCLElBQU0sRUFBRyxHQUFJSSxNQUFNLENBQUNFLEtBQUssQ0FBbEJELEVBQUU7SUFDVCxJQUFNRSxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0gsRUFBRSxDQUFDO0lBRTVCLElBQWtCSCxHQUE0QyxrQkFBNUNBLHVEQUFXLENBQUMsU0FBQ1EsSUFBSTtlQUFLQSxJQUFJLENBQUNMLEVBQUUsS0FBS0UsU0FBUztLQUFBLENBQUMsTUFBdkRJLE9BQU8sR0FBSVQsR0FBNEMsR0FBaEQsRUFBa0Q7SUFFdEQsSUFBSlUsS0FBSyxHQUFHRCxPQUFPLENBQUNDLEtBQUssRUFBRTtJQUM3QixJQUFNQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0UsT0FBTztJQUMvQixJQUFNQyxJQUFJLEdBQUdILE9BQU8sQ0FBQ0csSUFBSTtJQUN6QixxQkFDSTs7MEJBQ0EsOERBQUNDLEtBQUc7MEJBQUVILEtBQUs7Ozs7O29CQUFPOzBCQUNsQiw4REFBQ0csS0FBRzswQkFBRUYsT0FBTzs7Ozs7b0JBQU87MEJBQ3BCLDhEQUFDRSxLQUFHOzBCQUFFRCxJQUFJOzs7OztvQkFBTzswQkFDakIsOERBQUNiLG9FQUFZO2dCQUFDTSxTQUFTLEVBQUlBLFNBQVM7Ozs7O29CQUFpQjs7b0JBQ2xELENBQ0w7Q0FDTDtHQW5CUUosZUFBZTs7UUFFTEgsa0RBQVM7OztBQUZuQkcsS0FBQUEsZUFBZTtBQXFCeEIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9EZXRhaWxlZENvbnRhaW5lci9baWRdLmpzP2YzNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IERldGFpbGVkUG9zdCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9EZXRhaWxlZFBvc3QnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9zcmMvZGF0YS9kYXRhLmpzb24nO1xyXG5cclxuZnVuY3Rpb24gRGV0YWlsQ29udGFpbmVyKCl7XHJcbiAgICBcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnN0IG51bWJlcmluZyA9IE51bWJlcihpZCk7XHJcblxyXG4gICAgY29uc3QgW3Bvc3RPYmpdID0gZGF0YS5maWx0ZXIoKHBvc3QpID0+IHBvc3QuaWQgPT09IG51bWJlcmluZyk7IC8vaWTrpbwg7J207Jqp7ZW07IScIHBvc3QgZmlsdGVyXHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBwb3N0T2JqLnRpdGxlOyAvL+qwgSDrgrTsmqnrk6Qg67OA7IiY7JeQIOyggOyepVxyXG4gICAgY29uc3QgY29udGVudCA9IHBvc3RPYmouY29udGVudDtcclxuICAgIGNvbnN0IGRhdGUgPSBwb3N0T2JqLmRhdGU7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2Pnt0aXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2Pntjb250ZW50fTwvZGl2PlxyXG4gICAgICAgIDxkaXY+e2RhdGV9PC9kaXY+XHJcbiAgICAgICAgPERldGFpbGVkUG9zdCBudW1iZXJpbmcgPSB7bnVtYmVyaW5nfT48L0RldGFpbGVkUG9zdD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbENvbnRhaW5lcjsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiRGV0YWlsZWRQb3N0IiwiZGF0YSIsIkRldGFpbENvbnRhaW5lciIsInJvdXRlciIsImlkIiwicXVlcnkiLCJudW1iZXJpbmciLCJOdW1iZXIiLCJmaWx0ZXIiLCJwb3N0IiwicG9zdE9iaiIsInRpdGxlIiwiY29udGVudCIsImRhdGUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/DetailedContainer/[id].js\n");

/***/ })

});