"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/EditPost/[id]",{

/***/ "./pages/EditPost/[id].js":
/*!********************************!*\
  !*** ./pages/EditPost/[id].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/hooks/useInput */ \"./src/hooks/useInput.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/GlobalStyle */ \"./src/GlobalStyle.js\");\n/* harmony import */ var _src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/hooks/useNavigateHome */ \"./src/hooks/useNavigateHome.js\");\n/* harmony import */ var _src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/styles/EditorStyle */ \"./src/styles/EditorStyle.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction EditPost() {\n    _s();\n    var ref = (0,_src_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), inputText = ref.inputText, onInputChange = ref.onInputChange, reset = ref.reset;\n    var ref1 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_4__.PostListState), 2), postList1 = ref1[0], setPostList = ref1[1];\n    var navigateHome = (0,_src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    var numbering = Number(id);\n    var ref2 = _slicedToArray(postList1.filter(function(post) {\n        return post.postNum === numbering;\n    }), 1), postObj = ref2[0];\n    var savedTitle = postObj.title;\n    var savedContent = postObj.content;\n    var handleNewPost = function(e) {\n        e.preventDefault();\n        if (inputText) {\n            var post = {\n                title: inputText.title,\n                content: inputText.content,\n                date: postObj.date,\n                id: postObj.id\n            };\n            setPostList(function(postList) {\n                return postList.splice(function(postList) {\n                    return numbering - 1;\n                }, 1, post);\n            });\n            reset();\n        } else {\n            alert(\"\\uC785\\uB825\\uD558\\uC138\\uC694!\");\n        }\n        navigateHome();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.CenteringWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Header, {\n                children: \"\\uAE00 \\uC218\\uC815\\uD558\\uAE30\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditPost\\\\[id].js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__.Form, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__.InputWrapper, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__.Title, {\n                                    type: \"text\",\n                                    name: \"title\",\n                                    defaultValue: savedTitle,\n                                    onChange: onInputChange,\n                                    placeholder: savedTitle,\n                                    spellCheck: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditPost\\\\[id].js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__.Content, {\n                                    type: \"text\",\n                                    name: \"content\",\n                                    defaultValue: savedContent,\n                                    onChange: onInputChange,\n                                    placeholder: savedContent,\n                                    spellCheck: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditPost\\\\[id].js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditPost\\\\[id].js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__.PostHandleButton, {\n                            onClick: handleNewPost,\n                            children: \"\\uD3EC\\uC2A4\\uD2B8 \\uB4F1\\uB85D\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditPost\\\\[id].js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditPost\\\\[id].js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditPost\\\\[id].js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditPost\\\\[id].js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(EditPost, \"L0wGMrvkolJNzXq5x/Sdzd3Myb0=\", false, function() {\n    return [\n        _src_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState,\n        _src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = EditPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPost);\nvar _c;\n$RefreshReg$(_c, \"EditPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDbkMscUVBQWdCOzRCQUFDb0MsT0FBTyxFQUFFWixhQUFhO3NDQUFFLGlDQUUxQzs7Ozs7Z0NBQW1COzs7Ozs7d0JBQ2Q7Ozs7O29CQUNHOzs7Ozs7WUFDSyxDQUNuQjtDQUNIO0dBN0RRcEIsUUFBUTs7UUFDNkJaLDJEQUFRO1FBQ3BCQyxrREFBYztRQUN6Qkssa0VBQWU7UUFDckJQLGtEQUFTOzs7QUFKakJhLEtBQUFBLFFBQVE7QUErRGpCLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRWRpdFBvc3QvW2lkXS5qcz83MDAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uLy4uL3NyYy9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IHsgUG9zdExpc3RTdGF0ZSB9IGZyb20gJy4uLy4uL3NyYy9yZWNvaWwvcmVjb2lsJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkZXIsIENlbnRlcmluZ1dyYXBwZXIgfSBmcm9tICcuLi8uLi9zcmMvR2xvYmFsU3R5bGUnO1xyXG5pbXBvcnQgdXNlTmF2aWdhdGVIb21lIGZyb20gJy4uLy4uL3NyYy9ob29rcy91c2VOYXZpZ2F0ZUhvbWUnO1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgUG9zdEhhbmRsZUJ1dHRvbixcclxuICBUaXRsZSxcclxuICBDb250ZW50LFxyXG4gIElucHV0V3JhcHBlcixcclxufSBmcm9tICcuLi8uLi9zcmMvc3R5bGVzL0VkaXRvclN0eWxlJztcclxuXHJcbmZ1bmN0aW9uIEVkaXRQb3N0KCkge1xyXG4gIGNvbnN0IHsgaW5wdXRUZXh0LCBvbklucHV0Q2hhbmdlLCByZXNldCB9ID0gdXNlSW5wdXQoKTtcclxuICBjb25zdCBbcG9zdExpc3QsIHNldFBvc3RMaXN0XSA9IHVzZVJlY29pbFN0YXRlKFBvc3RMaXN0U3RhdGUpO1xyXG4gIGNvbnN0IG5hdmlnYXRlSG9tZSA9IHVzZU5hdmlnYXRlSG9tZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBudW1iZXJpbmcgPSBOdW1iZXIoaWQpO1xyXG4gIGNvbnN0IFtwb3N0T2JqXSA9IHBvc3RMaXN0LmZpbHRlcigocG9zdCkgPT4gcG9zdC5wb3N0TnVtID09PSBudW1iZXJpbmcpO1xyXG5cclxuICBjb25zdCBzYXZlZFRpdGxlID0gcG9zdE9iai50aXRsZTtcclxuICBjb25zdCBzYXZlZENvbnRlbnQgPSBwb3N0T2JqLmNvbnRlbnQ7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5ld1Bvc3QgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChpbnB1dFRleHQpIHtcclxuICAgICAgY29uc3QgcG9zdCA9IHtcclxuICAgICAgICB0aXRsZTogaW5wdXRUZXh0LnRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6IGlucHV0VGV4dC5jb250ZW50LFxyXG4gICAgICAgIGRhdGU6IHBvc3RPYmouZGF0ZSxcclxuICAgICAgICBpZDogcG9zdE9iai5pZCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNldFBvc3RMaXN0KChwb3N0TGlzdCk9PnBvc3RMaXN0LnNwbGljZSgocG9zdExpc3QpPT5udW1iZXJpbmctMSwxLHBvc3QpKTtcclxuICAgICAgcmVzZXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KCfsnoXroKXtlZjshLjsmpQhJyk7XHJcbiAgICB9XHJcbiAgICBuYXZpZ2F0ZUhvbWUoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENlbnRlcmluZ1dyYXBwZXI+XHJcbiAgICAgIDxIZWFkZXI+6riAIOyImOygle2VmOq4sDwvSGVhZGVyPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPElucHV0V3JhcHBlcj5cclxuICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzYXZlZFRpdGxlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtzYXZlZFRpdGxlfVxyXG4gICAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb250ZW50XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NhdmVkQ29udGVudH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17c2F2ZWRDb250ZW50fVxyXG4gICAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0lucHV0V3JhcHBlcj5cclxuICAgICAgICAgIDxQb3N0SGFuZGxlQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5ld1Bvc3R9PlxyXG4gICAgICAgICAgICDtj6zsiqTtirgg65Ox66GdXHJcbiAgICAgICAgICA8L1Bvc3RIYW5kbGVCdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQ2VudGVyaW5nV3JhcHBlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0UG9zdDtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUlucHV0IiwidXNlUmVjb2lsU3RhdGUiLCJQb3N0TGlzdFN0YXRlIiwiQ29udGFpbmVyIiwiSGVhZGVyIiwiQ2VudGVyaW5nV3JhcHBlciIsInVzZU5hdmlnYXRlSG9tZSIsIkZvcm0iLCJQb3N0SGFuZGxlQnV0dG9uIiwiVGl0bGUiLCJDb250ZW50IiwiSW5wdXRXcmFwcGVyIiwiRWRpdFBvc3QiLCJpbnB1dFRleHQiLCJvbklucHV0Q2hhbmdlIiwicmVzZXQiLCJwb3N0TGlzdCIsInNldFBvc3RMaXN0IiwibmF2aWdhdGVIb21lIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsIm51bWJlcmluZyIsIk51bWJlciIsImZpbHRlciIsInBvc3QiLCJwb3N0TnVtIiwicG9zdE9iaiIsInNhdmVkVGl0bGUiLCJ0aXRsZSIsInNhdmVkQ29udGVudCIsImNvbnRlbnQiLCJoYW5kbGVOZXdQb3N0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0ZSIsInNwbGljZSIsImFsZXJ0IiwidHlwZSIsIm5hbWUiLCJkZWZhdWx0VmFsdWUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwic3BlbGxDaGVjayIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/EditPost/[id].js\n");

/***/ })

});