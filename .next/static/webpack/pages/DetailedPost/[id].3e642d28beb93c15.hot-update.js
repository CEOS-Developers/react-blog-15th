"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/DetailedPost/[id]",{

/***/ "./src/styles/EditorStyle.tsx":
/*!************************************!*\
  !*** ./src/styles/EditorStyle.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Content\": function() { return /* binding */ Content; },\n/* harmony export */   \"Form\": function() { return /* binding */ Form; },\n/* harmony export */   \"InputWrapper\": function() { return /* binding */ InputWrapper; },\n/* harmony export */   \"PostHandleButton\": function() { return /* binding */ PostHandleButton; },\n/* harmony export */   \"Title\": function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 10px;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin: 1rem;\\n  padding: 1rem;\\n  font-size: 15px;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\n  border: none;\\n\\n  cursor: pointer;\\n\\n  &:hover{\\n    opacity:0.2;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 20px;\\n  border: 1px solid rgba(0, 0, 0, 0.2);\\n  margin: 0.5rem;\\n  border-radius: 4px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 15px;\\n  border: 1px solid rgba(0, 0, 0, 0.2);\\n  margin: 0.5rem;\\n  height: 300px;\\n  border-radius: 4px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\n\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].form(_templateObject());\nvar PostHandleButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button(_templateObject1());\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].textarea(_templateObject2());\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].textarea(_templateObject3());\nvar InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject4());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL0VkaXRvclN0eWxlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUVoQyxJQUFNQyxJQUFJLEdBQUdELDhEQUFXLG1CQUU5QixDQUFDO0FBQ0ssSUFBTUcsZ0JBQWdCLEdBQUdILGdFQUFhLG9CQVk1QyxDQUFDO0FBQ0ssSUFBTUssS0FBSyxHQUFHTCxrRUFBZSxvQkFLbkMsQ0FBQztBQUNLLElBQU1PLE9BQU8sR0FBR1Asa0VBQWUsb0JBTXJDLENBQUM7QUFDSyxJQUFNUSxZQUFZLEdBQUdSLDZEQUFVLG9CQUdyQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvRWRpdG9yU3R5bGUudHN4PzBiZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBQb3N0SGFuZGxlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBtYXJnaW46IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmhvdmVye1xyXG4gICAgb3BhY2l0eTowLjI7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQudGV4dGFyZWFgXHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBtYXJnaW46IDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgbWFyZ2luOiAwLjVyZW07XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkZvcm0iLCJmb3JtIiwiUG9zdEhhbmRsZUJ1dHRvbiIsImJ1dHRvbiIsIlRpdGxlIiwidGV4dGFyZWEiLCJDb250ZW50IiwiSW5wdXRXcmFwcGVyIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/EditorStyle.tsx\n");

/***/ })

});