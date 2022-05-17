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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_DetailedPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/DetailedPost */ \"./src/components/DetailedPost.js\");\n/* harmony import */ var _src_data_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/data/data.json */ \"./src/data/data.json\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_recoil_recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/recoil/recoil */ \"./src/recoil/recoil.js\");\n\n\n\n\n\n\nfunction DetailContainer() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query;\n    const numbering = Number(id);\n    const currentPostList = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_src_recoil_recoil__WEBPACK_IMPORTED_MODULE_5__.PostListState);\n    const [postObj] = currentPostList.filter((post)=>post.id === numbering\n    ); //id를 이용해서 post filter\n    const title = postObj.title; //각 내용들 변수에 저장\n    const content = postObj.content;\n    const date = postObj.date;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedContainer\\\\[id].js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedContainer\\\\[id].js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: date\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedContainer\\\\[id].js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailContainer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EZXRhaWxlZENvbnRhaW5lci9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFzQztBQUN1QjtBQUNqQjtBQUNKO0FBQ2dCO0FBRXhELFNBQVNLLGVBQWUsR0FBRTtJQUV0QixNQUFNQyxNQUFNLEdBQUdOLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQUFDTyxFQUFFLEdBQUMsR0FBR0QsTUFBTSxDQUFDRSxLQUFLO0lBQ3pCLE1BQU1DLFNBQVMsR0FBR0MsTUFBTSxDQUFDSCxFQUFFLENBQUM7SUFDNUIsTUFBTUksZUFBZSxHQUFHUixzREFBYyxDQUFDQyw2REFBYSxDQUFDO0lBRXJELE1BQU0sQ0FBQ1EsT0FBTyxDQUFDLEdBQUdELGVBQWUsQ0FBQ0UsTUFBTSxDQUFDLENBQUNDLElBQUksR0FBS0EsSUFBSSxDQUFDUCxFQUFFLEtBQUtFLFNBQVM7SUFBQSxDQUFDLEVBQUU7SUFFakUsTUFBSk0sS0FBSyxHQUFHSCxPQUFPLENBQUNHLEtBQUssRUFBRTtJQUM3QixNQUFNQyxPQUFPLEdBQUdKLE9BQU8sQ0FBQ0ksT0FBTztJQUMvQixNQUFNQyxJQUFJLEdBQUdMLE9BQU8sQ0FBQ0ssSUFBSTtJQUN6QixxQkFDSTs7MEJBQ0EsOERBQUNDLEtBQUc7MEJBQUVILEtBQUs7Ozs7O29CQUFPOzBCQUNsQiw4REFBQ0csS0FBRzswQkFBRUYsT0FBTzs7Ozs7b0JBQU87MEJBQ3BCLDhEQUFDRSxLQUFHOzBCQUFFRCxJQUFJOzs7OztvQkFBTzs7b0JBQ2QsQ0FDTDtDQUNMO0FBRUQsaUVBQWVaLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWJsb2cvLi9wYWdlcy9EZXRhaWxlZENvbnRhaW5lci9baWRdLmpzP2YzNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IERldGFpbGVkUG9zdCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9EZXRhaWxlZFBvc3QnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9zcmMvZGF0YS9kYXRhLmpzb24nO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCB7IFBvc3RMaXN0U3RhdGUgfSBmcm9tICcuLi8uLi9zcmMvcmVjb2lsL3JlY29pbCc7XHJcblxyXG5mdW5jdGlvbiBEZXRhaWxDb250YWluZXIoKXtcclxuICAgIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgbnVtYmVyaW5nID0gTnVtYmVyKGlkKTtcclxuICAgIGNvbnN0IGN1cnJlbnRQb3N0TGlzdCA9IHVzZVJlY29pbFZhbHVlKFBvc3RMaXN0U3RhdGUpO1xyXG5cclxuICAgIGNvbnN0IFtwb3N0T2JqXSA9IGN1cnJlbnRQb3N0TGlzdC5maWx0ZXIoKHBvc3QpID0+IHBvc3QuaWQgPT09IG51bWJlcmluZyk7IC8vaWTrpbwg7J207Jqp7ZW07IScIHBvc3QgZmlsdGVyXHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBwb3N0T2JqLnRpdGxlOyAvL+qwgSDrgrTsmqnrk6Qg67OA7IiY7JeQIOyggOyepVxyXG4gICAgY29uc3QgY29udGVudCA9IHBvc3RPYmouY29udGVudDtcclxuICAgIGNvbnN0IGRhdGUgPSBwb3N0T2JqLmRhdGU7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2Pnt0aXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2Pntjb250ZW50fTwvZGl2PlxyXG4gICAgICAgIDxkaXY+e2RhdGV9PC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxDb250YWluZXI7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkRldGFpbGVkUG9zdCIsImRhdGEiLCJ1c2VSZWNvaWxWYWx1ZSIsIlBvc3RMaXN0U3RhdGUiLCJEZXRhaWxDb250YWluZXIiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwibnVtYmVyaW5nIiwiTnVtYmVyIiwiY3VycmVudFBvc3RMaXN0IiwicG9zdE9iaiIsImZpbHRlciIsInBvc3QiLCJ0aXRsZSIsImNvbnRlbnQiLCJkYXRlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/DetailedContainer/[id].js\n");

