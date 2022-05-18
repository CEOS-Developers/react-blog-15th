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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_hooks_getInputDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/hooks/getInputDate */ \"./src/hooks/getInputDate.js\");\n/* harmony import */ var _src_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/hooks/useInput */ \"./src/hooks/useInput.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n/* harmony import */ var _src_GlobalStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/GlobalStyle */ \"./src/GlobalStyle.js\");\n\n//메인 화면에서 글쓰기 버튼을 클릭하면 새로 작성->확인 클릭시 디테일 화면에 매핑됨\n//디테일 페이지에서 클릭하면 기존에 작성된 내용을 에디터 페이지로 불러오기+삭제\n\n\n\n\n\n\n\n\nfunction EditorPage() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const navigateHome = ()=>router.push(\"/MainPage\")\n    ;\n    const { inputText , onInputChange , reset  } = (0,_src_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    /*\r\n  {\r\n    title: '',\r\n    content: '',\r\n    date: '',\r\n    milisec: '',\r\n  }, 나중에 타입으로 지정*/ const [postList1, setPostList] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_7__.PostListState);\n    const handleNewPost = (e)=>{\n        e.preventDefault();\n        if (inputText) {\n            const post = {\n                title: inputText.title,\n                content: inputText.content,\n                date: (0,_src_hooks_getInputDate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n                id: Date.now()\n            };\n            setPostList((postList)=>[\n                    ...postList,\n                    post\n                ]\n            );\n            console.log(postList1);\n            reset();\n        } else {\n            alert(\"\\uC785\\uB825\\uD558\\uC138\\uC694!\");\n        }\n        navigateHome();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_8__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_GlobalStyle__WEBPACK_IMPORTED_MODULE_8__.Header, {\n                    children: \"\\uBE14\\uB85C\\uADF8 \\uAE00\\uC4F0\\uAE30\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InputWrapper, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                                    type: \"text\",\n                                    name: \"title\",\n                                    value: inputText.title,\n                                    onChange: onInputChange,\n                                    placeholder: \"\\uC81C\\uBAA9\",\n                                    spellCheck: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                                    type: \"text\",\n                                    name: \"content\",\n                                    value: inputText.content,\n                                    onChange: onInputChange,\n                                    placeholder: \"\\uBCF8\\uBB38\",\n                                    spellCheck: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostingButton, {\n                            onClick: handleNewPost,\n                            children: \"\\uD3EC\\uC2A4\\uD2B8 \\uB4F1\\uB85D\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\EditorPage.js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorPage);\nconst Form = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().form)`\r\n  padding: 10px;\r\n`;\nconst PostingButton = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().button)`\r\n  font-size: 15px;\r\n`;\nconst Title = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().textarea)`\r\n  font-size: 20px;\r\n  border-bottom: 1px solid grey;\r\n  padding: 5px;\r\n`;\nconst Content = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().textarea)`\r\n  font-size: 15px;\r\n  border-bottom: 1px solid grey;\r\n  padding: 5px;\r\n  height: 300px;\r\n`;\nconst InputWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`\r\n  display: flex;\r\n  flex-direction: column;\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9FZGl0b3JQYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBSEE7QUFDQTtBQUVpQztBQUNPO0FBQ0Q7QUFDYztBQUNSO0FBQ0w7QUFDYTtBQUNFO0FBRXZELFNBQVNTLFVBQVUsR0FBRztJQUNwQixNQUFNQyxNQUFNLEdBQUdULHNEQUFTLEVBQUU7SUFDMUIsTUFBTVUsWUFBWSxHQUFHLElBQU1ELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUFDO0lBQ3BELE1BQU0sRUFBRUMsU0FBUyxHQUFFQyxhQUFhLEdBQUVDLEtBQUssR0FBRSxHQUFHWCwrREFBUSxFQUFFO0lBQ3REO0lBU0E7UUFDRWUsQ0FBQyxDQUFDQztRQUVGLElBQUlQO1lBQ0Y7Z0JBQ0VTO2dCQUNBQyxPQUFPLEVBQUVWLFNBQVMsQ0FBQ1UsT0FBTztnQkFDMUJDLElBQUksRUFBRXJCO2dCQUNOc0IsRUFBRSxFQUFFQyxJQUFJLENBQUNDO2FBQ1Y7WUFFRFYsV0FBVyxDQUFDLENBQUNEO3VCQUFpQkEsUUFBUTtvQkFBRUssSUFBSTtpQkFBQztZQUFBLENBQUMsQ0FBQztZQUMvQ087WUFDQWIsS0FBSyxFQUFFLENBQUM7U0FDVCxNQUFNO1lBQ0xlLEtBQUssQ0FBQztTQUNHO1FBQ1huQjtLQUNEO0lBRUQ7Ozs7Ozs7Ozt3QkFHMEM7OEJBQ3hCLFFBQVhvQixJQUFJOztzQ0FDSCxRQUFDQyxZQUFZOzs7OzJGQUdURyxHQUFJLEVBQUM7O29DQUVMRSxFQUFBQSw2REFBUSxDQUFFdkIsYUFBYTtvQ0FDdkJ3QjtvQ0FDSUMsVUFBTSw2REFBQyxFQUFPOzs7Ozt3Q0FDbEI7OENBQ0YsUUFBQ0M7b0NBQ0NOLElBQUksRUFBQyxNQUFNO29DQUNYQyxJQUFJLEVBQUMsU0FBUztvQ0FDZEMsS0FBSyxFQUFFdkI7b0NBQ1B3QixRQUFRLEVBQUV2QjtvQ0FDVndCO29DQUNJQyxVQUFNLDZEQUFDLEVBQU87Ozs7O3dDQUNsQjs7Ozs7O2dDQUNXOzs0QkFDQUcsT0FBTyxFQUFFeEI7c0NBQWUsaUNBQU07Ozs7O2dDQUFnQjs7Ozs7O3dCQUN4RDs7Ozs7O2dCQUNHOztDQUdqQjtBQUVELGVBQWVULFVBQVUsQ0FBQztBQUUxQixNQUFNc0IsSUFBSSxHQUFHN0IsTUFBTSxDQUFDeUMsSUFBSSxDQUFDO0FBR3pCLE1BQU1GLGFBQWEsR0FBR3ZDO0FBR3RCLE1BQU0rQixLQUFLLEdBQUcvQjtBQUtkLE1BQU1zQyxPQUFPLEdBQUd0QyxNQUFNO0FBTXRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYmxvZy8uL3BhZ2VzL0VkaXRvclBhZ2UuanM/ZmRhYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL+uplOyduCDtmZTrqbTsl5DshJwg6riA7JOw6riwIOuyhO2KvOydhCDtgbTrpq3tlZjrqbQg7IOI66GcIOyekeyEsS0+7ZmV7J24IO2BtOumreyLnCDrlJTthYzsnbwg7ZmU66m07JeQIOunpO2VkeuQqFxyXG4vL+uUlO2FjOydvCDtjpjsnbTsp4Dsl5DshJwg7YG066at7ZWY66m0IOq4sOyhtOyXkCDsnpHshLHrkJwg64K07Jqp7J2EIOyXkOuUlO2EsCDtjpjsnbTsp4DroZwg67aI65+s7Jik6riwK+yCreygnFxyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBnZXRJbnB1dERhdGUgZnJvbSAnLi4vc3JjL2hvb2tzL2dldElucHV0RGF0ZSc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9zcmMvaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCB7IFBvc3RMaXN0U3RhdGUgfSBmcm9tICcuLi9zcmMvcmVjb2lsL3JlY29pbCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGVyIH0gZnJvbSAnLi4vc3JjL0dsb2JhbFN0eWxlJztcclxuXHJcbmZ1bmN0aW9uIEVkaXRvclBhZ2UoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgbmF2aWdhdGVIb21lID0gKCkgPT4gcm91dGVyLnB1c2goJy9NYWluUGFnZScpO1xyXG4gIGNvbnN0IHsgaW5wdXRUZXh0LCBvbklucHV0Q2hhbmdlLCByZXNldCB9ID0gdXNlSW5wdXQoKTtcclxuICAvKlxyXG4gIHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgZGF0ZTogJycsXHJcbiAgICBtaWxpc2VjOiAnJyxcclxuICB9LCDrgpjspJHsl5Ag7YOA7J6F7Jy866GcIOyngOyglSovXHJcbiAgY29uc3QgW3Bvc3RMaXN0LCBzZXRQb3N0TGlzdF0gPSB1c2VSZWNvaWxTdGF0ZShQb3N0TGlzdFN0YXRlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV3UG9zdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKGlucHV0VGV4dCkge1xyXG4gICAgICBjb25zdCBwb3N0ID0ge1xyXG4gICAgICAgIHRpdGxlOiBpbnB1dFRleHQudGl0bGUsXHJcbiAgICAgICAgY29udGVudDogaW5wdXRUZXh0LmNvbnRlbnQsXHJcbiAgICAgICAgZGF0ZTogZ2V0SW5wdXREYXRlKCksXHJcbiAgICAgICAgaWQ6IERhdGUubm93KCksXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzZXRQb3N0TGlzdCgocG9zdExpc3QpID0+IFsuLi5wb3N0TGlzdCwgcG9zdF0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhwb3N0TGlzdCk7XHJcbiAgICAgIHJlc2V0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydCgn7J6F66Cl7ZWY7IS47JqUIScpO1xyXG4gICAgfVxyXG4gICAgbmF2aWdhdGVIb21lKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEhlYWRlcj7ruJTroZzqt7gg6riA7JOw6riwPC9IZWFkZXI+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8SW5wdXRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRUZXh0LnRpdGxlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7KCc66qpXCJcclxuICAgICAgICAgICAgICBzcGVsbENoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29udGVudFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VGV4dC5jb250ZW50fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67O466y4XCJcclxuICAgICAgICAgICAgICBzcGVsbENoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9JbnB1dFdyYXBwZXI+XHJcbiAgICAgICAgICA8UG9zdGluZ0J1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXdQb3N0fT7tj6zsiqTtirgg65Ox66GdPC9Qb3N0aW5nQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JQYWdlO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbmA7XHJcbmNvbnN0IFBvc3RpbmdCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuYDtcclxuY29uc3QgVGl0bGUgPSBzdHlsZWQudGV4dGFyZWFgXHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuYDtcclxuY29uc3QgQ29udGVudCA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbmA7XHJcbmNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJzdHlsZWQiLCJnZXRJbnB1dERhdGUiLCJ1c2VJbnB1dCIsInVzZVJlY29pbFN0YXRlIiwiUG9zdExpc3RTdGF0ZSIsIkNvbnRhaW5lciIsIkhlYWRlciIsIkVkaXRvclBhZ2UiLCJyb3V0ZXIiLCJuYXZpZ2F0ZUhvbWUiLCJwdXNoIiwiaW5wdXRUZXh0Iiwib25JbnB1dENoYW5nZSIsInJlc2V0IiwicG9zdExpc3QiLCJzZXRQb3N0TGlzdCIsImhhbmRsZU5ld1Bvc3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwidGl0bGUiLCJjb250ZW50IiwiZGF0ZSIsImlkIiwiRGF0ZSIsIm5vdyIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsIkZvcm0iLCJJbnB1dFdyYXBwZXIiLCJUaXRsZSIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwic3BlbGxDaGVjayIsIkNvbnRlbnQiLCJQb3N0aW5nQnV0dG9uIiwib25DbGljayIsImZvcm0iLCJidXR0b24iLCJ0ZXh0YXJlYSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/EditorPage.js\n");

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

