"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/GlobalStyle.js":
/*!****************************!*\
  !*** ./src/GlobalStyle.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BlogHeader\": function() { return /* binding */ BlogHeader; },\n/* harmony export */   \"BlogStyle\": function() { return /* binding */ BlogStyle; },\n/* harmony export */   \"BlogWrapper\": function() { return /* binding */ BlogWrapper; },\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-weight: bold;\\n  font-size: 30px;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-weight: bold;\\n  font-size: 20px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  overflow: hidden;\\n  border-radius: 20px;\\n  cursor: pointer;\\n  background-color: white;\\n  width: 50%;\\n  height: 50%;\\n  margin: 2%;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  *{  \\n    box-sizing: border-box;\\n    font-family: 'Noto Sans KR', sans-serif;\\n  }\\n  html {\\n    font-size : 16px;\\n  }\\n  body {\\n    background: linear-gradient(330deg, #2ebfff63, rgba(232,166,255,0.91));\\n  }\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    height: 100%;\\n    width: 99%;\\n    \"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\n\nvar BlogWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span(_templateObject());\nvar BlogHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1(_templateObject1());\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2(_templateObject2());\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3());\nvar BlogStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(_templateObject4());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvR2xvYmFsU3R5bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEQ7QUFFdkQsSUFBTUUsV0FBVyxHQUFHRiw4REFBVyxtQkFBRSxDQUFDO0FBRWxDLElBQU1JLFVBQVUsR0FBR0osNERBQVMsb0JBR2xDLENBQUM7QUFFSyxJQUFNTSxNQUFNLEdBQUdOLDREQUFTLG9CQUc5QixDQUFDO0FBQ0ssSUFBTVEsU0FBUyxHQUFHUiw2REFBVSxvQkFRbEMsQ0FBQztBQUVLLElBQU1VLFNBQVMsR0FBR1Qsb0VBQWlCLG9CQWdCckMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvR2xvYmFsU3R5bGUuanM/NTVjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJsb2dXcmFwcGVyID0gc3R5bGVkLnNwYW5gYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCbG9nSGVhZGVyID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaDJgXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgbWFyZ2luOiAyJTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCbG9nU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAqeyAgXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgS1InLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZSA6IDE2cHg7XHJcbiAgfVxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMzMGRlZywgIzJlYmZmZjYzLCByZ2JhKDIzMiwxNjYsMjU1LDAuOTEpKTtcclxuICB9XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDk5JTtcclxuICAgIGA7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkJsb2dXcmFwcGVyIiwic3BhbiIsIkJsb2dIZWFkZXIiLCJoMSIsIkhlYWRlciIsImgyIiwiQ29udGFpbmVyIiwiZGl2IiwiQmxvZ1N0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/GlobalStyle.js\n");

/***/ })

});