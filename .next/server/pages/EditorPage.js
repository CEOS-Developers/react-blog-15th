"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/EditorPage";
exports.ids = ["pages/EditorPage"];
exports.modules = {

/***/ "./pages/EditorPage.js":
/*!*****************************!*\
  !*** ./pages/EditorPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_hooks_getInputDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/hooks/getInputDate */ \"./src/hooks/getInputDate.js\");\n/* harmony import */ var _src_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/hooks/useInput */ \"./src/hooks/useInput.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/GlobalStyle */ \"./src/GlobalStyle.js\");\n/* harmony import */ var _src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/hooks/useNavigateHome */ \"./src/hooks/useNavigateHome.js\");\n/* harmony import */ var _src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/styles/EditorStyle */ \"./src/styles/EditorStyle.js\");\n\n\n\n\n\n\n\n\n\nfunction EditorPage() {\n    const navigateHome = (0,_src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    const { inputText , onInputChange , reset  } = (0,_src_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    /*\r\n  {\r\n    title: '',\r\n    content: '',\r\n    date: '',\r\n    milisec: '',\r\n  }, 나중에 타입으로 지정*/ const [postList1, setPostList] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_5__.PostListState);\n    const handleNewPost = (e)=>{\n        e.preventDefault();\n        if (inputText) {\n            const post = {\n                title: inputText.title,\n                content: inputText.content,\n                date: (0,_src_hooks_getInputDate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n                id: Date.now()\n            };\n            setPostList((postList)=>[\n                    ...postList,\n                    post\n                ]\n            );\n            console.log(postList1);\n            reset();\n        } else {\n            alert(\"\\uC785\\uB825\\uD558\\uC138\\uC694!\");\n        }\n        navigateHome();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_6__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_6__.Header, {\n                    children: \"\\uBE14\\uB85C\\uADF8 \\uAE00\\uC4F0\\uAE30\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_8__.Form, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_8__.InputWrapper, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_8__.Title, {\n                                    type: \"text\",\n                                    name: \"title\",\n                                    value: inputText.title,\n                                    onChange: onInputChange,\n                                    placeholder: \"\\uC81C\\uBAA9\",\n                                    spellCheck: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_8__.Content, {\n                                    type: \"text\",\n                                    name: \"content\",\n                                    value: inputText.content,\n                                    onChange: onInputChange,\n                                    placeholder: \"\\uBCF8\\uBB38\",\n                                    spellCheck: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_8__.PostingButton, {\n                            onClick: handleNewPost,\n                            children: \"\\uD3EC\\uC2A4\\uD2B8 \\uB4F1\\uB85D\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9FZGl0b3JQYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF1QztBQUNjO0FBQ1I7QUFDTDtBQUNhO0FBQ0U7QUFDSTtBQU94QjtBQUVuQyxTQUFTYSxVQUFVLEdBQUc7SUFDcEIsTUFBTUMsWUFBWSxHQUFHUCxzRUFBZSxFQUFFO0lBQ3RDLE1BQU0sRUFBRVEsU0FBUyxHQUFFQyxhQUFhLEdBQUVDLEtBQUssR0FBRSxHQUFHZiwrREFBUSxFQUFFO0lBQ3REO0lBU0E7UUFDRW1CLENBQUMsQ0FBQ0M7UUFFRixJQUFJUDtZQUNGO2dCQUNFUztnQkFDQUMsT0FBTyxFQUFFVixTQUFTLENBQUNVLE9BQU87Z0JBQzFCQyxJQUFJLEVBQUV6QjtnQkFDTjBCLEVBQUUsRUFBRUMsSUFBSSxDQUFDQzthQUNWO1lBRURWLFdBQVcsQ0FBQyxDQUFDRDt1QkFBaUJBLFFBQVE7b0JBQUVLLElBQUk7aUJBQUM7WUFBQSxDQUFDLENBQUM7WUFDL0NPO1lBQ0FiLEtBQUssRUFBRSxDQUFDO1NBQ1QsTUFBTTtZQUNMZSxLQUFLLENBQUM7U0FDRztRQUNYbEI7S0FDRDtJQUVEOzs7Ozs7Ozs7d0JBRzBDOzhCQUN4QixRQUFYTixJQUFJOztzQ0FDSCxRQUFDSSxZQUFZOzs7OzJGQUdUc0IsQ0FBQUEseURBQUs7O29DQUVMRSxFQUFBQSw2REFBUSxDQUFFcEIsaUVBQUFBLENBQWE7b0NBQ3ZCcUI7b0NBQ0lDLFVBQU0sNkRBQUMsMkRBQU87Ozs7O3dDQUNsQjs4Q0FDRixRQUFDM0I7b0NBQ0NzQixJQUFJLEVBQUMsTUFBTTtvQ0FDWEMsSUFBSSxFQUFDLFNBQVM7b0NBQ2RDLEtBQUssRUFBRXBCO29DQUNQcUIsUUFBUSxFQUFFcEI7b0NBQ1ZxQjtvQ0FDSUMsVUFBTSw2REFBQyw2REFBTzs7Ozs7d0NBQ2xCOzs7Ozs7Z0NBQ1c7OzRCQUNBQyxPQUFPLEVBQUVuQjtzQ0FBZSxpQ0FBTTs7Ozs7Z0NBQWdCOzs7Ozs7d0JBQ3hEOzs7Ozs7Z0JBQ0c7O0NBR2pCO0FBRUQsZUFBZVAsVUFBVSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYmxvZy8uL3BhZ2VzL0VkaXRvclBhZ2UuanM/ZmRhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGdldElucHV0RGF0ZSBmcm9tICcuLi9zcmMvaG9va3MvZ2V0SW5wdXREYXRlJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL3NyYy9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IHsgUG9zdExpc3RTdGF0ZSB9IGZyb20gJy4uL3NyYy9yZWNvaWwvcmVjb2lsJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkZXIgfSBmcm9tICcuLi9zcmMvR2xvYmFsU3R5bGUnO1xyXG5pbXBvcnQgdXNlTmF2aWdhdGVIb21lIGZyb20gJy4uL3NyYy9ob29rcy91c2VOYXZpZ2F0ZUhvbWUnO1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgUG9zdGluZ0J1dHRvbixcclxuICBUaXRsZSxcclxuICBDb250ZW50LFxyXG4gIElucHV0V3JhcHBlcixcclxufSBmcm9tICcuLi9zcmMvc3R5bGVzL0VkaXRvclN0eWxlJztcclxuXHJcbmZ1bmN0aW9uIEVkaXRvclBhZ2UoKSB7XHJcbiAgY29uc3QgbmF2aWdhdGVIb21lID0gdXNlTmF2aWdhdGVIb21lKCk7XHJcbiAgY29uc3QgeyBpbnB1dFRleHQsIG9uSW5wdXRDaGFuZ2UsIHJlc2V0IH0gPSB1c2VJbnB1dCgpO1xyXG4gIC8qXHJcbiAge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgY29udGVudDogJycsXHJcbiAgICBkYXRlOiAnJyxcclxuICAgIG1pbGlzZWM6ICcnLFxyXG4gIH0sIOuCmOykkeyXkCDtg4DsnoXsnLzroZwg7KeA7KCVKi9cclxuICBjb25zdCBbcG9zdExpc3QsIHNldFBvc3RMaXN0XSA9IHVzZVJlY29pbFN0YXRlKFBvc3RMaXN0U3RhdGUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVOZXdQb3N0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoaW5wdXRUZXh0KSB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSB7XHJcbiAgICAgICAgdGl0bGU6IGlucHV0VGV4dC50aXRsZSxcclxuICAgICAgICBjb250ZW50OiBpbnB1dFRleHQuY29udGVudCxcclxuICAgICAgICBkYXRlOiBnZXRJbnB1dERhdGUoKSxcclxuICAgICAgICBpZDogRGF0ZS5ub3coKSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNldFBvc3RMaXN0KChwb3N0TGlzdCkgPT4gWy4uLnBvc3RMaXN0LCBwb3N0XSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHBvc3RMaXN0KTtcclxuICAgICAgcmVzZXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KCfsnoXroKXtlZjshLjsmpQhJyk7XHJcbiAgICB9XHJcbiAgICBuYXZpZ2F0ZUhvbWUoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZGVyPuu4lOuhnOq3uCDquIDsk7DquLA8L0hlYWRlcj5cclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxJbnB1dFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFRleHQudGl0bGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsoJzrqqlcIlxyXG4gICAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb250ZW50XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRUZXh0LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLrs7jrrLhcIlxyXG4gICAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0lucHV0V3JhcHBlcj5cclxuICAgICAgICAgIDxQb3N0aW5nQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5ld1Bvc3R9Pu2PrOyKpO2KuCDrk7HroZ08L1Bvc3RpbmdCdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRvclBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJnZXRJbnB1dERhdGUiLCJ1c2VJbnB1dCIsInVzZVJlY29pbFN0YXRlIiwiUG9zdExpc3RTdGF0ZSIsIkNvbnRhaW5lciIsIkhlYWRlciIsInVzZU5hdmlnYXRlSG9tZSIsIkZvcm0iLCJQb3N0aW5nQnV0dG9uIiwiVGl0bGUiLCJDb250ZW50IiwiSW5wdXRXcmFwcGVyIiwiRWRpdG9yUGFnZSIsIm5hdmlnYXRlSG9tZSIsImlucHV0VGV4dCIsIm9uSW5wdXRDaGFuZ2UiLCJyZXNldCIsInBvc3RMaXN0Iiwic2V0UG9zdExpc3QiLCJoYW5kbGVOZXdQb3N0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRpdGxlIiwiY29udGVudCIsImRhdGUiLCJpZCIsIkRhdGUiLCJub3ciLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNwZWxsQ2hlY2siLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/EditorPage.js\n");

