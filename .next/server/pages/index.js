module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/RandoArtist.js":
/*!***********************************!*\
  !*** ./components/RandoArtist.js ***!
  \***********************************/
/*! exports provided: RandoArtist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RandoArtist\", function() { return RandoArtist; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/kirinmurphy/projects/pretty_good_universe/components/RandoArtist.js\";\n\nfunction RandoArtist({\n  artistList\n}) {\n  const initialArtist = getRandomArtist(artistList);\n  const {\n    0: currentArtist,\n    1: setCurrentArtist\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(initialArtist);\n  const {\n    name,\n    fromCity,\n    fromState,\n    fromCountry,\n    mightAlsoLike\n  } = currentArtist;\n\n  const setNewArtist = () => {\n    const relatedArtist = getRelatedArtist({\n      artistList,\n      mightAlsoLike\n    });\n    setCurrentArtist(relatedArtist);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"page\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [\"from: \", fromCity, \", \", fromState, \", \", fromCountry]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), !!mightAlsoLike.length && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: \"link--inverted\",\n      onClick: setNewArtist,\n      children: [\"more like \", name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, this);\n}\n\nfunction getRandomArtist(artistList) {\n  const randomIndex = Math.floor(Math.random() * artistList.length);\n  return artistList[randomIndex];\n}\n\nfunction getRelatedArtist({\n  artistList,\n  mightAlsoLike\n}) {\n  const randomRelatedArtist = getRandomArtist(mightAlsoLike);\n  return artistList.filter(artist => artist.name === randomRelatedArtist)[0];\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JhbmRvQXJ0aXN0LmpzPzFlNDIiXSwibmFtZXMiOlsiUmFuZG9BcnRpc3QiLCJhcnRpc3RMaXN0IiwiaW5pdGlhbEFydGlzdCIsImdldFJhbmRvbUFydGlzdCIsImN1cnJlbnRBcnRpc3QiLCJzZXRDdXJyZW50QXJ0aXN0IiwidXNlU3RhdGUiLCJuYW1lIiwiZnJvbUNpdHkiLCJmcm9tU3RhdGUiLCJmcm9tQ291bnRyeSIsIm1pZ2h0QWxzb0xpa2UiLCJzZXROZXdBcnRpc3QiLCJyZWxhdGVkQXJ0aXN0IiwiZ2V0UmVsYXRlZEFydGlzdCIsImxlbmd0aCIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tUmVsYXRlZEFydGlzdCIsImZpbHRlciIsImFydGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVPLFNBQVNBLFdBQVQsQ0FBc0I7QUFBRUM7QUFBRixDQUF0QixFQUFzQztBQUUzQyxRQUFNQyxhQUFhLEdBQUdDLGVBQWUsQ0FBQ0YsVUFBRCxDQUFyQztBQUNBLFFBQU07QUFBQSxPQUFDRyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DQyxzREFBUSxDQUFDSixhQUFELENBQWxEO0FBRUEsUUFBTTtBQUFFSyxRQUFGO0FBQVFDLFlBQVI7QUFBa0JDLGFBQWxCO0FBQTZCQyxlQUE3QjtBQUEwQ0M7QUFBMUMsTUFBNERQLGFBQWxFOztBQUVBLFFBQU1RLFlBQVksR0FBRyxNQUFNO0FBQ3pCLFVBQU1DLGFBQWEsR0FBR0MsZ0JBQWdCLENBQUM7QUFBRWIsZ0JBQUY7QUFBY1U7QUFBZCxLQUFELENBQXRDO0FBQ0FOLG9CQUFnQixDQUFDUSxhQUFELENBQWhCO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRTtBQUFLLE1BQUUsRUFBQyxNQUFSO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS047QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLDJCQUFZQyxRQUFaLFFBQXdCQyxTQUF4QixRQUFxQ0MsV0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFHRyxDQUFDLENBQUNDLGFBQWEsQ0FBQ0ksTUFBaEIsaUJBQ0M7QUFDRSxlQUFTLEVBQUMsZ0JBRFo7QUFFRSxhQUFPLEVBQUVILFlBRlg7QUFBQSwrQkFJYUwsSUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOztBQUVELFNBQVNKLGVBQVQsQ0FBeUJGLFVBQXpCLEVBQXFDO0FBQ25DLFFBQU1lLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQmxCLFVBQVUsQ0FBQ2MsTUFBdEMsQ0FBcEI7QUFDQSxTQUFPZCxVQUFVLENBQUNlLFdBQUQsQ0FBakI7QUFDRDs7QUFFRCxTQUFTRixnQkFBVCxDQUEwQjtBQUFFYixZQUFGO0FBQWNVO0FBQWQsQ0FBMUIsRUFBeUQ7QUFDdkQsUUFBTVMsbUJBQW1CLEdBQUdqQixlQUFlLENBQUNRLGFBQUQsQ0FBM0M7QUFDQSxTQUFPVixVQUFVLENBQUNvQixNQUFYLENBQWtCQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ2YsSUFBUCxLQUFnQmEsbUJBQTVDLEVBQWlFLENBQWpFLENBQVA7QUFDRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmFuZG9BcnRpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIFJhbmRvQXJ0aXN0ICh7IGFydGlzdExpc3QgfSkge1xuXG4gIGNvbnN0IGluaXRpYWxBcnRpc3QgPSBnZXRSYW5kb21BcnRpc3QoYXJ0aXN0TGlzdCk7XG4gIGNvbnN0IFtjdXJyZW50QXJ0aXN0LCBzZXRDdXJyZW50QXJ0aXN0XSA9IHVzZVN0YXRlKGluaXRpYWxBcnRpc3QpXG5cbiAgY29uc3QgeyBuYW1lLCBmcm9tQ2l0eSwgZnJvbVN0YXRlLCBmcm9tQ291bnRyeSwgbWlnaHRBbHNvTGlrZSB9ID0gY3VycmVudEFydGlzdDtcblxuICBjb25zdCBzZXROZXdBcnRpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVsYXRlZEFydGlzdCA9IGdldFJlbGF0ZWRBcnRpc3QoeyBhcnRpc3RMaXN0LCBtaWdodEFsc29MaWtlIH0pO1xuICAgIHNldEN1cnJlbnRBcnRpc3QocmVsYXRlZEFydGlzdCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJwYWdlXCI+XG4gICAgICA8aDE+e25hbWV9PC9oMT5cbiAgICAgIDxkaXY+ZnJvbToge2Zyb21DaXR5fSwge2Zyb21TdGF0ZX0sIHtmcm9tQ291bnRyeX08L2Rpdj5cbiAgICAgIHshIW1pZ2h0QWxzb0xpa2UubGVuZ3RoICYmIChcbiAgICAgICAgPHNwYW4gXG4gICAgICAgICAgY2xhc3NOYW1lPVwibGluay0taW52ZXJ0ZWRcIiBcbiAgICAgICAgICBvbkNsaWNrPXtzZXROZXdBcnRpc3R9XG4gICAgICAgID5cbiAgICAgICAgICBtb3JlIGxpa2Uge25hbWV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tQXJ0aXN0KGFydGlzdExpc3QpIHtcbiAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnRpc3RMaXN0Lmxlbmd0aCk7XG4gIHJldHVybiBhcnRpc3RMaXN0W3JhbmRvbUluZGV4XVxufVxuXG5mdW5jdGlvbiBnZXRSZWxhdGVkQXJ0aXN0KHsgYXJ0aXN0TGlzdCwgbWlnaHRBbHNvTGlrZSB9KSB7XG4gIGNvbnN0IHJhbmRvbVJlbGF0ZWRBcnRpc3QgPSBnZXRSYW5kb21BcnRpc3QobWlnaHRBbHNvTGlrZSk7XG4gIHJldHVybiBhcnRpc3RMaXN0LmZpbHRlcihhcnRpc3QgPT4gYXJ0aXN0Lm5hbWUgPT09IHJhbmRvbVJlbGF0ZWRBcnRpc3QpWzBdO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RandoArtist.js\n");

/***/ }),

