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

eval("\r\nconst appRoot = document.getElementById(\"app\");\r\nif (!(appRoot instanceof HTMLDivElement)) {\r\n    throw new Error(\"Can't find an element with id 'app'\");\r\n}\r\nlet todos = [\r\n    { title: \"Learn NodeJs\", done: false },\r\n    { title: \"Learn Python\", done: false },\r\n];\r\n// due to the logic of TypeScript json could be null\r\nconst json = localStorage.getItem(\"todos\");\r\nif (json) {\r\n    todos = JSON.parse(json);\r\n}\r\nelse {\r\n    localStorage.setItem(\"todos\", JSON.stringify(todos));\r\n}\r\nconst render = () => {\r\n    appRoot.innerHTML = \"\";\r\n    const ulElement = document.createElement(\"ul\");\r\n    const formElement = document.createElement(\"form\");\r\n    const inputText = document.createElement(\"input\");\r\n    const buttonSubmit = document.createElement(\"button\");\r\n    inputText.setAttribute(\"type\", \"text\");\r\n    buttonSubmit.innerText = \"Add To Do\";\r\n    buttonSubmit.setAttribute(\"type\", \"submit\");\r\n    formElement.setAttribute(\"method\", \"post\");\r\n    formElement.setAttribute(\"action\", \"\");\r\n    formElement.appendChild(inputText);\r\n    formElement.appendChild(buttonSubmit);\r\n    const selectEl = document.createElement(\"select\");\r\n    const optionDefault = document.createElement(\"option\");\r\n    const optionAll = document.createElement(\"option\");\r\n    const optionDone = document.createElement(\"option\");\r\n    const optionUndone = document.createElement(\"option\");\r\n    optionDefault.setAttribute(\"selected\", \"selected\");\r\n    optionDefault.setAttribute(\"value\", \"default\");\r\n    optionDefault.innerText = \"-----Choose Your List-----\";\r\n    optionAll.setAttribute(\"value\", \"all\");\r\n    optionAll.innerText = \"All\";\r\n    optionDone.setAttribute(\"value\", \"done\");\r\n    optionDone.innerText = \"Done\";\r\n    optionUndone.setAttribute(\"value\", \"undone\");\r\n    optionUndone.innerText = \"Undone\";\r\n    selectEl.appendChild(optionDefault);\r\n    selectEl.appendChild(optionAll);\r\n    selectEl.appendChild(optionDone);\r\n    selectEl.appendChild(optionUndone);\r\n    formElement.appendChild(selectEl);\r\n    appRoot.appendChild(formElement);\r\n    appRoot.appendChild(ulElement);\r\n    //add a div for empty input error handler and placerholder for done and undone list\r\n    const divHolder = document.createElement(\"div\");\r\n    appRoot.appendChild(divHolder);\r\n    // sort alphapetically\r\n    todos.sort((a, b) => a.title.localeCompare(b.title));\r\n    const loadList = () => {\r\n        ulElement.innerHTML = \"\";\r\n        divHolder.innerHTML = \"\";\r\n        let shows = [];\r\n        switch (selectEl.value) {\r\n            case \"all\":\r\n                shows = todos;\r\n                break;\r\n            case \"done\":\r\n                shows = todos.filter((todo) => todo.done == true);\r\n                break;\r\n            case \"undone\":\r\n                shows = todos.filter((todo) => todo.done == false);\r\n                break;\r\n        }\r\n        for (const show of shows) {\r\n            const liElement = document.createElement(\"li\");\r\n            const pTitle = document.createElement(\"p\");\r\n            const spanDone = document.createElement(\"span\");\r\n            const inputCheck = document.createElement(\"input\");\r\n            liElement.appendChild(pTitle);\r\n            liElement.appendChild(spanDone);\r\n            liElement.appendChild(inputCheck);\r\n            pTitle.innerText = show.title;\r\n            spanDone.innerText = show.done ? \"done\" : \"not done\";\r\n            inputCheck.setAttribute(\"type\", \"checkbox\");\r\n            inputCheck.checked = show.done;\r\n            ulElement.appendChild(liElement);\r\n            inputCheck.addEventListener(\"change\", () => {\r\n                //variable show references object todos\r\n                show.done = !show.done;\r\n                //each change of todo should be tracked\r\n                localStorage.setItem(\"todos\", JSON.stringify(todos));\r\n                loadList();\r\n            });\r\n        }\r\n    };\r\n    selectEl.addEventListener(\"change\", loadList);\r\n    // Submit new todo\r\n    buttonSubmit.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        divHolder.innerHTML = \"\";\r\n        if (inputText.value.trim() === \"\") {\r\n            const pError = document.createElement(\"p\");\r\n            pError.setAttribute(\"id\", \"error\");\r\n            pError.innerText = \"Todo can't be empty\";\r\n            divHolder.appendChild(pError);\r\n            inputText.value = \"\";\r\n        }\r\n        else {\r\n            todos.push({ title: inputText.value, done: false });\r\n            //each change of todo should be tracked\r\n            localStorage.setItem(\"todos\", JSON.stringify(todos));\r\n            if (selectEl.value == \"done\" || selectEl.value == \"default\") {\r\n                selectEl.value = \"all\";\r\n            }\r\n            loadList();\r\n        }\r\n    });\r\n};\r\nrender();\r\n\n\n//# sourceURL=webpack://05-array-sum/./src/main.ts?");

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