/***/ }),

/***/ "./src/GlobalStyle.js":
/*!****************************!*\
  !*** ./src/GlobalStyle.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`\r\n    \r\n    width : 1000px;\r\n    margin 0 auto;\r\n    `;\nconst Header = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().header)`\r\n\r\n    font-weight:bold;\r\n    font-size:30px;\r\n    `;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvR2xvYmFsU3R5bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1QztBQUVoQyxNQUFNQyxTQUFTLEdBQUdELDhEQUFVLENBQUM7QUFLcEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1ibG9nLy4vc3JjL0dsb2JhbFN0eWxlLmpzPzU1YzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIFxyXG4gICAgd2lkdGggOiAxMDAwcHg7XHJcbiAgICBtYXJnaW4gMCBhdXRvO1xyXG4gICAgYFxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuXHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICBgIl0sIm5hbWVzIjpbInN0eWxlZCIsIkNvbnRhaW5lciIsImRpdiIsIkhlYWRlciIsImhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/GlobalStyle.js\n");

/***/ }),

/***/ "./src/hooks/getInputDate.js":
/*!***********************************!*\
  !*** ./src/hooks/getInputDate.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getInputDate)\n/* harmony export */ });\nfunction getInputDate() {\n    const today = new Date();\n    const year = today.getFullYear();\n    const month = (\"0\" + (today.getMonth() + 1)).slice(-2);\n    const day = (\"0\" + today.getDate()).slice(-2);\n    const dateString = year + \".\" + month + \".\" + day;\n    return dateString;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvZ2V0SW5wdXREYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxZQUFZLEdBQUc7SUFDckMsTUFBTUMsS0FBSyxHQUFHLElBQUlDLElBQUksRUFBRTtJQUV4QixNQUFNQyxJQUFJLEdBQUdGLEtBQUssQ0FBQ0csV0FBVyxFQUFFO0lBQ2hDLE1BQU1DLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDSixLQUFLLENBQUNLLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxNQUFNQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUdQLEtBQUssQ0FBQ1EsT0FBTyxFQUFFLENBQUMsQ0FBQ0YsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTdDLE1BQU1HLFVBQVUsR0FBR1AsSUFBSSxHQUFHLEdBQUcsR0FBR0UsS0FBSyxHQUFHLEdBQUcsR0FBR0csR0FBRztJQUVqRCxPQUFPRSxVQUFVLENBQUM7Q0FDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1ibG9nLy4vc3JjL2hvb2tzL2dldElucHV0RGF0ZS5qcz81ZDAwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldElucHV0RGF0ZSgpIHtcclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIGNvbnN0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gIGNvbnN0IG1vbnRoID0gKCcwJyArICh0b2RheS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKTtcclxuICBjb25zdCBkYXkgPSAoJzAnICsgdG9kYXkuZ2V0RGF0ZSgpKS5zbGljZSgtMik7XHJcblxyXG4gIGNvbnN0IGRhdGVTdHJpbmcgPSB5ZWFyICsgJy4nICsgbW9udGggKyAnLicgKyBkYXk7XHJcblxyXG4gIHJldHVybiBkYXRlU3RyaW5nO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJnZXRJbnB1dERhdGUiLCJ0b2RheSIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwic2xpY2UiLCJkYXkiLCJnZXREYXRlIiwiZGF0ZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/getInputDate.js\n");

/***/ }),