/***/ "./data/artistList.js":
/*!****************************!*\
  !*** ./data/artistList.js ***!
  \****************************/
/*! exports provided: artistList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"artistList\", function() { return artistList; });\nconst artistList = [{\n  name: \"PJ Harvey\",\n  fromCity: \"Dorset\",\n  fromState: \"England\",\n  fromCountry: \"UK\",\n  avatar: \"\",\n  youtubeClips: [],\n  youtubePlaylist: \"\",\n  mightAlsoLike: [\"Lydia Lunch\", \"Lena Platanos\"]\n}, {\n  name: \"Lydia Lunch\",\n  fromCity: \"Rochester\",\n  fromState: \"NY\",\n  fromCountry: \"USA\",\n  avatar: \"\",\n  youtubeClips: [],\n  youtubePlaylist: \"\",\n  mightAlsoLike: []\n}, {\n  name: \"Dr. Buzzard's Original Savannah Band\",\n  fromCity: \"New York City\",\n  fromState: \"NY\",\n  fromCountry: \"USA\",\n  avatar: \"\",\n  youtubeClips: [],\n  youtubePlaylist: \"\",\n  mightAlsoLike: []\n}, {\n  name: \"Lena Platanos\",\n  fromCity: \"Heraklion\",\n  fromState: \"Crete\",\n  fromCountry: \"Greece\",\n  avatar: \"\",\n  youtubeClips: [],\n  youtubePlaylist: \"\",\n  mightAlsoLike: []\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhL2FydGlzdExpc3QuanM/ZTU0NyJdLCJuYW1lcyI6WyJhcnRpc3RMaXN0IiwibmFtZSIsImZyb21DaXR5IiwiZnJvbVN0YXRlIiwiZnJvbUNvdW50cnkiLCJhdmF0YXIiLCJ5b3V0dWJlQ2xpcHMiLCJ5b3V0dWJlUGxheWxpc3QiLCJtaWdodEFsc29MaWtlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sTUFBTUEsVUFBVSxHQUFHLENBQ3hCO0FBQ0VDLE1BQUksRUFBRSxXQURSO0FBRUVDLFVBQVEsRUFBRSxRQUZaO0FBR0VDLFdBQVMsRUFBRSxTQUhiO0FBSUVDLGFBQVcsRUFBRSxJQUpmO0FBS0VDLFFBQU0sRUFBRSxFQUxWO0FBTUVDLGNBQVksRUFBRSxFQU5oQjtBQU9FQyxpQkFBZSxFQUFFLEVBUG5CO0FBUUVDLGVBQWEsRUFBRSxDQUFDLGFBQUQsRUFBZ0IsZUFBaEI7QUFSakIsQ0FEd0IsRUFXeEI7QUFDRVAsTUFBSSxFQUFFLGFBRFI7QUFFRUMsVUFBUSxFQUFFLFdBRlo7QUFHRUMsV0FBUyxFQUFFLElBSGI7QUFJRUMsYUFBVyxFQUFFLEtBSmY7QUFLRUMsUUFBTSxFQUFFLEVBTFY7QUFNRUMsY0FBWSxFQUFFLEVBTmhCO0FBT0VDLGlCQUFlLEVBQUUsRUFQbkI7QUFRRUMsZUFBYSxFQUFFO0FBUmpCLENBWHdCLEVBcUJ4QjtBQUNFUCxNQUFJLEVBQUUsc0NBRFI7QUFFRUMsVUFBUSxFQUFFLGVBRlo7QUFHRUMsV0FBUyxFQUFFLElBSGI7QUFJRUMsYUFBVyxFQUFFLEtBSmY7QUFLRUMsUUFBTSxFQUFFLEVBTFY7QUFNRUMsY0FBWSxFQUFFLEVBTmhCO0FBT0VDLGlCQUFlLEVBQUUsRUFQbkI7QUFRRUMsZUFBYSxFQUFFO0FBUmpCLENBckJ3QixFQStCeEI7QUFDRVAsTUFBSSxFQUFFLGVBRFI7QUFFRUMsVUFBUSxFQUFFLFdBRlo7QUFHRUMsV0FBUyxFQUFFLE9BSGI7QUFJRUMsYUFBVyxFQUFFLFFBSmY7QUFLRUMsUUFBTSxFQUFFLEVBTFY7QUFNRUMsY0FBWSxFQUFFLEVBTmhCO0FBT0VDLGlCQUFlLEVBQUUsRUFQbkI7QUFRRUMsZUFBYSxFQUFFO0FBUmpCLENBL0J3QixDQUFuQiIsImZpbGUiOiIuL2RhdGEvYXJ0aXN0TGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhcnRpc3RMaXN0ID0gW1xuICB7IFxuICAgIG5hbWU6IFwiUEogSGFydmV5XCIgLFxuICAgIGZyb21DaXR5OiBcIkRvcnNldFwiLFxuICAgIGZyb21TdGF0ZTogXCJFbmdsYW5kXCIsXG4gICAgZnJvbUNvdW50cnk6IFwiVUtcIixcbiAgICBhdmF0YXI6IFwiXCIsXG4gICAgeW91dHViZUNsaXBzOiBbXSxcbiAgICB5b3V0dWJlUGxheWxpc3Q6IFwiXCIsXG4gICAgbWlnaHRBbHNvTGlrZTogW1wiTHlkaWEgTHVuY2hcIiwgXCJMZW5hIFBsYXRhbm9zXCJdXG4gIH0sXG4gIHsgXG4gICAgbmFtZTogXCJMeWRpYSBMdW5jaFwiICxcbiAgICBmcm9tQ2l0eTogXCJSb2NoZXN0ZXJcIixcbiAgICBmcm9tU3RhdGU6IFwiTllcIixcbiAgICBmcm9tQ291bnRyeTogXCJVU0FcIixcbiAgICBhdmF0YXI6IFwiXCIsXG4gICAgeW91dHViZUNsaXBzOiBbXSxcbiAgICB5b3V0dWJlUGxheWxpc3Q6IFwiXCIsXG4gICAgbWlnaHRBbHNvTGlrZTogW11cbiAgfSxcbiAgeyBcbiAgICBuYW1lOiBcIkRyLiBCdXp6YXJkJ3MgT3JpZ2luYWwgU2F2YW5uYWggQmFuZFwiICxcbiAgICBmcm9tQ2l0eTogXCJOZXcgWW9yayBDaXR5XCIsXG4gICAgZnJvbVN0YXRlOiBcIk5ZXCIsXG4gICAgZnJvbUNvdW50cnk6IFwiVVNBXCIsXG4gICAgYXZhdGFyOiBcIlwiLFxuICAgIHlvdXR1YmVDbGlwczogW10sXG4gICAgeW91dHViZVBsYXlsaXN0OiBcIlwiLFxuICAgIG1pZ2h0QWxzb0xpa2U6IFtdXG4gIH0sXG4gIHsgXG4gICAgbmFtZTogXCJMZW5hIFBsYXRhbm9zXCIsXG4gICAgZnJvbUNpdHk6IFwiSGVyYWtsaW9uXCIsXG4gICAgZnJvbVN0YXRlOiBcIkNyZXRlXCIsXG4gICAgZnJvbUNvdW50cnk6IFwiR3JlZWNlXCIsXG4gICAgYXZhdGFyOiBcIlwiLFxuICAgIHlvdXR1YmVDbGlwczogW10sXG4gICAgeW91dHViZVBsYXlsaXN0OiBcIlwiLFxuICAgIG1pZ2h0QWxzb0xpa2U6IFtdXG4gIH1cbl07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data/artistList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_RandoArtist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/RandoArtist */ \"./components/RandoArtist.js\");\n/* harmony import */ var _data_artistList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/artistList */ \"./data/artistList.js\");\n\nvar _jsxFileName = \"/Users/kirinmurphy/projects/pretty_good_universe/pages/index.js\";\n\n\nfunction Home({\n  artistList\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_RandoArtist__WEBPACK_IMPORTED_MODULE_1__[\"RandoArtist\"], {\n    artistList: artistList\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 10\n  }, this);\n}\n;\nasync function getStaticProps() {\n  return {\n    props: {\n      artistList: _data_artistList__WEBPACK_IMPORTED_MODULE_2__[\"artistList\"]\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJhcnRpc3RMaXN0IiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBNkI7QUFDMUMsc0JBQU8scUVBQUMsbUVBQUQ7QUFBYSxjQUFVLEVBQUVBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEO0FBQUE7QUFFTSxlQUFlQyxjQUFmLEdBQWlDO0FBQ3RDLFNBQU87QUFBRUMsU0FBSyxFQUFFO0FBQUVGLDZFQUFVQTtBQUFaO0FBQVQsR0FBUDtBQUNEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYW5kb0FydGlzdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvUmFuZG9BcnRpc3QnO1xuaW1wb3J0IHsgYXJ0aXN0TGlzdCB9IGZyb20gJy4uL2RhdGEvYXJ0aXN0TGlzdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFydGlzdExpc3R9KSB7XG4gIHJldHVybiA8UmFuZG9BcnRpc3QgYXJ0aXN0TGlzdD17YXJ0aXN0TGlzdH0gLz47XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMgKCkge1xuICByZXR1cm4geyBwcm9wczogeyBhcnRpc3RMaXN0IH0gfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });