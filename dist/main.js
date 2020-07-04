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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./images/whitepark-bay.jpg */ \"./src/images/whitepark-bay.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./images/mfdark.png */ \"./src/images/mfdark.png\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\n// Module\nexports.push([module.i, \"* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\n:root {\\r\\n    --col-palegreen: #c6adcf;\\r\\n    --col-seagreen: #087e8b;\\r\\n    --col-mauve: #6100c2;\\r\\n    --col-purple: #37123c;\\r\\n    --col-yellow: #fff8dd;\\r\\n\\t\\r\\n\\t--overlay-text-color: white;\\r\\n\\t--overlay-text-shadow: 1.2px 1.2px 0px rgba(1, 1, 1, 1);\\r\\n\\t--overlay-text-size: 1rem;\\r\\n\\r\\n\\t--txt-shadow-small: 0px 0px 5px 0px rgba(0,0,0,0.75);\\r\\n\\t--txt-shadow-medium: 2px 2px 0px rgba(1, 1, 1, 1);\\r\\n\\r\\n\\t--margin-r: 0 1vw 0 0;\\r\\n\\t--margin-l: 0 0 0 1vw;\\r\\n\\t--margin-lr: 0 1vw 0 1vw;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    font-family: \\\"Trebuchet MS\\\", Arial, sans-serif;\\r\\n\\twidth: 100%;\\r\\n\\tbackground-color: black;\\r\\n}\\r\\n\\r\\nli {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\na {\\r\\n    text-decoration: none;\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\nul {\\r\\n    list-style-type: none;\\r\\n}\\r\\n\\r\\n.border-style {\\r\\n\\tborder-radius: 10px;\\r\\n\\tbox-shadow: var(--txt-shadow-small);\\r\\n}\\r\\n\\r\\n.items-design {\\r\\n    height: 50px;\\r\\n    line-height: 50px;\\r\\n    margin: auto 10px;\\r\\n    padding: 0 20px;\\r\\n    border-style: solid;\\r\\n    border-width: 2px;\\r\\n    border-radius: 5px;\\r\\n    border-color: var(--col-purple);\\r\\n    color: var(--col-purple);\\r\\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);\\r\\n    background-color: var(--col-mauve);\\r\\n}\\r\\n\\r\\n#hero-page {\\r\\n    display: flex;\\r\\n\\tjustify-content: center;\\r\\n}\\r\\n\\r\\n.gradient-layer {\\r\\n    width: 100%;\\r\\n    background: linear-gradient( to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 33%, rgba(0, 0, 0, 0.2) 66%, rgba(0, 0, 0, 0) 100%);\\r\\n}\\r\\n\\r\\n#hero-background {\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\t\\r\\n    width: 100%;\\r\\n    height: 100vh;\\r\\n    background-size: cover;\\r\\n    background-repeat: no-repeat;\\r\\n    background-position: center;\\r\\n    position: relative;\\r\\n\\tz-index: -100;\\r\\n}\\r\\n\\r\\n#banner {\\r\\n    position: absolute;\\r\\n    top: 30vh;\\r\\n    margin: 0 auto;\\r\\n    width: 90%;\\r\\n    text-align: center;\\r\\n    font-size: calc(4em + 1vw);\\r\\n    font-weight: bold;\\r\\n    font-variant: small-caps;\\r\\n    line-height: 140%;\\r\\n    text-shadow: 4px 4px 0px rgba(1, 1, 1, 1);\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n    font-size: 2.5rem;\\r\\n    font-weight: bold;\\r\\n    font-variant: small-caps;\\r\\n    position: absolute;\\r\\n    left: 60px;\\r\\n    top: 1vh;\\r\\n    height: 80px;\\r\\n    line-height: 80px;\\r\\n    color: white;\\r\\n\\ttext-shadow: var(--txt-shadow-medium);\\r\\n\\toverflow: hidden;\\r\\n}\\r\\n\\r\\n.menu {\\r\\n    position: absolute;\\r\\n    right: 60px;\\r\\n    top: 1vh;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: flex-end;\\r\\n    height: 80px;\\r\\n    line-height: 80px;\\r\\n    z-index: 200;\\r\\n}\\r\\n\\r\\n.menu-item {\\r\\n    font-size: 2.5rem;\\r\\n    font-weight: bold;\\r\\n    font-variant: small-caps;\\r\\n    margin: 0 0 0 60px;\\r\\n    color: white;\\r\\n    text-shadow: var(--txt-shadow-medium);\\r\\n}\\r\\n\\r\\n#walks-page {\\r\\n\\tposition: relative;\\r\\n\\theight: 200vh;\\r\\n\\tz-index: 0;\\r\\n\\tmin-height: 100%;\\r\\n}\\r\\n\\r\\n#the-walks-logo {\\r\\n\\tcursor: pointer;\\r\\n}\\r\\n\\r\\n.walks-background {\\r\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n\\twidth: 100%;\\r\\n\\tbackground-repeat: repeat;\\r\\n    background-position: center;\\r\\n    position: relative;\\r\\n\\tz-index: -100;\\r\\n}\\r\\n\\r\\n#walks-content {\\r\\n\\twidth: 97vw;\\t\\r\\n\\tposition: absolute;\\r\\n\\tmargin: 0 1vw 0 1vw;\\r\\n\\ttop: 20vh;\\r\\n\\tdisplay: grid;\\r\\n\\tgrid-template-columns: 200px 1fr 200px;\\r\\n\\tpadding-top: 40px;\\r\\n}\\r\\n\\r\\n/* left side */\\r\\n\\r\\n#all-walks {\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\tmargin: var(--margin-r);\\r\\n}\\r\\n\\r\\n.walk-selector {\\r\\n\\tmargin: 0 0 0 var(--bord-walks);\\r\\n\\tdisplay: grid;\\r\\n\\twidth: 100%;\\r\\n\\theight: auto;\\r\\n}\\r\\n\\r\\n.walk-selector-title {\\r\\n\\theight: 30px;\\r\\n\\ttext-align: center;\\r\\n\\tcolor: white;\\r\\n}\\r\\n\\r\\n.walk-selector>img {\\r\\n\\tmargin: 0 auto;\\r\\n\\tcursor: pointer;\\r\\n\\tz-index: 200;\\r\\n\\twidth: 100%;\\r\\n\\theight: auto;\\r\\n}\\r\\n\\r\\n@keyframes example {\\r\\n\\tfrom {\\r\\n\\t\\tbox-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);\\r\\n\\t\\ttransform: scale(1);\\r\\n\\t}\\r\\n\\tto {\\r\\n\\t\\tbox-shadow: 0px 0px 15px 0px rgba(0,0,0,0.99);\\r\\n\\t\\ttransform: scale(1.01);\\r\\n\\t}\\r\\n}\\r\\n\\r\\n.walk-selector>img:hover {\\r\\n\\tanimation-name: example;\\r\\n\\tanimation-duration: 0.5s;\\r\\n\\tbox-shadow: 0px 0px 15px 0px rgba(0,0,0,0.99);\\r\\n\\ttransform: scale(1.01);\\r\\n}\\r\\n\\r\\n/* right side */\\r\\n\\r\\n.walk-images {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n\\tmargin: var(--margin-l);\\r\\n}\\r\\n\\r\\n.single-walk-image {\\r\\n\\tposition: relative;\\r\\n}\\r\\n\\r\\n.single-walk-image>img {\\r\\n\\twidth: 100%;\\r\\n\\theight: auto;\\r\\n\\tposition: relative;\\r\\n\\tmargin: 0 0 30px 0;\\r\\n}\\r\\n\\r\\n/* center */\\r\\n\\r\\n#walk-description {\\r\\n    padding: 25px;\\r\\n\\tmargin: var(--margin-lr);\\r\\n\\tcolor: white;\\r\\n}\\r\\n\\r\\n.hide-element {\\r\\n\\tdisplay: none;\\r\\n}\\r\\n\\r\\n.image-text {\\r\\n\\tposition: absolute;\\r\\n\\ttop: 10px;\\r\\n\\tleft: 15px;\\r\\n\\tborder-radius: 5px;\\r\\n\\tpadding: 3px;\\r\\n}\\r\\n\\r\\n.small-text-shadow {\\r\\n\\tfont-size: var(--overlay-text-size);\\r\\n\\tcolor: var(--overlay-text-color);\\r\\n\\ttext-shadow: var(--overlay-text-shadow);\\t\\r\\n}\\r\\n\\r\\nh2, h3, h4, p {\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n    font-size: 2rem;\\r\\n}\\r\\n\\r\\nh3 {\\r\\n    font-size: 1.5rem;\\r\\n}\\r\\n\\r\\nh4 {\\r\\n\\tfont-size: 1.25rem;\\r\\n}\\r\\n\\r\\np, b {\\r\\n    font-size: 1rem;\\r\\n}\\r\\n\\r\\n#about-content {\\r\\n    height: 100vh;\\r\\n    background-color: black;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js");

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
/*! exports provided: Walk, Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Walk\", function() { return Walk; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Location\", function() { return Location; });\nclass Walk {\r\n\r\n    // images is an array of [image, alt text, title, ....]\r\n    \r\n    constructor(title, thumbnail, thumbalt, description, images) {\r\n        this.title = title;\r\n\t\tthis.thumbnail = thumbnail;\r\n\t\tthis.thumbalt = thumbalt;\r\n        this.description = description;\r\n        this.images = images;\r\n    }\r\n}\r\n\r\nclass Location {\r\n    constructor(title, thumbnail, thumbalt, description) {\r\n        this.title = title;\r\n        this.thumbnail = thumbnail;\r\n        this.description = description;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/classes.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! exports provided: allWalks, generateWalks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allWalks\", function() { return allWalks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateWalks\", function() { return generateWalks; });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ \"./src/classes.js\");\n/* harmony import */ var _images_glenarm_harbour_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/glenarm-harbour.jpg */ \"./src/images/glenarm-harbour.jpg\");\n/* harmony import */ var _images_glenarm_estate_office_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/glenarm-estate-office.jpg */ \"./src/images/glenarm-estate-office.jpg\");\n/* harmony import */ var _images_glenarm_view1s_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/glenarm-view1s.jpg */ \"./src/images/glenarm-view1s.jpg\");\n/* harmony import */ var _images_slemish_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/slemish.jpg */ \"./src/images/slemish.jpg\");\n/* harmony import */ var _images_lloyd_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/lloyd.jpg */ \"./src/images/lloyd.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst allWalks = [];\r\n\r\nfunction generateWalks() {\r\n\tconsole.log('generateWalks called');\r\n\t\r\n\tallWalks.push(\r\n\t\tnew _classes__WEBPACK_IMPORTED_MODULE_0__[\"Walk\"]('About Antrim Walks', _images_lloyd_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"], 'null description', walk0, \r\n\t\t[\r\n\t\t\t_images_lloyd_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\r\n\t\t\t'Lloyd placeholder text',\r\n\t\t\t'Temporary Image'\r\n\t\t])\r\n\t);\r\n\r\n    allWalks.push(\r\n\t\tnew _classes__WEBPACK_IMPORTED_MODULE_0__[\"Walk\"]('Glenarm - Layde and Straidkilly', _images_glenarm_view1s_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], 'A view of Glenarm fron a distance', walk1,\r\n\t\t[\r\n            _images_glenarm_harbour_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n\t\t\t'Glenarm\\'s small marina full of boats in the afternoon sun.',\r\n\t\t\t'Glenarm marina',\r\n            _images_glenarm_estate_office_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n\t\t\t'Glenarm\\'s estate office built 1739 and closed in the 1930s.',\r\n\t\t\t'The old estate office'\r\n        ])\r\n    );\r\n\r\n    allWalks.push(\r\n\t\tnew _classes__WEBPACK_IMPORTED_MODULE_0__[\"Walk\"]('Another walk', _images_glenarm_view1s_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], 'test alt text for thumbnail image', walk2, \r\n\t\t[\r\n\t\t\t_images_slemish_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], \r\n\t\t\t'alt text',\r\n\t\t\t'title 1',\r\n\t\t\t_images_slemish_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n\t\t\t'alt text',\r\n\t\t\t'title 2'\r\n        ])\r\n    );\r\n\r\n}\r\n\r\nconst walk0 = `\r\n<h2>Some Description</h2>\r\n<h3>Sub heading</h3>\r\n<p>Click on the links on the left to display each walk description.</p>`;\r\n\r\nconst walk1 =`\r\n<h2>Glenarm 1</h2>\r\n<h3>Layde Walk, Straidkilly Nature Reserve and Bachelors Walk</h3>\r\n\r\n<p>This is a circular walk around Glemarm that has great views of the village. \r\nYou will visit the harbour, the village center and the neighbouring nature reserve.</p>\r\n\r\n<h4>Parking and public transport</h4>\r\n<p>The main carpark is on the seafront next to St Patricks church.</p>\r\n\r\n<h4>Amenities</h4>\r\nGlenarm has two pubs (conveniently next to each other), a shop and there is \r\nusually a food van in the carpark. There are toilets next to the carpark.</p>\r\n\r\n<h4>Directions</h4>\r\n\r\n<p>Starting from the car park take the eastern corner path by the playground and\r\n cross the footbridge to Eglington Yard (currently used as a carpark).</p>\r\n\r\n <p>Bear left and follow the path around to the marina office then head for the\r\nroad, crossing it to reach the wall of Steensons jewelers and Glenarm tourist \r\ninformation office.</p>\r\n\r\n<p>Here turn left and cross over Mark Street, then make for the path that leads \r\nup by the side of the garden with a tunnel in it, which used to lead to the old \r\nquarry.</p>\r\n\r\n<p>The path leads to Dickeystown Road so take a right to walk up the fairly \r\nsteep hill passing the old limestone querry on the left and later gardens on the \r\nright. There are excellent views of Glenarm from this road.</p>\r\n\r\n<p>After about 300 Meters you will reach the Layde Path which was originally \r\npart of a 3 Mile canal that used to power the limestone crushing mill at the \r\nquarry.</p>\r\n\r\n<p>Follow the path to Spring Hill where you will turn right and follow the road\r\ndown taking the left fork at which point Spring Hill becomes The Vennel.</p>\r\n\r\n<p>Continue down this short road to reach the center of the village with Castle\r\nStreet just opposite<p>\r\n\r\n<p>Here if you want you can take a left and walk up to the forest entrance for a \r\nquick look at the old estate buildings that date from 1739.</p>\r\n\r\n<p>Double back and turn down Castle Street passing The Old Schoolhouse to reach\r\nthe bridge to the Barbican entrance to the castle. There are good views\r\nup and down the Glenarm river.</p>\r\n\r\n<p>Turn back and at the end of the road take a left to head down Toberwine \r\nStreet then turn left onto The Cloney and head over the bridge.</p>\r\n\r\n<p>Follow the castle walls to take Straidkilly road on the left just after St \r\nPatricks church and follow it up the hill staying on Straidkilly road as it \r\npasses the cemetary.</p>\r\n\r\n<p>You will reach some houses on the left and and shortly after you will see the\r\n entrance to the nature reserve. This is a fairly new part of the reserve having\r\n  been created in 2017 which leads you to the old reserve.</p>\r\n\r\n<p>Follow the path through the trees and keep on the main path until you reach \r\nsome steps. Go up the steps and follow the winding path through the reserve. The \r\npath gets steep in places and can be slippy in wet weather so take care. \r\nEventually you will come to a clearing with a picnic bench and good views over \r\nto Carnlough.</p>\r\n\r\n<p>Continue through the clearing down a path taking a right and walk along the \r\nStraidkilly road for about a third of a mile until you reach a path on the left. \r\n This path is known as Bachelors Walk but is not signposted so can easily be \r\n missed. If you can see a fence on the left while still on Straidkilly Road then \r\n you have probably gone too far!</p>\r\n\r\n<p>Follow the winding path down past rocks and a bench eventually to reach the \r\nCoast Road. Cross over the road (taking care as traffic can be fast) and head \r\nback into Glenarm.</p>\r\n\r\n<p>You can now see the car park at the other end of the beach so either walk \r\nback along the road or take the beach back to where you started.</p>\r\n`;\r\n\r\nconst walk2 =\r\n    `<h2>TEST Walk 2</h2>\r\n<h3>test heading 2</h3>\r\n<p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla \r\nbla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla \r\nbla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla \r\nbla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla \r\nbla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>`;\n\n//# sourceURL=webpack:///./src/content.js?");

/***/ }),

