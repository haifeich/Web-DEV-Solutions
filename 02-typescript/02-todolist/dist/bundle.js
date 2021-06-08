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

eval("\r\nconst appRoot = document.getElementById(\"app\");\r\nif (!(appRoot instanceof HTMLDivElement)) {\r\n    throw new Error(\"Can't find an element with id 'app'\");\r\n}\r\nconst todos = [\r\n    { title: \"Learn NodeJs\", done: false },\r\n    { title: \"Learn Python\", done: false },\r\n];\r\nconst render = () => {\r\n    appRoot.innerHTML = \"\";\r\n    const ulElement = document.createElement(\"ul\");\r\n    appRoot.appendChild(ulElement);\r\n    for (const todo of todos) {\r\n        const liElement = document.createElement(\"li\");\r\n        const pTitle = document.createElement(\"p\");\r\n        const spanDone = document.createElement(\"span\");\r\n        const inputCheck = document.createElement(\"input\");\r\n        liElement.appendChild(pTitle);\r\n        liElement.appendChild(spanDone);\r\n        liElement.appendChild(inputCheck);\r\n        pTitle.innerText = todo.title;\r\n        spanDone.innerText = todo.done ? \"done\" : \"not done\";\r\n        inputCheck.setAttribute(\"type\", \"checkbox\");\r\n        inputCheck.checked = todo.done;\r\n        ulElement.appendChild(liElement);\r\n        inputCheck.addEventListener(\"change\", () => {\r\n            todo.done = !todo.done;\r\n            render();\r\n        });\r\n    }\r\n    const formElement = document.createElement(\"form\");\r\n    const inputText = document.createElement(\"input\");\r\n    const buttonElement = document.createElement(\"button\");\r\n    inputText.setAttribute(\"type\", \"text\");\r\n    buttonElement.innerText = \"Add To Do\";\r\n    buttonElement.setAttribute(\"type\", \"submit\");\r\n    formElement.setAttribute(\"method\", \"post\");\r\n    formElement.setAttribute(\"action\", \"\");\r\n    formElement.appendChild(inputText);\r\n    formElement.appendChild(buttonElement);\r\n    appRoot.appendChild(formElement);\r\n    buttonElement.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        if (inputText.value.trim() === \"\") {\r\n            const pError = document.createElement(\"p\");\r\n            pError.innerText = \"Todo can't be empty\";\r\n            formElement.appendChild(pError);\r\n            inputText.value = \"\";\r\n        }\r\n        else {\r\n            todos.push({ title: inputText.value, done: false });\r\n            render();\r\n        }\r\n    });\r\n};\r\nrender();\r\n\n\n//# sourceURL=webpack://05-array-sum/./src/main.ts?");

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