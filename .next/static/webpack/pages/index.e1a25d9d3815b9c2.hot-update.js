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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_hooks_getInputDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/hooks/getInputDate */ \"./src/hooks/getInputDate.js\");\n/* harmony import */ var _src_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/hooks/useInput */ \"./src/hooks/useInput.js\");\n/* harmony import */ var _src_data_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/data/data.json */ \"./src/data/data.json\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/GlobalStyle */ \"./src/GlobalStyle.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 10px;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 15px;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 30px;\\n  border-bottom: 1px solid grey;\\n  padding: 5px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 15px;\\n  border-bottom: 1px solid grey;\\n  padding: 5px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display:flex;\\n  flex-direction:column;\\n\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\n\n//메인 화면에서 글쓰기 버튼을 클릭하면 새로 작성->확인 클릭시 디테일 화면에 매핑됨\n//디테일 페이지에서 클릭하면 기존에 작성된 내용을 에디터 페이지로 불러오기+삭제\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction EditorPage() {\n    _s();\n    var ref = (0,_src_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), inputText = ref.inputText, onInputChange = ref.onInputChange, reset = ref.reset;\n    /*\r\n  {\r\n    title: '',\r\n    content: '',\r\n    date: '',\r\n    milisec: '',\r\n  }, 나중에 타입으로 지정*/ var ref1 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_6__.PostListState), 2), postList1 = ref1[0], setPostList = ref1[1];\n    var handleNewPost = function(e) {\n        e.preventDefault();\n        if (inputText) {\n            var post = {\n                id: postList1.length,\n                title: inputText.title,\n                content: inputText.content,\n                date: (0,_src_hooks_getInputDate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n                milisec: Date.now().toString()\n            };\n            setPostList(function(postList) {\n                return _toConsumableArray(postList).concat([\n                    post\n                ]);\n            });\n            console.log(postList1);\n            reset();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__.Header, {\n                    children: \"\\uBE14\\uB85C\\uADF8 \\uAE00\\uC4F0\\uAE30\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InputWrapper, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                                    type: \"text\",\n                                    name: \"title\",\n                                    value: inputText.title,\n                                    onChange: onInputChange,\n                                    placeholder: \"\\uC81C\\uBAA9\",\n                                    spellCheck: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                                    type: \"text\",\n                                    name: \"content\",\n                                    value: inputText.content,\n                                    onChange: onInputChange,\n                                    placeholder: \"\\uBCF8\\uBB38\",\n                                    spellCheck: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostingButton, {\n                            onClick: handleNewPost,\n                            children: \"\\uD3EC\\uC2A4\\uD2B8 \\uB4F1\\uB85D\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n            lineNumber: 44,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(EditorPage, \"vrDp18JlOGSHSaRZThMTmJ7BV5M=\", false, function() {\n    return [\n        _src_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState\n    ];\n});\n_c = EditorPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditorPage);\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].form(_templateObject());\n_c1 = Form;\nvar PostingButton = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].button(_templateObject1());\n_c2 = PostingButton;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].textarea(_templateObject2());\n_c3 = Title;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].textarea(_templateObject3());\n_c4 = Content;\nvar InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject4());\n_c5 = InputWrapper;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"EditorPage\");\n$RefreshReg$(_c1, \"Form\");\n$RefreshReg$(_c2, \"PostingButton\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Content\");\n$RefreshReg$(_c5, \"InputWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9FZGl0b3JQYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFIQTtBQUNBO0FBRWlDO0FBQ007QUFDYztBQUNSO0FBQ0o7QUFDRDtBQUNhO0FBQ0Y7O0FBRW5ELFNBQVNTLFVBQVUsR0FBRzs7SUFDcEIsSUFBNENOLEdBQVUsR0FBVkEsK0RBQVEsRUFBRSxFQUE5Q08sU0FBUyxHQUEyQlAsR0FBVSxDQUE5Q08sU0FBUyxFQUFFQyxhQUFhLEdBQVlSLEdBQVUsQ0FBbkNRLGFBQWEsRUFBRUMsS0FBSyxHQUFLVCxHQUFVLENBQXBCUyxLQUFLO0lBQ3ZDO0lBU0E7UUFDRUksQ0FBQyxDQUFDQztRQUVGLElBQUlQO1lBQ0Y7Z0JBQ0VTO2dCQUNBRSxLQUFLLEVBQUVYLFNBQVMsQ0FBQ1csS0FBSztnQkFDdEJDLE9BQU8sRUFBRVosU0FBUyxDQUFDWTtnQkFDbkJDLElBQUksRUFBRXJCO2dCQUNOc0IsT0FBTzthQUNSO1lBRURWLFdBQVcsQ0FBQ0QsU0FBQUE7dUJBQVk7b0JBQWFLLElBQUk7aUJBQUM7YUFBQSxDQUFDLENBQUM7WUFDNUNVO1lBQ0FoQixLQUFLLEVBQUUsQ0FBQztTQUNUO0tBQ0Y7SUFFRDs7Ozs7Ozs7O3dCQUcwQzs4QkFDeEIsUUFBWGtCLElBQUk7O3NDQUNILFFBQUNDLFlBQVk7Ozs7MkZBR1hHLEdBQUksRUFBQzs7b0NBRUxFLEVBQUFBLDZEQUFRLENBQUV6QixhQUFhO29DQUN2QjBCO29DQUNJQyxVQUFNLDZEQUFDLEVBQU87Ozs7O3dDQUNsQjs4Q0FDRixRQUFDQztvQ0FDQ04sSUFBSSxFQUFDLE1BQU07b0NBQ1hDLElBQUksRUFBQyxTQUFTO29DQUNkQyxLQUFLLEVBQUV6QjtvQ0FDUDBCLFFBQVEsRUFBRXpCO29DQUNWMEI7b0NBQ0lDLFVBQU0sNkRBQUMsRUFBTzs7Ozs7d0NBQ2xCOzs7Ozs7Z0NBQ2E7OzRCQUNBRyxPQUFPLEVBQUUxQjtzQ0FBZSxpQ0FBTTs7Ozs7Z0NBQWdCOzs7Ozs7d0JBQ3hEOzs7Ozs7Z0JBQ0c7O0NBR2pCO0dBekRRTixVQUFVOztRQUMyQk4sUUFBUTtRQVFwQkU7OztBQVR6QkksS0FBQUEsVUFBVTtBQTJEbkI7QUFFQSxJQUFNcUIsSUFBSSwyREFBRzdCLENBQU07QUFBYjZCLE1BQUFBLEVBQUFBLGtEQUFJO0FBR1YsSUFBTVU7QUFBQUE7QUFHTixJQUFNUixLQUFLLEdBQUcvQjtBQUFSK0IsK0RBQUs7QUFLWCxJQUFNTyxPQUFPLDhEQUFVSyxPQUFRO0FBQXpCTCxNQUFBQTtBQUtOLElBQU1SLFlBQVksR0FBRzlCLENBQUFBLGdFQUFVLGdCQUk5QjtBQUpLOEIsTUFBQUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9FZGl0b3JQYWdlLmpzP2ZkYWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy/rqZTsnbgg7ZmU66m07JeQ7IScIOq4gOyTsOq4sCDrsoTtirzsnYQg7YG066at7ZWY66m0IOyDiOuhnCDsnpHshLEtPu2ZleyduCDtgbTrpq3si5wg65SU7YWM7J28IO2ZlOuptOyXkCDrp6TtlZHrkKhcclxuLy/rlJTthYzsnbwg7Y6Y7J207KeA7JeQ7IScIO2BtOumre2VmOuptCDquLDsobTsl5Ag7J6R7ISx65CcIOuCtOyaqeydhCDsl5DrlJTthLAg7Y6Y7J207KeA66GcIOu2iOufrOyYpOq4sCvsgq3soJxcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGdldElucHV0RGF0ZSBmcm9tICcuLi9zcmMvaG9va3MvZ2V0SW5wdXREYXRlJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL3NyYy9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL3NyYy9kYXRhL2RhdGEuanNvbic7XHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IHsgUG9zdExpc3RTdGF0ZSB9IGZyb20gJy4uL3NyYy9yZWNvaWwvcmVjb2lsJztcclxuaW1wb3J0e0NvbnRhaW5lcixIZWFkZXJ9IGZyb20gJy4uL3NyYy9HbG9iYWxTdHlsZSc7XHJcblxyXG5mdW5jdGlvbiBFZGl0b3JQYWdlKCkge1xyXG4gIGNvbnN0IHsgaW5wdXRUZXh0LCBvbklucHV0Q2hhbmdlLCByZXNldCB9ID0gdXNlSW5wdXQoKTtcclxuICAvKlxyXG4gIHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgZGF0ZTogJycsXHJcbiAgICBtaWxpc2VjOiAnJyxcclxuICB9LCDrgpjspJHsl5Ag7YOA7J6F7Jy866GcIOyngOyglSovXHJcbiAgY29uc3QgW3Bvc3RMaXN0LCBzZXRQb3N0TGlzdF0gPSB1c2VSZWNvaWxTdGF0ZShQb3N0TGlzdFN0YXRlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV3UG9zdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKGlucHV0VGV4dCkge1xyXG4gICAgICBjb25zdCBwb3N0ID0ge1xyXG4gICAgICAgIGlkOiBwb3N0TGlzdC5sZW5ndGgsXHJcbiAgICAgICAgdGl0bGU6IGlucHV0VGV4dC50aXRsZSxcclxuICAgICAgICBjb250ZW50OiBpbnB1dFRleHQuY29udGVudCxcclxuICAgICAgICBkYXRlOiBnZXRJbnB1dERhdGUoKSxcclxuICAgICAgICBtaWxpc2VjOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzZXRQb3N0TGlzdChwb3N0TGlzdCA9PiBbLi4ucG9zdExpc3QscG9zdF0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhwb3N0TGlzdCk7XHJcbiAgICAgIHJlc2V0KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZGVyPuu4lOuhnOq3uCDquIDsk7DquLA8L0hlYWRlcj5cclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxJbnB1dFdyYXBwZXI+XHJcbiAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRUZXh0LnRpdGxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsoJzrqqlcIlxyXG4gICAgICAgICAgICBzcGVsbENoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDb250ZW50XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRUZXh0LmNvbnRlbnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuzuOusuFwiXHJcbiAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9JbnB1dFdyYXBwZXI+XHJcbiAgICAgICAgICA8UG9zdGluZ0J1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXdQb3N0fT7tj6zsiqTtirgg65Ox66GdPC9Qb3N0aW5nQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JQYWdlO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbmA7XHJcbmNvbnN0IFBvc3RpbmdCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuYDtcclxuY29uc3QgVGl0bGUgPSBzdHlsZWQudGV4dGFyZWFgXHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuYDtcclxuY29uc3QgQ29udGVudCA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG5gO1xyXG5jb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcblxyXG5gIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVkIiwiZ2V0SW5wdXREYXRlIiwidXNlSW5wdXQiLCJkYXRhIiwidXNlUmVjb2lsU3RhdGUiLCJQb3N0TGlzdFN0YXRlIiwiQ29udGFpbmVyIiwiSGVhZGVyIiwiRWRpdG9yUGFnZSIsImlucHV0VGV4dCIsIm9uSW5wdXRDaGFuZ2UiLCJyZXNldCIsInBvc3RMaXN0Iiwic2V0UG9zdExpc3QiLCJoYW5kbGVOZXdQb3N0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsImlkIiwibGVuZ3RoIiwidGl0bGUiLCJjb250ZW50IiwiZGF0ZSIsIm1pbGlzZWMiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiRm9ybSIsIklucHV0V3JhcHBlciIsIlRpdGxlIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzcGVsbENoZWNrIiwiQ29udGVudCIsIlBvc3RpbmdCdXR0b24iLCJvbkNsaWNrIiwiZm9ybSIsImJ1dHRvbiIsInRleHRhcmVhIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/EditorPage.js\n");

/***/ })

});