/***/ "./src/images/glenarm-estate-office.jpg":
/*!**********************************************!*\
  !*** ./src/images/glenarm-estate-office.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"68dceb290de617593fc9097e86ad1b51.jpg\");\n\n//# sourceURL=webpack:///./src/images/glenarm-estate-office.jpg?");

/***/ }),

/***/ "./src/images/glenarm-harbour.jpg":
/*!****************************************!*\
  !*** ./src/images/glenarm-harbour.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"78d1928969a5799b18f80a06df64f2cc.jpg\");\n\n//# sourceURL=webpack:///./src/images/glenarm-harbour.jpg?");

/***/ }),

/***/ "./src/images/glenarm-view1s.jpg":
/*!***************************************!*\
  !*** ./src/images/glenarm-view1s.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"49c8448030fb6de6069f631ac87aa082.jpg\");\n\n//# sourceURL=webpack:///./src/images/glenarm-view1s.jpg?");

/***/ }),

/***/ "./src/images/lloyd.jpg":
/*!******************************!*\
  !*** ./src/images/lloyd.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3ada0c3d41c14a0a41c4d8d78a984baf.jpg\");\n\n//# sourceURL=webpack:///./src/images/lloyd.jpg?");

/***/ }),

/***/ "./src/images/mfdark.png":
/*!*******************************!*\
  !*** ./src/images/mfdark.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"8fffdc8df6ecbaeb111face7b4ad0778.png\");\n\n//# sourceURL=webpack:///./src/images/mfdark.png?");

/***/ }),

