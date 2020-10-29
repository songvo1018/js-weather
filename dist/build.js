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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import UT from 'unixtimejs' TODO: should add UT package\r\n \r\nfunction app() {\r\n  let city = document.querySelector('#city')\r\n  let temp = document.querySelector('#temp')\r\n  let clouds = document.querySelector('#clouds')\r\n  let icon = document.querySelector('#icon')\r\n  let day = document.querySelector('#day')\r\n  let month = document.querySelector('#month')\r\n  let dateNow = new Date()\r\n  \r\n  function City() {\r\n    const cityName = document.querySelector('#cityName').value\r\n    if (cityName) {\r\n      return cityName\r\n    } else {\r\n      return 'New York'\r\n    }\r\n  }\r\n\r\n  console.log(City());\r\n  let apiKey = 'a591a9d031357acbe38d0f8cf1a760f3'\r\n\r\n  let apiLink = `http://api.openweathermap.org/data/2.5/weather?q=${City()}&appid=${apiKey}`\r\n\r\n  getWeather(apiLink)\r\n\r\n  function getWeather(link) {\r\n    fetch(link)\r\n      .then( resp => resp.json())\r\n      .then(data => \r\n        {\r\n          let response = data\r\n          // console.log(response);\r\n          \r\n          city.innerHTML = response.name,\r\n          temp.innerHTML = (response.main.temp - 273).toFixed(0) ,\r\n          clouds.innerHTML = response.weather[0].description,\r\n          day.innerHTML = dateNow.getDate(),\r\n          month.innerHTML = '0' + (dateNow.getMonth() + 1),\r\n          iconIndex = response.weather[0].icon\r\n          icon.src = `http://openweathermap.org/img/wn/${iconIndex}@2x.png`\r\n        }) \r\n        \r\n        \r\n    }\r\n}\r\n\r\nconst appBtn = document.querySelector('#appBtn')\r\nappBtn.addEventListener('click', app)\r\n\r\nwindow.addEventListener('keydown', function (event) {\r\n  if (event.which == 13 || event.keyCode == 13) {\r\n    app()\r\n    return false;\r\n  }\r\n  return true;\r\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });