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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html, body {\r\n    height: 100%;\r\n    width: 100vw;\r\n    margin: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    background-color: antiquewhite;\r\n}\r\n\r\n#game-window {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 5vw;\r\n}\r\n\r\n.game-header {\r\n    margin: 30px 0 30px 0;\r\n    font-size: 50px;\r\n    font-weight: 600;\r\n}\r\n\r\n.footer {\r\n    margin: 30px 0 20px 0;\r\n    font-size: 20px;\r\n}\r\n\r\n.table-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.table-title {\r\n    font-size: 1.5em;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    width: 50vmin;\r\n    height: 50vmin;\r\n}\r\n\r\ntd {\r\n    border: 1px solid black;\r\n    width: 10%;\r\n    height: 10%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#game-console {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n}\r\n\r\n.cell-disabled {\r\n    pointer-events: none;\r\n    opacity: 0.5;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/GameBoard.js":
/*!**************************!*\
  !*** ./src/GameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getRandomInt: () => (/* binding */ getRandomInt)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n\r\nlet id = 1;\r\nclass GameBoard {\r\n\r\n    constructor() {\r\n        const rows = 10;\r\n        const cols = 10;\r\n        this.gameField = Array.from({ length: rows }, () => Array(cols).fill(0));\r\n        this.shipCount = 0;\r\n        this.sunkShips = 0;\r\n    }\r\n\r\n    receiveAttack(x, y) {\r\n        if (this.gameField[x][y] instanceof _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n            const currentShip = this.gameField[x][y];\r\n            currentShip.hit();\r\n\r\n            if (currentShip.checkIfSunk()) {\r\n                currentShip.isSunk = true;\r\n                ++this.sunkShips;\r\n                if (this.allShipsSunk()) {\r\n                }\r\n            } else {\r\n            }\r\n        }\r\n    }\r\n\r\n    allShipsSunk() {\r\n        return this.shipCount === this.sunkShips;\r\n    }\r\n\r\n    populateGameBoardRandom() {\r\n        const shipLengths = [4, 3, 2, 1, 2, 2, 1, 1, 1, 3];\r\n        let x = getRandomInt(10);\r\n        let y = getRandomInt(10);\r\n        let directionCode = getRandomInt(2);\r\n        let direction = directionCode === 0 ? 'horizontal' : 'vertical';\r\n        for (let i = 0; i < shipLengths.length; i++) {\r\n            while(!this.hasPlace(x, y, shipLengths[i], direction)) {\r\n                x = getRandomInt(10);\r\n                y = getRandomInt(10);\r\n                directionCode = getRandomInt(2);\r\n                direction = directionCode === 0 ? 'horizontal' : 'vertical';\r\n            }\r\n            this.placeShip(x, y, shipLengths[i], direction);\r\n        }\r\n    }\r\n\r\n    hasPlace(x, y, length, direction) {\r\n        const gridSize = 10;\r\n\r\n        if (direction === 'horizontal') {\r\n            if (y + length > gridSize) {\r\n                return false;\r\n            }\r\n            for (let i = y; i < y + length; i++) {\r\n                if (this.gameField[x][i] !== 0) {\r\n                    return false;\r\n                }\r\n            }\r\n            for (let i = Math.max(0, x - 1); i <= Math.min(gridSize - 1, x + 1); i++) {\r\n                for (let j = Math.max(0, y - 1); j <= Math.min(gridSize - 1, y + length); j++) {\r\n                    if (this.gameField[i][j] !== 0 && !(i === x && j >= y && j < y + length)) {\r\n                        return false;\r\n                    }\r\n                }\r\n            }\r\n        } else {\r\n            if (x + length > gridSize) {\r\n                return false;\r\n            }\r\n            for (let i = x; i < x + length; i++) {\r\n                if (this.gameField[i][y] !== 0) {\r\n                    return false;\r\n                }\r\n            }\r\n            for (let i = Math.max(0, x - 1); i <= Math.min(gridSize - 1, x + length); i++) {\r\n                for (let j = Math.max(0, y - 1); j <= Math.min(gridSize - 1, y + 1); j++) {\r\n                    if (this.gameField[i][j] !== 0 && !(j === y && i >= x && i < x + length)) {\r\n                        return false;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return true;\r\n}\r\n\r\n\r\n    placeShip(x, y, length, direction) {\r\n        if (this.hasPlace(x, y, length, direction)) {\r\n            const currentShip = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.id++, length);\r\n            if (direction === 'horizontal') {\r\n                for (let i = y; i < y + length; i++) {\r\n                    this.gameField[x][i] = currentShip;\r\n                }\r\n            } else {\r\n                for (let i = x; i < x + length; i++) {\r\n                    this.gameField[i][y] = currentShip;\r\n                }\r\n            }\r\n            ++this.shipCount;\r\n        }\r\n    }\r\n}\r\n\r\nfunction getRandomInt(max) {\r\n    return Math.floor(Math.random() * max);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n//# sourceURL=webpack://odin-battleship/./src/GameBoard.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ \"./src/GameBoard.js\");\n\r\n\r\nclass Player {\r\n    constructor() {\r\n        this.gameboard = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\r\n\r\n    constructor(id, length) {\r\n        this.length = length;\r\n        this.hitCount = 0;\r\n        this.isSunk = false;\r\n        this.id = id;\r\n    }\r\n\r\n    hit() {\r\n        ++this.hitCount;\r\n    }\r\n\r\n    checkIfSunk() {\r\n        return this.length === this.hitCount;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/Ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ \"./src/GameBoard.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Global variables\r\nlet comBrain = Array.from({ length: 10 }, () => Array(10).fill(0)); // Store the computers guesses\r\nlet playerMove = 'player1'; // Keep track of the current Player\r\nlet gameField1Copy = null;\r\nlet gameBoard1 = null;\r\nlet gameBoard2 = null;\r\n\r\n\r\n// Starting the first game\r\nsetupGame();\r\nlet player2Table = document.getElementById('player2Table');\r\nconst gameConsole = document.getElementById('game-console');\r\ngameMachine();\r\n\r\n// Controls the game flow and switches between the players. Stops the game if there is a winner, restarts after\r\nfunction gameMachine() {\r\n    switch (playerMove) {\r\n        case 'player1':\r\n            gameConsole.innerHTML = 'Its your turn';\r\n            if (player2Table.style.filter === 'blur(5px)') {\r\n                removeBlur(player2Table);\r\n            }\r\n            if (gameBoard2.allShipsSunk()) {\r\n                gameConsole.innerHTML = 'You won!, restarting game in 5 seconds';\r\n                sleep(5000).then(() => {\r\n                    restartGame()\r\n                });\r\n            }\r\n            break;\r\n\r\n        case 'player2':\r\n            gameConsole.innerHTML = 'Computer is playing';\r\n            applyBlur(player2Table);\r\n            sleep(1000).then(() => {\r\n                randomGuess(gameField1Copy);\r\n            });\r\n            if (gameBoard1.allShipsSunk()) {\r\n                gameConsole.innerHTML = 'The computer has won!, restarting game in 5 seconds';\r\n                sleep(5000).then(() => {\r\n                    restartGame()\r\n                });\r\n            }\r\n            break;\r\n    }\r\n}\r\n\r\n// Restarts the game\r\nfunction restartGame() {\r\n    disableUserInput();\r\n    location.reload();\r\n}\r\n\r\n// Disables the user input while the computer is playing\r\nfunction disableUserInput() {\r\n    const cells = document.querySelectorAll('#player2Table td');\r\n    cells.forEach(cell => {\r\n        cell.style.pointerEvents = 'none'; // Disable clicks\r\n    });\r\n}\r\n\r\n// Enables the user input after the computers play\r\nfunction enableUserInput() {\r\n    const cells = document.querySelectorAll('#player2Table td');\r\n    cells.forEach(cell => {\r\n        cell.style.pointerEvents = 'auto'; // Enable clicks\r\n    });\r\n}\r\n\r\n// Initializes the players as well as their game boards and rendering the information on the screen\r\nfunction setupGame() {\r\n    const player1 = new _Player__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    const player2 = new _Player__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    gameBoard1 = player1.gameboard;\r\n    gameBoard2 = player2.gameboard;\r\n    const gameField1 = gameBoard1.gameField;\r\n    gameField1Copy = gameField1;\r\n    const gameField2 = gameBoard2.gameField;\r\n    createTable(1, 10, 10);\r\n    createTable(2, 10, 10);\r\n    gameBoard1.populateGameBoardRandom();\r\n    gameBoard2.populateGameBoardRandom();\r\n    renderGameBoard(1, gameField1, false);\r\n    renderGameBoard(2, gameField2, true);\r\n}\r\n\r\nlet missedCells = [];\r\nconst quadrants = [\r\n    { xStart: 0, xEnd: 4, yStart: 0, yEnd: 4 }, // Top-left\r\n    { xStart: 0, xEnd: 4, yStart: 5, yEnd: 9 }, // Bottom-left\r\n    { xStart: 5, xEnd: 9, yStart: 0, yEnd: 4 }, // Top-right\r\n    { xStart: 5, xEnd: 9, yStart: 5, yEnd: 9 }  // Bottom-right\r\n];\r\n\r\nlet fullyGuessedQuadrants = new Set();\r\n\r\n// Guesses for the computer using a random strategy by diving the field into quadrants and further into cells\r\nfunction randomGuess(gameField) {\r\n    const quadrant = getNextRandomQuadrant();\r\n    if (!quadrant) {\r\n        console.error(\"No valid quadrants available.\");\r\n        return;\r\n    }\r\n\r\n    const validCells = getValidCellsInQuadrant(quadrant);\r\n    if (validCells.length > 0) {\r\n        makeRandomGuess(validCells, gameField);\r\n    } else {\r\n        markQuadrantAsGuessed(quadrant);\r\n        randomGuess(gameField);\r\n    }\r\n}\r\n\r\nfunction getNextRandomQuadrant() {\r\n    const availableQuadrants = quadrants.filter((_, index) => !fullyGuessedQuadrants.has(index));\r\n    if (availableQuadrants.length === 0) return null;\r\n\r\n    const randomIndex = Math.floor(Math.random() * availableQuadrants.length);\r\n    return availableQuadrants[randomIndex];\r\n}\r\n\r\nfunction getValidCellsInQuadrant(quadrant) {\r\n    const validCells = [];\r\n    for (let i = quadrant.xStart; i <= quadrant.xEnd; i++) {\r\n        for (let j = quadrant.yStart; j <= quadrant.yEnd; j++) {\r\n            if (comBrain[i][j] === 0 && !isAdjacentToMissedCell(i, j)) {\r\n                validCells.push([i, j]);\r\n            }\r\n        }\r\n    }\r\n    return validCells;\r\n}\r\n\r\nfunction makeRandomGuess(validCells, gameField) {\r\n    const [x, y] = validCells[(0,_GameBoard__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(validCells.length)];\r\n    processGuess(x, y, gameField);\r\n}\r\n\r\n// Processes the random guess of the computer\r\nfunction processGuess(x, y, gameField) {\r\n    const table = document.getElementById('player1Table');\r\n    const cell = table.rows[x].cells[y];\r\n    const isHit = gameField[x][y] instanceof _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n\r\n    cell.style.backgroundColor = isHit ? 'IndianRed' : 'CornflowerBlue';\r\n    comBrain[x][y] = isHit ? 1 : 2; // Mark as hit or miss\r\n\r\n    if (isHit) {\r\n        markHit(x, y, table, gameField);\r\n        // Check for victory immediately after a hit\r\n        if (gameBoard1.allShipsSunk()) {\r\n            gameConsole.innerHTML = 'The computer has won!, restarting game in 5 seconds';\r\n            sleep(5000).then(() => {\r\n                restartGame();\r\n            });\r\n            return; // Exit function to avoid further actions\r\n        } else {\r\n            smartGuess(gameField, table); // Continue guessing\r\n        }\r\n    } else {\r\n        playerMove = 'player1'; // Switch to player 1 (user) after missing\r\n    }\r\n\r\n    // Continue game logic only if game is not over\r\n    gameMachine();\r\n}\r\n\r\nfunction markQuadrantAsGuessed(quadrant) {\r\n    fullyGuessedQuadrants.add(quadrants.indexOf(quadrant));\r\n}\r\n\r\nfunction isAdjacentToMissedCell(x, y) {\r\n    const directions = [\r\n        [x - 1, y], // Up\r\n        [x + 1, y], // Down\r\n        [x, y - 1], // Left\r\n        [x, y + 1]  // Right\r\n    ];\r\n\r\n    return directions.some(([nx, ny]) =>\r\n        nx >= 0 && nx < 10 && ny >= 0 && ny < 10 && missedCells.some(([mx, my]) => mx === nx && my === ny)\r\n    );\r\n}\r\n\r\nfunction sleep(ms) {\r\n    return new Promise(resolve => setTimeout(resolve, ms));\r\n}\r\n\r\nfunction renderGameBoard(playerId, gameField, isInteractive) {\r\n    const table = document.getElementById(`player${playerId}Table`);\r\n    if (!table) return;\r\n\r\n    const cols = 10;\r\n    const rows = 10;\r\n\r\n    for (let i = 0; i < rows; i++) {\r\n        for (let j = 0; j < cols; j++) {\r\n            const cell = table.rows[i].cells[j];\r\n\r\n            if (gameField[i][j] instanceof _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\r\n                cell.className = 'ship';\r\n                if (playerId === 1) cell.style.backgroundColor = 'grey';\r\n            }\r\n            if (isInteractive) {\r\n                cell.addEventListener('click', function handleClick() {\r\n                    handleCellClick(i, j, gameField, table);\r\n                    cell.removeEventListener('click', handleClick);\r\n                });\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction handleCellClick(x, y, gameField, table) {\r\n    if (table === 'player1Table') {\r\n        gameBoard1.receiveAttack(x, y);\r\n    } else {\r\n        gameBoard2.receiveAttack(x, y);\r\n    }\r\n    const cell = table.rows[x].cells[y];\r\n    let hit = false;\r\n    if (gameField[x][y] instanceof _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\r\n        cell.style.backgroundColor = 'IndianRed';\r\n        markHit(x, y, table, gameField);\r\n        hit = true;\r\n    } else {\r\n        cell.style.backgroundColor = 'CornflowerBlue';\r\n        hit = false;\r\n    }\r\n    if (!hit) {\r\n        playerMove = playerMove === 'player1' ? 'player2' : 'player1';\r\n    }\r\n    if (hit && gameField === gameField1Copy) smartGuess(gameField, table);\r\n    gameMachine();\r\n}\r\n\r\n// SmartGuess is used after the computer has had a successful guess. It guesses the cells adjacent to the  successful cell\r\nfunction smartGuess(gameField, table) {\r\n    const queue = []; // Fifo - First in First Out\r\n\r\n    for (let k = 0; k < 10; k++) {\r\n        for (let l = 0; l < 10; l++) {\r\n            if (comBrain[k][l] === 1) { // Found a hit\r\n                queue.push([k, l]);\r\n            }\r\n        }\r\n    }\r\n\r\n    while (queue.length > 0) {\r\n        const [x, y] = queue.shift();\r\n\r\n        //Check all directions around the cell excp. diagonal\r\n        const directions = [\r\n            [x - 1, y], // Up\r\n            [x + 1, y], // Down\r\n            [x, y - 1], // Left\r\n            [x, y + 1]  // Right\r\n        ];\r\n        for (let [nx, ny] of directions) {\r\n            if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10 && comBrain[nx][ny] === 0) {\r\n                const cell = table.rows[nx].cells[ny];\r\n\r\n                if (gameField[nx][ny] instanceof _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\r\n                    cell.style.backgroundColor = 'IndianRed';\r\n                    markHit(nx, ny, table, gameField);\r\n                    comBrain[nx][ny] = 1; // Mark as hit\r\n                    queue.push([nx, ny]); // Continue guessing around this new hit\r\n                } else {\r\n                    cell.style.backgroundColor = 'CornflowerBlue';\r\n                    comBrain[nx][ny] = 2; // Mark as miss\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    // If no more cells to check, perform a random guess\r\n    if (queue.length === 0) {\r\n        randomGuess(gameField);\r\n    }\r\n}\r\n\r\n// This function marks the cells around a ship after a successful hit\r\nfunction markHit(x, y, table, gameField) {\r\n    for (let k = Math.max(0, x - 1); k < Math.min(10, x + 2); k++) {\r\n        for (let l = Math.max(0, y - 1); l < Math.min(10, y + 2); l++) {\r\n            if (!(gameField[k][l] instanceof _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])) {\r\n                const neighbourCell = table.rows[k].cells[l];\r\n                neighbourCell.style.backgroundColor = 'CornflowerBlue';\r\n                if (gameField === gameField1Copy) { // Update the computers memory\r\n                    comBrain[k][l] = 2;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n// Creates the game boards in the HTML and displays them\r\nfunction createTable(playerId, rows, cols) {\r\n    const gameWindow = document.getElementById('game-window');\r\n    const tableContainer = document.createElement('div');\r\n    tableContainer.className = 'table-container';\r\n\r\n    const tableTitle = document.createElement('div');\r\n    tableTitle.className = 'table-title';\r\n    tableTitle.innerHTML = playerId === 1 ? 'You' : 'Opponent';\r\n\r\n    const table = document.createElement('table');\r\n\r\n    const tbody = document.createElement('tbody');\r\n    for (let i = 0; i < rows; i++) {\r\n        const row = document.createElement('tr');\r\n        for (let j = 0; j < cols; j++) {\r\n            const td = document.createElement('td');\r\n            row.appendChild(td);\r\n        }\r\n        tbody.appendChild(row);\r\n    }\r\n    table.appendChild(tbody);\r\n    table.id = `player${playerId}Table`;\r\n\r\n    tableContainer.appendChild(tableTitle);\r\n    tableContainer.appendChild(table);\r\n    gameWindow.appendChild(tableContainer);\r\n}\r\n\r\n// Blurs the computers table while the computer is playing\r\nfunction applyBlur(element) {\r\n    element.classList.add('cell-disabled');\r\n    element.style.filter = 'blur(5px)';\r\n}\r\n\r\n// Removes the blur if the user is playing\r\nfunction removeBlur(element) {\r\n    element.classList.remove('cell-disabled');\r\n    element.style.filter = 'none';\r\n}\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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