/***/ "./src/images/slemish.jpg":
/*!********************************!*\
  !*** ./src/images/slemish.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"bf28a8ad6cf019fa5054498cbdbf0954.jpg\");\n\n//# sourceURL=webpack:///./src/images/slemish.jpg?");

/***/ }),

/***/ "./src/images/whitepark-bay.jpg":
/*!**************************************!*\
  !*** ./src/images/whitepark-bay.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c9051d66da78bdc74eef18823cc376df.jpg\");\n\n//# sourceURL=webpack:///./src/images/whitepark-bay.jpg?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allWalks\", function() { return allWalks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"oneWalk\", function() { return oneWalk; });\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n\r\n\r\nfunction allWalks() {\r\n\r\n\tconsole.log('allWalks() called');\r\n\tconst divAllWalks = document.getElementById('all-walks');\r\n\tclearChildElements(divAllWalks);\r\n\t// Get array containing all the Walk objects\r\n\r\n\t//const divWalkSelector = document.getElementById('walk-selector');\r\n\r\n\tconst arrayAllWalks = _content__WEBPACK_IMPORTED_MODULE_0__[\"allWalks\"];\r\n\r\n\tfor (let i = 0; i != arrayAllWalks.length; i++) {\r\n\t\tconst divWalkSelector = document.createElement('div');\r\n\t\tdivWalkSelector.classList.add('walk-selector');\r\n\t\tconst walkObject = arrayAllWalks[i];\r\n\r\n\t\tconst img = addImg(\r\n\t\t\twalkObject.thumbnail,\r\n\t\t\twalkObject.thumbalt\r\n\t\t);\r\n\r\n\t\timg.id = 'ws' + i;\r\n\t\timg.addEventListener('click', function(event) {\r\n\t\t\toneWalk(event.target.id.substring(2));\r\n\t\t});\r\n\r\n\t\timg.classList.add('border-style');\r\n\r\n\t\tconst walkSelectTitle = document.createElement('div');\r\n\t\twalkSelectTitle.classList.add('walk-selector-title','small-text-shadow');\r\n\t\twalkSelectTitle.innerText = walkObject.title;\r\n\r\n\t\tdivWalkSelector.appendChild(walkSelectTitle);\r\n\t\tdivWalkSelector.appendChild(img);\r\n\r\n\t\tdivAllWalks.appendChild(divWalkSelector);\r\n\t}\r\n\r\n\t// clicking All Walks calls this function. note to self the arrow function\r\n\t// is needed so that this refers to the scope the arrow was called in\r\n\tconst theWalksLogo = document.getElementById('the-walks-logo');\r\n\ttheWalksLogo.addEventListener('click', () => {\r\n\t\tthis.allWalks();\r\n\t});\r\n\r\n\t// render the first walk\r\n\toneWalk(0);\r\n}\r\n\r\nfunction oneWalk(index) {\r\n\tconsole.log(`oneWalk(${index}) called`);\r\n\t//const walksContent = document.getElementById('walks-content');\r\n\t//clearChildElements(walksContent);\r\n\r\n\tconst divDescription = document.getElementById('walk-description');\r\n\tconst divImages = document.getElementById('all-walk-images');\r\n\tclearChildElements(divDescription);\r\n\tclearChildElements(divImages);\r\n\r\n\t// Get array containing all the Walk objects\r\n\tconst allWalks = _content__WEBPACK_IMPORTED_MODULE_0__[\"allWalks\"];\r\n\tconst walkObject = allWalks[index];\r\n\r\n    divDescription.innerHTML = walkObject.description;\r\n\r\n    for (let i = 0; i != walkObject.images.length; i += 3) {\r\n\t\tconst singleImage = document.createElement('div');\r\n\t\tsingleImage.classList.add('single-walk-image');\r\n\r\n        const img = addImg(\r\n            walkObject.images[i],\r\n            walkObject.images[i + 1]\r\n\t\t);\r\n\r\n\t\timg.classList.add('border-style');\r\n\r\n\t\tconst overlayText = document.createElement('div');\r\n\t\toverlayText.classList.add('image-text','small-text-shadow');\r\n\t\toverlayText.innerText = walkObject.images[i + 2];\r\n\t\t\r\n\t\tsingleImage.appendChild(overlayText);\r\n\t\tsingleImage.appendChild(img);\r\n        divImages.appendChild(singleImage);\r\n\t}\r\n\r\n\t//walksContent.appendChild(divDescription);\r\n\t//walksContent.appendChild(divImages);\r\n}\r\n\r\nfunction addImg(src, alt) {\r\n    var img = document.createElement(\"img\");\r\n    img.src = src;\r\n    img.alt = alt;\r\n    return img;\r\n}\r\n\r\nfunction clearChildElements(node) {\r\n\t// clears all child elements under the specified node\r\n\twhile (node.firstChild) {\r\n\t\tnode.removeChild(node.lastChild);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ })

/******/ });