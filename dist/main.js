/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./images/hero.jpg */ \"./src/images/hero.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\n:root {\\r\\n\\r\\n\\t--col1: #f1f9f3ff;\\r\\n\\t--col2: #6279b8ff;\\r\\n\\t--col3: #272635ff;\\r\\n\\t--col4: rgb(249, 247, 241);\\r\\n\\t--col5: #4c9f70ff;\\r\\n\\r\\n\\t--overlay-text-color: var(--col1);\\r\\n\\t--text-color: var(--col1);\\r\\n\\t--overlay-text-shadow: 1.2px 1.2px 0px rgba(1, 1, 1, 1);\\r\\n\\t--box-shadow-1: 0px 0px 5px 0px rgba(0,0,0,0.5);\\r\\n\\t--overlay-text-size: 1rem;\\r\\n\\r\\n\\t--txt-shadow-small: 0px 0px 5px 0px rgba(0,0,0,0.75);\\r\\n\\t--txt-shadow-medium: 2px 2px 0px rgba(1, 1, 1, 1);\\r\\n\\r\\n\\t--margin-r: 0 1vw 0 0;\\r\\n\\t--margin-l: 0 0 0 1vw;\\r\\n\\t--margin-lr: 0 1vw 0 1vw;\\r\\n\\r\\n\\t--col-size: 220px;\\r\\n\\t--panel-backcol: rgb(255, 255, 255);\\r\\n\\t--panel-text-col: var(--col3);\\r\\n}\\r\\n\\r\\nhtml {\\r\\n\\tscroll-behavior: smooth;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    font-family: \\\"Trebuchet MS\\\", Arial, sans-serif;\\r\\n\\twidth: 100%;\\r\\n}\\r\\n\\r\\nh2, h3 {\\r\\n\\tfont-size: 1.5rem;\\r\\n}\\r\\n\\r\\nh4 {\\r\\n\\tfont-size: 1.25rem;\\r\\n}\\r\\n\\r\\np, b {\\r\\n\\tfont-size: 1.15rem;\\r\\n}\\r\\n\\r\\n/* screen less than 440px */\\r\\n\\r\\n@media (max-width: 450px) {\\r\\n\\r\\n\\th2, h3 {\\r\\n\\t\\tfont-size: 2.5em;\\r\\n\\t}\\r\\n\\t\\r\\n\\th4 {\\r\\n\\t\\tfont-size: 1.75rem;\\r\\n\\t}\\r\\n\\t\\r\\n\\tp, b {\\r\\n\\t\\tfont-size: 1.5rem\\r\\n\\t}\\r\\n}\\r\\n\\r\\nh2 {\\r\\n\\ttext-align: center;\\r\\n}\\r\\n\\r\\nh2, h3, h4 {\\r\\n\\tbackground-color: rgba(28, 172, 255, 0.158);\\r\\n\\tborder-radius: 10px;\\r\\n\\tpadding: 5px;\\r\\n\\tmargin-bottom: 10px;\\r\\n}\\r\\n\\r\\np {\\r\\n\\tmargin-bottom: 20px;\\r\\n\\tpadding: 5px;\\r\\n\\ttext-align: justify;\\r\\n}\\r\\n\\r\\nli {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\na {\\r\\n    text-decoration: none;\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\nul {\\r\\n    list-style-type: none;\\r\\n}\\r\\n\\r\\n.border-style {\\r\\n\\tborder-radius: 10px;\\r\\n\\t/*box-shadow: var(--txt-shadow-small);*/\\r\\n}\\r\\n\\r\\n#hero-page {\\r\\n    display: flex;\\r\\n\\tjustify-content: center;\\r\\n}\\r\\n\\r\\n.gradient-layer {\\r\\n    width: 100%;\\r\\n    background: linear-gradient( to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 33%, rgba(0, 0, 0, 0.2) 66%, rgba(0, 0, 0, 0) 100%);\\r\\n}\\r\\n\\r\\n#hero-background {\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\t\\r\\n    width: 100%;\\r\\n    height: 100vh;\\r\\n    background-size: cover;\\r\\n    background-repeat: no-repeat;\\r\\n    background-position: center;\\r\\n    position: relative;\\r\\n\\tz-index: -100;\\r\\n}\\r\\n\\r\\n#banner {\\r\\n    position: absolute;\\r\\n    top: 30vh;\\r\\n    margin: 0 auto;\\r\\n    width: 90%;\\r\\n    text-align: center;\\r\\n    font-size: calc(4em + 1vw);\\r\\n    font-weight: bold;\\r\\n    font-variant: small-caps;\\r\\n    line-height: 140%;\\r\\n    text-shadow: 4px 4px 0px rgba(1, 1, 1, 1);\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n    font-size: 2.5rem;\\r\\n    font-weight: bold;\\r\\n    font-variant: small-caps;\\r\\n    position: absolute;\\r\\n    left: 60px;\\r\\n    top: 1vh;\\r\\n    height: 80px;\\r\\n    line-height: 80px;\\r\\n\\toverflow: hidden;\\r\\n}\\r\\n\\r\\n.menu {\\r\\n    position: absolute;\\r\\n    right: 60px;\\r\\n    top: 1vh;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: flex-end;\\r\\n    height: 80px;\\r\\n    line-height: 80px;\\r\\n    z-index: 200;\\r\\n}\\r\\n\\r\\n.menu-item {\\r\\n    font-size: 2.5rem;\\r\\n    font-weight: bold;\\r\\n    font-variant: small-caps;\\r\\n    margin: 0 0 0 60px;\\r\\n    /*color: var(--text-color);\\r\\n    text-shadow: var(--txt-shadow-medium);*/\\r\\n}\\r\\n\\r\\n#walks-page {\\r\\n\\tposition: relative;\\r\\n\\tz-index: 0;\\r\\n\\tpadding-bottom: 30px;\\r\\n}\\r\\n\\r\\n/* all images that can be viewed are 1000px wide */\\r\\n\\r\\n#image-viewer {\\r\\n\\tposition: absolute;\\r\\n\\twidth: 80%;\\r\\n\\theight: auto;\\r\\n\\tleft: calc((100% - 1000px)/2);\\r\\n\\ttop: 2vh;\\r\\n\\tz-index: 250;\\r\\n}\\r\\n\\r\\n.fade-image-in {\\r\\n\\tanimation-name: fadein;\\r\\n\\tanimation-duration: 1s;\\r\\n\\topacity: 1;\\r\\n\\ttransform: scale(1);\\r\\n\\tbox-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);\\r\\n}\\r\\n\\r\\n@keyframes fadein {\\r\\n\\tfrom {\\r\\n\\t\\topacity: 0;\\r\\n\\t\\ttransform: scale(0.80);\\r\\n\\t\\tbox-shadow: 0px 0px 1px 0px rgba(0,0,0,0.5);\\r\\n\\t}\\r\\n\\tto {\\r\\n\\t\\topacity: 1;\\r\\n\\t\\ttransform: scale(1);\\r\\n\\t\\tbox-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);\\r\\n\\t}\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n#walks-content {\\r\\n\\twidth: 100%;\\t\\r\\n\\ttop: 20vh;\\r\\n\\tpadding-top: 40px;\\r\\n}\\r\\n\\r\\n/* left side */\\r\\n\\r\\n#all-walks {\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: row;\\r\\n\\tjustify-content: space-around;\\r\\n\\tmargin: var(--margin-lr);\\r\\n\\tpadding: 2px 0 40px 0;\\r\\n\\tbackground-color: var(--panel-backcol);\\r\\n\\theight: fit-content;\\r\\n}\\r\\n\\r\\n#walk-div {\\r\\n\\tdisplay: none;\\r\\n\\tgrid-template-columns: 1fr 300px;\\r\\n\\tbackground-color: var(--col4);\\r\\n\\tpadding: 40px 0 0 0;\\r\\n}\\r\\n\\r\\n.walk-selector {\\r\\n\\tdisplay: grid;\\r\\n\\twidth: 200px;\\r\\n\\theight: auto;\\r\\n\\tpadding: 10px 0 10px 0;\\r\\n}\\r\\n\\r\\n.walk-selector-title {\\r\\n\\t/*height: 30px;*/\\r\\n\\ttext-align: center;\\r\\n\\tpadding: 0 0 10px 0;\\r\\n}\\r\\n\\r\\nimg {\\r\\n\\tcursor: pointer;\\r\\n\\tbox-shadow: 0px 0px 4px 0px rgba(0,0,0,0.25);\\r\\n}\\r\\n\\r\\n.walk-selector>img {\\r\\n\\tmargin: 0 auto;\\r\\n\\tz-index: 200;\\r\\n\\twidth: 100%;\\r\\n\\theight: auto;\\r\\n}\\r\\n\\r\\n@keyframes grow {\\r\\n\\tfrom {\\r\\n\\t\\tbox-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);\\r\\n\\t\\ttransform: scale(1);\\r\\n\\t}\\r\\n\\tto {\\r\\n\\t\\tbox-shadow: 0px 0px 15px 0px rgba(0,0,0,0.99);\\r\\n\\t\\ttransform: scale(1.01);\\r\\n\\t}\\r\\n}\\r\\n\\r\\n.walk-selector>img:hover {\\r\\n\\tanimation-name: grow;\\r\\n\\tanimation-duration: 0.5s;\\r\\n\\tbox-shadow: 0px 0px 15px 0px rgba(0,0,0,0.99);\\r\\n\\ttransform: scale(1.01);\\r\\n}\\r\\n\\r\\n/* right side */\\r\\n\\r\\n.walk-images {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n\\tmargin: var(--margin-lr);\\r\\n\\tpadding: 10px 0 10px 0;\\r\\n\\t/*background-color: var(--panel-backcol);*/\\r\\n}\\r\\n\\r\\n.single-walk-image {\\r\\n\\tposition: relative;\\r\\n\\twidth: 90%;\\r\\n\\tmargin: 0 auto;\\r\\n}\\r\\n\\r\\n.single-walk-image>img:hover {\\r\\n\\tanimation-name: grow;\\r\\n\\tanimation-duration: 0.5s;\\r\\n\\tbox-shadow: 0px 0px 15px 0px rgba(0,0,0,0.99);\\r\\n\\ttransform: scale(1.01);\\r\\n}\\r\\n\\r\\n.image-text {\\r\\n\\ttop: 10px;\\r\\n\\tleft: 15px;\\r\\n\\tborder-radius: 5px;\\r\\n\\tpadding: 3px;\\r\\n\\ttext-align: center;\\r\\n}\\r\\n\\r\\n.single-walk-image>img {\\r\\n\\twidth: 100%;\\r\\n\\theight: auto;\\r\\n\\tmargin: 6px 0 30px 0;\\r\\n}\\r\\n\\r\\n/* center */\\r\\n\\r\\n#walk-description {\\r\\n  padding: 15px;\\r\\n\\tmargin: var(--margin-lr);\\r\\n\\t/*background-color: var(--panel-backcol);*/\\r\\n}\\r\\n\\r\\n.hide-element {\\r\\n\\tdisplay: none;\\r\\n}\\r\\n\\r\\n#about-content {\\r\\n    height: 100vh;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/*! exports provided: Walk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Walk\", function() { return Walk; });\nclass Walk {\r\n\r\n    // images is an array of [image, alt text, title, ....]\r\n    \r\n    constructor(title, thumbnail, thumbalt, description, images) {\r\n        this.title = title;\r\n\t\tthis.thumbnail = thumbnail;\r\n\t\tthis.thumbalt = thumbalt;\r\n        this.description = description;\r\n        this.images = images;\r\n    }\r\n}\r\n\r\n/*\r\nexport class Location {\r\n    constructor(title, thumbnail, thumbalt, description) {\r\n        this.title = title;\r\n        this.thumbnail = thumbnail;\r\n        this.thumbalt = thumbalt;\r\n        this.description = description;\r\n    }\r\n}\r\n*/\r\n\n\n//# sourceURL=webpack:///./src/classes.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! exports provided: allWalks, generateWalks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allWalks\", function() { return allWalks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateWalks\", function() { return generateWalks; });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ \"./src/classes.js\");\n/* harmony import */ var _images_glenarm_harbour_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/glenarm-harbour.jpg */ \"./src/images/glenarm-harbour.jpg\");\n/* harmony import */ var _images_glenarm_estate_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/glenarm-estate.jpg */ \"./src/images/glenarm-estate.jpg\");\n/* harmony import */ var _images_glenarm_view1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/glenarm-view1.jpg */ \"./src/images/glenarm-view1.jpg\");\n/* harmony import */ var _images_glenarm1_map_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/glenarm1-map.jpg */ \"./src/images/glenarm1-map.jpg\");\n/* harmony import */ var _images_carnlough1_map_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/carnlough1-map.jpg */ \"./src/images/carnlough1-map.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst allWalks = [];\r\n\r\nfunction generateWalks() {\r\n\tconsole.log('generateWalks called');\r\n\r\n\t/* format to create a new walk\r\n\tallWalks.push(\r\n\t\tnew ClDef.Walk(\r\n\t\t\t'walk title',\r\n\t\t\timage-for-walk-selector,\r\n\t\t\t'alt text for image',\r\n\t\t\twalk-description-html-string,\r\n\t\t\t[\r\n\t\t\t\timage1,\r\n\t\t\t\t'image 1 alt text',\r\n\t\t\t\t'image 1 title',\r\n\t\t\t\t// keep adding images\r\n\t\t\t]\r\n\t\t)\r\n\t)\r\n\r\n\r\n\t*/\r\n\r\n\tallWalks.push(\r\n\t\tnew _classes__WEBPACK_IMPORTED_MODULE_0__[\"Walk\"](\r\n\t\t\t'Glenarm and Straidkilly',\r\n\t\t\t_images_glenarm_view1_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n\t\t\t'A view of Glenarm fron a distance',\r\n\t\t\twalk1,\r\n\t\t\t[\r\n\t\t\t\t_images_glenarm1_map_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n\t\t\t\t'A map of the route around Glenarm',\r\n\t\t\t\t'Map',\r\n\t\t\t\t_images_glenarm_harbour_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n\t\t\t\t'Glenarm\\'s small marina full of boats in the afternoon sun.',\r\n\t\t\t\t'Glenarm marina',\r\n\t\t\t\t_images_glenarm_estate_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n\t\t\t\t'Glenarm\\'s estate office built 1739 and closed in the 1930s.',\r\n\t\t\t\t'The old estate office'\r\n\t\t\t])\r\n\t);\r\n\r\n\tallWalks.push(\r\n\t\tnew _classes__WEBPACK_IMPORTED_MODULE_0__[\"Walk\"](\r\n\t\t\t'Carnlough Cranny Falls and Gortin Quarry',\r\n\t\t\t_images_glenarm_view1_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n\t\t\t'test alt text for thumbnail image',\r\n\t\t\twalk2,\r\n\t\t\t[\r\n\t\t\t\t_images_carnlough1_map_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\r\n\t\t\t\t'A map of the route around Carnlough',\r\n\t\t\t\t'Map',\r\n\t\t\t])\r\n\t);\r\n\r\n}\r\n\r\nconst walk0 = `\r\n<h2>Welcome to Antrim Walks</h2>\r\n<p>County Antrim has a good selection of places to visit and here you can find \r\na collection of walks that are great to do when visiting each place.</p>\r\n<p>Select walks on the left and you can view photos from each walk on the right.\r\nI have provided information so that it's easy to follow the route and suggest \r\nwhat footwear is needed.</p>\r\n<p></p>`;\r\n\r\nconst walk1 = `\r\n<h2>Glenarm Village and Straidkilly Nature Reserve</h2>\r\n\r\n<p>This is a circular walk from the harbour area up to the Layde Walk, to \r\nthe center of the village and from there out to Straidkilly nature reserve and back. \r\nThere are great views of the village and surrounding hills along the way. The \r\nStraidkilly section can be quite muddy at times and there are some steep sections\r\n so wear appropriate footwear and take care.\r\n</p>\r\n\r\n<h4>Parking and public transport</h4>\r\n<p>You can park in several places in Glenarm. The main carpark is on the \r\nseafront and there is further parking around the village. There are buses from Larne \r\n(162) and Ballymena (128). For further information\r\n <a href=\"https://www.translink.co.uk//\">www.translink.co.uk</a></p>\r\n\r\n<h4>Amenities</h4>\r\n<p>Glenarm has two pubs (conveniently next to each other), a shop and there is \r\nusually a food van in the carpark. There are also toilets in the carpark.</p>\r\n\r\n<h4>Directions</h4>\r\n\r\n<p>Starting from the car park take the eastern corner path by the playground and\r\n cross the footbridge to Eglington Yard. Bear left to follow the path until you \r\n reach the marina office then alongside it heading for the road. Cross over and bear \r\n left at the Glenarm tourist information car park.</p>\r\n\r\n<p>On the opposite side of the road there is a flowerbed area with an old tunnel and \r\nto the side of that is the Plate Road path. Go up the path and turn right to \r\nwalk up Dickeystown Road past the site of the old quarry on yor left. Head up \r\nthe Layde Walk which was originally part of a 3 Mile canal that used to \r\npower the limestone crushing mill at the old quarry.</p>\r\n\r\n<p>Follow the path to Spring Hill road where you will turn right and follow the road\r\ndown taking the left fork at which point Spring Hill becomes The Vennel. Continue \r\ndown this short road to reach the center of the village with Castle Street \r\nopposite. If you want to have a look at the old estate buldings built in 1739 \r\ntake a left here and you will find them next to the forest gates.</p>\r\n\r\n<p>Head back to the crossroads and turn left down Castle Street passing The Old \r\nSchoolhouse (now a home) to reach the bridge to the Barbican entrance to the \r\ncastle. Here there are good views up and down the Glenarm river to the sea. \r\nAgain turn back to head up to the crossroads and at the end of the road take a \r\nleft to head down Toberwine Street passing the shop and the pubs, then turn left \r\nonto The Cloney and head over the bridge.</p>\r\n\r\n<p>Bear left at the fork following the castle walls to walk up Straidkilly Road \r\npassing the cemetary to reach some houses on the right. Shortly after you will \r\nsee the entrance to a path that leads to Straidkilly nature reserve. This is a \r\nfairly new path having been created in 2017 on land recently returned to the \r\ncouncil from the previous quarry owners.</p>\r\n\r\n<p>Follow the path through the trees guided by walk markers and go up several \r\nflights of steps after which the trail now gets more undulating. Go over two foot \r\nbridges and climb over a style which marks the original boundary of the nature \r\nreserve. Straidkilly is 9 hectares in size with a couple of main paths and has a \r\nnumber of rare animal species despite it's small size such as Irish Hare and \r\nIrish Stoat.</p>\r\n\r\n<p>Drop down a short bank and at a post that says to go right, take a left! From \r\nnow on you are walking the nature reserve route in reverse. The path from hereon \r\ncan be slippy and is quite steep in places so take care. Eventually you come to \r\na clearing with a picnic bench and good views through the trees over to \r\nCarnlough backed by White Hill and over to the right Big Trosk & Little Trosk.</p>\r\n\r\n<p>Continue through the clearing down the path and take a right to reach \r\nStraidkilly road again. Walk for about a third of a mile past trees with views \r\nover Glenarm Bay to Ladies Hill becoming visible. Shortly after you reach a walk \r\nmarker that indicates Bachelors Walk.</p>\r\n\r\n<p>Follow Bachelors Walk down the winding path, past rocks and a bench to reach \r\nthe Coast Road. This can be a busy road so take care crossing over. Head back to \r\nGlenarm either along the road or the beach to reach the starting \r\npoint in the carpark.</p>\r\n`;\r\n\r\nconst walk2 =\r\n`<h2>Carnlough Cranny Falls and Gortin Quarry</h2>\r\n<p>intro</p>\r\n<h4>Parking and public transport</h4>\r\n<p></p>\r\n<h4>Amenities</h4>\r\n<p></p>\r\n<h4>Directions</h4>\r\n<p></p>\r\n`;\n\n//# sourceURL=webpack:///./src/content.js?");

