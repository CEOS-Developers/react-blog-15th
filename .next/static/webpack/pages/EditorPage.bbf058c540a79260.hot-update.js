"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/EditorPage",{

/***/ "./pages/EditorPage.js":
/*!*****************************!*\
  !*** ./pages/EditorPage.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_hooks_getInputDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/hooks/getInputDate */ \"./src/hooks/getInputDate.js\");\n/* harmony import */ var _src_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/hooks/useInput */ \"./src/hooks/useInput.js\");\n/* harmony import */ var _src_data_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/data/data.json */ \"./src/data/data.json\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    \\nwidth : 1000px;\\nmargin 0 auto;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 30px;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 10px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 15px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 15px;\\n  border-bottom: 1px solid grey;\\n  padding: 5px;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 15px;\\n  border-bottom: 1px solid grey;\\n  padding: 5px;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\n\n//메인 화면에서 글쓰기 버튼을 클릭하면 새로 작성->확인 클릭시 디테일 화면에 매핑됨\n//디테일 페이지에서 클릭하면 기존에 작성된 내용을 에디터 페이지로 불러오기+삭제\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction EditorPage() {\n    _s();\n    var ref = (0,_src_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), inputText = ref.inputText, onInputChange = ref.onInputChange, reset = ref.reset;\n    /*\r\n  {\r\n    title: '',\r\n    content: '',\r\n    date: '',\r\n    milisec: '',\r\n  }, 나중에 타입으로 지정*/ var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_src_data_data_json__WEBPACK_IMPORTED_MODULE_4__), postList1 = ref1[0], setPostList = ref1[1];\n    var handleNewPost = function(e) {\n        e.preventDefault();\n        if (inputText) {\n            var post = {\n                id: postList1.length,\n                title: inputText.title,\n                content: inputText.content,\n                date: (0,_src_hooks_getInputDate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n                milisec: Date.now().toString()\n            };\n            setPostList(function(postList) {\n                return [\n                    post\n                ].concat(_toConsumableArray(postList));\n            });\n            console.log(postLi);\n            reset();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                    children: \"\\uBE14\\uB85C\\uADF8 \\uAE00\\uC4F0\\uAE30\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                            type: \"text\",\n                            name: \"title\",\n                            value: inputText.title,\n                            onChange: onInputChange,\n                            placeholder: \"\\uC81C\\uBAA9\",\n                            spellCheck: \"false\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                            type: \"text\",\n                            name: \"content\",\n                            value: inputText.content,\n                            onChange: onInputChange,\n                            placeholder: \"\\uBCF8\\uBB38\",\n                            spellCheck: \"false\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostingButton, {\n                            onClick: handleNewPost,\n                            children: \"\\uD3EC\\uC2A4\\uD2B8 \\uB4F1\\uB85D\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(EditorPage, \"uCe/ecXceTzW1u62yht/rcWK/sQ=\", false, function() {\n    return [\n        _src_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = EditorPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditorPage);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c1 = Container;\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].header(_templateObject1());\n_c2 = Header;\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].form(_templateObject2());\n_c3 = Form;\nvar PostingButton = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].button(_templateObject3());\n_c4 = PostingButton;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].input(_templateObject4());\n_c5 = Title;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].input(_templateObject5());\n_c6 = Content;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"EditorPage\");\n$RefreshReg$(_c1, \"Container\");\n$RefreshReg$(_c2, \"Header\");\n$RefreshReg$(_c3, \"Form\");\n$RefreshReg$(_c4, \"PostingButton\");\n$RefreshReg$(_c5, \"Title\");\n$RefreshReg$(_c6, \"Content\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9FZGl0b3JQYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFIQTtBQUNBO0FBRWlDO0FBQ007QUFDYztBQUNSO0FBQ0o7O0FBRXpDLFNBQVNLLFVBQVUsR0FBRzs7SUFDcEIsSUFBNENGLEdBQVUsR0FBVkEsK0RBQVEsRUFBRSxFQUE5Q0csU0FBUyxHQUEyQkgsR0FBVSxDQUE5Q0csU0FBUyxFQUFFQyxhQUFhLEdBQVlKLEdBQVUsQ0FBbkNJLGFBQWEsRUFBRUMsS0FBSyxHQUFLTCxHQUFVLENBQXBCSyxLQUFLO0lBQ3ZDO0lBU0E7UUFDRUksQ0FBQyxDQUFDQztRQUVGLElBQUlQO1lBQ0Y7Z0JBQ0VTO2dCQUNBRSxLQUFLLEVBQUVYLE9BQUFBLCtDQUFlO2dCQUN0QlksT0FBTyxFQUFFWixTQUFTLENBQUNZO2dCQUNuQkMsSUFBSSxFQUFFakI7Z0JBQ05rQixPQUFPO2FBQ1I7WUFFRFYsV0FBVyxDQUFDRCxTQUFBQTt1QkFBWTtvQkFBQ0ssSUFBSTtpQkFBYSxDQUFsQix1RUFBTTthQUFZLENBQUMsQ0FBQztZQUM1Q1U7WUFDQWhCLEtBQUssRUFBRSxDQUFDO1NBQ1Q7S0FDRjtJQUVELHFCQUNFOzs7Ozs7Ozs7d0JBRXdDOzhCQUN4QixRQUFYcUIsSUFBSTs7c0NBQ0gsUUFBQ0MsS0FBSzs0QkFDSkMsSUFBSSxFQUFDOzRCQUNMQyxJQUFJLEVBQUM7OzRCQUVMRSxFQUFBQSw2REFBUSxDQUFFM0I7NEJBQ1Y0Qjs0QkFDSUMsVUFBTSw2REFBQyxFQUFPOzs7OztnQ0FDbEI7c0NBQ0YsUUFBQ0M7NEJBQ0NOLElBQUksRUFBQyxNQUFNOzRCQUNYQyxJQUFJLEVBQUMsU0FBUzs0QkFDZEMsS0FBSyxFQUFFM0I7NEJBQ1A0QixRQUFRLEVBQUUzQjs0QkFDVjRCOzRCQUNJQyxVQUFNLDZEQUFDLEVBQU87Ozs7O2dDQUNsQjtzQ0FDRixRQUFDRTs0QkFBY0MsT0FBTyxFQUFFNUI7c0NBQWUsaUNBQU07Ozs7O2dDQUFnQjs7Ozs7O3dCQUN4RDs7Ozs7O2dCQUNHOztDQUdqQjtHQXZEUU4sVUFBVTs7UUFDMkJGLFFBQVE7OztBQUQ3Q0U7QUF5RFQsZUFBZUEsVUFBVSxDQUFDO0FBRTFCLElBQU1zQjtBQUFBQSxNQUFBQSxFQUFBQSwyREFBUztBQUtmLElBQU1DO0FBQUFBO0FBSU4sSUFBTUMsSUFBSSxHQUFHNUI7QUFBUDRCLCtEQUFJO0FBR1YsSUFBTVMsWUFBQUEsNkRBQXNCLENBQUNLLE1BQU07QUFBN0JMLE1BQUFBO0FBR04sSUFBTVIsS0FBSyxHQUFHN0IsQ0FBQUEsZ0VBQVksa0JBSXpCO0FBSks2QixNQUFBQSxLQUFLO0FBS1gsSUFBTU8sT0FBTyw4REFBVU8sSUFBSztBQUF0QlAsTUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRWRpdG9yUGFnZS5qcz9mZGFiIl0sInNvdXJjZXNDb250ZW50IjpbIi8v66mU7J24IO2ZlOuptOyXkOyEnCDquIDsk7DquLAg67KE7Yq87J2EIO2BtOumre2VmOuptCDsg4jroZwg7J6R7ISxLT7tmZXsnbgg7YG066at7IucIOuUlO2FjOydvCDtmZTrqbTsl5Ag66ek7ZWR65CoXHJcbi8v65SU7YWM7J28IO2OmOydtOyngOyXkOyEnCDtgbTrpq3tlZjrqbQg6riw7KG07JeQIOyekeyEseuQnCDrgrTsmqnsnYQg7JeQ65SU7YSwIO2OmOydtOyngOuhnCDrtojrn6zsmKTquLAr7IKt7KCcXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBnZXRJbnB1dERhdGUgZnJvbSAnLi4vc3JjL2hvb2tzL2dldElucHV0RGF0ZSc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9zcmMvaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9zcmMvZGF0YS9kYXRhLmpzb24nO1xyXG5cclxuZnVuY3Rpb24gRWRpdG9yUGFnZSgpIHtcclxuICBjb25zdCB7IGlucHV0VGV4dCwgb25JbnB1dENoYW5nZSwgcmVzZXQgfSA9IHVzZUlucHV0KCk7XHJcbiAgLypcclxuICB7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb250ZW50OiAnJyxcclxuICAgIGRhdGU6ICcnLFxyXG4gICAgbWlsaXNlYzogJycsXHJcbiAgfSwg64KY7KSR7JeQIO2DgOyeheycvOuhnCDsp4DsoJUqL1xyXG4gIGNvbnN0IFtwb3N0TGlzdCwgc2V0UG9zdExpc3RdID0gdXNlU3RhdGUoZGF0YSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5ld1Bvc3QgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChpbnB1dFRleHQpIHtcclxuICAgICAgY29uc3QgcG9zdCA9IHtcclxuICAgICAgICBpZDogcG9zdExpc3QubGVuZ3RoLFxyXG4gICAgICAgIHRpdGxlOiBpbnB1dFRleHQudGl0bGUsXHJcbiAgICAgICAgY29udGVudDogaW5wdXRUZXh0LmNvbnRlbnQsXHJcbiAgICAgICAgZGF0ZTogZ2V0SW5wdXREYXRlKCksXHJcbiAgICAgICAgbWlsaXNlYzogRGF0ZS5ub3coKS50b1N0cmluZygpLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgc2V0UG9zdExpc3QocG9zdExpc3QgPT4gW3Bvc3QsLi4ucG9zdExpc3RdKTtcclxuICAgICAgY29uc29sZS5sb2cocG9zdExpKTtcclxuICAgICAgcmVzZXQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZGVyPuu4lOuhnOq3uCDquIDsk7DquLA8L0hlYWRlcj5cclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFRleHQudGl0bGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuygnOuqqVwiXHJcbiAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPENvbnRlbnRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFRleHQuY29udGVudH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67O466y4XCJcclxuICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8UG9zdGluZ0J1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXdQb3N0fT7tj6zsiqTtirgg65Ox66GdPC9Qb3N0aW5nQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JQYWdlO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIFxyXG53aWR0aCA6IDEwMDBweDtcclxubWFyZ2luIDAgYXV0bztcclxuYDtcclxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBmb250LXNpemU6IDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgcGFkZGluZzogMTBweDtcclxuYDtcclxuY29uc3QgUG9zdGluZ0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG5gO1xyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5pbnB1dGBcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG5gO1xyXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmlucHV0YFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlZCIsImdldElucHV0RGF0ZSIsInVzZUlucHV0IiwiZGF0YSIsIkVkaXRvclBhZ2UiLCJpbnB1dFRleHQiLCJvbklucHV0Q2hhbmdlIiwicmVzZXQiLCJwb3N0TGlzdCIsInNldFBvc3RMaXN0IiwiaGFuZGxlTmV3UG9zdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJpZCIsImxlbmd0aCIsInRpdGxlIiwiY29udGVudCIsImRhdGUiLCJtaWxpc2VjIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiY29uc29sZSIsImxvZyIsInBvc3RMaSIsIkNvbnRhaW5lciIsIkhlYWRlciIsIkZvcm0iLCJUaXRsZSIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwic3BlbGxDaGVjayIsIkNvbnRlbnQiLCJQb3N0aW5nQnV0dG9uIiwib25DbGljayIsImRpdiIsImhlYWRlciIsImZvcm0iLCJidXR0b24iLCJpbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/EditorPage.js\n");

/***/ })

});