/***/ "./src/hooks/useInput.js":
/*!*******************************!*\
  !*** ./src/hooks/useInput.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useInput = ()=>{\n    const { 0: inputText , 1: setInputText  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        title: \"\",\n        content: \"\"\n    });\n    const onInputChange = (e)=>{\n        setInputText({\n            ...inputText,\n            [e.target.name]: e.target.value\n        });\n    };\n    const reset = ()=>{\n        setInputText({\n            title: \"\",\n            content: \"\"\n        });\n    };\n    return {\n        inputText,\n        onInputChange,\n        reset\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInput);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlSW5wdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBRWpDLE1BQU1DLFFBQVEsR0FBRyxJQUFNO0lBQ3JCLE1BQU0sRUFIUixHQUdTQyxTQUFTLEdBSGxCLEdBR29CQyxZQUFZLE1BQUlILCtDQUFRLENBQUM7UUFDekNJLEtBQUssRUFBRSxFQUFFO1FBQ1RDLE9BQU8sRUFBRSxFQUFFO0tBQ1osQ0FBQztJQUVGLE1BQU1DLGFBQWEsR0FBRyxDQUFDQyxDQUFDLEdBQUs7UUFDM0JKLFlBQVksQ0FBQztZQUFFLEdBQUdELFNBQVM7WUFBRSxDQUFDSyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVGLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRSxLQUFLO1NBQUUsQ0FBQyxDQUFDO0tBQ2pFO0lBRUQsTUFBTUMsS0FBSyxHQUFHLElBQU07UUFDbEJSLFlBQVksQ0FBQztZQUFFQyxLQUFLLEVBQUUsRUFBRTtZQUFFQyxPQUFPLEVBQUUsRUFBRTtTQUFFLENBQUMsQ0FBQztLQUMxQztJQUVELE9BQU87UUFBRUgsU0FBUztRQUFFSSxhQUFhO1FBQUVLLEtBQUs7S0FBRSxDQUFDO0NBQzVDO0FBQ0QsaUVBQWVWLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWJsb2cvLi9zcmMvaG9va3MvdXNlSW5wdXQuanM/OWY0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHVzZUlucHV0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpbnB1dFRleHQsIHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb250ZW50OiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25JbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRJbnB1dFRleHQoeyAuLi5pbnB1dFRleHQsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRJbnB1dFRleHQoeyB0aXRsZTogJycsIGNvbnRlbnQ6ICcnIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGlucHV0VGV4dCwgb25JbnB1dENoYW5nZSwgcmVzZXQgfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgdXNlSW5wdXQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUlucHV0IiwiaW5wdXRUZXh0Iiwic2V0SW5wdXRUZXh0IiwidGl0bGUiLCJjb250ZW50Iiwib25JbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJyZXNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useInput.js\n");

/***/ }),

