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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./src/styles/recipesgalleries.css":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./src/styles/recipesgalleries.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".gallery-page{\\n    height: calc(100vh - 40px);\\n}\\n\\n.before-gallery {\\n    height: 200px;\\n}\\n\\n/*.gallery-page-title {*/\\n/*    display: flex;*/\\n/*    justify-content: center;*/\\n/*    align-items: center;*/\\n/*    font-size: 30px;*/\\n/*    color: #2f2f2f;*/\\n/*    margin: 0px;*/\\n/*    padding: 40px;*/\\n/*}*/\\n\\n/*.search-input {*/\\n/*    background-color: #e3e2e2;*/\\n/*    color: #414040;*/\\n/*    width: 500px;*/\\n/*    height: 40px;*/\\n/*    display: flex;*/\\n/*    align-items: center;*/\\n/*    justify-content: flex-start;*/\\n/*    padding: 0 20px;*/\\n/*    margin: 0 auto;*/\\n/*    border-radius: 25px;*/\\n/*    border: none;*/\\n/*}*/\\n\\n/*.search-input:focus{*/\\n/*    outline: none;*/\\n/*}*/\\n\\n/*.gallery-main {*/\\n/*    display: flex;*/\\n/*    flex-direction: row;*/\\n/*    flex-wrap: wrap;*/\\n/*    justify-content: center;*/\\n/*    align-items: center;*/\\n/*    margin: 0 40px;*/\\n/*    !*background-color: #0081A7;*!*/\\n/*}*/\\n\\n\\n/*.gallery-card {*/\\n/*    display: flex;*/\\n/*    margin: 20px 10px;*/\\n/*    width: 300px;*/\\n/*    height: 400px;*/\\n/*    flex-direction: column;*/\\n/*    border-radius: 25px;*/\\n/*    align-items: center;*/\\n/*    background-color: #FED9B7;*/\\n/*}*/\\n\\n\\n/*.gallery-card-top{*/\\n/*    display: flex;*/\\n/*    width: 100%;*/\\n/*    height: 100%;*/\\n/*    padding: 20px;*/\\n/*    justify-content: center;*/\\n/*    box-sizing: border-box;*/\\n/*}*/\\n\\n/*.gallery-card-img {*/\\n/*    display: flex;*/\\n/*    width: 100%;*/\\n/*    height: 100%;*/\\n/*    max-width: 250px;*/\\n/*    max-height: 200px;*/\\n/*    border-radius: 25px;*/\\n/*    object-fit: cover;*/\\n/*}*/\\n\\n/*.gallery-card-center{*/\\n/*    display: flex;*/\\n/*    width: 100%;*/\\n/*    flex-direction: column;*/\\n/*    flex-wrap: wrap;*/\\n/*    justify-content: center;*/\\n/*    align-items: center;*/\\n/*}*/\\n\\n/*.gallery-card-title {*/\\n/*    display: flex;*/\\n/*    margin-top: 20px;*/\\n/*    margin-bottom: 20px;*/\\n/*    text-decoration: none;*/\\n/*    color: #2f2f2f;*/\\n/*}*/\\n\\n/*.gallery-card-tags {*/\\n/*    display: flex;*/\\n/*    text-decoration: none;*/\\n/*    align-items: flex-end;*/\\n/*    margin-bottom: 10px;*/\\n/*}*/\\n\\n/*.card-tag {*/\\n/*    background-color: #d2d0d0;*/\\n/*    margin: 0 5px;*/\\n/*    border-radius: 25px;*/\\n/*    text-decoration: none;*/\\n/*    color: #868585;*/\\n/*    padding: 1px 5px;*/\\n/*    font-size: 12px;*/\\n\\n/*}*/\\n\\n/*.gallery-card-tags:link {*/\\n/*    display: flex;*/\\n/*    text-decoration: none;*/\\n/*    align-items: flex-end;*/\\n/*}*/\\n\\n/*.gallery-card-tags:active {*/\\n/*    display: flex;*/\\n/*    text-decoration: none;*/\\n/*    align-items: flex-end;*/\\n/*}*/\\n\\n/*.gallery-card-tags:visited {*/\\n/*    display: flex;*/\\n/*    text-decoration: none;*/\\n/*    align-items: flex-end;*/\\n\\n/*}*/\\n\\n/*.gallery-card-bottom{*/\\n/*    display: flex;*/\\n/*    width: 100%;*/\\n/*    align-items: flex-end;*/\\n/*    justify-content: center;*/\\n/*}*/\\n\\n/*.button-primary{*/\\n/*    margin: 20px;*/\\n/*    background-color: #F07167;*/\\n/*    color: #FED9B7;*/\\n/*    border-radius: 15px;*/\\n/*    padding: 10px 20px;*/\\n/*    border: none;*/\\n/*}*/\\n\\n\\n@media only screen and (max-width: 600px) {\\n    body {\\n        background-color: lightblue;\\n    }\\n}\\n\\n@media only screen and (min-width: 601px) and (max-width: 900px) {\\n    body {\\n        background-color: peachpuff;\\n    }\\n\\n}\\n\\n@media only screen and (min-width: 901px) {\\n    body {\\n        background-color: lavender;\\n    }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/recipesgalleries.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,0BAA0B;AAC9B;;AAEA;IACI,aAAa;AACjB;;AAEA,wBAAwB;AACxB,qBAAqB;AACrB,+BAA+B;AAC/B,2BAA2B;AAC3B,uBAAuB;AACvB,sBAAsB;AACtB,mBAAmB;AACnB,qBAAqB;AACrB,IAAI;;AAEJ,kBAAkB;AAClB,iCAAiC;AACjC,sBAAsB;AACtB,oBAAoB;AACpB,oBAAoB;AACpB,qBAAqB;AACrB,2BAA2B;AAC3B,mCAAmC;AACnC,uBAAuB;AACvB,sBAAsB;AACtB,2BAA2B;AAC3B,oBAAoB;AACpB,IAAI;;AAEJ,uBAAuB;AACvB,qBAAqB;AACrB,IAAI;;AAEJ,kBAAkB;AAClB,qBAAqB;AACrB,2BAA2B;AAC3B,uBAAuB;AACvB,+BAA+B;AAC/B,2BAA2B;AAC3B,sBAAsB;AACtB,qCAAqC;AACrC,IAAI;;;AAGJ,kBAAkB;AAClB,qBAAqB;AACrB,yBAAyB;AACzB,oBAAoB;AACpB,qBAAqB;AACrB,8BAA8B;AAC9B,2BAA2B;AAC3B,2BAA2B;AAC3B,iCAAiC;AACjC,IAAI;;;AAGJ,qBAAqB;AACrB,qBAAqB;AACrB,mBAAmB;AACnB,oBAAoB;AACpB,qBAAqB;AACrB,+BAA+B;AAC/B,8BAA8B;AAC9B,IAAI;;AAEJ,sBAAsB;AACtB,qBAAqB;AACrB,mBAAmB;AACnB,oBAAoB;AACpB,wBAAwB;AACxB,yBAAyB;AACzB,2BAA2B;AAC3B,yBAAyB;AACzB,IAAI;;AAEJ,wBAAwB;AACxB,qBAAqB;AACrB,mBAAmB;AACnB,8BAA8B;AAC9B,uBAAuB;AACvB,+BAA+B;AAC/B,2BAA2B;AAC3B,IAAI;;AAEJ,wBAAwB;AACxB,qBAAqB;AACrB,wBAAwB;AACxB,2BAA2B;AAC3B,6BAA6B;AAC7B,sBAAsB;AACtB,IAAI;;AAEJ,uBAAuB;AACvB,qBAAqB;AACrB,6BAA6B;AAC7B,6BAA6B;AAC7B,2BAA2B;AAC3B,IAAI;;AAEJ,cAAc;AACd,iCAAiC;AACjC,qBAAqB;AACrB,2BAA2B;AAC3B,6BAA6B;AAC7B,sBAAsB;AACtB,wBAAwB;AACxB,uBAAuB;;AAEvB,IAAI;;AAEJ,4BAA4B;AAC5B,qBAAqB;AACrB,6BAA6B;AAC7B,6BAA6B;AAC7B,IAAI;;AAEJ,8BAA8B;AAC9B,qBAAqB;AACrB,6BAA6B;AAC7B,6BAA6B;AAC7B,IAAI;;AAEJ,+BAA+B;AAC/B,qBAAqB;AACrB,6BAA6B;AAC7B,6BAA6B;;AAE7B,IAAI;;AAEJ,wBAAwB;AACxB,qBAAqB;AACrB,mBAAmB;AACnB,6BAA6B;AAC7B,+BAA+B;AAC/B,IAAI;;AAEJ,mBAAmB;AACnB,oBAAoB;AACpB,iCAAiC;AACjC,sBAAsB;AACtB,2BAA2B;AAC3B,0BAA0B;AAC1B,oBAAoB;AACpB,IAAI;;;AAGJ;IACI;QACI,2BAA2B;IAC/B;AACJ;;AAEA;IACI;QACI,2BAA2B;IAC/B;;AAEJ;;AAEA;IACI;QACI,0BAA0B;IAC9B;AACJ\",\"sourcesContent\":[\".gallery-page{\\n    height: calc(100vh - 40px);\\n}\\n\\n.before-gallery {\\n    height: 200px;\\n}\\n\\n/*.gallery-page-title {*/\\n/*    display: flex;*/\\n/*    justify-content: center;*/\\n/*    align-items: center;*/\\n/*    font-size: 30px;*/\\n/*    color: #2f2f2f;*/\\n/*    margin: 0px;*/\\n/*    padding: 40px;*/\\n/*}*/\\n\\n/*.search-input {*/\\n/*    background-color: #e3e2e2;*/\\n/*    color: #414040;*/\\n/*    width: 500px;*/\\n/*    height: 40px;*/\\n/*    display: flex;*/\\n/*    align-items: center;*/\\n/*    justify-content: flex-start;*/\\n/*    padding: 0 20px;*/\\n/*    margin: 0 auto;*/\\n/*    border-radius: 25px;*/\\n/*    border: none;*/\\n/*}*/\\n\\n/*.search-input:focus{*/\\n/*    outline: none;*/\\n/*}*/\\n\\n/*.gallery-main {*/\\n/*    display: flex;*/\\n/*    flex-direction: row;*/\\n/*    flex-wrap: wrap;*/\\n/*    justify-content: center;*/\\n/*    align-items: center;*/\\n/*    margin: 0 40px;*/\\n/*    !*background-color: #0081A7;*!*/\\n/*}*/\\n\\n\\n/*.gallery-card {*/\\n/*    display: flex;*/\\n/*    margin: 20px 10px;*/\\n/*    width: 300px;*/\\n/*    height: 400px;*/\\n/*    flex-direction: column;*/\\n/*    border-radius: 25px;*/\\n/*    align-items: center;*/\\n/*    background-color: #FED9B7;*/\\n/*}*/\\n\\n\\n/*.gallery-card-top{*/\\n/*    display: flex;*/\\n/*    width: 100%;*/\\n/*    height: 100%;*/\\n/*    padding: 20px;*/\\n/*    justify-content: center;*/\\n/*    box-sizing: border-box;*/\\n/*}*/\\n\\n/*.gallery-card-img {*/\\n/*    display: flex;*/\\n/*    width: 100%;*/\\n/*    height: 100%;*/\\n/*    max-width: 250px;*/\\n/*    max-height: 200px;*/\\n/*    border-radius: 25px;*/\\n/*    object-fit: cover;*/\\n/*}*/\\n\\n/*.gallery-card-center{*/\\n/*    display: flex;*/\\n/*    width: 100%;*/\\n/*    flex-direction: column;*/\\n/*    flex-wrap: wrap;*/\\n/*    justify-content: center;*/\\n/*    align-items: center;*/\\n/*}*/\\n\\n/*.gallery-card-title {*/\\n/*    display: flex;*/\\n/*    margin-top: 20px;*/\\n/*    margin-bottom: 20px;*/\\n/*    text-decoration: none;*/\\n/*    color: #2f2f2f;*/\\n/*}*/\\n\\n/*.gallery-card-tags {*/\\n/*    display: flex;*/\\n/*    text-decoration: none;*/\\n/*    align-items: flex-end;*/\\n/*    margin-bottom: 10px;*/\\n/*}*/\\n\\n/*.card-tag {*/\\n/*    background-color: #d2d0d0;*/\\n/*    margin: 0 5px;*/\\n/*    border-radius: 25px;*/\\n/*    text-decoration: none;*/\\n/*    color: #868585;*/\\n/*    padding: 1px 5px;*/\\n/*    font-size: 12px;*/\\n\\n/*}*/\\n\\n/*.gallery-card-tags:link {*/\\n/*    display: flex;*/\\n/*    text-decoration: none;*/\\n/*    align-items: flex-end;*/\\n/*}*/\\n\\n/*.gallery-card-tags:active {*/\\n/*    display: flex;*/\\n/*    text-decoration: none;*/\\n/*    align-items: flex-end;*/\\n/*}*/\\n\\n/*.gallery-card-tags:visited {*/\\n/*    display: flex;*/\\n/*    text-decoration: none;*/\\n/*    align-items: flex-end;*/\\n\\n/*}*/\\n\\n/*.gallery-card-bottom{*/\\n/*    display: flex;*/\\n/*    width: 100%;*/\\n/*    align-items: flex-end;*/\\n/*    justify-content: center;*/\\n/*}*/\\n\\n/*.button-primary{*/\\n/*    margin: 20px;*/\\n/*    background-color: #F07167;*/\\n/*    color: #FED9B7;*/\\n/*    border-radius: 15px;*/\\n/*    padding: 10px 20px;*/\\n/*    border: none;*/\\n/*}*/\\n\\n\\n@media only screen and (max-width: 600px) {\\n    body {\\n        background-color: lightblue;\\n    }\\n}\\n\\n@media only screen and (min-width: 601px) and (max-width: 900px) {\\n    body {\\n        background-color: peachpuff;\\n    }\\n\\n}\\n\\n@media only screen and (min-width: 901px) {\\n    body {\\n        background-color: lavender;\\n    }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9zcmMvc3R5bGVzL3JlY2lwZXNnYWxsZXJpZXMuY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSx3REFBd0QsaUNBQWlDLEdBQUcscUJBQXFCLG9CQUFvQixHQUFHLDJCQUEyQix3QkFBd0Isa0NBQWtDLDhCQUE4QiwwQkFBMEIseUJBQXlCLHNCQUFzQix3QkFBd0IsT0FBTyx1QkFBdUIsb0NBQW9DLHlCQUF5Qix1QkFBdUIsdUJBQXVCLHdCQUF3Qiw4QkFBOEIsc0NBQXNDLDBCQUEwQix5QkFBeUIsOEJBQThCLHVCQUF1QixPQUFPLDRCQUE0Qix3QkFBd0IsT0FBTyx1QkFBdUIsd0JBQXdCLDhCQUE4QiwwQkFBMEIsa0NBQWtDLDhCQUE4Qix5QkFBeUIsc0NBQXNDLFNBQVMseUJBQXlCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLHdCQUF3QixpQ0FBaUMsOEJBQThCLDhCQUE4QixvQ0FBb0MsT0FBTyw0QkFBNEIsd0JBQXdCLHNCQUFzQix1QkFBdUIsd0JBQXdCLGtDQUFrQyxpQ0FBaUMsT0FBTywyQkFBMkIsd0JBQXdCLHNCQUFzQix1QkFBdUIsMkJBQTJCLDRCQUE0Qiw4QkFBOEIsNEJBQTRCLE9BQU8sNkJBQTZCLHdCQUF3QixzQkFBc0IsaUNBQWlDLDBCQUEwQixrQ0FBa0MsOEJBQThCLE9BQU8sNkJBQTZCLHdCQUF3QiwyQkFBMkIsOEJBQThCLGdDQUFnQyx5QkFBeUIsT0FBTyw0QkFBNEIsd0JB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QW9DLHdCQUF3QixnQ0FBZ0MsZ0NBQWdDLFNBQVMsNkJBQTZCLHdCQUF3QixzQkFBc0IsZ0NBQWdDLGtDQUFrQyxPQUFPLHdCQUF3Qix1QkFBdUIsb0NBQW9DLHlCQUF5Qiw4QkFBOEIsNkJBQTZCLHVCQUF1QixPQUFPLG1EQUFtRCxZQUFZLHNDQUFzQyxPQUFPLEdBQUcsc0VBQXNFLFlBQVksc0NBQXNDLE9BQU8sS0FBSywrQ0FBK0MsWUFBWSxxQ0FBcUMsT0FBTyxHQUFHLG1CQUFtQjtBQUN6a1I7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL3JlY2lwZXNnYWxsZXJpZXMuY3NzPzFiMTgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5nYWxsZXJ5LXBhZ2V7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQwcHgpO1xcbn1cXG5cXG4uYmVmb3JlLWdhbGxlcnkge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4vKi5nYWxsZXJ5LXBhZ2UtdGl0bGUgeyovXFxuLyogICAgZGlzcGxheTogZmxleDsqL1xcbi8qICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyovXFxuLyogICAgYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xcbi8qICAgIGZvbnQtc2l6ZTogMzBweDsqL1xcbi8qICAgIGNvbG9yOiAjMmYyZjJmOyovXFxuLyogICAgbWFyZ2luOiAwcHg7Ki9cXG4vKiAgICBwYWRkaW5nOiA0MHB4OyovXFxuLyp9Ki9cXG5cXG4vKi5zZWFyY2gtaW5wdXQgeyovXFxuLyogICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTJlMjsqL1xcbi8qICAgIGNvbG9yOiAjNDE0MDQwOyovXFxuLyogICAgd2lkdGg6IDUwMHB4OyovXFxuLyogICAgaGVpZ2h0OiA0MHB4OyovXFxuLyogICAgZGlzcGxheTogZmxleDsqL1xcbi8qICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cXG4vKiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7Ki9cXG4vKiAgICBwYWRkaW5nOiAwIDIwcHg7Ki9cXG4vKiAgICBtYXJnaW46IDAgYXV0bzsqL1xcbi8qICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7Ki9cXG4vKiAgICBib3JkZXI6IG5vbmU7Ki9cXG4vKn0qL1xcblxcbi8qLnNlYXJjaC1pbnB1dDpmb2N1c3sqL1xcbi8qICAgIG91dGxpbmU6IG5vbmU7Ki9cXG4vKn0qL1xcblxcbi8qLmdhbGxlcnktbWFpbiB7Ki9cXG4vKiAgICBkaXNwbGF5OiBmbGV4OyovXFxuLyogICAgZmxleC1kaXJlY3Rpb246IHJvdzsqL1xcbi8qICAgIGZsZXgtd3JhcDogd3JhcDsqL1xcbi8qICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyovXFxuLyogICAgYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xcbi8qICAgIG1hcmdpbjogMCA0MHB4OyovXFxuLyogICAgISpiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MUE3OyohKi9cXG4vKn0qL1xcblxcblxcbi8qLmdhbGxlcnktY2FyZCB7Ki9cXG4vKiAgICBkaXNwbGF5OiBmbGV4OyovXFxuLyogICAgbWFyZ2luOiAyMHB4IDEwcHg7Ki9cXG4vKiAgICB3aWR0aDogMzAwcHg7Ki9cXG4vKiAgICBoZWlnaHQ6IDQwMHB4OyovXFxuLyogICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsqL1xcbi8qICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7Ki9cXG4vKiAgICBhbGlnbi1pdGVtczogY2VudGVyOyovXFxuLyogICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRDlCNzsqL1xcbi8qfSovXFxuXFxuXFxuLyouZ2FsbGVyeS1jYXJkLXRvcHsqL1xcbi8qICAgIGRpc3BsYXk6IGZsZXg7Ki9cXG4vKiAgICB3aWR0aDogMTAwJTsqL1xcbi8qICAgIGhlaWdodDogMTAwJTsqL1xcbi8qICAgIHBhZGRpbmc6IDIwcHg7Ki9cXG4vKiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsqL1xcbi8qICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7Ki9cXG4vKn0qL1xcblxcbi8qLmdhbGxlcnktY2FyZC1pbWcgeyovXFxuLyogICAgZGlzcGxheTogZmxleDsqL1xcbi8qICAgIHdpZHRoOiAxMDAlOyovXFxuLyogICAgaGVpZ2h0OiAxMDAlOyovXFxuLyogICAgbWF4LXdpZHRoOiAyNTBweDsqL1xcbi8qICAgIG1heC1oZWlnaHQ6IDIwMHB4OyovXFxuLyogICAgYm9yZGVyLXJhZGl1czogMjVweDsqL1xcbi8qICAgIG9iamVjdC1maXQ6IGNvdmVyOyovXFxuLyp9Ki9cXG5cXG4vKi5nYWxsZXJ5LWNhcmQtY2VudGVyeyovXFxuLyogICAgZGlzcGxheTogZmxleDsqL1xcbi8qICAgIHdpZHRoOiAxMDAlOyovXFxuLyogICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsqL1xcbi8qICAgIGZsZXgtd3JhcDogd3JhcDsqL1xcbi8qICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyovXFxuLyogICAgYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xcbi8qfSovXFxuXFxuLyouZ2FsbGVyeS1jYXJkLXRpdGxlIHsqL1xcbi8qICAgIGRpc3BsYXk6IGZsZXg7Ki9cXG4vKiAgICBtYXJnaW4tdG9wOiAyMHB4OyovXFxuLyogICAgbWFyZ2luLWJvdHRvbTogMjBweDsqL1xcbi8qICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsqL1xcbi8qICAgIGNvbG9yOiAjMmYyZjJmOyovXFxuLyp9Ki9cXG5cXG4vKi5nYWxsZXJ5LWNhcmQtdGFncyB7Ki9cXG4vKiAgICBkaXNwbGF5OiBmbGV4OyovXFxuLyogICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyovXFxuLyogICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyovXFxuLyogICAgbWFyZ2luLWJvdHRvbTogMTBweDsqL1xcbi8qfSovXFxuXFxuLyouY2FyZC10YWcgeyovXFxuLyogICAgYmFja2dyb3VuZC1jb2xvcjogI2QyZDBkMDsqL1xcbi8qICAgIG1hcmdpbjogMCA1cHg7Ki9cXG4vKiAgICBib3JkZXItcmFkaXVzOiAyNXB4OyovXFxuLyogICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyovXFxuLyogICAgY29sb3I6ICM4Njg1ODU7Ki9cXG4vKiAgICBwYWRkaW5nOiAxcHggNXB4OyovXFxuLyogICAgZm9udC1zaXplOiAxMnB4OyovXFxuXFxuLyp9Ki9cXG5cXG4vKi5nYWxsZXJ5LWNhcmQtdGFnczpsaW5rIHsqL1xcbi8qICAgIGRpc3BsYXk6IGZsZXg7Ki9cXG4vKiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7Ki9cXG4vKiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7Ki9cXG4vKn0qL1xcblxcbi8qLmdhbGxlcnktY2FyZC10YWdzOmFjdGl2ZSB7Ki9cXG4vKiAgICBkaXNwbGF5OiBmbGV4OyovXFxuLyogICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyovXFxuLyogICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyovXFxuLyp9Ki9cXG5cXG4vKi5nYWxsZXJ5LWNhcmQtdGFnczp2aXNpdGVkIHsqL1xcbi8qICAgIGRpc3BsYXk6IGZsZXg7Ki9cXG4vKiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7Ki9cXG4vKiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7Ki9cXG5cXG4vKn0qL1xcblxcbi8qLmdhbGxlcnktY2FyZC1ib3R0b217Ki9cXG4vKiAgICBkaXNwbGF5OiBmbGV4OyovXFxuLyogICAgd2lkdGg6IDEwMCU7Ki9cXG4vKiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7Ki9cXG4vKiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsqL1xcbi8qfSovXFxuXFxuLyouYnV0dG9uLXByaW1hcnl7Ki9cXG4vKiAgICBtYXJnaW46IDIwcHg7Ki9cXG4vKiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjA3MTY3OyovXFxuLyogICAgY29sb3I6ICNGRUQ5Qjc7Ki9cXG4vKiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyovXFxuLyogICAgcGFkZGluZzogMTBweCAyMHB4OyovXFxuLyogICAgYm9yZGVyOiBub25lOyovXFxuLyp9Ki9cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcXG4gICAgfVxcblxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMXB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvcmVjaXBlc2dhbGxlcmllcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLHdCQUF3QjtBQUN4QixxQkFBcUI7QUFDckIsK0JBQStCO0FBQy9CLDJCQUEyQjtBQUMzQix1QkFBdUI7QUFDdkIsc0JBQXNCO0FBQ3RCLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckIsSUFBSTs7QUFFSixrQkFBa0I7QUFDbEIsaUNBQWlDO0FBQ2pDLHNCQUFzQjtBQUN0QixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQiwyQkFBMkI7QUFDM0IsbUNBQW1DO0FBQ25DLHVCQUF1QjtBQUN2QixzQkFBc0I7QUFDdEIsMkJBQTJCO0FBQzNCLG9CQUFvQjtBQUNwQixJQUFJOztBQUVKLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckIsSUFBSTs7QUFFSixrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLDJCQUEyQjtBQUMzQix1QkFBdUI7QUFDdkIsK0JBQStCO0FBQy9CLDJCQUEyQjtBQUMzQixzQkFBc0I7QUFDdEIscUNBQXFDO0FBQ3JDLElBQUk7OztBQUdKLGtCQUFrQjtBQUNsQixxQkFBcUI7QUFDckIseUJBQXlCO0FBQ3pCLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIsOEJBQThCO0FBQzlCLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsaUNBQWlDO0FBQ2pDLElBQUk7OztBQUdKLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIsK0JBQStCO0FBQy9CLDhCQUE4QjtBQUM5QixJQUFJOztBQUVKLHNCQUFzQjtBQUN0QixxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CLG9CQUFvQjtBQUNwQix3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLDJCQUEyQjtBQUMzQix5QkFBeUI7QUFDekIsSUFBSTs7QUFFSix3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQiw4QkFBOEI7QUFDOUIsdUJBQXVCO0FBQ3ZCLCtCQUErQjtBQUMvQiwyQkFBMkI7QUFDM0IsSUFBSTs7QUFFSix3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCLHdCQUF3QjtBQUN4QiwyQkFBMkI7QUFDM0IsNkJBQTZCO0FBQzdCLHNCQUFzQjtBQUN0QixJQUFJOztBQUVKLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckIsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3QiwyQkFBMkI7QUFDM0IsSUFBSTs7QUFFSixjQUFjO0FBQ2QsaUNBQWlDO0FBQ2pDLHFCQUFxQjtBQUNyQiwyQkFBMkI7QUFDM0IsNkJBQTZCO0FBQzdCLHNCQUFzQjtBQUN0Qix3QkFBd0I7QUFDeEIsdUJBQXVCOztBQUV2QixJQUFJOztBQUVKLDRCQUE0QjtBQUM1QixxQkFBcUI7QUFDckIsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3QixJQUFJOztBQUVKLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckIsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3QixJQUFJOztBQUVKLCtCQUErQjtBQUMvQixxQkFBcUI7QUFDckIsNkJBQTZCO0FBQzdCLDZCQUE2Qjs7QUFFN0IsSUFBSTs7QUFFSix3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQiw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLElBQUk7O0FBRUosbUJBQW1CO0FBQ25CLG9CQUFvQjtBQUNwQixpQ0FBaUM7QUFDakMsc0JBQXNCO0FBQ3RCLDJCQUEyQjtBQUMzQiwwQkFBMEI7QUFDMUIsb0JBQW9CO0FBQ3BCLElBQUk7OztBQUdKO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMkJBQTJCO0lBQy9COztBQUVKOztBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ2FsbGVyeS1wYWdle1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcXG59XFxuXFxuLmJlZm9yZS1nYWxsZXJ5IHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLyouZ2FsbGVyeS1wYWdlLXRpdGxlIHsqL1xcbi8qICAgIGRpc3BsYXk6IGZsZXg7Ki9cXG4vKiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsqL1xcbi8qICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cXG4vKiAgICBmb250LXNpemU6IDMwcHg7Ki9cXG4vKiAgICBjb2xvcjogIzJmMmYyZjsqL1xcbi8qICAgIG1hcmdpbjogMHB4OyovXFxuLyogICAgcGFkZGluZzogNDBweDsqL1xcbi8qfSovXFxuXFxuLyouc2VhcmNoLWlucHV0IHsqL1xcbi8qICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UyZTI7Ki9cXG4vKiAgICBjb2xvcjogIzQxNDA0MDsqL1xcbi8qICAgIHdpZHRoOiA1MDBweDsqL1xcbi8qICAgIGhlaWdodDogNDBweDsqL1xcbi8qICAgIGRpc3BsYXk6IGZsZXg7Ki9cXG4vKiAgICBhbGlnbi1pdGVtczogY2VudGVyOyovXFxuLyogICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyovXFxuLyogICAgcGFkZGluZzogMCAyMHB4OyovXFxuLyogICAgbWFyZ2luOiAwIGF1dG87Ki9cXG4vKiAgICBib3JkZXItcmFkaXVzOiAyNXB4OyovXFxuLyogICAgYm9yZGVyOiBub25lOyovXFxuLyp9Ki9cXG5cXG4vKi5zZWFyY2gtaW5wdXQ6Zm9jdXN7Ki9cXG4vKiAgICBvdXRsaW5lOiBub25lOyovXFxuLyp9Ki9cXG5cXG4vKi5nYWxsZXJ5LW1haW4geyovXFxuLyogICAgZGlzcGxheTogZmxleDsqL1xcbi8qICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7Ki9cXG4vKiAgICBmbGV4LXdyYXA6IHdyYXA7Ki9cXG4vKiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsqL1xcbi8qICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cXG4vKiAgICBtYXJnaW46IDAgNDBweDsqL1xcbi8qICAgICEqYmFja2dyb3VuZC1jb2xvcjogIzAwODFBNzsqISovXFxuLyp9Ki9cXG5cXG5cXG4vKi5nYWxsZXJ5LWNhcmQgeyovXFxuLyogICAgZGlzcGxheTogZmxleDsqL1xcbi8qICAgIG1hcmdpbjogMjBweCAxMHB4OyovXFxuLyogICAgd2lkdGg6IDMwMHB4OyovXFxuLyogICAgaGVpZ2h0OiA0MDBweDsqL1xcbi8qICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Ki9cXG4vKiAgICBib3JkZXItcmFkaXVzOiAyNXB4OyovXFxuLyogICAgYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xcbi8qICAgIGJhY2tncm91bmQtY29sb3I6ICNGRUQ5Qjc7Ki9cXG4vKn0qL1xcblxcblxcbi8qLmdhbGxlcnktY2FyZC10b3B7Ki9cXG4vKiAgICBkaXNwbGF5OiBmbGV4OyovXFxuLyogICAgd2lkdGg6IDEwMCU7Ki9cXG4vKiAgICBoZWlnaHQ6IDEwMCU7Ki9cXG4vKiAgICBwYWRkaW5nOiAyMHB4OyovXFxuLyogICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7Ki9cXG4vKiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyovXFxuLyp9Ki9cXG5cXG4vKi5nYWxsZXJ5LWNhcmQtaW1nIHsqL1xcbi8qICAgIGRpc3BsYXk6IGZsZXg7Ki9cXG4vKiAgICB3aWR0aDogMTAwJTsqL1xcbi8qICAgIGhlaWdodDogMTAwJTsqL1xcbi8qICAgIG1heC13aWR0aDogMjUwcHg7Ki9cXG4vKiAgICBtYXgtaGVpZ2h0OiAyMDBweDsqL1xcbi8qICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7Ki9cXG4vKiAgICBvYmplY3QtZml0OiBjb3ZlcjsqL1xcbi8qfSovXFxuXFxuLyouZ2FsbGVyeS1jYXJkLWNlbnRlcnsqL1xcbi8qICAgIGRpc3BsYXk6IGZsZXg7Ki9cXG4vKiAgICB3aWR0aDogMTAwJTsqL1xcbi8qICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Ki9cXG4vKiAgICBmbGV4LXdyYXA6IHdyYXA7Ki9cXG4vKiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsqL1xcbi8qICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cXG4vKn0qL1xcblxcbi8qLmdhbGxlcnktY2FyZC10aXRsZSB7Ki9cXG4vKiAgICBkaXNwbGF5OiBmbGV4OyovXFxuLyogICAgbWFyZ2luLXRvcDogMjBweDsqL1xcbi8qICAgIG1hcmdpbi1ib3R0b206IDIwcHg7Ki9cXG4vKiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7Ki9cXG4vKiAgICBjb2xvcjogIzJmMmYyZjsqL1xcbi8qfSovXFxuXFxuLyouZ2FsbGVyeS1jYXJkLXRhZ3MgeyovXFxuLyogICAgZGlzcGxheTogZmxleDsqL1xcbi8qICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsqL1xcbi8qICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsqL1xcbi8qICAgIG1hcmdpbi1ib3R0b206IDEwcHg7Ki9cXG4vKn0qL1xcblxcbi8qLmNhcmQtdGFnIHsqL1xcbi8qICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmQwZDA7Ki9cXG4vKiAgICBtYXJnaW46IDAgNXB4OyovXFxuLyogICAgYm9yZGVyLXJhZGl1czogMjVweDsqL1xcbi8qICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsqL1xcbi8qICAgIGNvbG9yOiAjODY4NTg1OyovXFxuLyogICAgcGFkZGluZzogMXB4IDVweDsqL1xcbi8qICAgIGZvbnQtc2l6ZTogMTJweDsqL1xcblxcbi8qfSovXFxuXFxuLyouZ2FsbGVyeS1jYXJkLXRhZ3M6bGluayB7Ki9cXG4vKiAgICBkaXNwbGF5OiBmbGV4OyovXFxuLyogICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyovXFxuLyogICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyovXFxuLyp9Ki9cXG5cXG4vKi5nYWxsZXJ5LWNhcmQtdGFnczphY3RpdmUgeyovXFxuLyogICAgZGlzcGxheTogZmxleDsqL1xcbi8qICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsqL1xcbi8qICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsqL1xcbi8qfSovXFxuXFxuLyouZ2FsbGVyeS1jYXJkLXRhZ3M6dmlzaXRlZCB7Ki9cXG4vKiAgICBkaXNwbGF5OiBmbGV4OyovXFxuLyogICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyovXFxuLyogICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyovXFxuXFxuLyp9Ki9cXG5cXG4vKi5nYWxsZXJ5LWNhcmQtYm90dG9teyovXFxuLyogICAgZGlzcGxheTogZmxleDsqL1xcbi8qICAgIHdpZHRoOiAxMDAlOyovXFxuLyogICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyovXFxuLyogICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7Ki9cXG4vKn0qL1xcblxcbi8qLmJ1dHRvbi1wcmltYXJ5eyovXFxuLyogICAgbWFyZ2luOiAyMHB4OyovXFxuLyogICAgYmFja2dyb3VuZC1jb2xvcjogI0YwNzE2NzsqL1xcbi8qICAgIGNvbG9yOiAjRkVEOUI3OyovXFxuLyogICAgYm9yZGVyLXJhZGl1czogMTVweDsqL1xcbi8qICAgIHBhZGRpbmc6IDEwcHggMjBweDsqL1xcbi8qICAgIGJvcmRlcjogbm9uZTsqL1xcbi8qfSovXFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XFxuICAgIH1cXG5cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDFweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./src/styles/recipesgalleries.css\n"));

/***/ })

});