/***/ }),

/***/ "./src/components/DetailedPost.js":
/*!****************************************!*\
  !*** ./src/components/DetailedPost.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/data.json */ \"./src/data/data.json\");\n\n//상세화면에서 보이는 포스트\n\n\n\nconst DetailedPost = (numbering)=>{\n    const [postObj] = _data_data_json__WEBPACK_IMPORTED_MODULE_3__.filter((post)=>post.id === numbering\n    ); //id를 이용해서 post filter\n    const title = postObj.title; //각 내용들 변수에 저장\n    const content = postObj.content;\n    const date = postObj.date;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostWrapper, {\n        children: title\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedPost.js\",\n        lineNumber: 16,\n        columnNumber: 7\n    }, undefined);\n};\nconst PostWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().section)`\r\n    \r\n    font-size:15px;\r\n    border-bottom:1px solid grey;\r\n    padding:5px;\r\n    `;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailedPost);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZXRhaWxlZFBvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTtBQUZBO0FBRXVDO0FBQ2I7QUFDVTtBQUVwQyxNQUFNRyxZQUFZLEdBQUcsQ0FBQ0MsU0FBUyxHQUFLO0lBQ2xDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLEdBQUdILG1EQUFXLENBQUMsQ0FBQ0ssSUFBSSxHQUFLQSxJQUFJLENBQUNDLEVBQUUsS0FBS0osU0FBUztJQUFBLENBQUMsRUFBRTtJQUVwRCxNQUFKSyxLQUFLLEdBQUdKLE9BQU8sQ0FBQ0ksS0FBSyxFQUFFO0lBQzdCLE1BQU1DLE9BQU8sR0FBR0wsT0FBTyxDQUFDSyxPQUFPO0lBQy9CLE1BQU1DLElBQUksR0FBR04sT0FBTyxDQUFDTSxJQUFJO0lBRzNCLHFCQUNJLDhEQUFDQyxXQUFXO2tCQUNYSCxLQUFLOzs7OztpQkFDUSxDQUNsQjtDQUNDO0FBRUgsTUFBTUcsV0FBVyxHQUFHWixrRUFBYyxDQUFDO0FBTW5DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYmxvZy8uL3NyYy9jb21wb25lbnRzL0RldGFpbGVkUG9zdC5qcz80OTg2Il0sInNvdXJjZXNDb250ZW50IjpbIi8v7IOB7IS47ZmU66m07JeQ7IScIOuztOydtOuKlCDtj6zsiqTtirhcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9kYXRhLmpzb24nXHJcblxyXG5jb25zdCBEZXRhaWxlZFBvc3QgPSAobnVtYmVyaW5nKSA9PiB7XHJcbiAgY29uc3QgW3Bvc3RPYmpdID0gZGF0YS5maWx0ZXIoKHBvc3QpID0+IHBvc3QuaWQgPT09IG51bWJlcmluZyk7IC8vaWTrpbwg7J207Jqp7ZW07IScIHBvc3QgZmlsdGVyXHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBwb3N0T2JqLnRpdGxlOyAvL+qwgSDrgrTsmqnrk6Qg67OA7IiY7JeQIOyggOyepVxyXG4gICAgY29uc3QgY29udGVudCA9IHBvc3RPYmouY29udGVudDtcclxuICAgIGNvbnN0IGRhdGUgPSBwb3N0T2JqLmRhdGU7XHJcbiAgIFxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxQb3N0V3JhcHBlcj5cclxuICAgICAge3RpdGxlfVxyXG4gICAgICA8L1Bvc3RXcmFwcGVyPlxyXG4pO1xyXG4gIH1cclxuXHJcbmNvbnN0IFBvc3RXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgZ3JleTtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYFxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxlZFBvc3Q7Il0sIm5hbWVzIjpbInN0eWxlZCIsIlJlYWN0IiwiZGF0YSIsIkRldGFpbGVkUG9zdCIsIm51bWJlcmluZyIsInBvc3RPYmoiLCJmaWx0ZXIiLCJwb3N0IiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJkYXRlIiwiUG9zdFdyYXBwZXIiLCJzZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DetailedPost.js\n");

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

module.exports = JSON.parse('[{"id":0,"title":"첫 글","date":"2022.05.16.","milisec":"1519211809934","content":"와! 내용이다!"},{"id":1,"title":"다음 글","date":"2022.05.17.","milisec":"1519211810362","content":"와! 내용 고갈!"},{"id":2,"title":"다다음 글","date":"2022.05.18.","milisec":"1519211811670","content":"이제 긴 긴 긴 긴 긴 내용~"},{"id":3,"title":"마지막 글","date":"2022.05.19.","milisec":"1519129853500","content":"두비두밥"}]');

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