/***/ }),

/***/ "./src/images/carnlough1-map.jpg":
/*!***************************************!*\
  !*** ./src/images/carnlough1-map.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"845e12c1e894c64cf04c7943603ae341.jpg\");\n\n//# sourceURL=webpack:///./src/images/carnlough1-map.jpg?");

/***/ }),

/***/ "./src/images/glenarm-estate.jpg":
/*!***************************************!*\
  !*** ./src/images/glenarm-estate.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"66b52fdfa2e60bc0bbe16dd8f1c38727.jpg\");\n\n//# sourceURL=webpack:///./src/images/glenarm-estate.jpg?");

/***/ }),

/***/ "./src/images/glenarm-harbour.jpg":
/*!****************************************!*\
  !*** ./src/images/glenarm-harbour.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e970cb08755aba45f45b1612ee491d39.jpg\");\n\n//# sourceURL=webpack:///./src/images/glenarm-harbour.jpg?");

/***/ }),

/***/ "./src/images/glenarm-view1.jpg":
/*!**************************************!*\
  !*** ./src/images/glenarm-view1.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0302ed09fcd46f0c2a742b6600947347.jpg\");\n\n//# sourceURL=webpack:///./src/images/glenarm-view1.jpg?");

/***/ }),

/***/ "./src/images/glenarm1-map.jpg":
/*!*************************************!*\
  !*** ./src/images/glenarm1-map.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f38ac75a6dd5e77135caa27da4f79488.jpg\");\n\n//# sourceURL=webpack:///./src/images/glenarm1-map.jpg?");

/***/ }),

