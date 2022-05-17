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

/***/ "./src/components/DetailedPost.js":
/*!****************************************!*\
  !*** ./src/components/DetailedPost.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data.json */ \"./src/data/data.json\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    \\n    font-size:15px;\\n    border-bottom:1px solid grey;\\n    padding:5px;\\n    \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n//상세화면에서 보이는 포스트\n\n\n\nvar DetailedPost = function(id) {\n    var ref = _slicedToArray(_data_data_json__WEBPACK_IMPORTED_MODULE_2__.filter(function(post) {\n        return post.id === id;\n    }), 1), postObj = ref[0]; //id를 이용해서 post filter\n    var title = postObj.title; //각 내용들 변수에 저장\n    var content = postObj.content;\n    var date = postObj.date;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostWrapper, {\n        children: [\n            title,\n            \" \",\n            date,\n            \" \",\n            content\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedPost.js\",\n        lineNumber: 16,\n        columnNumber: 7\n    }, _this);\n};\n_c = DetailedPost;\nvar PostWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section(_templateObject());\n_c1 = PostWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailedPost);\nvar _c, _c1;\n$RefreshReg$(_c, \"DetailedPost\");\n$RefreshReg$(_c1, \"PostWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZXRhaWxlZFBvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRkE7QUFFdUM7QUFDYjtBQUNVO0FBRXBDLElBQU1HLFlBQVksR0FBRyxTQUFDQyxFQUFFLEVBQUs7SUFDM0IsSUFBa0JGLEdBQXFDLGtCQUFyQ0EsbURBQVcsQ0FBQyxTQUFDSSxJQUFJO2VBQUtBLElBQUksQ0FBQ0YsRUFBRSxLQUFLQSxFQUFFO0tBQUEsQ0FBQyxNQUFoREcsT0FBTyxHQUFJTCxHQUFxQyxHQUF6QyxFQUEyQztJQUU3QyxJQUFKTSxLQUFLLEdBQUdELE9BQU8sQ0FBQ0MsS0FBSyxFQUFFO0lBQzdCLElBQU1DLE9BQU8sR0FBR0YsT0FBTyxDQUFDRSxPQUFPO0lBQy9CLElBQU1DLElBQUksR0FBR0gsT0FBTyxDQUFDRyxJQUFJO0lBRzNCLHFCQUNJLDhEQUFDQyxXQUFXOztZQUNYSCxLQUFLO1lBQUMsR0FBQztZQUFDRSxJQUFJO1lBQUMsR0FBQztZQUFDRCxPQUFPOzs7Ozs7YUFDVCxDQUNsQjtDQUNDO0FBYkdOLEtBQUFBLFlBQVk7QUFlbEIsSUFBTVEsV0FBVyxHQUFHWCxpRUFBYyxtQkFLN0I7QUFMQ1csTUFBQUEsV0FBVztBQU1qQiwrREFBZVIsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RldGFpbGVkUG9zdC5qcz80OTg2Il0sInNvdXJjZXNDb250ZW50IjpbIi8v7IOB7IS47ZmU66m07JeQ7IScIOuztOydtOuKlCDtj6zsiqTtirhcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9kYXRhLmpzb24nXHJcblxyXG5jb25zdCBEZXRhaWxlZFBvc3QgPSAoaWQpID0+IHtcclxuICBjb25zdCBbcG9zdE9ial0gPSBkYXRhLmZpbHRlcigocG9zdCkgPT4gcG9zdC5pZCA9PT0gaWQpOyAvL2lk66W8IOydtOyaqe2VtOyEnCBwb3N0IGZpbHRlclxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gcG9zdE9iai50aXRsZTsgLy/qsIEg64K07Jqp65OkIOuzgOyImOyXkCDsoIDsnqVcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBwb3N0T2JqLmNvbnRlbnQ7XHJcbiAgICBjb25zdCBkYXRlID0gcG9zdE9iai5kYXRlO1xyXG4gICBcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgICA8UG9zdFdyYXBwZXI+XHJcbiAgICAgIHt0aXRsZX0ge2RhdGV9IHtjb250ZW50fVxyXG4gICAgICA8L1Bvc3RXcmFwcGVyPlxyXG4pO1xyXG4gIH1cclxuXHJcbmNvbnN0IFBvc3RXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgZ3JleTtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYFxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxlZFBvc3Q7Il0sIm5hbWVzIjpbInN0eWxlZCIsIlJlYWN0IiwiZGF0YSIsIkRldGFpbGVkUG9zdCIsImlkIiwiZmlsdGVyIiwicG9zdCIsInBvc3RPYmoiLCJ0aXRsZSIsImNvbnRlbnQiLCJkYXRlIiwiUG9zdFdyYXBwZXIiLCJzZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DetailedPost.js\n");

/***/ })

});