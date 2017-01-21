/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by slashhuang on 17/1/21.
	 */

	var PubSubHandler = function () {
	    function PubSubHandler() {
	        _classCallCheck(this, PubSubHandler);

	        this.eventPool = {};
	    }
	    //移除


	    _createClass(PubSubHandler, [{
	        key: "off",
	        value: function off(topicName) {
	            delete this.observers[topicName];
	        }
	        //发布

	    }, {
	        key: "trigger",
	        value: function trigger(topicName) {
	            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                args[_key - 1] = arguments[_key];
	            }

	            this.eventPool[topicName] && this.eventPool[topicName].forEach(function (callback) {
	                return callback.apply(undefined, args);
	            });
	        }
	        //订阅

	    }, {
	        key: "on",
	        value: function on(topicName, callback) {
	            var topic = this.eventPool[topicName];
	            if (!topic) {
	                this.eventPool[topicName] = [];
	            }
	            this.eventPool[topicName].push(callback);
	        }
	    }]);

	    return PubSubHandler;
	}();

/***/ }
/******/ ]);