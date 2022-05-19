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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_hooks_getInputDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/hooks/getInputDate */ \"./src/hooks/getInputDate.js\");\n/* harmony import */ var _src_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/hooks/useInput */ \"./src/hooks/useInput.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/GlobalStyle */ \"./src/GlobalStyle.js\");\n/* harmony import */ var _src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/hooks/useNavigateHome */ \"./src/hooks/useNavigateHome.js\");\n/* harmony import */ var _src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/styles/EditorStyle */ \"./src/styles/EditorStyle.js\");\n\n\n\n\n\n\n\n\nfunction EditorPage() {\n    const navigateHome = (0,_src_hooks_useNavigateHome__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const { inputText , onInputChange , reset  } = (0,_src_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    /*\r\n  {\r\n    title: '',\r\n    content: '',\r\n    date: '',\r\n    milisec: '',\r\n  }, 나중에 타입으로 지정*/ const [postList1, setPostList] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_4__.PostListState);\n    const handleNewPost = (e)=>{\n        e.preventDefault();\n        if (inputText) {\n            const post = {\n                title: inputText.title,\n                content: inputText.content,\n                date: (0,_src_hooks_getInputDate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n                id: Date.now()\n            };\n            setPostList((postList)=>[\n                    ...postList,\n                    post\n                ]\n            );\n            console.log(postList1);\n            reset();\n        } else {\n            alert(\"\\uC785\\uB825\\uD558\\uC138\\uC694!\");\n        }\n        navigateHome();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.Header, {\n                    children: \"\\uBE14\\uB85C\\uADF8 \\uAE00\\uC4F0\\uAE30\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__.Form, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__.InputWrapper, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__.Title, {\n                                    type: \"text\",\n                                    name: \"title\",\n                                    value: inputText.title,\n                                    onChange: onInputChange,\n                                    placeholder: \"\\uC81C\\uBAA9\",\n                                    spellCheck: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__.Content, {\n                                    type: \"text\",\n                                    name: \"content\",\n                                    value: inputText.content,\n                                    onChange: onInputChange,\n                                    placeholder: \"\\uBCF8\\uBB38\",\n                                    spellCheck: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_EditorStyle__WEBPACK_IMPORTED_MODULE_7__.PostingButton, {\n                            onClick: handleNewPost,\n                            children: \"\\uD3EC\\uC2A4\\uD2B8 \\uB4F1\\uB85D\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9FZGl0b3JQYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBcUQ7QUFDUjtBQUNMO0FBQ2E7QUFDRTtBQUNJO0FBT3hCO0FBRW5DLFNBQVNZLFVBQVUsR0FBRztJQUNwQixNQUFNQyxZQUFZLEdBQUdQLHNFQUFlLEVBQUU7SUFDdEMsTUFBTSxFQUFFUSxTQUFTLEdBQUVDLGFBQWEsR0FBRUMsS0FBSyxHQUFFLEdBQUdmLCtEQUFRLEVBQUU7SUFDdEQ7SUFTQTtRQUNFbUIsQ0FBQyxDQUFDQztRQUVGLElBQUlQO1lBQ0Y7Z0JBQ0VTO2dCQUNBQyxPQUFPLEVBQUVWLFNBQVMsQ0FBQ1UsT0FBTztnQkFDMUJDLElBQUksRUFBRXpCO2dCQUNOMEIsRUFBRSxFQUFFQyxJQUFJLENBQUNDO2FBQ1Y7WUFFRFYsV0FBVyxDQUFDLENBQUNEO3VCQUFpQkEsUUFBUTtvQkFBRUssSUFBSTtpQkFBQztZQUFBLENBQUMsQ0FBQztZQUMvQ087WUFDQWIsS0FBSyxFQUFFLENBQUM7U0FDVCxNQUFNO1lBQ0xlLEtBQUssQ0FBQztTQUNHO1FBQ1hsQjtLQUNEO0lBRUQ7Ozs7Ozs7Ozt3QkFHMEM7OEJBQ3hCLFFBQVhOLElBQUk7O3NDQUNILFFBQUNJLFlBQVk7Ozs7MkZBR1RzQixDQUFBQSx5REFBSzs7b0NBRUxFLEVBQUFBLDZEQUFRLENBQUVwQixpRUFBQUEsQ0FBYTtvQ0FDdkJxQjtvQ0FDSUMsVUFBTSw2REFBQywyREFBTzs7Ozs7d0NBQ2xCOzhDQUNGLFFBQUMzQjtvQ0FDQ3NCLElBQUksRUFBQyxNQUFNO29DQUNYQyxJQUFJLEVBQUMsU0FBUztvQ0FDZEMsS0FBSyxFQUFFcEI7b0NBQ1BxQixRQUFRLEVBQUVwQjtvQ0FDVnFCO29DQUNJQyxVQUFNLDZEQUFDLDZEQUFPOzs7Ozt3Q0FDbEI7Ozs7OztnQ0FDVzs7NEJBQ0FDLE9BQU8sRUFBRW5CO3NDQUFlLGlDQUFNOzs7OztnQ0FBZ0I7Ozs7Ozt3QkFDeEQ7Ozs7OztnQkFDRzs7Q0FHakI7QUFFRCxlQUFlUCxVQUFVLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1ibG9nLy4vcGFnZXMvRWRpdG9yUGFnZS5qcz9mZGFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRJbnB1dERhdGUgZnJvbSAnLi4vc3JjL2hvb2tzL2dldElucHV0RGF0ZSc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9zcmMvaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCB7IFBvc3RMaXN0U3RhdGUgfSBmcm9tICcuLi9zcmMvcmVjb2lsL3JlY29pbCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGVyIH0gZnJvbSAnLi4vc3JjL0dsb2JhbFN0eWxlJztcclxuaW1wb3J0IHVzZU5hdmlnYXRlSG9tZSBmcm9tICcuLi9zcmMvaG9va3MvdXNlTmF2aWdhdGVIb21lJztcclxuaW1wb3J0IHtcclxuICBGb3JtLFxyXG4gIFBvc3RpbmdCdXR0b24sXHJcbiAgVGl0bGUsXHJcbiAgQ29udGVudCxcclxuICBJbnB1dFdyYXBwZXIsXHJcbn0gZnJvbSAnLi4vc3JjL3N0eWxlcy9FZGl0b3JTdHlsZSc7XHJcblxyXG5mdW5jdGlvbiBFZGl0b3JQYWdlKCkge1xyXG4gIGNvbnN0IG5hdmlnYXRlSG9tZSA9IHVzZU5hdmlnYXRlSG9tZSgpO1xyXG4gIGNvbnN0IHsgaW5wdXRUZXh0LCBvbklucHV0Q2hhbmdlLCByZXNldCB9ID0gdXNlSW5wdXQoKTtcclxuICAvKlxyXG4gIHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgZGF0ZTogJycsXHJcbiAgICBtaWxpc2VjOiAnJyxcclxuICB9LCDrgpjspJHsl5Ag7YOA7J6F7Jy866GcIOyngOyglSovXHJcbiAgY29uc3QgW3Bvc3RMaXN0LCBzZXRQb3N0TGlzdF0gPSB1c2VSZWNvaWxTdGF0ZShQb3N0TGlzdFN0YXRlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV3UG9zdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKGlucHV0VGV4dCkge1xyXG4gICAgICBjb25zdCBwb3N0ID0ge1xyXG4gICAgICAgIHRpdGxlOiBpbnB1dFRleHQudGl0bGUsXHJcbiAgICAgICAgY29udGVudDogaW5wdXRUZXh0LmNvbnRlbnQsXHJcbiAgICAgICAgZGF0ZTogZ2V0SW5wdXREYXRlKCksXHJcbiAgICAgICAgaWQ6IERhdGUubm93KCksXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzZXRQb3N0TGlzdCgocG9zdExpc3QpID0+IFsuLi5wb3N0TGlzdCwgcG9zdF0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhwb3N0TGlzdCk7XHJcbiAgICAgIHJlc2V0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydCgn7J6F66Cl7ZWY7IS47JqUIScpO1xyXG4gICAgfVxyXG4gICAgbmF2aWdhdGVIb21lKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEhlYWRlcj7ruJTroZzqt7gg6riA7JOw6riwPC9IZWFkZXI+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8SW5wdXRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRUZXh0LnRpdGxlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7KCc66qpXCJcclxuICAgICAgICAgICAgICBzcGVsbENoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29udGVudFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VGV4dC5jb250ZW50fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67O466y4XCJcclxuICAgICAgICAgICAgICBzcGVsbENoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9JbnB1dFdyYXBwZXI+XHJcbiAgICAgICAgICA8UG9zdGluZ0J1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXdQb3N0fT7tj6zsiqTtirgg65Ox66GdPC9Qb3N0aW5nQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JQYWdlO1xyXG4iXSwibmFtZXMiOlsiZ2V0SW5wdXREYXRlIiwidXNlSW5wdXQiLCJ1c2VSZWNvaWxTdGF0ZSIsIlBvc3RMaXN0U3RhdGUiLCJDb250YWluZXIiLCJIZWFkZXIiLCJ1c2VOYXZpZ2F0ZUhvbWUiLCJGb3JtIiwiUG9zdGluZ0J1dHRvbiIsIlRpdGxlIiwiQ29udGVudCIsIklucHV0V3JhcHBlciIsIkVkaXRvclBhZ2UiLCJuYXZpZ2F0ZUhvbWUiLCJpbnB1dFRleHQiLCJvbklucHV0Q2hhbmdlIiwicmVzZXQiLCJwb3N0TGlzdCIsInNldFBvc3RMaXN0IiwiaGFuZGxlTmV3UG9zdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ0aXRsZSIsImNvbnRlbnQiLCJkYXRlIiwiaWQiLCJEYXRlIiwibm93IiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzcGVsbENoZWNrIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/EditorPage.js\n");

