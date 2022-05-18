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
exports.id = "pages/DetailedPost/[id]";
exports.ids = ["pages/DetailedPost/[id]"];
exports.modules = {

/***/ "./pages/DetailedPost/[id].js":
/*!************************************!*\
  !*** ./pages/DetailedPost/[id].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n\n\n\n\nfunction DetailContainer() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query;\n    const numbering = Number(id);\n    const currentPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__.PostListState);\n    const [postObj] = currentPostList.filter((post)=>post.id === numbering\n    ); //id를 이용해서 post filter\n    const title = postObj.title; //각 내용들 변수에 저장\n    const content = postObj.content;\n    const date = postObj.date;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: date\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedPost\\\\[id].js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailContainer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EZXRhaWxlZFBvc3QvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ0E7QUFDZ0I7QUFFeEQsU0FBU0csZUFBZSxHQUFHO0lBQ3pCLE1BQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUMxQixNQUFNLEVBQUVLLEVBQUUsR0FBRSxHQUFHRCxNQUFNLENBQUNFLEtBQUs7SUFDM0IsTUFBTUMsU0FBUyxHQUFHQyxNQUFNLENBQUNILEVBQUUsQ0FBQztJQUM1QixNQUFNSSxlQUFlLEdBQUdSLHNEQUFjLENBQUNDLDZEQUFhLENBQUM7SUFFckQsTUFBTSxDQUFDUSxPQUFPLENBQUMsR0FBR0QsZUFBZSxDQUFDRSxNQUFNLENBQUMsQ0FBQ0MsSUFBSSxHQUFLQSxJQUFJLENBQUNQLEVBQUUsS0FBS0UsU0FBUztJQUFBLENBQUMsRUFBRTtJQUVqRSxNQUFKTSxLQUFLLEdBQUdILE9BQU8sQ0FBQ0csS0FBSyxFQUFFO0lBQzdCLE1BQU1DLE9BQU8sR0FBR0osT0FBTyxDQUFDSSxPQUFPO0lBQy9CLE1BQU1DLElBQUksR0FBR0wsT0FBTyxDQUFDSyxJQUFJO0lBQ3pCLHFCQUNFOzswQkFDRSw4REFBQ0MsS0FBRzswQkFBRUgsS0FBSzs7Ozs7b0JBQU87MEJBQ2xCLDhEQUFDRyxLQUFHOzBCQUFFRixPQUFPOzs7OztvQkFBTzswQkFDcEIsOERBQUNFLEtBQUc7MEJBQUVELElBQUk7Ozs7O29CQUFPOztvQkFDaEIsQ0FDSDtDQUNIO0FBRUQsaUVBQWVaLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWJsb2cvLi9wYWdlcy9EZXRhaWxlZFBvc3QvW2lkXS5qcz85Y2ExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUgfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgeyBQb3N0TGlzdFN0YXRlIH0gZnJvbSAnLi4vLi4vc3JjL3JlY29pbC9yZWNvaWwnO1xyXG5cclxuZnVuY3Rpb24gRGV0YWlsQ29udGFpbmVyKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBudW1iZXJpbmcgPSBOdW1iZXIoaWQpO1xyXG4gIGNvbnN0IGN1cnJlbnRQb3N0TGlzdCA9IHVzZVJlY29pbFZhbHVlKFBvc3RMaXN0U3RhdGUpO1xyXG5cclxuICBjb25zdCBbcG9zdE9ial0gPSBjdXJyZW50UG9zdExpc3QuZmlsdGVyKChwb3N0KSA9PiBwb3N0LmlkID09PSBudW1iZXJpbmcpOyAvL2lk66W8IOydtOyaqe2VtOyEnCBwb3N0IGZpbHRlclxyXG5cclxuICBjb25zdCB0aXRsZSA9IHBvc3RPYmoudGl0bGU7IC8v6rCBIOuCtOyaqeuTpCDrs4DsiJjsl5Ag7KCA7J6lXHJcbiAgY29uc3QgY29udGVudCA9IHBvc3RPYmouY29udGVudDtcclxuICBjb25zdCBkYXRlID0gcG9zdE9iai5kYXRlO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2Pnt0aXRsZX08L2Rpdj5cclxuICAgICAgPGRpdj57Y29udGVudH08L2Rpdj5cclxuICAgICAgPGRpdj57ZGF0ZX08L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbENvbnRhaW5lcjtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVJlY29pbFZhbHVlIiwiUG9zdExpc3RTdGF0ZSIsIkRldGFpbENvbnRhaW5lciIsInJvdXRlciIsImlkIiwicXVlcnkiLCJudW1iZXJpbmciLCJOdW1iZXIiLCJjdXJyZW50UG9zdExpc3QiLCJwb3N0T2JqIiwiZmlsdGVyIiwicG9zdCIsInRpdGxlIiwiY29udGVudCIsImRhdGUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/DetailedPost/[id].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/DetailedPost/[id].js"));
module.exports = __webpack_exports__;

})();