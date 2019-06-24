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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(2);


const root = Object(__WEBPACK_IMPORTED_MODULE_0__element__["a" /* el */])('div', { 'class': 'app' }, [Object(__WEBPACK_IMPORTED_MODULE_0__element__["a" /* el */])('div', {}, [Object(__WEBPACK_IMPORTED_MODULE_0__element__["a" /* el */])('h1', { style: 'font-size:28px' }, ['hello world'])]), Object(__WEBPACK_IMPORTED_MODULE_0__element__["a" /* el */])('span', { style: 'border:solid 1px blue;width:200px;height:80px;display: inline-block;' }, 'hello javascript')]);

const app = document.getElementById('app');
app.appendChild(root.render());

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Element {
    constructor(type, props = {}, children = []) {
        this.type = type;
        this.props = props;
        this.children = Array.isArray(children) ? children : [children];
    }

    render() {
        if (typeof this.type === 'string') {
            const element = document.createElement(this.type);
            Object.keys(this.props).forEach(key => element.setAttribute(key, this.props[key]));
            this.children.forEach(child => element.appendChild(typeof child === 'string' ? document.createTextNode(child) : child.render()));

            return element;
        } else {
            throw 'only support type of string';
        }
    }
}

const el = (type, props = {}, children = []) => {
    return new Element(type, props, children);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = el;


/***/ })
/******/ ]);