/***/ "./src/recoil/recoil.js":
/*!******************************!*\
  !*** ./src/recoil/recoil.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostListState\": () => (/* binding */ PostListState)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data.json */ \"./src/data/data.json\");\n\n\n/*\r\ntype:id,title,content,date,milsec\r\n*/ const PostListState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"PostListState\",\n    default: _data_data_json__WEBPACK_IMPORTED_MODULE_1__\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVjb2lsL3JlY29pbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThCO0FBQ007QUFFcEM7SUFJSUcsR0FBRyxFQUFDLGVBQWU7R0FDbkJDLENBQU8sRUFBQ0gsSUFBSTtDQUNmLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWJsb2cvLi9zcmMvcmVjb2lsL3JlY29pbC5qcz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b20gfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhL2RhdGEuanNvbidcclxuXHJcbi8qXHJcbnR5cGU6aWQsdGl0bGUsY29udGVudCxkYXRlLG1pbHNlY1xyXG4qL1xyXG5leHBvcnQgY29uc3QgUG9zdExpc3RTdGF0ZSA9IGF0b20oe1xyXG4gICAga2V5OidQb3N0TGlzdFN0YXRlJyxcclxuICAgIGRlZmF1bHQ6ZGF0YSxcclxufSk7XHJcblxyXG4iXSwibmFtZXMiOlsiYXRvbSIsImRhdGEiLCJQb3N0TGlzdFN0YXRlIiwia2V5IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/recoil/recoil.js\n");

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