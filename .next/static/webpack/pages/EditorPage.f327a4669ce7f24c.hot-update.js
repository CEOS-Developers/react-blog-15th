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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Content\": function() { return /* binding */ Content; },\n/* harmony export */   \"Form\": function() { return /* binding */ Form; },\n/* harmony export */   \"InputWrapper\": function() { return /* binding */ InputWrapper; },\n/* harmony export */   \"PostingButton\": function() { return /* binding */ PostingButton; },\n/* harmony export */   \"Title\": function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_hooks_getInputDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/hooks/getInputDate */ \"./src/hooks/getInputDate.js\");\n/* harmony import */ var _src_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/hooks/useInput */ \"./src/hooks/useInput.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/GlobalStyle */ \"./src/GlobalStyle.js\");\n/* harmony import */ var _src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/hooks/useNavigateHome */ \"./src/hooks/useNavigateHome.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 10px;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 15px;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 20px;\\n  border-bottom: 1px solid grey;\\n  padding: 5px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 15px;\\n  border-bottom: 1px solid grey;\\n  padding: 5px;\\n  height: 300px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\n\n//메인 화면에서 글쓰기 버튼을 클릭하면 새로 작성->확인 클릭시 디테일 화면에 매핑됨\n//디테일 페이지에서 클릭하면 기존에 작성된 내용을 에디터 페이지로 불러오기+삭제\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction EditorPage(PostId) {\n    _s();\n    var ref = (0,_src_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), inputText = ref.inputText, onInputChange = ref.onInputChange, reset = ref.reset;\n    /*\r\n  {\r\n    title: '',\r\n    content: '',\r\n    date: '',\r\n    milisec: '',\r\n  }, 나중에 타입으로 지정*/ var ref1 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_5__.PostListState), 2), postList1 = ref1[0], setPostList = ref1[1];\n    var handleNewPost = function(e) {\n        e.preventDefault();\n        if (inputText) {\n            var post = {\n                title: inputText.title,\n                content: inputText.content,\n                date: (0,_src_hooks_getInputDate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n                id: Date.now()\n            };\n            setPostList(function(postList) {\n                return _toConsumableArray(postList).concat([\n                    post\n                ]);\n            });\n            console.log(postList1);\n            reset();\n        } else {\n            alert(\"\\uC785\\uB825\\uD558\\uC138\\uC694!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_6__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_6__.Header, {\n                    children: \"\\uBE14\\uB85C\\uADF8 \\uAE00\\uC4F0\\uAE30\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InputWrapper, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                                    type: \"text\",\n                                    name: \"title\",\n                                    value: inputText.title,\n                                    onChange: onInputChange,\n                                    placeholder: \"\\uC81C\\uBAA9\",\n                                    spellCheck: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                                    type: \"text\",\n                                    name: \"content\",\n                                    value: inputText.content,\n                                    onChange: onInputChange,\n                                    placeholder: \"\\uBCF8\\uBB38\",\n                                    spellCheck: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostingButton, {\n                            onClick: handleNewPost,\n                            children: \"\\uD3EC\\uC2A4\\uD2B8 \\uB4F1\\uB85D\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(EditorPage, \"vrDp18JlOGSHSaRZThMTmJ7BV5M=\", false, function() {\n    return [\n        _src_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState\n    ];\n});\n_c = EditorPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditorPage);\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].form(_templateObject());\n_c1 = Form;\nvar PostingButton = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].button(_templateObject1());\n_c2 = PostingButton;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].textarea(_templateObject2());\n_c3 = Title;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].textarea(_templateObject3());\n_c4 = Content;\nvar InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject4());\n_c5 = InputWrapper;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"EditorPage\");\n$RefreshReg$(_c1, \"Form\");\n$RefreshReg$(_c2, \"PostingButton\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Content\");\n$RefreshReg$(_c5, \"InputWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9FZGl0b3JQYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSEE7QUFDQTtBQUVpQztBQUNNO0FBQ2M7QUFDUjtBQUNMO0FBQ2E7QUFDRTtBQUNJOztBQUUzRCxTQUFTUyxVQUFVLENBQUNDLE1BQU0sRUFBRTs7SUFDMUIsSUFBNENQLEdBQVUsR0FBVkEsK0RBQVEsRUFBRSxFQUE5Q1EsU0FBUyxHQUEyQlIsR0FBVSxDQUE5Q1EsU0FBUyxFQUFFQyxhQUFhLEdBQVlULEdBQVUsQ0FBbkNTLGFBQWEsRUFBRUMsS0FBSyxHQUFLVixHQUFVLENBQXBCVSxLQUFLO0lBQ3ZDO0lBUUE7UUFDRUksQ0FBQyxDQUFDQztRQUVGLElBQUlQO1lBQ0Y7Z0JBQ0VTO2dCQUNBQyxPQUFPLEVBQUVWLFNBQVMsQ0FBQ1UsT0FBTztnQkFDMUJDLElBQUksRUFBRXBCLFlBQVksRUFBRTtnQkFDcEJxQixFQUFFLEVBQUVDLElBQUksQ0FBQ0M7YUFDVjtZQUVEVixXQUFXLENBQUM7dUJBQWM7b0JBQWNJLElBQUk7aUJBQUM7YUFBQSxDQUFDLENBQUM7WUFDL0NPO1lBQ0FiLEtBQUssRUFBRSxDQUFDO1NBQ1QsTUFBTTtZQUNMZSxLQUFLLENBQUM7U0FDRztLQUNaO0lBRUQscUJBQ0U7a0JBQ0U7OzhCQUNFLFFBQUNyQixNQUFNOzs7Ozs7d0JBQTZCOzhCQUN4QixRQUFYc0IsSUFBSTs7c0NBQ0gsUUFBQ0MsWUFBWTs7OzsyRkFHVEcsR0FBSSxFQUFDOztvQ0FFTEUsRUFBQUEsNkRBQVEsQ0FBRXZCLGFBQWE7b0NBQ3ZCd0I7b0NBQ0lDLFVBQU0sNkRBQUMsRUFBTzs7Ozs7d0NBQ2xCOzhDQUNGLFFBQUNDO29DQUNDTixJQUFJLEVBQUMsTUFBTTtvQ0FDWEMsSUFBSSxFQUFDLFNBQVM7b0NBQ2RDLEtBQUssRUFBRXZCO29DQUNQd0IsUUFBUSxFQUFFdkI7b0NBQ1Z3QjtvQ0FDSUMsVUFBTSw2REFBQyxFQUFPOzs7Ozt3Q0FDbEI7Ozs7OztnQ0FDVzs7NEJBQ0FHLE9BQU8sRUFBRXhCO3NDQUFlLGlDQUFNOzs7OztnQ0FBZ0I7Ozs7Ozt3QkFDeEQ7Ozs7OztnQkFDRzs7Q0FHakI7R0F6RFFQLFVBQVU7O1FBQzJCTixRQUFRO1FBUXBCQzs7O0FBVHpCSyxLQUFBQSxVQUFVO0FBMkRuQjtBQUVBLE9BQU8sNERBQVU7QUFBSm9CLE1BQUFBLEVBQUFBLGtEQUFJO0FBR2pCO0FBQWFVO0FBR2IsT0FBTyxJQUFNUixLQUFLO0FBQUxBLCtEQUFLO0FBS1gsSUFBTU8sT0FBTyw4REFBVUssT0FBUTtBQUF6QkwsTUFBQUE7QUFNTixJQUFNUixZQUFZLEdBQUc3QixDQUFBQSxnRUFBVSxnQkFHckMsQ0FBQztBQUhXNkIsTUFBQUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9FZGl0b3JQYWdlLmpzP2ZkYWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy/rqZTsnbgg7ZmU66m07JeQ7IScIOq4gOyTsOq4sCDrsoTtirzsnYQg7YG066at7ZWY66m0IOyDiOuhnCDsnpHshLEtPu2ZleyduCDtgbTrpq3si5wg65SU7YWM7J28IO2ZlOuptOyXkCDrp6TtlZHrkKhcclxuLy/rlJTthYzsnbwg7Y6Y7J207KeA7JeQ7IScIO2BtOumre2VmOuptCDquLDsobTsl5Ag7J6R7ISx65CcIOuCtOyaqeydhCDsl5DrlJTthLAg7Y6Y7J207KeA66GcIOu2iOufrOyYpOq4sCvsgq3soJxcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGdldElucHV0RGF0ZSBmcm9tICcuLi9zcmMvaG9va3MvZ2V0SW5wdXREYXRlJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL3NyYy9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IHsgUG9zdExpc3RTdGF0ZSB9IGZyb20gJy4uL3NyYy9yZWNvaWwvcmVjb2lsJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkZXIgfSBmcm9tICcuLi9zcmMvR2xvYmFsU3R5bGUnO1xyXG5pbXBvcnQgdXNlTmF2aWdhdGVIb21lIGZyb20gJy4uL3NyYy9ob29rcy91c2VOYXZpZ2F0ZUhvbWUnO1xyXG5cclxuZnVuY3Rpb24gRWRpdG9yUGFnZShQb3N0SWQpIHtcclxuICBjb25zdCB7IGlucHV0VGV4dCwgb25JbnB1dENoYW5nZSwgcmVzZXQgfSA9IHVzZUlucHV0KCk7XHJcbiAgLypcclxuICB7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb250ZW50OiAnJyxcclxuICAgIGRhdGU6ICcnLFxyXG4gICAgbWlsaXNlYzogJycsXHJcbiAgfSwg64KY7KSR7JeQIO2DgOyeheycvOuhnCDsp4DsoJUqL1xyXG4gIGNvbnN0IFtwb3N0TGlzdCwgc2V0UG9zdExpc3RdID0gdXNlUmVjb2lsU3RhdGUoUG9zdExpc3RTdGF0ZSk7XHJcbiAgY29uc3QgaGFuZGxlTmV3UG9zdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKGlucHV0VGV4dCkge1xyXG4gICAgICBjb25zdCBwb3N0ID0ge1xyXG4gICAgICAgIHRpdGxlOiBpbnB1dFRleHQudGl0bGUsXHJcbiAgICAgICAgY29udGVudDogaW5wdXRUZXh0LmNvbnRlbnQsXHJcbiAgICAgICAgZGF0ZTogZ2V0SW5wdXREYXRlKCksXHJcbiAgICAgICAgaWQ6IERhdGUubm93KCksXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzZXRQb3N0TGlzdCgocG9zdExpc3QpID0+IFsuLi5wb3N0TGlzdCwgcG9zdF0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhwb3N0TGlzdCk7XHJcbiAgICAgIHJlc2V0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydCgn7J6F66Cl7ZWY7IS47JqUIScpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxIZWFkZXI+67iU66Gc6re4IOq4gOyTsOq4sDwvSGVhZGVyPlxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPElucHV0V3JhcHBlcj5cclxuICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VGV4dC50aXRsZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuygnOuqqVwiXHJcbiAgICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENvbnRlbnRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFRleHQuY29udGVudH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuzuOusuFwiXHJcbiAgICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvSW5wdXRXcmFwcGVyPlxyXG4gICAgICAgICAgPFBvc3RpbmdCdXR0b24gb25DbGljaz17aGFuZGxlTmV3UG9zdH0+7Y+s7Iqk7Yq4IOuTseuhnTwvUG9zdGluZ0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yUGFnZTtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgcGFkZGluZzogMTBweDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFBvc3RpbmdCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZWQiLCJnZXRJbnB1dERhdGUiLCJ1c2VJbnB1dCIsInVzZVJlY29pbFN0YXRlIiwiUG9zdExpc3RTdGF0ZSIsIkNvbnRhaW5lciIsIkhlYWRlciIsInVzZU5hdmlnYXRlSG9tZSIsIkVkaXRvclBhZ2UiLCJQb3N0SWQiLCJpbnB1dFRleHQiLCJvbklucHV0Q2hhbmdlIiwicmVzZXQiLCJwb3N0TGlzdCIsInNldFBvc3RMaXN0IiwiaGFuZGxlTmV3UG9zdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ0aXRsZSIsImNvbnRlbnQiLCJkYXRlIiwiaWQiLCJEYXRlIiwibm93IiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwiRm9ybSIsIklucHV0V3JhcHBlciIsIlRpdGxlIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzcGVsbENoZWNrIiwiQ29udGVudCIsIlBvc3RpbmdCdXR0b24iLCJvbkNsaWNrIiwiZm9ybSIsImJ1dHRvbiIsInRleHRhcmVhIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/EditorPage.js\n");

/***/ })

});