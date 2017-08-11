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

"use strict";


var _toRoman = __webpack_require__(1);

var _toRoman2 = _interopRequireDefault(_toRoman);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  var value = document.querySelector('#toConvert').value;
  var result = (0, _toRoman2.default)(parseInt(value, 0));
  var view = document.querySelector('#demo-display > p');
  view.innerText = 'Results: ' + result;
  view.classList.add('fade-out');
  setTimeout(function () {
    view.classList.remove('fade-out');
  }, 250);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function convert(num) {
  // Generate a Roman numeral for the provided num.
  // Declare matrix;
  var romanNumerals = [['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]];

  var numCopy = num; // preserve the original number.
  var remainder = void 0;
  var converted = []; // Array to hold the characters for the new string.
  var modVal = 10; // initial divisor.

  // Continue until we subtracted all values.
  while (numCopy > 0) {
    remainder = numCopy % modVal;
    numCopy -= remainder;

    for (var i = 0; i < romanNumerals.length; i++) {
      // is the number between two roman numerals?
      if (remainder >= romanNumerals[i][1] && remainder < romanNumerals[i + 1][1]) {
        var symbolIter = remainder / romanNumerals[i][1];

        if (symbolIter <= 3) {
          var diff = remainder - romanNumerals[i][1];
          var newIter = 0;
          if (symbolIter % 1 !== 0) {
            newIter = diff / romanNumerals[i - 1][1];

            if (newIter <= 3) {
              for (var j = 0; j < newIter; j++) {
                converted.unshift(romanNumerals[i - 1][0]);
              }
            }
          }

          if (newIter > 3) {
            converted.unshift(romanNumerals[i + 1][0]);
            converted.unshift(romanNumerals[i - 1][0]);
          } else {
            for (var _j = 0; _j < Math.floor(symbolIter); _j++) {
              converted.unshift(romanNumerals[i][0]);
            }
          }
        } else {
          converted.unshift(romanNumerals[i + 1][0]);
          converted.unshift(romanNumerals[i][0]);
        }
      }
    }
    modVal *= 10;
  }
  return converted.join('');
}

exports.default = convert;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map