/***/ "./src/hooks/useNavigateHome.js":
/*!**************************************!*\
  !*** ./src/hooks/useNavigateHome.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useNavigateHome)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useNavigateHome() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    const navigateHome = ()=>router.push(\"/MainPage\")\n    ;\n    return navigateHome;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlTmF2aWdhdGVIb21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3QztBQUV6QixTQUFTQyxlQUFlLEdBQUU7SUFFckMsTUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUFFO0lBQzFCLE1BQU1HLFlBQVksR0FBRyxJQUFNRCxNQUFNLENBQUNFLElBQUksQ0FBQyxXQUFXLENBQUM7SUFBQTtJQUduRCxPQUFPRCxZQUFZLENBQUU7Q0FDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1ibG9nLy4vc3JjL2hvb2tzL3VzZU5hdmlnYXRlSG9tZS5qcz9kODUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU5hdmlnYXRlSG9tZSgpe1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgbmF2aWdhdGVIb21lID0gKCkgPT4gcm91dGVyLnB1c2goJy9NYWluUGFnZScpXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4obmF2aWdhdGVIb21lKTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZU5hdmlnYXRlSG9tZSIsInJvdXRlciIsIm5hdmlnYXRlSG9tZSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useNavigateHome.js\n");

/***/ }),

/***/ "./src/recoil/recoil.js":
/*!******************************!*\
  !*** ./src/recoil/recoil.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostListState\": () => (/* binding */ PostListState)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data */ \"./src/data/data.json\");\n\n\n/*\r\ntype:id,title,content,date,milsec\r\n*/ const PostListState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"PostListState\",\n    default: _data_data__WEBPACK_IMPORTED_MODULE_1__\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVjb2lsL3JlY29pbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThCO0FBQ0U7QUFFaEM7SUFJSUcsR0FBRyxFQUFDLGVBQWU7R0FDbkJDLENBQU8sRUFBQ0gsSUFBSTtDQUNmLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWJsb2cvLi9zcmMvcmVjb2lsL3JlY29pbC5qcz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b20gfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhL2RhdGEnO1xyXG5cclxuLypcclxudHlwZTppZCx0aXRsZSxjb250ZW50LGRhdGUsbWlsc2VjXHJcbiovXHJcbmV4cG9ydCBjb25zdCBQb3N0TGlzdFN0YXRlID0gYXRvbSh7XHJcbiAgICBrZXk6J1Bvc3RMaXN0U3RhdGUnLFxyXG4gICAgZGVmYXVsdDpkYXRhLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbImF0b20iLCJkYXRhIiwiUG9zdExpc3RTdGF0ZSIsImtleSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/recoil/recoil.js\n");

