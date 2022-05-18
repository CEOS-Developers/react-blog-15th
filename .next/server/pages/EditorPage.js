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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Content\": () => (/* binding */ Content),\n/* harmony export */   \"Form\": () => (/* binding */ Form),\n/* harmony export */   \"InputWrapper\": () => (/* binding */ InputWrapper),\n/* harmony export */   \"PostingButton\": () => (/* binding */ PostingButton),\n/* harmony export */   \"Title\": () => (/* binding */ Title),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_hooks_getInputDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/hooks/getInputDate */ \"./src/hooks/getInputDate.js\");\n/* harmony import */ var _src_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/hooks/useInput */ \"./src/hooks/useInput.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/GlobalStyle */ \"./src/GlobalStyle.js\");\n/* harmony import */ var _src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/hooks/useNavigateHome */ \"./src/hooks/useNavigateHome.js\");\n\n//메인 화면에서 글쓰기 버튼을 클릭하면 새로 작성->확인 클릭시 디테일 화면에 매핑됨\n//디테일 페이지에서 클릭하면 기존에 작성된 내용을 에디터 페이지로 불러오기+삭제\n\n\n\n\n\n\n\n\nfunction EditorPage(PostId) {\n    const { inputText , onInputChange , reset  } = (0,_src_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    /*\r\n  {\r\n    title: '',\r\n    content: '',\r\n    date: '',\r\n    milisec: '',\r\n  }, 나중에 타입으로 지정*/ const [postList1, setPostList] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_6__.PostListState);\n    const handleNewPost = (e)=>{\n        e.preventDefault();\n        if (inputText) {\n            const post = {\n                title: inputText.title,\n                content: inputText.content,\n                date: (0,_src_hooks_getInputDate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n                id: Date.now()\n            };\n            setPostList((postList)=>[\n                    ...postList,\n                    post\n                ]\n            );\n            console.log(postList1);\n            reset();\n        } else {\n            alert(\"\\uC785\\uB825\\uD558\\uC138\\uC694!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__.Header, {\n                    children: \"\\uBE14\\uB85C\\uADF8 \\uAE00\\uC4F0\\uAE30\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InputWrapper, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                                    type: \"text\",\n                                    name: \"title\",\n                                    value: inputText.title,\n                                    onChange: onInputChange,\n                                    placeholder: \"\\uC81C\\uBAA9\",\n                                    spellCheck: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                                    type: \"text\",\n                                    name: \"content\",\n                                    value: inputText.content,\n                                    onChange: onInputChange,\n                                    placeholder: \"\\uBCF8\\uBB38\",\n                                    spellCheck: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostingButton, {\n                            onClick: handleNewPost,\n                            children: \"\\uD3EC\\uC2A4\\uD2B8 \\uB4F1\\uB85D\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorPage);\nconst Form = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().form)`\r\n  padding: 10px;\r\n`;\nconst PostingButton = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().button)`\r\n  font-size: 15px;\r\n`;\nconst Title = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().textarea)`\r\n  font-size: 20px;\r\n  border-bottom: 1px solid grey;\r\n  padding: 5px;\r\n`;\nconst Content = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().textarea)`\r\n  font-size: 15px;\r\n  border-bottom: 1px solid grey;\r\n  padding: 5px;\r\n  height: 300px;\r\n`;\nconst InputWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`\r\n  display: flex;\r\n  flex-direction: column;\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9FZGl0b3JQYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUhBO0FBQ0E7QUFFaUM7QUFDTTtBQUNjO0FBQ1I7QUFDTDtBQUNhO0FBQ0U7QUFDSTtBQUUzRCxTQUFTUyxVQUFVLENBQUNDLE1BQU0sRUFBRTtJQUMxQixNQUFNLEVBQUVDLFNBQVMsR0FBRUMsYUFBYSxHQUFFQyxLQUFLLEdBQUUsR0FBR1YsK0RBQVEsRUFBRTtJQUN0RDtJQVNBO1FBQ0VjLENBQUMsQ0FBQ0M7UUFFRixJQUFJUDtZQUNGO2dCQUNFUztnQkFDQUMsT0FBTyxFQUFFVixTQUFTLENBQUNVLE9BQU87Z0JBQzFCQyxJQUFJLEVBQUVwQjtnQkFDTnFCLEVBQUUsRUFBRUMsSUFBSSxDQUFDQzthQUNWO1lBRURWLFdBQVcsQ0FBQyxDQUFDRDt1QkFBaUJBLFFBQVE7b0JBQUVLLElBQUk7aUJBQUM7WUFBQSxDQUFDLENBQUM7WUFDL0NPO1lBQ0FiLEtBQUssRUFBRSxDQUFDO1NBQ1QsTUFBTTtZQUNMZSxLQUFLLENBQUM7U0FDRztLQUNaO0lBRUQscUJBQ0U7a0JBQ0U7OzhCQUNFLFFBQUNyQixNQUFNOzs7Ozs7d0JBQTZCOzhCQUN4QixRQUFYc0IsSUFBSTs7c0NBQ0gsUUFBQ0MsWUFBWTs7OzsyRkFHVEcsR0FBSSxFQUFDOztvQ0FFTEUsRUFBQUEsNkRBQVEsQ0FBRXZCLGFBQWE7b0NBQ3ZCd0I7b0NBQ0lDLFVBQU0sNkRBQUMsRUFBTzs7Ozs7d0NBQ2xCOzhDQUNGLFFBQUNDO29DQUNDTixJQUFJLEVBQUMsTUFBTTtvQ0FDWEMsSUFBSSxFQUFDLFNBQVM7b0NBQ2RDLEtBQUssRUFBRXZCO29DQUNQd0IsUUFBUSxFQUFFdkI7b0NBQ1Z3QjtvQ0FDSUMsVUFBTSw2REFBQyxFQUFPOzs7Ozt3Q0FDbEI7Ozs7OztnQ0FDVzs7NEJBQ0FHLE9BQU8sRUFBRXhCO3NDQUFlLGlDQUFNOzs7OztnQ0FBZ0I7Ozs7Ozt3QkFDeEQ7Ozs7OztnQkFDRzs7Q0FHakI7QUFFRCxlQUFlUCxVQUFVLENBQUM7QUFFMUIsT0FBTyxNQUFNb0IsSUFBSSxHQUFHNUIsTUFBTSxDQUFDd0M7QUFHM0IsT0FBTyxNQUFNRixhQUFhO0FBRzFCLE9BQU8sTUFBTVI7QUFLYixPQUFPLE1BQU1PLE9BQU87QUFNcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1ibG9nLy4vcGFnZXMvRWRpdG9yUGFnZS5qcz9mZGFiIl0sInNvdXJjZXNDb250ZW50IjpbIi8v66mU7J24IO2ZlOuptOyXkOyEnCDquIDsk7DquLAg67KE7Yq87J2EIO2BtOumre2VmOuptCDsg4jroZwg7J6R7ISxLT7tmZXsnbgg7YG066at7IucIOuUlO2FjOydvCDtmZTrqbTsl5Ag66ek7ZWR65CoXHJcbi8v65SU7YWM7J28IO2OmOydtOyngOyXkOyEnCDtgbTrpq3tlZjrqbQg6riw7KG07JeQIOyekeyEseuQnCDrgrTsmqnsnYQg7JeQ65SU7YSwIO2OmOydtOyngOuhnCDrtojrn6zsmKTquLAr7IKt7KCcXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBnZXRJbnB1dERhdGUgZnJvbSAnLi4vc3JjL2hvb2tzL2dldElucHV0RGF0ZSc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9zcmMvaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCB7IFBvc3RMaXN0U3RhdGUgfSBmcm9tICcuLi9zcmMvcmVjb2lsL3JlY29pbCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGVyIH0gZnJvbSAnLi4vc3JjL0dsb2JhbFN0eWxlJztcclxuaW1wb3J0IHVzZU5hdmlnYXRlSG9tZSBmcm9tICcuLi9zcmMvaG9va3MvdXNlTmF2aWdhdGVIb21lJztcclxuXHJcbmZ1bmN0aW9uIEVkaXRvclBhZ2UoUG9zdElkKSB7XHJcbiAgY29uc3QgeyBpbnB1dFRleHQsIG9uSW5wdXRDaGFuZ2UsIHJlc2V0IH0gPSB1c2VJbnB1dCgpO1xyXG4gIC8qXHJcbiAge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgY29udGVudDogJycsXHJcbiAgICBkYXRlOiAnJyxcclxuICAgIG1pbGlzZWM6ICcnLFxyXG4gIH0sIOuCmOykkeyXkCDtg4DsnoXsnLzroZwg7KeA7KCVKi9cclxuICBjb25zdCBbcG9zdExpc3QsIHNldFBvc3RMaXN0XSA9IHVzZVJlY29pbFN0YXRlKFBvc3RMaXN0U3RhdGUpO1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZU5ld1Bvc3QgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChpbnB1dFRleHQpIHtcclxuICAgICAgY29uc3QgcG9zdCA9IHtcclxuICAgICAgICB0aXRsZTogaW5wdXRUZXh0LnRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6IGlucHV0VGV4dC5jb250ZW50LFxyXG4gICAgICAgIGRhdGU6IGdldElucHV0RGF0ZSgpLFxyXG4gICAgICAgIGlkOiBEYXRlLm5vdygpLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgc2V0UG9zdExpc3QoKHBvc3RMaXN0KSA9PiBbLi4ucG9zdExpc3QsIHBvc3RdKTtcclxuICAgICAgY29uc29sZS5sb2cocG9zdExpc3QpO1xyXG4gICAgICByZXNldCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoJ+yeheugpe2VmOyEuOyalCEnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZGVyPuu4lOuhnOq3uCDquIDsk7DquLA8L0hlYWRlcj5cclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxJbnB1dFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFRleHQudGl0bGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsoJzrqqlcIlxyXG4gICAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb250ZW50XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRUZXh0LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLrs7jrrLhcIlxyXG4gICAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0lucHV0V3JhcHBlcj5cclxuICAgICAgICAgIDxQb3N0aW5nQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5ld1Bvc3R9Pu2PrOyKpO2KuCDrk7HroZ08L1Bvc3RpbmdCdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRvclBhZ2U7XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBQb3N0aW5nQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBmb250LXNpemU6IDE1cHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVkIiwiZ2V0SW5wdXREYXRlIiwidXNlSW5wdXQiLCJ1c2VSZWNvaWxTdGF0ZSIsIlBvc3RMaXN0U3RhdGUiLCJDb250YWluZXIiLCJIZWFkZXIiLCJ1c2VOYXZpZ2F0ZUhvbWUiLCJFZGl0b3JQYWdlIiwiUG9zdElkIiwiaW5wdXRUZXh0Iiwib25JbnB1dENoYW5nZSIsInJlc2V0IiwicG9zdExpc3QiLCJzZXRQb3N0TGlzdCIsImhhbmRsZU5ld1Bvc3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwidGl0bGUiLCJjb250ZW50IiwiZGF0ZSIsImlkIiwiRGF0ZSIsIm5vdyIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsIkZvcm0iLCJJbnB1dFdyYXBwZXIiLCJUaXRsZSIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwic3BlbGxDaGVjayIsIkNvbnRlbnQiLCJQb3N0aW5nQnV0dG9uIiwib25DbGljayIsImZvcm0iLCJidXR0b24iLCJ0ZXh0YXJlYSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/EditorPage.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n//제목, 본문을 input으로 받고, 작성한 날짜 지정하기\n\nconst useInput = ()=>{\n    const { 0: inputText , 1: setInputText  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        title: \"\",\n        content: \"\"\n    });\n    const onInputChange = (e)=>{\n        setInputText({\n            ...inputText,\n            [e.target.name]: e.target.value\n        });\n    };\n    const reset = ()=>{\n        setInputText({\n            title: \"\",\n            content: \"\"\n        });\n    };\n    return {\n        inputText,\n        onInputChange,\n        reset\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInput);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlSW5wdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDaUM7QUFFakMsTUFBTUMsUUFBUSxHQUFHLElBQU07SUFDckIsTUFBTSxFQUpSLEdBSVNDLFNBQVMsR0FKbEIsR0FJb0JDLFlBQVksTUFBSUgsK0NBQVEsQ0FBQztRQUN6Q0ksS0FBSyxFQUFFLEVBQUU7UUFDVEMsT0FBTyxFQUFFLEVBQUU7S0FDWixDQUFDO0lBRUYsTUFBTUMsYUFBYSxHQUFHLENBQUNDLENBQUMsR0FBSztRQUMzQkosWUFBWSxDQUFDO1lBQUMsR0FBR0QsU0FBUztZQUFDLENBQUNLLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUYsQ0FBQyxDQUFDQyxNQUFNLENBQUNFLEtBQUs7U0FBRSxDQUFDLENBQUM7S0FDL0Q7SUFFRCxNQUFNQyxLQUFLLEdBQUcsSUFBTTtRQUNsQlIsWUFBWSxDQUFDO1lBQUNDLEtBQUssRUFBQyxFQUFFO1lBQUVDLE9BQU8sRUFBRSxFQUFFO1NBQUMsQ0FBQyxDQUFDO0tBQ3ZDO0lBRUQsT0FBTztRQUFFSCxTQUFTO1FBQUVJLGFBQWE7UUFBRUssS0FBSztLQUFFLENBQUM7Q0FDNUM7QUFDRCxpRUFBZVYsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYmxvZy8uL3NyYy9ob29rcy91c2VJbnB1dC5qcz85ZjQ3Il0sInNvdXJjZXNDb250ZW50IjpbIi8v7KCc66qpLCDrs7jrrLjsnYQgaW5wdXTsnLzroZwg67Cb6rOgLCDsnpHshLHtlZwg64Kg7KecIOyngOygle2VmOq4sFxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHVzZUlucHV0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpbnB1dFRleHQsIHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb250ZW50OiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25JbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRJbnB1dFRleHQoey4uLmlucHV0VGV4dCxbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgc2V0SW5wdXRUZXh0KHt0aXRsZTonJywgY29udGVudDogJyd9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBpbnB1dFRleHQsIG9uSW5wdXRDaGFuZ2UsIHJlc2V0IH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHVzZUlucHV0O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VJbnB1dCIsImlucHV0VGV4dCIsInNldElucHV0VGV4dCIsInRpdGxlIiwiY29udGVudCIsIm9uSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicmVzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useInput.js\n");

