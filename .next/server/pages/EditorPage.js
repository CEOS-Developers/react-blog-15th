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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_hooks_getInputDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/hooks/getInputDate */ \"./src/hooks/getInputDate.js\");\n/* harmony import */ var _src_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/hooks/useInput */ \"./src/hooks/useInput.js\");\n\n//메인 화면에서 글쓰기 버튼을 클릭하면 새로 작성->확인 클릭시 디테일 화면에 매핑됨\n//디테일 페이지에서 클릭하면 기존에 작성된 내용을 에디터 페이지로 불러오기+삭제\n\n\n\n\nfunction EditorPage() {\n    const { inputText , onInputChange , reset  } = (0,_src_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const { 0: postList , 1: setPostList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            title: \"\",\n            content: \"\",\n            date: \"\",\n            milisec: \"\"\n        }, \n    ]);\n    const handleNewPost = (e)=>{\n        e.preventDefault();\n        if (inputText) {\n            const post = {\n                title: inputText.title,\n                content: inputText.content,\n                date: (0,_src_hooks_getInputDate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n                milisec: Date.now().toString()\n            };\n            setPostList([\n                ...postList,\n                post\n            ]);\n            console.log(postList);\n            reset();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                    children: \"\\uBE14\\uB85C\\uADF8 \\uAE00\\uC4F0\\uAE30\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                            type: \"text\",\n                            name: \"title\",\n                            value: inputText.title,\n                            onChange: onInputChange,\n                            placeholder: \"\\uC81C\\uBAA9\",\n                            spellCheck: \"false\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                            type: \"text\",\n                            name: \"content\",\n                            value: inputText.content,\n                            onChange: onInputChange,\n                            placeholder: \"\\uBCF8\\uBB38\",\n                            spellCheck: \"false\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostingButton, {\n                            onClick: handleNewPost,\n                            children: \"\\uD3EC\\uC2A4\\uD2B8 \\uC218\\uC815\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorPage);\nconst Container = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`\r\n    \r\nwidth : 1000px;\r\nmargin 0 auto;\r\n`;\nconst Header = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().header)`\r\n  font-size: 30px;\r\n`;\nconst Form = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().form)`\r\n  padding: 10px;\r\n`;\nconst PostingButton = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().button)`\r\n  font-size: 15px;\r\n`;\nconst Title = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().input)`\r\n  font-size: 15px;\r\n  border-bottom: 1px solid grey;\r\n  padding: 5px;\r\n`;\nconst Content = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().textarea)`\r\n  font-size: 15px;\r\n  border-bottom: 1px solid grey;\r\n  padding: 5px;\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9FZGl0b3JQYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBO0FBSEE7QUFDQTtBQUVpQztBQUNNO0FBQ2M7QUFDUjtBQUU3QyxTQUFTSSxVQUFVLEdBQUc7SUFDcEIsTUFBTSxFQUFFQyxTQUFTLEdBQUVDLGFBQWEsR0FBRUMsS0FBSyxHQUFFLEdBQUdKLCtEQUFRLEVBQUU7SUFFdEQsTUFBTSxFQVhSLEdBV1NLLFFBQVEsR0FYakIsR0FXbUJDLFdBQVcsTUFBSVQsK0NBQVEsQ0FBQztRQUN2QztZQUNFVSxLQUFLLEVBQUUsRUFBRTtZQUNUQyxPQUFPLEVBQUUsRUFBRTtZQUNYQyxJQUFJLEVBQUUsRUFBRTtZQUNSQyxPQUFPLEVBQUUsRUFBRTtTQUNaO0tBQ0YsQ0FBQztJQUVGLE1BQU1DLGFBQWEsR0FBRyxDQUFDQyxDQUFDLEdBQUs7UUFDM0JBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFFbkIsSUFBSVgsU0FBUyxFQUFFO1lBQ2IsTUFBTVksSUFBSSxHQUFHO2dCQUNYUCxLQUFLLEVBQUVMLFNBQVMsQ0FBQ0ssS0FBSztnQkFDdEJDLE9BQU8sRUFBRU4sU0FBUyxDQUFDTSxPQUFPO2dCQUMxQkMsSUFBSSxFQUFFVixtRUFBWSxFQUFFO2dCQUNwQlcsT0FBTyxFQUFFSyxJQUFJLENBQUNDLEdBQUcsRUFBRSxDQUFDQyxRQUFRLEVBQUU7YUFDL0I7WUFFRFgsV0FBVyxDQUFDO21CQUFJRCxRQUFRO2dCQUFFUyxJQUFJO2FBQUMsQ0FBQyxDQUFDO1lBQ2pDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2QsUUFBUSxDQUFDLENBQUM7WUFDdEJELEtBQUssRUFBRSxDQUFDO1NBQ1Q7S0FDRjtJQUVELHFCQUNFO2tCQUNFLDRFQUFDZ0IsU0FBUzs7OEJBQ1IsOERBQUNDLE1BQU07OEJBQUMsdUNBQU87Ozs7O3dCQUFxQjs4QkFDeEIsOERBQVhDLElBQUk7O3NDQUNILDhEQUFDQyxLQUFLOzRCQUNKQyxJQUFJLEVBQUMsTUFBTTs0QkFDWEMsSUFBSSxFQUFDLE9BQU87NEJBQ1pDLEtBQUssRUFBRXhCLFNBQVMsQ0FBQ0ssS0FBSzs0QkFDdEJvQixRQUFRLEVBQUV4QixhQUFhOzRCQUN2QnlCLFdBQVcsRUFBQyxjQUFJOzRCQUNaQyxVQUFNLEVBQUMsT0FBTzs7Ozs7Z0NBQ2xCO3NDQUNGLDhEQUFDQyxPQUFPOzRCQUNOTixJQUFJLEVBQUMsTUFBTTs0QkFDWEMsSUFBSSxFQUFDLFNBQVM7NEJBQ2RDLEtBQUssRUFBRXhCLFNBQVMsQ0FBQ00sT0FBTzs0QkFDeEJtQixRQUFRLEVBQUV4QixhQUFhOzRCQUN2QnlCLFdBQVcsRUFBQyxjQUFJOzRCQUNaQyxVQUFNLEVBQUMsT0FBTzs7Ozs7Z0NBQ2xCO3NDQUNGLDhEQUFDRSxhQUFhOzRCQUFDQyxPQUFPLEVBQUVyQixhQUFhO3NDQUFFLGlDQUFNOzs7OztnQ0FBZ0I7Ozs7Ozt3QkFDeEQ7Ozs7OztnQkFDRztxQkFDWCxDQUNIO0NBQ0g7QUFFRCxpRUFBZVYsVUFBVSxFQUFDO0FBRTFCLE1BQU1tQixTQUFTLEdBQUd0Qiw4REFBVSxDQUFDO0FBSzdCO0FBSUEsTUFBTXdCLElBQUksR0FBR3hCO0FBR2IsTUFBTWlDO0FBR047QUFLQSxNQUFNRCxPQUFPLG1FQUFVUSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWJsb2cvLi9wYWdlcy9FZGl0b3JQYWdlLmpzP2ZkYWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy/rqZTsnbgg7ZmU66m07JeQ7IScIOq4gOyTsOq4sCDrsoTtirzsnYQg7YG066at7ZWY66m0IOyDiOuhnCDsnpHshLEtPu2ZleyduCDtgbTrpq3si5wg65SU7YWM7J28IO2ZlOuptOyXkCDrp6TtlZHrkKhcclxuLy/rlJTthYzsnbwg7Y6Y7J207KeA7JeQ7IScIO2BtOumre2VmOuptCDquLDsobTsl5Ag7J6R7ISx65CcIOuCtOyaqeydhCDsl5DrlJTthLAg7Y6Y7J207KeA66GcIOu2iOufrOyYpOq4sCvsgq3soJxcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGdldElucHV0RGF0ZSBmcm9tICcuLi9zcmMvaG9va3MvZ2V0SW5wdXREYXRlJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL3NyYy9ob29rcy91c2VJbnB1dCc7XHJcblxyXG5mdW5jdGlvbiBFZGl0b3JQYWdlKCkge1xyXG4gIGNvbnN0IHsgaW5wdXRUZXh0LCBvbklucHV0Q2hhbmdlLCByZXNldCB9ID0gdXNlSW5wdXQoKTtcclxuXHJcbiAgY29uc3QgW3Bvc3RMaXN0LCBzZXRQb3N0TGlzdF0gPSB1c2VTdGF0ZShbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgY29udGVudDogJycsXHJcbiAgICAgIGRhdGU6ICcnLFxyXG4gICAgICBtaWxpc2VjOiAnJyxcclxuICAgIH0sXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5ld1Bvc3QgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChpbnB1dFRleHQpIHtcclxuICAgICAgY29uc3QgcG9zdCA9IHtcclxuICAgICAgICB0aXRsZTogaW5wdXRUZXh0LnRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6IGlucHV0VGV4dC5jb250ZW50LFxyXG4gICAgICAgIGRhdGU6IGdldElucHV0RGF0ZSgpLFxyXG4gICAgICAgIG1pbGlzZWM6IERhdGUubm93KCkudG9TdHJpbmcoKSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNldFBvc3RMaXN0KFsuLi5wb3N0TGlzdCwgcG9zdF0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhwb3N0TGlzdCk7XHJcbiAgICAgIHJlc2V0KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEhlYWRlcj7ruJTroZzqt7gg6riA7JOw6riwPC9IZWFkZXI+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRUZXh0LnRpdGxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsoJzrqqlcIlxyXG4gICAgICAgICAgICBzcGVsbENoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDb250ZW50XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRUZXh0LmNvbnRlbnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuzuOusuFwiXHJcbiAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFBvc3RpbmdCdXR0b24gb25DbGljaz17aGFuZGxlTmV3UG9zdH0+7Y+s7Iqk7Yq4IOyImOyglTwvUG9zdGluZ0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yUGFnZTtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBcclxud2lkdGggOiAxMDAwcHg7XHJcbm1hcmdpbiAwIGF1dG87XHJcbmA7XHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbmA7XHJcbmNvbnN0IFBvc3RpbmdCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuYDtcclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaW5wdXRgXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuYDtcclxuY29uc3QgQ29udGVudCA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG5gO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZWQiLCJnZXRJbnB1dERhdGUiLCJ1c2VJbnB1dCIsIkVkaXRvclBhZ2UiLCJpbnB1dFRleHQiLCJvbklucHV0Q2hhbmdlIiwicmVzZXQiLCJwb3N0TGlzdCIsInNldFBvc3RMaXN0IiwidGl0bGUiLCJjb250ZW50IiwiZGF0ZSIsIm1pbGlzZWMiLCJoYW5kbGVOZXdQb3N0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJDb250YWluZXIiLCJIZWFkZXIiLCJGb3JtIiwiVGl0bGUiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNwZWxsQ2hlY2siLCJDb250ZW50IiwiUG9zdGluZ0J1dHRvbiIsIm9uQ2xpY2siLCJkaXYiLCJoZWFkZXIiLCJmb3JtIiwiYnV0dG9uIiwiaW5wdXQiLCJ0ZXh0YXJlYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/EditorPage.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n//제목, 본문을 input으로 받고, 작성한 날짜 지정하기\n\nconst useInput = ()=>{\n    const { 0: inputText , 1: setInputText  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        title: \"\",\n        content: \"\"\n    });\n    const onInputChange = (e)=>{\n        setInputText({\n            [e.target.name]: e.target.value\n        });\n    };\n    const reset = ()=>{\n        setInputText(\"\");\n    };\n    return {\n        inputText,\n        onInputChange,\n        reset\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInput);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlSW5wdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDaUM7QUFFakMsTUFBTUMsUUFBUSxHQUFHLElBQU07SUFDckIsTUFBTSxFQUpSLEdBSVNDLFNBQVMsR0FKbEIsR0FJb0JDLFlBQVksTUFBSUgsK0NBQVEsQ0FBQztRQUN6Q0ksS0FBSyxFQUFFLEVBQUU7UUFDVEMsT0FBTyxFQUFFLEVBQUU7S0FDWixDQUFDO0lBRUYsTUFBTUMsYUFBYSxHQUFHLENBQUNDLENBQUMsR0FBSztRQUMzQkosWUFBWSxDQUFDO1lBQUUsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRixDQUFDLENBQUNDLE1BQU0sQ0FBQ0UsS0FBSztTQUFFLENBQUMsQ0FBQztLQUNuRDtJQUVELE1BQU1DLEtBQUssR0FBRyxJQUFNO1FBQ2xCUixZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbEI7SUFFRCxPQUFPO1FBQUVELFNBQVM7UUFBRUksYUFBYTtRQUFFSyxLQUFLO0tBQUUsQ0FBQztDQUM1QztBQUNELGlFQUFlVixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1ibG9nLy4vc3JjL2hvb2tzL3VzZUlucHV0LmpzPzlmNDciXSwic291cmNlc0NvbnRlbnQiOlsiLy/soJzrqqksIOuzuOusuOydhCBpbnB1dOycvOuhnCDrsJvqs6AsIOyekeyEse2VnCDrgqDsp5wg7KeA7KCV7ZWY6riwXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXNlSW5wdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lucHV0VGV4dCwgc2V0SW5wdXRUZXh0XSA9IHVzZVN0YXRlKHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvbnRlbnQ6ICcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvbklucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldElucHV0VGV4dCh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRJbnB1dFRleHQoJycpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGlucHV0VGV4dCwgb25JbnB1dENoYW5nZSwgcmVzZXQgfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgdXNlSW5wdXQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUlucHV0IiwiaW5wdXRUZXh0Iiwic2V0SW5wdXRUZXh0IiwidGl0bGUiLCJjb250ZW50Iiwib25JbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJyZXNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useInput.js\n");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

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