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

eval("\r\nconst inputA = document.querySelector(\"#a\");\r\nconst inputB = document.querySelector(\"#b\");\r\nconst selectA = document.querySelector(\"#selectA\");\r\nconst selectB = document.querySelector(\"#selectB\");\r\nif (!(inputA instanceof HTMLInputElement)) {\r\n    throw new Error(\"Can't find input with id a\");\r\n}\r\nif (!(inputB instanceof HTMLInputElement)) {\r\n    throw new Error(\"Can't find input with id b\");\r\n}\r\nif (!(selectA instanceof HTMLSelectElement)) {\r\n    throw new Error(\"Can't find select with id selectA\");\r\n}\r\nif (!(selectB instanceof HTMLSelectElement)) {\r\n    throw new Error(\"Can't find select with id selectB\");\r\n}\r\nconst convertFtoC = (x) => ((Number(x) - 32) / 1.8).toFixed(2);\r\nconst convertCtoF = (x) => (Number(x) * 1.8 + 32).toFixed(2);\r\nconst convertCtoK = (x) => (Number(x) + 273.15).toFixed(2);\r\nconst convertKtoC = (x) => (Number(x) - 273.15).toFixed(2);\r\nconst convertFtoK = (x) => ((Number(x) - 32) / 1.8 + 273.15).toFixed(2);\r\nconst convertKtoF = (x) => ((Number(x) - 273.15) * 1.8 + 32).toFixed(2);\r\nconst changeA = () => {\r\n    if (selectA.value === \"fahrenheit\") {\r\n        switch (selectB.value) {\r\n            case \"fahrenheit\":\r\n                inputB.value = inputA.value;\r\n                break;\r\n            case \"celsius\":\r\n                inputB.value = convertFtoC(inputA.value);\r\n                break;\r\n            case \"kelvin\":\r\n                inputB.value = convertFtoK(inputA.value);\r\n                break;\r\n        }\r\n    }\r\n    else if (selectA.value === \"celsius\") {\r\n        switch (selectB.value) {\r\n            case \"fahrenheit\":\r\n                inputB.value = convertCtoF(inputA.value);\r\n                break;\r\n            case \"celsius\":\r\n                inputB.value = inputA.value;\r\n                break;\r\n            case \"kelvin\":\r\n                inputB.value = convertCtoK(inputA.value);\r\n                break;\r\n        }\r\n    }\r\n    else {\r\n        switch (selectB.value) {\r\n            case \"fahrenheit\":\r\n                inputB.value = convertKtoF(inputA.value);\r\n                break;\r\n            case \"celsius\":\r\n                inputB.value = convertKtoC(inputA.value);\r\n                break;\r\n            case \"kelvin\":\r\n                inputB.value = inputA.value;\r\n                break;\r\n        }\r\n    }\r\n};\r\nconst changeB = () => {\r\n    if (selectB.value === \"fahrenheit\") {\r\n        switch (selectA.value) {\r\n            case \"fahrenheit\":\r\n                inputA.value = inputB.value;\r\n                break;\r\n            case \"celsius\":\r\n                inputA.value = convertFtoC(inputB.value);\r\n                break;\r\n            case \"kelvin\":\r\n                inputA.value = convertFtoK(inputB.value);\r\n                break;\r\n        }\r\n    }\r\n    else if (selectB.value === \"celsius\") {\r\n        switch (selectA.value) {\r\n            case \"fahrenheit\":\r\n                inputA.value = convertCtoF(inputB.value);\r\n                break;\r\n            case \"celsius\":\r\n                inputA.value = inputB.value;\r\n                break;\r\n            case \"kelvin\":\r\n                inputA.value = convertCtoK(inputB.value);\r\n                break;\r\n        }\r\n    }\r\n    else {\r\n        switch (selectA.value) {\r\n            case \"fahrenheit\":\r\n                inputA.value = convertKtoF(inputB.value);\r\n                break;\r\n            case \"celsius\":\r\n                inputA.value = convertKtoC(inputB.value);\r\n                break;\r\n            case \"kelvin\":\r\n                inputA.value = inputB.value;\r\n                break;\r\n        }\r\n    }\r\n};\r\ninputA.addEventListener(\"input\", changeA);\r\ninputB.addEventListener(\"input\", changeB);\r\nselectA.addEventListener(\"change\", changeA);\r\nselectB.addEventListener(\"change\", changeB);\r\n\n\n//# sourceURL=webpack://04-addition/./src/main.ts?");

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