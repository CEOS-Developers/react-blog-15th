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
exports.id = "pages/DetailedContainer/[id]";
exports.ids = ["pages/DetailedContainer/[id]"];
exports.modules = {

/***/ "./pages/DetailedContainer/[id].js":
/*!*****************************************!*\
  !*** ./pages/DetailedContainer/[id].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n\n\n\n\nfunction DetailContainer() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query;\n    const numbering = Number(id);\n    const currentPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_3__.PostListState);\n    const [postObj] = currentPostList.filter((post)=>post.id === numbering\n    ); //id를 이용해서 post filter\n    const title = postObj.title; //각 내용들 변수에 저장\n    const content = postObj.content;\n    const date = postObj.date;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedContainer\\\\[id].js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedContainer\\\\[id].js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: date\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MinjiOh\\\\react-blog-15th\\\\pages\\\\DetailedContainer\\\\[id].js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailContainer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EZXRhaWxlZENvbnRhaW5lci9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDQTtBQUNnQjtBQUV4RCxTQUFTRyxlQUFlLEdBQUc7SUFDekIsTUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBQzFCLE1BQU0sRUFBRUssRUFBRSxHQUFFLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSztJQUMzQixNQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0gsRUFBRSxDQUFDO0lBQzVCLE1BQU1JLGVBQWUsR0FBR1Isc0RBQWMsQ0FBQ0MsNkRBQWEsQ0FBQztJQUVyRCxNQUFNLENBQUNRLE9BQU8sQ0FBQyxHQUFHRCxlQUFlLENBQUNFLE1BQU0sQ0FBQyxDQUFDQyxJQUFJLEdBQUtBLElBQUksQ0FBQ1AsRUFBRSxLQUFLRSxTQUFTO0lBQUEsQ0FBQyxFQUFFO0lBRWpFLE1BQUpNLEtBQUssR0FBR0gsT0FBTyxDQUFDRyxLQUFLLEVBQUU7SUFDN0IsTUFBTUMsT0FBTyxHQUFHSixPQUFPLENBQUNJLE9BQU87SUFDL0IsTUFBTUMsSUFBSSxHQUFHTCxPQUFPLENBQUNLLElBQUk7SUFDekIscUJBQ0U7OzBCQUNFLDhEQUFDQyxLQUFHOzBCQUFFSCxLQUFLOzs7OztvQkFBTzswQkFDbEIsOERBQUNHLEtBQUc7MEJBQUVGLE9BQU87Ozs7O29CQUFPOzBCQUNwQiw4REFBQ0UsS0FBRzswQkFBRUQsSUFBSTs7Ozs7b0JBQU87O29CQUNoQixDQUNIO0NBQ0g7QUFFRCxpRUFBZVosZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYmxvZy8uL3BhZ2VzL0RldGFpbGVkQ29udGFpbmVyL1tpZF0uanM/ZjM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlIH0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IHsgUG9zdExpc3RTdGF0ZSB9IGZyb20gJy4uLy4uL3NyYy9yZWNvaWwvcmVjb2lsJztcclxuXHJcbmZ1bmN0aW9uIERldGFpbENvbnRhaW5lcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgbnVtYmVyaW5nID0gTnVtYmVyKGlkKTtcclxuICBjb25zdCBjdXJyZW50UG9zdExpc3QgPSB1c2VSZWNvaWxWYWx1ZShQb3N0TGlzdFN0YXRlKTtcclxuXHJcbiAgY29uc3QgW3Bvc3RPYmpdID0gY3VycmVudFBvc3RMaXN0LmZpbHRlcigocG9zdCkgPT4gcG9zdC5pZCA9PT0gbnVtYmVyaW5nKTsgLy9pZOulvCDsnbTsmqntlbTshJwgcG9zdCBmaWx0ZXJcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBwb3N0T2JqLnRpdGxlOyAvL+qwgSDrgrTsmqnrk6Qg67OA7IiY7JeQIOyggOyepVxyXG4gIGNvbnN0IGNvbnRlbnQgPSBwb3N0T2JqLmNvbnRlbnQ7XHJcbiAgY29uc3QgZGF0ZSA9IHBvc3RPYmouZGF0ZTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj57dGl0bGV9PC9kaXY+XHJcbiAgICAgIDxkaXY+e2NvbnRlbnR9PC9kaXY+XHJcbiAgICAgIDxkaXY+e2RhdGV9PC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxDb250YWluZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VSZWNvaWxWYWx1ZSIsIlBvc3RMaXN0U3RhdGUiLCJEZXRhaWxDb250YWluZXIiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwibnVtYmVyaW5nIiwiTnVtYmVyIiwiY3VycmVudFBvc3RMaXN0IiwicG9zdE9iaiIsImZpbHRlciIsInBvc3QiLCJ0aXRsZSIsImNvbnRlbnQiLCJkYXRlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/DetailedContainer/[id].js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/DetailedContainer/[id].js"));
module.exports = __webpack_exports__;

})();