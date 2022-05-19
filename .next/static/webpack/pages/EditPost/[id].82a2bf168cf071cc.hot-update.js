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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/hooks/useInput */ \"./src/hooks/useInput.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/GlobalStyle */ \"./src/GlobalStyle.js\");\n/* harmony import */ var _src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/hooks/useNavigateHome */ \"./src/hooks/useNavigateHome.js\");\n/* harmony import */ var _src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/styles/EditorStyle */ \"./src/styles/EditorStyle.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction EditPost() {\n    _s();\n    var ref = (0,_src_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), inputText = ref.inputText, onInputChange = ref.onInputChange, reset = ref.reset;\n    var ref1 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_4__.PostListState), 2), postList = ref1[0], setPostList = ref1[1];\n    var navigateHome = (0,_src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    var numbering = Number(id);\n    var ref2 = _slicedToArray(postList.filter(function(post) {\n        return post.postNum === numbering;\n    }), 1), postObj = ref2[0];\n    var savedTitle = postObj.title;\n    var savedContent = postObj.content;\n    var handleNewPost = function(e) {\n        e.preventDefault();\n        if (inputText) {\n            var post = {\n                title: inputText.title,\n                content: inputText.content,\n                date: postObj.date,\n                id: postObj.id\n            };\n            var newArray = postList;\n            var newArray2 = newArray.splice(numbering - 1, 1, post);\n            var v = [\n                1,\n                2,\n                3,\n                4\n            ];\n            v.splice(1, 1, 5);\n            setPostList(newArray2);\n            reset();\n        } else {\n            alert(\"\\uC785\\uB825\\uD558\\uC138\\uC694!\");\n        }\n        navigateHome();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.CenteringWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Header, {\n                children: \"\\uAE00 \\uC218\\uC815\\uD558\\uAE30\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditPost\\\\[id].js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__.Form, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__.InputWrapper, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__.Title, {\n                                    type: \"text\",\n                                    name: \"title\",\n                                    defaultValue: savedTitle,\n                                    onChange: onInputChange,\n                                    placeholder: savedTitle,\n                                    spellCheck: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditPost\\\\[id].js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__.Content, {\n                                    type: \"text\",\n                                    name: \"content\",\n                                    defaultValue: savedContent,\n                                    onChange: onInputChange,\n                                    placeholder: savedContent,\n                                    spellCheck: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditPost\\\\[id].js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditPost\\\\[id].js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__.PostHandleButton, {\n                            onClick: handleNewPost,\n                            children: \"\\uD3EC\\uC2A4\\uD2B8 \\uB4F1\\uB85D\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditPost\\\\[id].js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditPost\\\\[id].js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditPost\\\\[id].js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditPost\\\\[id].js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(EditPost, \"L0wGMrvkolJNzXq5x/Sdzd3Myb0=\", false, function() {\n    return [\n        _src_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState,\n        _src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = EditPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPost);\nvar _c;\n$RefreshReg$(_c, \"EditPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTTtvQ0FDWEMsSUFBSSxFQUFDLFNBQVM7b0NBQ2RDLFlBQVksRUFBRWIsWUFBWTtvQ0FDMUJjLFFBQVEsRUFBRTlCLGFBQWE7b0NBQ3ZCK0IsV0FBVyxFQUFFZixZQUFZO29DQUN6QmdCLFVBQVUsRUFBQyxPQUFPOzs7Ozt3Q0FDbEI7Ozs7OztnQ0FDVztzQ0FDZiw4REFBQ3RDLHFFQUFnQjs0QkFBQ3VDLE9BQU8sRUFBRWYsYUFBYTtzQ0FBRSxpQ0FFMUM7Ozs7O2dDQUFtQjs7Ozs7O3dCQUNkOzs7OztvQkFDRzs7Ozs7O1lBQ0ssQ0FDbkI7Q0FDSDtHQWpFUXBCLFFBQVE7O1FBQzZCWiwyREFBUTtRQUNwQkMsa0RBQWM7UUFDekJLLGtFQUFlO1FBQ3JCUCxrREFBUzs7O0FBSmpCYSxLQUFBQSxRQUFRO0FBbUVqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0VkaXRQb3N0L1tpZF0uanM/NzAwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi8uLi9zcmMvaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCB7IFBvc3RMaXN0U3RhdGUgfSBmcm9tICcuLi8uLi9zcmMvcmVjb2lsL3JlY29pbCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGVyLCBDZW50ZXJpbmdXcmFwcGVyIH0gZnJvbSAnLi4vLi4vc3JjL0dsb2JhbFN0eWxlJztcclxuaW1wb3J0IHVzZU5hdmlnYXRlSG9tZSBmcm9tICcuLi8uLi9zcmMvaG9va3MvdXNlTmF2aWdhdGVIb21lJztcclxuaW1wb3J0IHtcclxuICBGb3JtLFxyXG4gIFBvc3RIYW5kbGVCdXR0b24sXHJcbiAgVGl0bGUsXHJcbiAgQ29udGVudCxcclxuICBJbnB1dFdyYXBwZXIsXHJcbn0gZnJvbSAnLi4vLi4vc3JjL3N0eWxlcy9FZGl0b3JTdHlsZSc7XHJcblxyXG5mdW5jdGlvbiBFZGl0UG9zdCgpIHtcclxuICBjb25zdCB7IGlucHV0VGV4dCwgb25JbnB1dENoYW5nZSwgcmVzZXQgfSA9IHVzZUlucHV0KCk7XHJcbiAgY29uc3QgW3Bvc3RMaXN0LCBzZXRQb3N0TGlzdF0gPSB1c2VSZWNvaWxTdGF0ZShQb3N0TGlzdFN0YXRlKTtcclxuICBjb25zdCBuYXZpZ2F0ZUhvbWUgPSB1c2VOYXZpZ2F0ZUhvbWUoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgbnVtYmVyaW5nID0gTnVtYmVyKGlkKTtcclxuICBjb25zdCBbcG9zdE9ial0gPSBwb3N0TGlzdC5maWx0ZXIoKHBvc3QpID0+IHBvc3QucG9zdE51bSA9PT0gbnVtYmVyaW5nKTtcclxuXHJcbiAgY29uc3Qgc2F2ZWRUaXRsZSA9IHBvc3RPYmoudGl0bGU7XHJcbiAgY29uc3Qgc2F2ZWRDb250ZW50ID0gcG9zdE9iai5jb250ZW50O1xyXG5cclxuICBjb25zdCBoYW5kbGVOZXdQb3N0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoaW5wdXRUZXh0KSB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSB7XHJcbiAgICAgICAgdGl0bGU6IGlucHV0VGV4dC50aXRsZSxcclxuICAgICAgICBjb250ZW50OiBpbnB1dFRleHQuY29udGVudCxcclxuICAgICAgICBkYXRlOiBwb3N0T2JqLmRhdGUsXHJcbiAgICAgICAgaWQ6IHBvc3RPYmouaWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2YXIgbmV3QXJyYXkgPXBvc3RMaXN0O1xyXG4gICAgICB2YXIgbmV3QXJyYXkyID0gbmV3QXJyYXkuc3BsaWNlKG51bWJlcmluZy0xLDEscG9zdCk7XHJcbiAgICAgIGNvbnN0IHYgPVsxLDIsMyw0XTtcclxuICAgICAgdi5zcGxpY2UoMSwxLDUpO1xyXG4gICAgICBzZXRQb3N0TGlzdChuZXdBcnJheTIpO1xyXG4gICAgICByZXNldCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoJ+yeheugpe2VmOyEuOyalCEnKTtcclxuICAgIH1cclxuICAgIG5hdmlnYXRlSG9tZSgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2VudGVyaW5nV3JhcHBlcj5cclxuICAgICAgPEhlYWRlcj7quIAg7IiY7KCV7ZWY6riwPC9IZWFkZXI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8SW5wdXRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NhdmVkVGl0bGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3NhdmVkVGl0bGV9XHJcbiAgICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENvbnRlbnRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2F2ZWRDb250ZW50fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtzYXZlZENvbnRlbnR9XHJcbiAgICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvSW5wdXRXcmFwcGVyPlxyXG4gICAgICAgICAgPFBvc3RIYW5kbGVCdXR0b24gb25DbGljaz17aGFuZGxlTmV3UG9zdH0+XHJcbiAgICAgICAgICAgIO2PrOyKpO2KuCDrk7HroZ1cclxuICAgICAgICAgIDwvUG9zdEhhbmRsZUJ1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9DZW50ZXJpbmdXcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRQb3N0O1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlSW5wdXQiLCJ1c2VSZWNvaWxTdGF0ZSIsIlBvc3RMaXN0U3RhdGUiLCJDb250YWluZXIiLCJIZWFkZXIiLCJDZW50ZXJpbmdXcmFwcGVyIiwidXNlTmF2aWdhdGVIb21lIiwiRm9ybSIsIlBvc3RIYW5kbGVCdXR0b24iLCJUaXRsZSIsIkNvbnRlbnQiLCJJbnB1dFdyYXBwZXIiLCJFZGl0UG9zdCIsImlucHV0VGV4dCIsIm9uSW5wdXRDaGFuZ2UiLCJyZXNldCIsInBvc3RMaXN0Iiwic2V0UG9zdExpc3QiLCJuYXZpZ2F0ZUhvbWUiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwibnVtYmVyaW5nIiwiTnVtYmVyIiwiZmlsdGVyIiwicG9zdCIsInBvc3ROdW0iLCJwb3N0T2JqIiwic2F2ZWRUaXRsZSIsInRpdGxlIiwic2F2ZWRDb250ZW50IiwiY29udGVudCIsImhhbmRsZU5ld1Bvc3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRlIiwibmV3QXJyYXkiLCJuZXdBcnJheTIiLCJzcGxpY2UiLCJ2IiwiYWxlcnQiLCJ0eXBlIiwibmFtZSIsImRlZmF1bHRWYWx1ZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzcGVsbENoZWNrIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/EditPost/[id].js\n");

/***/ })

});