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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("\r\nconst inputA = document.querySelector(\"#a\");\r\nconst inputB = document.querySelector(\"#b\");\r\nif (!(inputA instanceof HTMLInputElement)) {\r\n    throw new Error(\"Can't find input with id a\");\r\n}\r\nif (!(inputB instanceof HTMLInputElement)) {\r\n    throw new Error(\"Can't find input with id b\");\r\n}\r\nconst convertC = () => {\r\n    let val_a = Number(inputA.value);\r\n    //   let val_b = Number(inputB.value);\r\n    inputB.value = ((val_a - 32) / 1.8).toFixed(2);\r\n};\r\nconst convertF = () => {\r\n    //   let val_a = Number(inputA.value);\r\n    let val_b = Number(inputB.value);\r\n    inputA.value = (val_b * 1.8 + 32).toFixed(2);\r\n};\r\ninputA.addEventListener(\"input\", convertC);\r\ninputB.addEventListener(\"input\", convertF);\r\n\n\n//# sourceURL=webpack://04-addition/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;