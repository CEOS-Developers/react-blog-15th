"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ModifiedPost/[id]",{

/***/ "./pages/ModifiedPost/[id].js":
/*!************************************!*\
  !*** ./pages/ModifiedPost/[id].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _EditorPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../EditorPage */ \"./pages/EditorPage.js\");\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/GlobalStyle */ \"./src/GlobalStyle.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ModifiedContainer() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    var numbering = Number(id);\n    var currentPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__.PostListState);\n    var modifyPost = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__.PostListState);\n    var ref = _slicedToArray(currentPostList.filter(function(post) {\n        return post.id === numbering;\n    }), 1), postObj = ref[0]; //id를 이용해서 post filter\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({\n        title: \"\",\n        content: \"\"\n    }), inputText = ref1[0], setInputText = ref1[1];\n    var onInputChange = function(e) {\n        setInputText(_objectSpread({}, inputText, _defineProperty({}, e.target.name, e.target.value)));\n    };\n    var reset = function() {\n        setInputText({\n            title: \"\",\n            content: \"\"\n        });\n    };\n    var handleNewPost = function(e) {\n        e.preventDefault();\n        console.log(inputText.title);\n        if (inputText) {\n            modifyPost(postObj.title = \"d\"); //data 수정이 안되는 문제 발생\n            //postObj.title = inputText.title;\n            modifyPost(postObj.content = \"7\");\n            reset();\n        } else {\n            alert(\"\\uC785\\uB825\\uD558\\uC138\\uC694!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_6__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_6__.Header, {\n                    children: \"\\uBE14\\uB85C\\uADF8 \\uAE00\\uC4F0\\uAE30\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\ModifiedPost\\\\[id].js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EditorPage__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EditorPage__WEBPACK_IMPORTED_MODULE_5__.InputWrapper, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EditorPage__WEBPACK_IMPORTED_MODULE_5__.Title, {\n                                    type: \"text\",\n                                    name: \"title\",\n                                    value: inputText.title,\n                                    onChange: onInputChange,\n                                    placeholder: \"\\uC81C\\uBAA9\",\n                                    spellCheck: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\ModifiedPost\\\\[id].js\",\n                                    lineNumber: 55,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EditorPage__WEBPACK_IMPORTED_MODULE_5__.Content, {\n                                    type: \"text\",\n                                    name: \"content\",\n                                    value: inputText.content,\n                                    onChange: onInputChange,\n                                    placeholder: \"\\uBCF8\\uBB38\",\n                                    spellCheck: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\ModifiedPost\\\\[id].js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\ModifiedPost\\\\[id].js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EditorPage__WEBPACK_IMPORTED_MODULE_5__.PostingButton, {\n                            onClick: handleNewPost,\n                            children: \"\\uD3EC\\uC2A4\\uD2B8 \\uC218\\uC815\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\ModifiedPost\\\\[id].js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\ModifiedPost\\\\[id].js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\ModifiedPost\\\\[id].js\",\n            lineNumber: 51,\n            columnNumber: 8\n        }, this)\n    }, void 0, false);\n}\n_s(ModifiedContainer, \"vBXzoKceymqUBpCmcbwTNI3bJvU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState\n    ];\n});\n_c = ModifiedContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModifiedContainer);\nvar _c;\n$RefreshReg$(_c, \"ModifiedContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJO29DQUNaQyxVQUFNLEVBQUMsT0FBTzs7Ozs7d0NBQ2xCOzs7Ozs7Z0NBQ1c7c0NBQ2YsOERBQUNsQyxzREFBYTs0QkFBQ21DLE9BQU8sRUFBRVQsYUFBYTtzQ0FBRSxpQ0FBTTs7Ozs7Z0NBQWdCOzs7Ozs7d0JBQ3hEOzs7Ozs7Z0JBQ0c7cUJBQ1gsQ0FDRDtDQUVMO0dBcEVRckIsaUJBQWlCOztRQUVQZixrREFBUztRQUlBQyxrREFBYztRQUNuQkMscURBQWlCOzs7QUFQL0JhLEtBQUFBLGlCQUFpQjtBQXNFMUIsK0RBQWVBLGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL01vZGlmaWVkUG9zdC9baWRdLmpzPzNiNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSwgdXNlU2V0UmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgeyBQb3N0TGlzdFN0YXRlIH0gZnJvbSAnLi4vLi4vc3JjL3JlY29pbC9yZWNvaWwnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0VkaXRvclBhZ2V9IGZyb20gXCIuLi9FZGl0b3JQYWdlXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge0NvbnRhaW5lcixIZWFkZXJ9IGZyb20gJy4uLy4uL3NyYy9HbG9iYWxTdHlsZSc7XHJcbmltcG9ydCB7Rm9ybSxQb3N0aW5nQnV0dG9uLFRpdGxlLENvbnRlbnQsSW5wdXRXcmFwcGVyfSBmcm9tICcuLi9FZGl0b3JQYWdlJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5mdW5jdGlvbiBNb2RpZmllZENvbnRhaW5lcigpe1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgbnVtYmVyaW5nID0gTnVtYmVyKGlkKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50UG9zdExpc3QgPSB1c2VSZWNvaWxWYWx1ZShQb3N0TGlzdFN0YXRlKTtcclxuICAgIGNvbnN0IG1vZGlmeVBvc3QgPSB1c2VTZXRSZWNvaWxTdGF0ZShQb3N0TGlzdFN0YXRlKTtcclxuICAgIFxyXG4gICAgY29uc3QgW3Bvc3RPYmpdID0gY3VycmVudFBvc3RMaXN0LmZpbHRlcigocG9zdCkgPT4gcG9zdC5pZCA9PT0gbnVtYmVyaW5nKTsgLy9pZOulvCDsnbTsmqntlbTshJwgcG9zdCBmaWx0ZXJcclxuXHJcbiAgICAgIGNvbnN0IFtpbnB1dFRleHQsIHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgICBjb25zdCBvbklucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRJbnB1dFRleHQoey4uLmlucHV0VGV4dCxbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElucHV0VGV4dCh7dGl0bGU6JycsIGNvbnRlbnQ6ICcnfSk7XHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZU5ld1Bvc3QgPSAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGlucHV0VGV4dC50aXRsZSk7XHJcbiAgICAgIGlmIChpbnB1dFRleHQpIHtcclxuXHJcbiAgICAgICAgICBtb2RpZnlQb3N0KHBvc3RPYmoudGl0bGUgPSBcImRcIik7IC8vZGF0YSDsiJjsoJXsnbQg7JWI65CY64qUIOusuOygnCDrsJzsg51cclxuICAgICAgICAgIC8vcG9zdE9iai50aXRsZSA9IGlucHV0VGV4dC50aXRsZTtcclxuICAgICAgICAgIG1vZGlmeVBvc3QocG9zdE9iai5jb250ZW50ID0gXCI3XCIpO1xyXG4gIFxyXG4gICAgICAgIHJlc2V0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ+yeheugpe2VmOyEuOyalCEnKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEhlYWRlcj7ruJTroZzqt7gg6riA7JOw6riwPC9IZWFkZXI+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8SW5wdXRXcmFwcGVyPlxyXG4gICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VGV4dC50aXRsZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuygnOuqqVwiXHJcbiAgICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENvbnRlbnRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFRleHQuY29udGVudH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuzuOusuFwiXHJcbiAgICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvSW5wdXRXcmFwcGVyPlxyXG4gICAgICAgICAgPFBvc3RpbmdCdXR0b24gb25DbGljaz17aGFuZGxlTmV3UG9zdH0+7Y+s7Iqk7Yq4IOyImOyglTwvUG9zdGluZ0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kaWZpZWRDb250YWluZXI7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVJlY29pbFZhbHVlIiwidXNlU2V0UmVjb2lsU3RhdGUiLCJQb3N0TGlzdFN0YXRlIiwiTGluayIsIkVkaXRvclBhZ2UiLCJzdHlsZWQiLCJDb250YWluZXIiLCJIZWFkZXIiLCJGb3JtIiwiUG9zdGluZ0J1dHRvbiIsIlRpdGxlIiwiQ29udGVudCIsIklucHV0V3JhcHBlciIsInVzZVN0YXRlIiwiTW9kaWZpZWRDb250YWluZXIiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwibnVtYmVyaW5nIiwiTnVtYmVyIiwiY3VycmVudFBvc3RMaXN0IiwibW9kaWZ5UG9zdCIsImZpbHRlciIsInBvc3QiLCJwb3N0T2JqIiwidGl0bGUiLCJjb250ZW50IiwiaW5wdXRUZXh0Iiwic2V0SW5wdXRUZXh0Iiwib25JbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJyZXNldCIsImhhbmRsZU5ld1Bvc3QiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwic3BlbGxDaGVjayIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ModifiedPost/[id].js\n");

/***/ })

});