/***/ }),

/***/ "./src/GlobalStyle.js":
/*!****************************!*\
  !*** ./src/GlobalStyle.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BlogHeader\": () => (/* binding */ BlogHeader),\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`\r\n    \r\n    width : 1000px;\r\n    margin 0 auto;\r\n    `;\nconst Header = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().header)`\r\n\r\n    font-weight:bold;\r\n    font-size:30px;\r\n    margin:0.5rem;\r\n    `;\nconst BlogHeader = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`\r\n    border-radius:10px;\r\n    height:70px;\r\n    background : linear-gradient(white, blue);\r\n    font-size:30px;\r\n\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvR2xvYmFsU3R5bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFFaEMsTUFBTUMsU0FBUyxHQUFHRCw4REFBVSxDQUFDO0FBS3BDO0FBTUEsT0FBTyxNQUFNSyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWJsb2cvLi9zcmMvR2xvYmFsU3R5bGUuanM/NTVjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgXHJcbiAgICB3aWR0aCA6IDEwMDBweDtcclxuICAgIG1hcmdpbiAwIGF1dG87XHJcbiAgICBgXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG5cclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LXNpemU6MzBweDtcclxuICAgIG1hcmdpbjowLjVyZW07XHJcbiAgICBgXHJcbmV4cG9ydCBjb25zdCBCbG9nSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIGhlaWdodDo3MHB4O1xyXG4gICAgYmFja2dyb3VuZCA6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgYmx1ZSk7XHJcbiAgICBmb250LXNpemU6MzBweDtcclxuXHJcbmAiXSwibmFtZXMiOlsic3R5bGVkIiwiQ29udGFpbmVyIiwiZGl2IiwiSGVhZGVyIiwiaGVhZGVyIiwiQmxvZ0hlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/GlobalStyle.js\n");

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

module.exports = JSON.parse('[{"title":"What is Next.js?","date":"2022.05.16.","id":1519211809934,"content":"Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application."},{"title":"What is React?","date":"2022.05.17.","id":1519211810362,"content":"React is a JavaScript library for building interactive user interfaces. By user interfaces, we mean the elements that users see and interact with on-screen."},{"title":"How Next.js Works","date":"2022.05.18.","id":1519211811670,"content":"The environment where your code runs: Development vs. Production. When your code runs: Build Time vs. Runtime. Where rendering happens: Client vs. Server"},{"title":"마지막 글","date":"2022.05.19.","id":1519129853500,"content":"두비두밥"}]');

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