/***/ "./src/images/hero.jpg":
/*!*****************************!*\
  !*** ./src/images/hero.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c9051d66da78bdc74eef18823cc376df.jpg\");\n\n//# sourceURL=webpack:///./src/images/hero.jpg?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\r\n\r\n\r\n\r\nfunction main() {\r\n\tconst banner = document.getElementById('banner');\r\n\tbanner.innerHTML = 'Great Walks in County Antrim<br>Northern Ireland';\r\n\t_content__WEBPACK_IMPORTED_MODULE_1__[\"generateWalks\"]();\r\n\t_render__WEBPACK_IMPORTED_MODULE_2__[\"allWalks\"]();\r\n\r\n}\r\n\r\nwindow.onload = main;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: allWalks, oneWalk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allWalks\", function() { return allWalks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"oneWalk\", function() { return oneWalk; });\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n\r\n\r\nfunction allWalks() {\r\n\r\n\tconsole.log('allWalks() called');\r\n\tconst divAllWalks = document.getElementById('all-walks');\r\n\tclearChildElements(divAllWalks);\r\n\tconst arrayAllWalks = _content__WEBPACK_IMPORTED_MODULE_0__[\"allWalks\"];\r\n\r\n\tfor (let i = 0; i != arrayAllWalks.length; i++) {\r\n\t\tconst divWalkSelector = document.createElement('div');\r\n\t\tdivWalkSelector.classList.add('walk-selector');\r\n\t\tconst walkObject = arrayAllWalks[i];\r\n\r\n\t\tconst img = addImg(\r\n\t\t\twalkObject.thumbnail,\r\n\t\t\twalkObject.thumbalt\r\n\t\t);\r\n\r\n\t\timg.id = 'ws' + i;\r\n\t\timg.addEventListener('click', function(event) {\r\n\t\t\toneWalk(event.target.id.substring(2));\r\n\t\t});\r\n\r\n\t\timg.classList.add('border-style');\r\n\r\n\t\tconst walkSelectTitle = document.createElement('div');\r\n\t\twalkSelectTitle.classList.add('walk-selector-title');\r\n\t\twalkSelectTitle.innerText = walkObject.title;\r\n\r\n\t\tdivWalkSelector.appendChild(walkSelectTitle);\r\n\t\tdivWalkSelector.appendChild(img);\r\n\r\n\t\tdivAllWalks.appendChild(divWalkSelector);\r\n\t}\r\n\r\n}\r\n\r\n\r\nfunction oneWalk(index) {\r\n\tconsole.log(`oneWalk(${index}) called`);\r\n\t\r\n\tdocument.getElementById('walk-div').style.display = 'grid';\r\n\tconst divDescription = document.getElementById('walk-description');\r\n\tconst divImages = document.getElementById('all-walk-images');\r\n\r\n\tclearChildElements(divDescription);\r\n\tclearChildElements(divImages);\r\n\r\n\t// Get array containing all the Walk objects\r\n\tconst allWalks = _content__WEBPACK_IMPORTED_MODULE_0__[\"allWalks\"];\r\n\tconst walkObject = allWalks[index];\r\n\r\n    divDescription.innerHTML = walkObject.description;\r\n\r\n    for (let i = 0; i != walkObject.images.length; i += 3) {\r\n\t\tconst singleImage = document.createElement('div');\r\n\t\tsingleImage.classList.add('single-walk-image');\r\n\r\n        const img = addImg(\r\n            walkObject.images[i],\r\n            walkObject.images[i + 1]\r\n\t\t);\r\n\r\n\t\timg.classList.add('border-style');\r\n\r\n\t\tconst overlayText = document.createElement('div');\r\n\t\toverlayText.classList.add('image-text');\r\n\t\toverlayText.innerText = walkObject.images[i + 2];\r\n\r\n\t\timg.addEventListener('click', (event) => {\r\n\t\t\tconst src = event.target.getAttribute('src');\r\n\t\t\tconsole.log(src);\r\n\t\t\tdisplayImage(src);\r\n\t\t});\r\n\t\t\r\n\t\tsingleImage.appendChild(overlayText);\r\n\t\tsingleImage.appendChild(img);\r\n    divImages.appendChild(singleImage);\r\n\t}\r\n\r\n}\r\n\r\nfunction displayImage(src) {\r\n\tconsole.log(`displayImage ${src} called`);\r\n\tconst displayImageDiv = document.getElementById('image-viewer');\r\n\tclearChildElements(displayImageDiv);\r\n\tconst image = addImg(src);\r\n\timage.classList.add('border-style','fade-image-in');\r\n\timage.addEventListener('click', () => {\r\n\t\tclearChildElements(displayImageDiv);\r\n\t});\r\n\r\n\tdisplayImageDiv.appendChild(image);\r\n}\r\n\r\nfunction addImg(src, alt) {\r\n    var img = document.createElement(\"img\");\r\n    img.src = src;\r\n    img.alt = alt;\r\n    return img;\r\n}\r\n\r\nfunction clearChildElements(node) {\r\n\t// clears all child elements under the specified node\r\n\twhile (node.firstChild) {\r\n\t\tnode.removeChild(node.lastChild);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ })

/******/ });