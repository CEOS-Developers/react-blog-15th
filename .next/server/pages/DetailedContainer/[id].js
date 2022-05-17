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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_DetailedPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/DetailedPost */ \"./src/components/DetailedPost.js\");\n/* harmony import */ var _src_data_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/data/data.json */ \"./src/data/data.json\");\n\n\n\n\nfunction DetailContainer() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query;\n    const numbering = Number(id);\n    const [postObj] = _src_data_data_json__WEBPACK_IMPORTED_MODULE_3__.filter((post)=>post.id === numbering\n    ); //id를 이용해서 post filter\n    const title = postObj.title; //각 내용들 변수에 저장\n    const content = postObj.content;\n    const date = postObj.date;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedContainer\\\\[id].js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedContainer\\\\[id].js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: date\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\pages\\\\DetailedContainer\\\\[id].js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailContainer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EZXRhaWxlZENvbnRhaW5lci9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFzQztBQUN1QjtBQUNqQjtBQUU1QyxTQUFTRyxlQUFlLEdBQUU7SUFFdEIsTUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBQzFCLE1BQU0sRUFBQ0ssRUFBRSxHQUFDLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSztJQUN6QixNQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0gsRUFBRSxDQUFDO0lBRTVCLE1BQU0sQ0FBQ0ksT0FBTyxDQUFDLEdBQUdQLHVEQUFXLENBQUMsQ0FBQ1MsSUFBSSxHQUFLQSxJQUFJLENBQUNOLEVBQUUsS0FBS0UsU0FBUztJQUFBLENBQUMsRUFBRTtJQUV0RCxNQUFKSyxLQUFLLEdBQUdILE9BQU8sQ0FBQ0csS0FBSyxFQUFFO0lBQzdCLE1BQU1DLE9BQU8sR0FBR0osT0FBTyxDQUFDSSxPQUFPO0lBQy9CLE1BQU1DLElBQUksR0FBR0wsT0FBTyxDQUFDSyxJQUFJO0lBQ3pCLHFCQUNJOzswQkFDQSw4REFBQ0MsS0FBRzswQkFBRUgsS0FBSzs7Ozs7b0JBQU87MEJBQ2xCLDhEQUFDRyxLQUFHOzBCQUFFRixPQUFPOzs7OztvQkFBTzswQkFDcEIsOERBQUNFLEtBQUc7MEJBQUVELElBQUk7Ozs7O29CQUFPOztvQkFDZCxDQUNMO0NBQ0w7QUFFRCxpRUFBZVgsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYmxvZy8uL3BhZ2VzL0RldGFpbGVkQ29udGFpbmVyL1tpZF0uanM/ZjM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgRGV0YWlsZWRQb3N0IGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0RldGFpbGVkUG9zdCc7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL3NyYy9kYXRhL2RhdGEuanNvbic7XHJcblxyXG5mdW5jdGlvbiBEZXRhaWxDb250YWluZXIoKXtcclxuICAgIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgbnVtYmVyaW5nID0gTnVtYmVyKGlkKTtcclxuXHJcbiAgICBjb25zdCBbcG9zdE9ial0gPSBkYXRhLmZpbHRlcigocG9zdCkgPT4gcG9zdC5pZCA9PT0gbnVtYmVyaW5nKTsgLy9pZOulvCDsnbTsmqntlbTshJwgcG9zdCBmaWx0ZXJcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IHBvc3RPYmoudGl0bGU7IC8v6rCBIOuCtOyaqeuTpCDrs4DsiJjsl5Ag7KCA7J6lXHJcbiAgICBjb25zdCBjb250ZW50ID0gcG9zdE9iai5jb250ZW50O1xyXG4gICAgY29uc3QgZGF0ZSA9IHBvc3RPYmouZGF0ZTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXY+e3RpdGxlfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+e2NvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgPGRpdj57ZGF0ZX08L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbENvbnRhaW5lcjsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiRGV0YWlsZWRQb3N0IiwiZGF0YSIsIkRldGFpbENvbnRhaW5lciIsInJvdXRlciIsImlkIiwicXVlcnkiLCJudW1iZXJpbmciLCJOdW1iZXIiLCJwb3N0T2JqIiwiZmlsdGVyIiwicG9zdCIsInRpdGxlIiwiY29udGVudCIsImRhdGUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/DetailedContainer/[id].js\n");