/***/ }),

/***/ "./src/hooks/useNavigateHome.js":
/*!**************************************!*\
  !*** ./src/hooks/useNavigateHome.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useNavigateHome)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useNavigateHome() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    const navigateHome = ()=>router.push(\"/MainPage\")\n    ;\n    navigateHome();\n    return navigateHome;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlTmF2aWdhdGVIb21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3QztBQUV6QixTQUFTQyxlQUFlLEdBQUU7SUFFckMsTUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUFFO0lBQzFCLE1BQU1HLFlBQVksR0FBRyxJQUFNRCxNQUFNLENBQUNFLElBQUksQ0FBQyxXQUFXLENBQUM7SUFBQTtJQUNuREQsWUFBWSxFQUFFLENBQUM7SUFFZixPQUFPQSxZQUFZLENBQUU7Q0FDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1ibG9nLy4vc3JjL2hvb2tzL3VzZU5hdmlnYXRlSG9tZS5qcz9kODUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU5hdmlnYXRlSG9tZSgpe1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgbmF2aWdhdGVIb21lID0gKCkgPT4gcm91dGVyLnB1c2goJy9NYWluUGFnZScpXHJcbiAgICBuYXZpZ2F0ZUhvbWUoKTtcclxuXHJcbiAgICByZXR1cm4obmF2aWdhdGVIb21lKTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZU5hdmlnYXRlSG9tZSIsInJvdXRlciIsIm5hdmlnYXRlSG9tZSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useNavigateHome.js\n");

/***/ }),