/***/ }),

/***/ "./src/styles/EditorStyle.js":
/*!***********************************!*\
  !*** ./src/styles/EditorStyle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Content\": () => (/* binding */ Content),\n/* harmony export */   \"Form\": () => (/* binding */ Form),\n/* harmony export */   \"InputWrapper\": () => (/* binding */ InputWrapper),\n/* harmony export */   \"PostingButton\": () => (/* binding */ PostingButton),\n/* harmony export */   \"Title\": () => (/* binding */ Title)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Form = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().form)`\r\n  padding: 10px;\r\n`;\nconst PostingButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`\r\n  font-size: 15px;\r\n`;\nconst Title = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().textarea)`\r\n  font-size: 20px;\r\n  border-bottom: 1px solid grey;\r\n  padding: 5px;\r\n`;\nconst Content = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().textarea)`\r\n  font-size: 15px;\r\n  border-bottom: 1px solid grey;\r\n  padding: 5px;\r\n  height: 300px;\r\n`;\nconst InputWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`\r\n  display: flex;\r\n  flex-direction: column;\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL0VkaXRvclN0eWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFFaEMsTUFBTUMsSUFBSSxHQUFHRCwrREFBVyxDQUFDO0FBR2hDLE9BQU8sTUFBTUc7QUFHYjtBQUtPLE1BQU1JLE9BQU8sR0FBR1AsTUFBTSxpRUFBVTtBQU12QyxPQUFPLE1BQU1RIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYmxvZy8uL3NyYy9zdHlsZXMvRWRpdG9yU3R5bGUuanM/MGY2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgcGFkZGluZzogMTBweDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFBvc3RpbmdCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiRm9ybSIsImZvcm0iLCJQb3N0aW5nQnV0dG9uIiwiYnV0dG9uIiwiVGl0bGUiLCJ0ZXh0YXJlYSIsIkNvbnRlbnQiLCJJbnB1dFdyYXBwZXIiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/EditorStyle.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "./src/data/data.json":
/*!****************************!*\
  !*** ./src/data/data.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"첫 글","date":"2022.05.16.","id":1519211809934,"content":"와! 내용이다!"},{"title":"다음 글","date":"2022.05.17.","id":1519211810362,"content":"와! 내용 고갈!"},{"title":"다다음 글","date":"2022.05.18.","id":1519211811670,"content":"이제 긴 긴 긴 긴 긴 내용~"},{"title":"마지막 글","date":"2022.05.19.","id":1519129853500,"content":"두비두밥"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/EditorPage.js"));
module.exports = __webpack_exports__;

})();