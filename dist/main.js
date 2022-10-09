/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createNav = (content) => {\n    const nav = document.createElement(\"div\");\n    nav.className = \"content_navbar\";\n    \n    createNavName(nav);\n    createNavMenu(nav);\n    \n    content.appendChild(nav);\n}\n\nconst createNavName = (nav) => {\n    const navName = document.createElement(\"div\");\n    navName.className = \"navbar-name\";\n    navName.textContent = \"SUSHI HERO\";\n    nav.appendChild(navName);\n};\n\nconst createNavMenu = (nav) => {\n    const navMenu = document.createElement(\"div\");\n    navMenu.className = \"navbar-menu\";\n    const navList = document.createElement(\"li\");\n\n    const navUlHome = document.createElement(\"ul\");\n    const linkHome = document.createElement(\"a\");\n    linkHome.textContent = \"HOME\";\n\n    const navUlMenu = document.createElement(\"ul\");\n    const linkMenu = document.createElement(\"a\");\n    linkMenu.textContent = \"MENU\";\n\n    const navUlContact = document.createElement(\"ul\");\n    const linkContact = document.createElement(\"a\");\n    linkContact.textContent = \"CONTACT\";\n    \n    nav.appendChild(navMenu);\n    navMenu.appendChild(navList);\n    navList.appendChild(navUlHome);\n    navList.appendChild(navUlMenu);\n    navList.appendChild(navUlContact);\n    navUlHome.appendChild(linkHome);\n    navUlMenu.appendChild(linkMenu);\n    navUlContact.appendChild(linkContact);\n}\n\nconst createIntro = (content) => {\n    const intro = document.createElement(\"div\");\n    intro.className = \"content_intro\";\n    intro.textContent = \"WELCOME TO SUSHI HERO\";\n    const introNewPara = document.createElement(\"p\");\n    introNewPara.textContent = \"JAPANESE RESTAURANT & SUSHI BAR\";\n\n    content.appendChild(intro);\n    intro.appendChild(introNewPara);\n    \n}\n\nconst loadContent = () => {\n    const content = document.querySelector(\".content\");\n\n    createNav(content);\n    createIntro(content);\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContent);\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\n\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;