/***/ }),

/***/ "./src/components/DetailedPost.js":
/*!****************************************!*\
  !*** ./src/components/DetailedPost.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/data.json */ \"./src/data/data.json\");\n\n//상세화면에서 보이는 포스트\n\n\n\nconst DetailedPost = (numbering)=>{\n    const [postObj] = _data_data_json__WEBPACK_IMPORTED_MODULE_3__.filter((post)=>post.id === numbering\n    ); //id를 이용해서 post filter\n    const title = postObj.title; //각 내용들 변수에 저장\n    const content = postObj.content;\n    const date = postObj.date;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostWrapper, {\n        children: title\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\react-blog-15th\\\\src\\\\components\\\\DetailedPost.js\",\n        lineNumber: 16,\n        columnNumber: 7\n    }, undefined);\n};\nconst PostWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().section)`\r\n    \r\n    font-size:15px;\r\n    border-bottom:1px solid grey;\r\n    padding:5px;\r\n    `;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailedPost);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZXRhaWxlZFBvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTtBQUZBO0FBRXVDO0FBQ2I7QUFDVTtBQUVwQyxNQUFNRyxZQUFZLEdBQUcsQ0FBQ0MsU0FBUyxHQUFLO0lBQ2xDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLEdBQUdILG1EQUFXLENBQUMsQ0FBQ0ssSUFBSSxHQUFLQSxJQUFJLENBQUNDLEVBQUUsS0FBS0osU0FBUztJQUFBLENBQUMsRUFBRTtJQUVwRCxNQUFKSyxLQUFLLEdBQUdKLE9BQU8sQ0FBQ0ksS0FBSyxFQUFFO0lBQzdCLE1BQU1DLE9BQU8sR0FBR0wsT0FBTyxDQUFDSyxPQUFPO0lBQy9CLE1BQU1DLElBQUksR0FBR04sT0FBTyxDQUFDTSxJQUFJO0lBRzNCLHFCQUNJLDhEQUFDQyxXQUFXO2tCQUNYSCxLQUFLOzs7OztpQkFDUSxDQUNsQjtDQUNDO0FBRUgsTUFBTUcsV0FBVyxHQUFHWixrRUFBYyxDQUFDO0FBTW5DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYmxvZy8uL3NyYy9jb21wb25lbnRzL0RldGFpbGVkUG9zdC5qcz80OTg2Il0sInNvdXJjZXNDb250ZW50IjpbIi8v7IOB7IS47ZmU66m07JeQ7IScIOuztOydtOuKlCDtj6zsiqTtirhcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9kYXRhLmpzb24nXHJcblxyXG5jb25zdCBEZXRhaWxlZFBvc3QgPSAobnVtYmVyaW5nKSA9PiB7XHJcbiAgY29uc3QgW3Bvc3RPYmpdID0gZGF0YS5maWx0ZXIoKHBvc3QpID0+IHBvc3QuaWQgPT09IG51bWJlcmluZyk7IC8vaWTrpbwg7J207Jqp7ZW07IScIHBvc3QgZmlsdGVyXHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBwb3N0T2JqLnRpdGxlOyAvL+qwgSDrgrTsmqnrk6Qg67OA7IiY7JeQIOyggOyepVxyXG4gICAgY29uc3QgY29udGVudCA9IHBvc3RPYmouY29udGVudDtcclxuICAgIGNvbnN0IGRhdGUgPSBwb3N0T2JqLmRhdGU7XHJcbiAgIFxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxQb3N0V3JhcHBlcj5cclxuICAgICAge3RpdGxlfVxyXG4gICAgICA8L1Bvc3RXcmFwcGVyPlxyXG4pO1xyXG4gIH1cclxuXHJcbmNvbnN0IFBvc3RXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgZ3JleTtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYFxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxlZFBvc3Q7Il0sIm5hbWVzIjpbInN0eWxlZCIsIlJlYWN0IiwiZGF0YSIsIkRldGFpbGVkUG9zdCIsIm51bWJlcmluZyIsInBvc3RPYmoiLCJmaWx0ZXIiLCJwb3N0IiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJkYXRlIiwiUG9zdFdyYXBwZXIiLCJzZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DetailedPost.js\n");

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