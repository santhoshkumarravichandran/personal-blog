"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./pages/[id].js":
/*!***********************!*\
  !*** ./pages/[id].js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_date_date_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/date/date.component */ \"./components/date/date.component.js\");\n\n\n\nvar __N_SSG = true;\nfunction Post(param) {\n    var postData = param.postData;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: utilStyles.headingLg,\n                children: [\n                    \"   \",\n                    postData.title\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/santhoshkumarravichandran/Documents/workspace/personal-blog/pages/[id].js\",\n                lineNumber: 26,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/santhoshkumarravichandran/Documents/workspace/personal-blog/pages/[id].js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this),\n            postData.id,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/santhoshkumarravichandran/Documents/workspace/personal-blog/pages/[id].js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_date_date_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                dateString: postData.date\n            }, void 0, false, {\n                fileName: \"/Users/santhoshkumarravichandran/Documents/workspace/personal-blog/pages/[id].js\",\n                lineNumber: 30,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/santhoshkumarravichandran/Documents/workspace/personal-blog/pages/[id].js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: postData.contentHtml\n                }\n            }, void 0, false, {\n                fileName: \"/Users/santhoshkumarravichandran/Documents/workspace/personal-blog/pages/[id].js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/santhoshkumarravichandran/Documents/workspace/personal-blog/pages/[id].js\",\n        lineNumber: 25,\n        columnNumber: 7\n    }, this);\n};\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTBDO0FBQ1c7O0FBcUJ0QyxTQUFTRSxJQUFJLENBQUMsS0FBWSxFQUFFO1FBQWQsUUFBVSxHQUFWLEtBQVksQ0FBVkMsUUFBUTtJQUNuQyxxQkFDRSw4REFBQ0gsMERBQU07OzBCQUNKLDhEQUFDSSxJQUFFO2dCQUFDQyxTQUFTLEVBQUVDLFVBQVUsQ0FBQ0MsU0FBUzs7b0JBQUUsS0FBRztvQkFBQ0osUUFBUSxDQUFDSyxLQUFLOzs7Ozs7b0JBQU07MEJBQzlELDhEQUFDQyxJQUFFOzs7O29CQUFHO1lBQ0xOLFFBQVEsQ0FBQ08sRUFBRTswQkFDWiw4REFBQ0QsSUFBRTs7OztvQkFBRzswQkFDUCw4REFBQ1IsdUVBQUk7Z0JBQUNVLFVBQVUsRUFBRVIsUUFBUSxDQUFDUyxJQUFJOzs7OztvQkFBUzswQkFDdkMsOERBQUNILElBQUU7Ozs7b0JBQU07MEJBQ1QsOERBQUNJLEtBQUc7Z0JBQUNDLHVCQUF1QixFQUFFO29CQUFFQyxNQUFNLEVBQUVaLFFBQVEsQ0FBQ2EsV0FBVztpQkFBRTs7Ozs7b0JBQUk7Ozs7OztZQUMzRCxDQUNUO0NBQ0g7QUFacUJkLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2lkXS5qcz9hMzA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IERhdGUgZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlL2RhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IGdldEFsbEJsb2dQb3N0SWRzLCBnZXRCbG9nUG9zdERhdGFCeUlkIH0gZnJvbSAnLi4vbGliL2Jsb2dzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGdldEFsbEJsb2dQb3N0SWRzKCk7XG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IGdldEJsb2dQb3N0RGF0YUJ5SWQocGFyYW1zLmlkKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdERhdGEsXG4gICAgfSxcbiAgfTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdERhdGEgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PiAgIHtwb3N0RGF0YS50aXRsZX08L2gyPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAge3Bvc3REYXRhLmlkfVxuICAgICAgICA8YnIgLz5cbiAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtwb3N0RGF0YS5kYXRlfT48L0RhdGU+XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdERhdGEuY29udGVudEh0bWwgfX0gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH0iXSwibmFtZXMiOlsiTGF5b3V0IiwiRGF0ZSIsIlBvc3QiLCJwb3N0RGF0YSIsImgyIiwiY2xhc3NOYW1lIiwidXRpbFN0eWxlcyIsImhlYWRpbmdMZyIsInRpdGxlIiwiYnIiLCJpZCIsImRhdGVTdHJpbmciLCJkYXRlIiwiZGl2IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjb250ZW50SHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[id].js\n");

/***/ })

});