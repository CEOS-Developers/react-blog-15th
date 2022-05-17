"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/EditorPage.js":
/*!*****************************!*\
  !*** ./pages/EditorPage.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_hooks_getInputDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/hooks/getInputDate */ \"./src/hooks/getInputDate.js\");\n/* harmony import */ var _src_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/hooks/useInput */ \"./src/hooks/useInput.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    \\nwidth : 1000px;\\nmargin 0 auto;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 30px;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 10px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 15px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 15px;\\n  border-bottom: 1px solid grey;\\n  padding: 5px;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 15px;\\n  border-bottom: 1px solid grey;\\n  padding: 5px;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\n\n//메인 화면에서 글쓰기 버튼을 클릭하면 새로 작성->확인 클릭시 디테일 화면에 매핑됨\n//디테일 페이지에서 클릭하면 기존에 작성된 내용을 에디터 페이지로 불러오기+삭제\n\n\n\n\nvar _s = $RefreshSig$();\nfunction EditorPage() {\n    _s();\n    var ref = (0,_src_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), inputText = ref.inputText, onInputChange = ref.onInputChange, reset = ref.reset;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 0,\n            title: \"\",\n            content: \"\",\n            date: \"\",\n            milisec: \"\"\n        }, \n    ]), postList = ref1[0], setPostList = ref1[1];\n    var handleNewPost = function(e) {\n        e.preventDefault();\n        if (inputText) {\n            var post = {\n                title: inputText.title,\n                content: inputText.content,\n                date: (0,_src_hooks_getInputDate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n                milisec: Date.now().toString()\n            };\n            setPostList(_toConsumableArray(postList).concat([\n                post\n            ]));\n            console.log(postList);\n            reset();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                    children: \"\\uBE14\\uB85C\\uADF8 \\uAE00\\uC4F0\\uAE30\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                            type: \"text\",\n                            name: \"title\",\n                            value: inputText.title,\n                            onChange: onInputChange,\n                            placeholder: \"\\uC81C\\uBAA9\",\n                            spellCheck: \"false\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                            type: \"text\",\n                            name: \"content\",\n                            value: inputText.content,\n                            onChange: onInputChange,\n                            placeholder: \"\\uBCF8\\uBB38\",\n                            spellCheck: \"false\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostingButton, {\n                            onClick: handleNewPost,\n                            children: \"\\uD3EC\\uC2A4\\uD2B8 \\uC218\\uC815\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(EditorPage, \"8KXK7NshJ+fZVmwsd70eb9/c1+E=\", false, function() {\n    return [\n        _src_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = EditorPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditorPage);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c1 = Container;\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].header(_templateObject1());\n_c2 = Header;\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].form(_templateObject2());\n_c3 = Form;\nvar PostingButton = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].button(_templateObject3());\n_c4 = PostingButton;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].input(_templateObject4());\n_c5 = Title;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].textarea(_templateObject5());\n_c6 = Content;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"EditorPage\");\n$RefreshReg$(_c1, \"Container\");\n$RefreshReg$(_c2, \"Header\");\n$RefreshReg$(_c3, \"Form\");\n$RefreshReg$(_c4, \"PostingButton\");\n$RefreshReg$(_c5, \"Title\");\n$RefreshReg$(_c6, \"Content\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUdsQyxnRUFBYSxvQkFFbEM7QUFGS2tDLE1BQUFBLGFBQWE7QUFHbkIsSUFBTVIsS0FBSyxHQUFHMUIsK0RBQVksb0JBSXpCO0FBSkswQixNQUFBQSxLQUFLO0FBS1gsSUFBTU8sT0FBTyxHQUFHakMsa0VBQWUsb0JBSTlCO0FBSktpQyxNQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0VkaXRvclBhZ2UuanM/ZmRhYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL+uplOyduCDtmZTrqbTsl5DshJwg6riA7JOw6riwIOuyhO2KvOydhCDtgbTrpq3tlZjrqbQg7IOI66GcIOyekeyEsS0+7ZmV7J24IO2BtOumreyLnCDrlJTthYzsnbwg7ZmU66m07JeQIOunpO2VkeuQqFxyXG4vL+uUlO2FjOydvCDtjpjsnbTsp4Dsl5DshJwg7YG066at7ZWY66m0IOq4sOyhtOyXkCDsnpHshLHrkJwg64K07Jqp7J2EIOyXkOuUlO2EsCDtjpjsnbTsp4DroZwg67aI65+s7Jik6riwK+yCreygnFxyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgZ2V0SW5wdXREYXRlIGZyb20gJy4uL3NyYy9ob29rcy9nZXRJbnB1dERhdGUnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vc3JjL2hvb2tzL3VzZUlucHV0JztcclxuXHJcbmZ1bmN0aW9uIEVkaXRvclBhZ2UoKSB7XHJcbiAgY29uc3QgeyBpbnB1dFRleHQsIG9uSW5wdXRDaGFuZ2UsIHJlc2V0IH0gPSB1c2VJbnB1dCgpO1xyXG5cclxuICBjb25zdCBbcG9zdExpc3QsIHNldFBvc3RMaXN0XSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgaWQ6MCxcclxuICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICBjb250ZW50OiAnJyxcclxuICAgICAgZGF0ZTogJycsXHJcbiAgICAgIG1pbGlzZWM6ICcnLFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV3UG9zdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKGlucHV0VGV4dCkge1xyXG4gICAgICBjb25zdCBwb3N0ID0ge1xyXG4gICAgICAgIHRpdGxlOiBpbnB1dFRleHQudGl0bGUsXHJcbiAgICAgICAgY29udGVudDogaW5wdXRUZXh0LmNvbnRlbnQsXHJcbiAgICAgICAgZGF0ZTogZ2V0SW5wdXREYXRlKCksXHJcbiAgICAgICAgbWlsaXNlYzogRGF0ZS5ub3coKS50b1N0cmluZygpLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgc2V0UG9zdExpc3QoWy4uLnBvc3RMaXN0LCBwb3N0XSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHBvc3RMaXN0KTtcclxuICAgICAgcmVzZXQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZGVyPuu4lOuhnOq3uCDquIDsk7DquLA8L0hlYWRlcj5cclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFRleHQudGl0bGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuygnOuqqVwiXHJcbiAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPENvbnRlbnRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFRleHQuY29udGVudH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67O466y4XCJcclxuICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8UG9zdGluZ0J1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXdQb3N0fT7tj6zsiqTtirgg7IiY7KCVPC9Qb3N0aW5nQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JQYWdlO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIFxyXG53aWR0aCA6IDEwMDBweDtcclxubWFyZ2luIDAgYXV0bztcclxuYDtcclxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBmb250LXNpemU6IDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgcGFkZGluZzogMTBweDtcclxuYDtcclxuY29uc3QgUG9zdGluZ0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG5gO1xyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5pbnB1dGBcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG5gO1xyXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlZCIsImdldElucHV0RGF0ZSIsInVzZUlucHV0IiwiRWRpdG9yUGFnZSIsImlucHV0VGV4dCIsIm9uSW5wdXRDaGFuZ2UiLCJyZXNldCIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiZGF0ZSIsIm1pbGlzZWMiLCJwb3N0TGlzdCIsInNldFBvc3RMaXN0IiwiaGFuZGxlTmV3UG9zdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiQ29udGFpbmVyIiwiSGVhZGVyIiwiRm9ybSIsIlRpdGxlIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzcGVsbENoZWNrIiwiQ29udGVudCIsIlBvc3RpbmdCdXR0b24iLCJvbkNsaWNrIiwiZGl2IiwiaGVhZGVyIiwiZm9ybSIsImJ1dHRvbiIsImlucHV0IiwidGV4dGFyZWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/EditorPage.js\n");

/***/ })

});