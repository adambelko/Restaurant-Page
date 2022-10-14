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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addContact = () => {\n    const content = document.querySelector(\".content\");\n    const main = document.createElement(\"div\");\n    main.className = \"main\";\n    \n    const contactPage = document.createElement(\"div\");\n    contactPage.className = \"main_contact\";\n\n    const address = [\"127a Pacific Pde\", \"Narrabeen\", \"2099 NSW Australia\"];\n    const contactNumber = [\"0415 372 554\"];\n\n    const addressHeader = createContact(\"address\", \"Address: \");\n    addText(address, addressHeader);\n\n    const contactHeader = createContact(\"phone\", \"Contact: \");\n    addText(contactNumber, contactHeader);\n\n    content.appendChild(main);\n    main.appendChild(contactPage);\n    contactPage.appendChild(addressHeader);\n    contactPage.appendChild(contactHeader);\n};\n\nconst createContact = (type, text) => {\n    const contact = document.createElement(\"div\");\n    contact.className = `contact-${type}`;\n    contact.textContent = text;\n    return contact;\n};\n\nconst addText = (text, parentElement) => {\n    text.forEach(string => {\n        const para = document.createElement(\"p\");\n        para.className = \"contact-text\";\n        para.textContent = string;\n        parentElement.appendChild(para);\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addIntro\": () => (/* binding */ addIntro),\n/* harmony export */   \"addNav\": () => (/* binding */ addNav),\n/* harmony export */   \"loadContent\": () => (/* binding */ loadContent)\n/* harmony export */ });\n\nconst addNav = (content) => {\n    const nav = document.createElement(\"div\");\n    nav.className = \"content_navbar\";\n\n    const navMenu = document.createElement(\"div\");\n    navMenu.className = \"navbar-menu\";\n    const navMenuList = document.createElement(\"li\");\n\n    addRestaurantName(nav);\n    addNavMenuListItem(\"home\", navMenuList);\n    addNavMenuListItem(\"menu\", navMenuList);\n    addNavMenuListItem(\"contact\", navMenuList);\n\n    content.appendChild(nav);\n    nav.appendChild(navMenu);\n    navMenu.appendChild(navMenuList);\n};\n\nconst addRestaurantName = (nav) => {\n    const restaurantName = document.createElement(\"div\");\n    restaurantName.className = \"navbar-restaurant-name\";\n    restaurantName.textContent = \"SUSHI HIRO\";\n    nav.appendChild(restaurantName);\n};\n\nconst addNavMenuListItem = (text, navMenuList) => {\n    const navListItem = document.createElement(\"ul\");\n    const listItemLink = document.createElement(\"a\");\n    listItemLink.className = `menu-${text}`;\n    listItemLink.textContent = text.toUpperCase();\n    navMenuList.appendChild(navListItem);\n    navListItem.appendChild(listItemLink);\n};\n\nconst addIntro = (content) => {\n    const main = document.createElement(\"div\");\n    main.className = \"main\";\n    const intro = document.createElement(\"div\");\n    intro.className = \"main_intro\";\n    intro.textContent = \"WELCOME TO SUSHI HIRO\";\n    const introNewPara = document.createElement(\"p\");\n    introNewPara.textContent = \"JAPANESE RESTAURANT & SUSHI BAR\";\n    \n    content.appendChild(main);\n    main.appendChild(intro);\n    intro.appendChild(introNewPara);\n};\n\nconst loadContent = () => {\n    const content = document.querySelector(\".content\");\n    addNav(content);\n    addIntro(content);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n(0,_homepage__WEBPACK_IMPORTED_MODULE_1__.loadContent)();\n\nconst swithMenuTabs = () => {\n    const content = document.querySelector(\".content\");\n    const menu = document.querySelector(\".menu-menu\");\n    menu.addEventListener(\"click\", (e) => {\n        eraseMain();\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n\n    const home = document.querySelector(\".menu-home\");\n    home.addEventListener(\"click\", (e) => {\n        eraseMain();\n        (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.addIntro)(content);\n    });\n\n    const contact = document.querySelector(\".menu-contact\");\n    contact.addEventListener(\"click\", (e) => {\n        eraseMain();\n        (0,_contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n};\n\nconst eraseMain = () => {\n    const content = document.querySelector(\".content\");\n    const main = document.querySelector(\".main\");\n    content.removeChild(main);\n};\n\nswithMenuTabs();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addMenu = () => {\n    const content = document.querySelector(\".content\");\n    const main = document.createElement(\"div\");\n    main.className = \"main\";\n    \n    const contentMenu = document.createElement(\"div\");\n    contentMenu.className = \"content_menu\";\n    const menuImg = document.createElement(\"img\");\n    menuImg.src = \"../images/Sushi-Hero-Menu.jpg\";\n    \n    content.appendChild(main);\n    main.appendChild(contentMenu);\n    contentMenu.appendChild(menuImg);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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