/***/ "./src/recoil/recoil.js":
/*!******************************!*\
  !*** ./src/recoil/recoil.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostListState\": () => (/* binding */ PostListState)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data */ \"./src/data/data.json\");\n\n\n/*\r\ntype:id,title,content,date,milsec\r\n*/ const PostListState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"PostListState\",\n    default: _data_data__WEBPACK_IMPORTED_MODULE_1__\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVjb2lsL3JlY29pbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThCO0FBQ0U7QUFFaEM7SUFJSUcsR0FBRyxFQUFDLGVBQWU7R0FDbkJDLENBQU8sRUFBQ0gsSUFBSTtDQUNmLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWJsb2cvLi9zcmMvcmVjb2lsL3JlY29pbC5qcz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b20gfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhL2RhdGEnO1xyXG5cclxuLypcclxudHlwZTppZCx0aXRsZSxjb250ZW50LGRhdGUsbWlsc2VjXHJcbiovXHJcbmV4cG9ydCBjb25zdCBQb3N0TGlzdFN0YXRlID0gYXRvbSh7XHJcbiAgICBrZXk6J1Bvc3RMaXN0U3RhdGUnLFxyXG4gICAgZGVmYXVsdDpkYXRhLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbImF0b20iLCJkYXRhIiwiUG9zdExpc3RTdGF0ZSIsImtleSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/recoil/recoil.js\n");

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