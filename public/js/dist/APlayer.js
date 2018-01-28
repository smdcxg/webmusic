(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("APlayer", [], factory);
	else if(typeof exports === 'object')
		exports["APlayer"] = factory();
	else
		root["APlayer"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"/data/notejs/APlayer/webpack/postcss.config.js\"}}!./node_modules/sass-loader/lib/loader.js!./src/css/index.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aplayer-narrow {\n  width: 66px; }\n  .aplayer-narrow .aplayer-info {\n    display: none; }\n\n.aplayer-withlrc.aplayer-narrow {\n  width: 90px; }\n\n.aplayer-withlrc.aplayer .aplayer-pic {\n  height: 90px;\n  width: 90px; }\n\n.aplayer-withlrc.aplayer .aplayer-info {\n  margin-left: 90px;\n  height: 90px; }\n\n.aplayer-withlrc.aplayer .aplayer-lrc {\n  display: block; }\n\n.aplayer-withlrc.aplayer .aplayer-info {\n  padding: 10px 7px 0 7px; }\n\n.aplayer-withlist.aplayer .aplayer-info {\n  border-bottom: 1px solid #e9e9e9; }\n\n.aplayer-withlist.aplayer .aplayer-list {\n  display: block; }\n\n.aplayer-withlist.aplayer .aplayer-icon-menu {\n  display: inline !important; }\n\n.aplayer {\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 5px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 2px;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  line-height: initial; }\n  .aplayer * {\n    box-sizing: content-box; }\n  .aplayer .aplayer-icon {\n    width: 15px;\n    height: 15px;\n    border: none;\n    background-color: transparent;\n    outline: none;\n    cursor: pointer;\n    opacity: .8;\n    vertical-align: middle;\n    padding: 0;\n    font-size: 12px;\n    margin: 0;\n    display: inline; }\n    .aplayer .aplayer-icon .aplayer-fill {\n      transition: all .2s ease-in-out; }\n  .aplayer .aplayer-lrc-content {\n    display: none; }\n  .aplayer .aplayer-pic {\n    position: relative;\n    float: left;\n    height: 66px;\n    width: 66px;\n    background-image: url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE2NjQ3NUZBM0Y4RDExRTY4NzJCRDdCNkZCQTQ0MjNBIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE2NjQ3NUY5M0Y4RDExRTY4NzJCRDdCNkZCQTQ0MjNBIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5OENEMEFFRjM0NTI1NjE0NEREQkU4RjkxRjAwNjM3NiIgc3RSZWY6ZG9jdW1lbnRJRD0iOThDRDBBRUYzNDUyNTYxNDREREJFOEY5MUYwMDYzNzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCABkAGQDASIAAhEBAxEB/8QAgwAAAgIDAQAAAAAAAAAAAAAAAAYBBQIDBAcBAQEBAAAAAAAAAAAAAAAAAAABAhAAAQIEBAEJBgMHBQAAAAAAAQIDABEEBSExEgZBUWFxgaGxIhMUkTJCUmIVI0MWwdHh8XKSsvCCojNzEQEBAQEBAQEBAAAAAAAAAAAAAREhMVFBYf/aAAwDAQACEQMRAD8AaJ8vCJEYTjIZxtlIicc40VFZS0idVS6lpP1HE9Aind3dSrWWbdTPVruXgSQn98Awd0SBC+mp3fVYtUjFGk5F5U1S6Me6Mvtu6ncXbo01zNtzl2CJovwZxML/ANl3DwvZn/5fxiPt+72sWbkw/Lg4jTP/AImGhhiYWlXXdlD4q23IqWh7zlOZ/wCGrujpt+7bTWKDTijSvEy0O4CfJqy9sNMXmWMTECRExjzxMUEEEEBxLcbbQXHVBCEialKMgBFBU7jqax/0dmbU64fzJYy+aZwSOcxT7kvdPXVJpU6jTU5IC0HBauKucDhF7tS3ejolVJK51UlJQrCSRkeuJqppdspcV593dNU8cS0kkNjpPvKi8ZaZp2w3TtpabGSUAJHZEgzjXUVdPStebUOBpE5AnieQDieiKjeYyELVVva3ML0IZddI44IHaZxtod52upcDbqV0ylGSVLkUTP1JyibDDBOJxzjTUF8UzqqdIVUBtRZByK9J09seb1lzuKawuIqngRLSorUDMZ6k8DPMSwhaSPTwSDFbd7Bb7s2rzkBupl4KlIksH6vmHTE2GucuNqp6p3/tIKXCOKknST1xYgZDlihPsNxrLTXItFevXTuLU02omZadQZFP9Jw9ohxjz2tfF03GhFKdQXV6kqHINCJ/2tTj0KYJiQow6oIJY5QRR5hYLM5cK9KHkFNO1JbxIImOCeuPREyAAAkAJARyW63s26n8hlSnATqUtZmonnlKOucokhQtxDTa3XTpbbSVrVyJSNRhFq6usvNyap0K0v1JA5mG1YhtPJJOKzxOENG5HS3Yq1ScyhKSOZS0pPZCts8+ZfQtWK/LcUOk/wA4X3FhwoLJbKBgMtMIWZeN1xKVqWecqB9kJm7aKlo7wpulQGm3G0OKbT7qVKmDIcAZTh/LiW0KW4oJQgFS1HAAJEyTHnb6ndxX5XlAgVCwlH0MoEpnoSJwpD5ZFrXZ6JThOtTKJk9GHZCxvZmn9YHkJSh1KGw6QAC4p0uEauUhKIcmW0NNIaQJIbSEp5kpEhHntyqV3q7hlkzFQ/4T9ODSPYhM+uFI7rbZ9zU1EzXWuoGl5Ic9Pq0nH6XPAZ9MY1+6r2hh+3VjKGKojQtwApWlKhjhMjEcYZrzcW7JavMaA1pAZpUn5pSB6EgThT2xaTeLi5U1ZLjLJ8x4qzccUZhJ7zE/g6dlrtNO+t+pfSisUNDKF+EJScyFHCZh5BEpgzB4xR3TaVqr0lTKBR1BEw42JIJ+tvL2ShaZuN62xWejqZuMiRLKjqQtB+JpXD/U4vh69BxnKCK/73Qfa/uus+m0z+rVl5cvmnhBFRsHLyxIkrolGIMhKJSchAcl4pzVWmsYAmtbSijnUjxp7UwibdrEUd4pnlnS2olCycgFjTjHo4VHm9/paeku1QxTKCmtWrSPyyrFTf8AtiX6sW+5dwmtV9st5K2SoJdWnEuqnghP0z9sXe2rCLXTl18A1rwGvj5afkH7YoNov2aneW7WLCK2cmVOYISn6Tlq6Yaau+2mkaLjlU2ogYNtkLWo8JBMJ9GndFzFBanEpMqipmy1ygKHjV1J74odkW4u1blwWPw6ceW0eVxYx9ie+K+oeuG57sA0iXwtozSy1P3lHvh+t1AzbqNqkY9xsYq4qUcVKPSYe0/C9vxp9VPRvAEstqWlZGSVLCdM+mRjn2Xd6KkS9R1K0sqcUFtuKwSrCRSTDg42262pp1CXGljStChqSoHlBigqdk2h5RUyt2mn8CSFo6tePbDO6Ll67W1hOtyrZSn+sHsGMJW6r3S3Z9hukQS3T6gHSJFZXLBIzlhFs3sO3pV+JVPLHIEoR2+KLm32C024hdMwPNGTrh1r6irLqh2pwvfp+4fpPydJ9T5vqfT/ABaJadMvmljKCHLjxnBDDXDPGXGJmTkcogETMshjyxlPhFGqqfVT0b9QMSy2twDnSkkdsJtoomK7cC2KoB1plKtSVfmKT4ST0qUVQ7KbQ62th3xNuJUhY46VDSewwhvqrdvXsPrTqUMZ/C82fCVJP1dhiVYvKjY9vcVqpqhxgH8tQDgHQZpMRT7EokkF+qccHyISlufX4oubddKG5shymWCvNbRwWk84jtBMgeSGRNaKOgo7eyWaNoNIPvEYqUfqUcTHVOMRIxOKscooyBxg5eSIM5T48IkY/vgJOPVBOXOIBM80aKqspaNvzap1LaRlM4noGZgOjVBC5+sqX1ejyj6aUp6vxf6tGUuac4ImwxbAkKlEzBywjHGUgermiRPLhFGYJ48Y01tDSXBg09Y2HG5+E5KSZZoUMo2AgZRkDiBLDiIBQq9n3ClcL9pf80JxSkny3k9fuqjBvcu4bYfLuDBWBh+MgoV/eMDDoMyZ4RIM0kETT8pxETPi6WmN9UKhJ+ncQTnpIUP2R1p3jZCMVOJ5igxYu2q1vmbtGwvn0JB7JRznbthOJoW8eQqHcqHU40K3nZAMFOKllJB/bHI9vuiTMU9M44o/MQkdk4tUbdsaDMUTXXNXeY6maChp5eTTNI5ClCQe6HThWN+3Rc/Bb6UtIV8SUH/NeEZ02zrhWOefdqognNKT5izzajgIbpz7gIkfzhhqs/TFk9J6b0w05+ZM+ZPl1wRay9kEUV4y+qXZGachyc8EEBKeMAnLCf8ACCCAzE5d8ZHMS64IIA7oy+HDqgggIEpYdUZJnpE84IICeScSJYwQQE8IIIID/9k=);\n    background-size: cover;\n    transition: all 0.3s ease; }\n    .aplayer .aplayer-pic .aplayer-button {\n      position: absolute;\n      border-radius: 50%;\n      opacity: 0.8;\n      cursor: pointer;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n      background: rgba(0, 0, 0, 0.2);\n      transition: all 0.1s ease; }\n      .aplayer .aplayer-pic .aplayer-button:hover {\n        opacity: 1; }\n      .aplayer .aplayer-pic .aplayer-button .aplayer-fill {\n        fill: #fff; }\n    .aplayer .aplayer-pic .aplayer-hide {\n      display: none; }\n    .aplayer .aplayer-pic .aplayer-play {\n      width: 26px;\n      height: 26px;\n      border: 2px solid #fff;\n      bottom: 50%;\n      right: 50%;\n      margin: 0 -15px -15px 0; }\n      .aplayer .aplayer-pic .aplayer-play .aplayer-icon-play {\n        position: absolute;\n        top: 3px;\n        left: 4px;\n        height: 20px;\n        width: 20px; }\n    .aplayer .aplayer-pic .aplayer-pause {\n      width: 16px;\n      height: 16px;\n      border: 2px solid #fff;\n      bottom: 4px;\n      right: 4px; }\n      .aplayer .aplayer-pic .aplayer-pause .aplayer-icon-pause {\n        position: absolute;\n        top: 2px;\n        left: 2px;\n        height: 12px;\n        width: 12px; }\n  .aplayer .aplayer-info {\n    margin-left: 66px;\n    padding: 14px 7px 0 10px;\n    height: 66px;\n    box-sizing: border-box; }\n    .aplayer .aplayer-info .aplayer-music {\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      margin: 0 0 13px 5px;\n      -webkit-user-select: text;\n         -moz-user-select: text;\n          -ms-user-select: text;\n              user-select: text;\n      cursor: default;\n      padding-bottom: 2px; }\n      .aplayer .aplayer-info .aplayer-music .aplayer-title {\n        font-size: 14px; }\n      .aplayer .aplayer-info .aplayer-music .aplayer-author {\n        font-size: 12px;\n        color: #666; }\n    .aplayer .aplayer-info .aplayer-controller {\n      position: relative;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      .aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap {\n        margin: 0 0 0 5px;\n        padding: 4px 0;\n        cursor: pointer !important;\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1; }\n        .aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar {\n          position: relative;\n          height: 2px;\n          width: 100%;\n          background: #cdcdcd; }\n          .aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-loaded {\n            position: absolute;\n            left: 0;\n            top: 0;\n            bottom: 0;\n            background: #aaa;\n            height: 2px;\n            transition: all 0.5s ease; }\n          .aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played {\n            position: absolute;\n            left: 0;\n            top: 0;\n            bottom: 0;\n            height: 2px; }\n            .aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played .aplayer-thumb {\n              position: absolute;\n              top: 0;\n              right: 5px;\n              margin-top: -4px;\n              margin-right: -10px;\n              height: 8px;\n              width: 8px;\n              border-radius: 50%;\n              background: #fff;\n              cursor: pointer !important; }\n      .aplayer .aplayer-info .aplayer-controller .aplayer-time {\n        position: relative;\n        right: 0;\n        bottom: 3px;\n        height: 17px;\n        color: #999;\n        font-size: 11px;\n        padding-left: 7px; }\n        .aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-time-inner {\n          vertical-align: middle; }\n        .aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon {\n          cursor: pointer;\n          transition: all 0.2s ease; }\n          .aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon .aplayer-fill {\n            fill: #666; }\n          .aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon.aplayer-icon-mode {\n            margin-right: 4px; }\n          .aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon:hover .aplayer-fill {\n            fill: #000; }\n          .aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon.aplayer-icon-menu {\n            display: none; }\n        .aplayer .aplayer-info .aplayer-controller .aplayer-time.aplayer-time-narrow .aplayer-icon-mode {\n          display: none; }\n        .aplayer .aplayer-info .aplayer-controller .aplayer-time.aplayer-time-narrow .aplayer-icon-menu {\n          display: none; }\n      .aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap {\n        position: relative;\n        display: inline-block;\n        margin-left: 3px;\n        cursor: pointer !important; }\n        .aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap:hover .aplayer-volume-bar-wrap {\n          display: block; }\n        .aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap {\n          display: none;\n          position: absolute;\n          bottom: 15px;\n          right: -3px;\n          width: 25px;\n          height: 40px;\n          z-index: 99; }\n          .aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar {\n            position: absolute;\n            bottom: 0;\n            right: 10px;\n            width: 5px;\n            height: 35px;\n            background: #aaa; }\n            .aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar .aplayer-volume {\n              position: absolute;\n              bottom: 0;\n              right: 0;\n              width: 5px;\n              transition: all 0.1s ease; }\n  .aplayer .aplayer-lrc {\n    display: none;\n    position: relative;\n    height: 30px;\n    text-align: center;\n    overflow: hidden;\n    margin: -10px 0 7px; }\n    .aplayer .aplayer-lrc:before {\n      position: absolute;\n      top: 0;\n      z-index: 1;\n      display: block;\n      overflow: hidden;\n      width: 100%;\n      height: 10%;\n      content: ' ';\n      background: linear-gradient(to bottom, white 0%, rgba(255, 255, 255, 0) 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 ); }\n    .aplayer .aplayer-lrc:after {\n      position: absolute;\n      bottom: 0;\n      z-index: 1;\n      display: block;\n      overflow: hidden;\n      width: 100%;\n      height: 33%;\n      content: ' ';\n      background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ccffffff',GradientType=0 ); }\n    .aplayer .aplayer-lrc p {\n      font-size: 12px;\n      color: #666;\n      line-height: 16px !important;\n      height: 16px !important;\n      padding: 0 !important;\n      margin: 0 !important;\n      transition: all 0.5s ease-out;\n      opacity: 0.4;\n      overflow: hidden; }\n      .aplayer .aplayer-lrc p.aplayer-lrc-current {\n        opacity: 1;\n        overflow: visible;\n        height: initial !important; }\n    .aplayer .aplayer-lrc .aplayer-lrc-contents {\n      width: 100%;\n      transition: all 0.5s ease-out;\n      -webkit-user-select: text;\n         -moz-user-select: text;\n          -ms-user-select: text;\n              user-select: text;\n      cursor: default; }\n  .aplayer .aplayer-list {\n    overflow: auto;\n    transition: all 0.5s ease;\n    will-change: height;\n    display: none; }\n    .aplayer .aplayer-list.aplayer-list-hide {\n      height: 0 !important; }\n    .aplayer .aplayer-list::-webkit-scrollbar {\n      width: 5px; }\n    .aplayer .aplayer-list::-webkit-scrollbar-track {\n      background-color: #f9f9f9; }\n    .aplayer .aplayer-list::-webkit-scrollbar-thumb {\n      border-radius: 3px;\n      background-color: #eee; }\n    .aplayer .aplayer-list::-webkit-scrollbar-thumb:hover {\n      background-color: #ccc; }\n    .aplayer .aplayer-list ol {\n      list-style-type: none;\n      margin: 0;\n      padding: 0; }\n      .aplayer .aplayer-list ol li {\n        position: relative;\n        height: 32px;\n        line-height: 32px;\n        padding: 0 15px;\n        font-size: 12px;\n        border-top: 1px solid #e9e9e9;\n        cursor: pointer;\n        transition: all 0.2s ease;\n        overflow: hidden; }\n        .aplayer .aplayer-list ol li:first-child {\n          border-top: none; }\n        .aplayer .aplayer-list ol li:hover {\n          background: #efefef; }\n        .aplayer .aplayer-list ol li.aplayer-list-light {\n          background: #e9e9e9; }\n          .aplayer .aplayer-list ol li.aplayer-list-light .aplayer-list-cur {\n            display: inline-block; }\n        .aplayer .aplayer-list ol li .aplayer-list-cur {\n          display: none;\n          width: 3px;\n          height: 22px;\n          position: absolute;\n          left: 0;\n          top: 5px;\n          cursor: pointer; }\n        .aplayer .aplayer-list ol li .aplayer-list-index {\n          color: #666;\n          margin-right: 12px;\n          cursor: pointer; }\n        .aplayer .aplayer-list ol li .aplayer-list-author {\n          color: #666;\n          float: right;\n          cursor: pointer; }\n\n@-webkit-keyframes aplayer-roll {\n  0% {\n    left: 0; }\n  100% {\n    left: -100%; } }\n\n@keyframes aplayer-roll {\n  0% {\n    left: 0; }\n  100% {\n    left: -100%; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),

/***/ "./src/css/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":1}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"/data/notejs/APlayer/webpack/postcss.config.js\"}}!./node_modules/sass-loader/lib/loader.js!./src/css/index.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/postcss-loader/lib/index.js??ref--2-2!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/postcss-loader/lib/index.js??ref--2-2!../../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/js/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__("./src/css/index.scss");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log("\n %c APlayer 1.6.1 %c http://aplayer.js.org \n\n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;");

var instances = [];

var APlayer = function () {

    /**
     * APlayer constructor function
     *
     * @param {Object} option - See README
     * @constructor
     */
    function APlayer(option) {
        var _this = this;

        _classCallCheck(this, APlayer);

        var svg = {
            'play': ['0 0 16 31', 'M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z'],
            'pause': ['0 0 17 32', 'M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z'],
            'volume-up': ['0 0 28 32', 'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z'],
            'volume-down': ['0 0 28 32', 'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z'],
            'volume-off': ['0 0 28 32', 'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z'],
            'circulation': ['0 0 29 32', 'M25.6 9.92q1.344 0 2.272 0.928t0.928 2.272v9.28q0 1.28-0.928 2.24t-2.272 0.96h-22.4q-1.28 0-2.24-0.96t-0.96-2.24v-9.28q0-1.344 0.96-2.272t2.24-0.928h8v-3.52l6.4 5.76-6.4 5.76v-3.52h-6.72v6.72h19.84v-6.72h-4.8v-4.48h6.080z'],
            'random': ['0 0 33 31', 'M29.867 9.356l-5.003 5.003c-0.094 0.094-0.235 0.141-0.36 0.141-0.266 0-0.5-0.219-0.5-0.5v-3.002h-4.002c-2.079 0-3.064 1.423-3.94 3.111-0.453 0.875-0.844 1.782-1.219 2.673-1.735 4.033-3.768 8.223-8.849 8.223h-3.502c-0.281 0-0.5-0.219-0.5-0.5v-3.002c0-0.281 0.219-0.5 0.5-0.5h3.502c2.079 0 3.064-1.423 3.94-3.111 0.453-0.875 0.844-1.782 1.219-2.673 1.735-4.033 3.768-8.223 8.849-8.223h4.002v-3.002c0-0.281 0.219-0.5 0.5-0.5 0.141 0 0.266 0.063 0.375 0.156l4.987 4.987c0.094 0.094 0.141 0.235 0.141 0.36s-0.047 0.266-0.141 0.36zM10.262 14.781c-0.907-1.892-1.907-3.783-4.268-3.783h-3.502c-0.281 0-0.5-0.219-0.5-0.5v-3.002c0-0.281 0.219-0.5 0.5-0.5h3.502c2.783 0 4.831 1.298 6.41 3.518-0.876 1.344-1.517 2.798-2.142 4.268zM29.867 23.363l-5.003 5.003c-0.094 0.094-0.235 0.141-0.36 0.141-0.266 0-0.5-0.235-0.5-0.5v-3.002c-4.643 0-7.504 0.547-10.396-3.518 0.86-1.344 1.501-2.798 2.126-4.268 0.907 1.892 1.907 3.783 4.268 3.783h4.002v-3.002c0-0.281 0.219-0.5 0.5-0.5 0.141 0 0.266 0.063 0.375 0.156l4.987 4.987c0.094 0.094 0.141 0.235 0.141 0.36s-0.047 0.266-0.141 0.36z'],
            'order': ['0 0 32 32', 'M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z'],
            'single': ['0 0 38 32', 'M2.072 21.577c0.71-0.197 1.125-0.932 0.928-1.641-0.221-0.796-0.333-1.622-0.333-2.457 0-5.049 4.108-9.158 9.158-9.158h5.428c0.056-0.922 0.221-1.816 0.482-2.667h-5.911c-3.158 0-6.128 1.23-8.361 3.463s-3.463 5.203-3.463 8.361c0 1.076 0.145 2.143 0.431 3.171 0.164 0.59 0.7 0.976 1.284 0.976 0.117 0 0.238-0.016 0.357-0.049zM21.394 25.613h-12.409v-2.362c0-0.758-0.528-1.052-1.172-0.652l-5.685 3.522c-0.644 0.4-0.651 1.063-0.014 1.474l5.712 3.69c0.637 0.411 1.158 0.127 1.158-0.63v-2.374h12.409c3.158 0 6.128-1.23 8.361-3.463 1.424-1.424 2.44-3.148 2.99-5.029-0.985 0.368-2.033 0.606-3.125 0.691-1.492 3.038-4.619 5.135-8.226 5.135zM28.718 0c-4.985 0-9.026 4.041-9.026 9.026s4.041 9.026 9.026 9.026 9.026-4.041 9.026-9.026-4.041-9.026-9.026-9.026zM30.392 13.827h-1.728v-6.822c-0.635 0.576-1.433 1.004-2.407 1.285v-1.713c0.473-0.118 0.975-0.325 1.506-0.62 0.532-0.325 0.975-0.665 1.329-1.034h1.3v8.904z'],
            'menu': ['0 0 22 32', 'M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z']
        };
        this.getSVG = function (type) {
            return "\n                <svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"100%\" version=\"1.1\" viewBox=\"" + svg[type][0] + "\" width=\"100%\">\n                    <use xlink:href=\"#aplayer-" + type + "\"></use>\n                    <path class=\"aplayer-fill\" d=\"" + svg[type][1] + "\" id=\"aplayer-" + type + "\"></path>\n                </svg>\n            ";
        };

        this.isMobile = /mobile/i.test(window.navigator.userAgent);
        // compatibility: some mobile browsers don't suppose autoplay
        if (this.isMobile) {
            option.autoplay = false;
        }

        // default options
        var defaultOption = {
            element: document.getElementsByClassName('aplayer')[0],
            narrow: false,
            autoplay: false,
            mutex: true,
            showlrc: 0,
            theme: '#b7daff',
            mode: 'circulation'
        };
        for (var defaultKey in defaultOption) {
            if (defaultOption.hasOwnProperty(defaultKey) && !option.hasOwnProperty(defaultKey)) {
                option[defaultKey] = defaultOption[defaultKey];
            }
        }

        this.option = option;
        this.audios = [];
        this.mode = option.mode;

        /**
         * Parse second to 00:00 format. 00:00:00 if audio is over an hour long.
         *
         * @param {Number} second
         * @return {String} 00:00 format. 00:00:00 if over an hour long.
         */
        this.secondToTime = function (second) {
            if (isNaN(second)) {
                return '00:00';
            }
            var add0 = function add0(num) {
                return num < 10 ? '0' + num : '' + num;
            };
            var min = parseInt(second / 60);
            var sec = parseInt(second - min * 60);
            var hours = parseInt(min / 60);
            var minAdjust = parseInt(second / 60 - 60 * parseInt(second / 60 / 60));
            return second >= 3600 ? add0(hours) + ':' + add0(minAdjust) + ':' + add0(sec) : add0(min) + ':' + add0(sec);
        };

        // save lrc
        this.element = this.option.element;
        if (this.option.showlrc === 2 || this.option.showlrc === true) {
            this.savelrc = [];
            for (var i = 0; i < this.element.getElementsByClassName('aplayer-lrc-content').length; i++) {
                this.savelrc.push(this.element.getElementsByClassName('aplayer-lrc-content')[i].innerHTML);
            }
        }
        this.lrcs = [];

        /**
         * Update progress bar, including loading progress bar and play progress bar
         *
         * @param {String} type - Point out which bar it is, should be played loaded or volume
         * @param {Number} percentage
         * @param {String} direction - Point out the direction of this bar, Should be height or width
         */
        this.updateBar = function (type, percentage, direction) {
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            bar[type + 'Bar'].style[direction] = percentage * 100 + '%';
        };

        /**
         * Update lrc
         *
         * @param {Number} currentTime
         */
        this.updateLrc = function () {
            var currentTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.audio.currentTime;

            if (_this.lrcIndex > _this.lrc.length - 1 || currentTime < _this.lrc[_this.lrcIndex][0] || !_this.lrc[_this.lrcIndex + 1] || currentTime >= _this.lrc[_this.lrcIndex + 1][0]) {
                for (var _i = 0; _i < _this.lrc.length; _i++) {
                    if (currentTime >= _this.lrc[_i][0] && (!_this.lrc[_i + 1] || currentTime < _this.lrc[_i + 1][0])) {
                        _this.lrcIndex = _i;
                        _this.lrcContents.style.transform = "translateY(" + -_this.lrcIndex * 16 + "px)";
                        _this.lrcContents.style.webkitTransform = "translateY(" + -_this.lrcIndex * 16 + "px)";
                        _this.lrcContents.getElementsByClassName('aplayer-lrc-current')[0].classList.remove('aplayer-lrc-current');
                        _this.lrcContents.getElementsByTagName('p')[_i].classList.add('aplayer-lrc-current');
                    }
                }
            }
        };

        // define APlayer events
        var eventTypes = ['play', 'pause', 'canplay', 'playing', 'ended', 'error'];
        this.event = {};
        for (var _i2 = 0; _i2 < eventTypes.length; _i2++) {
            this.event[eventTypes[_i2]] = [];
        }
        this.trigger = function (type) {
            for (var _i3 = 0; _i3 < _this.event[type].length; _i3++) {
                _this.event[type][_i3]();
            }
        };

        // multiple music
        this.playIndex = 0;
        if (Object.prototype.toString.call(option.music) !== '[object Array]') {
            this.option.music = [this.option.music];
        }
        this.music = this.option.music[this.playIndex];

        // add class aplayer-withlrc
        if (this.option.showlrc) {
            this.element.classList.add('aplayer-withlrc');
        }
        if (this.option.music.length > 1) {
            this.element.classList.add('aplayer-withlist');
        }

        // Assume "circulation" mode if single music is loaded and mode isn't already "circulation" or "order".
        if (!this.isMultiple() && this.mode !== 'circulation' && this.mode !== 'order') {
            this.mode = 'circulation';
        }
        this.getRandomOrder();

        // fill in HTML
        var eleHTML = "\n            <div class=\"aplayer-pic\" " + (this.music.pic ? "style=\"background-image: url('" + this.music.pic + "');\"" : "") + ">\n                <div class=\"aplayer-button aplayer-play\">\n                    <button type=\"button\" class=\"aplayer-icon aplayer-icon-play\">\n                        " + this.getSVG('play') + "\n                    </button>\n                </div>\n            </div>\n            <div class=\"aplayer-info\">\n                <div class=\"aplayer-music\">\n                    <span class=\"aplayer-title\"></span>\n                    <span class=\"aplayer-author\"></span>\n                </div>\n                <div class=\"aplayer-lrc\">\n                    <div class=\"aplayer-lrc-contents\" style=\"transform: translateY(0); -webkit-transform: translateY(0);\"></div>\n                </div>\n                <div class=\"aplayer-controller\">\n                    <div class=\"aplayer-bar-wrap\">\n                        <div class=\"aplayer-bar\">\n                            <div class=\"aplayer-loaded\" style=\"width: 0\"></div>\n                            <div class=\"aplayer-played\" style=\"width: 0; background: " + this.option.theme + ";\">\n                                <span class=\"aplayer-thumb\" style=\"border: 1px solid " + this.option.theme + ";\"></span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"aplayer-time\">\n                        <span class=\"aplayer-time-inner\">\n                            - <span class=\"aplayer-ptime\">00:00</span> / <span class=\"aplayer-dtime\">00:00</span>\n                        </span>\n                        <div class=\"aplayer-volume-wrap\">\n                            <button type=\"button\" class=\"aplayer-icon aplayer-icon-volume-down\" " + (this.isMobile ? 'style="display: none;"' : '') + ">\n                               " + this.getSVG('volume-down') + "\n                            </button>\n                            <div class=\"aplayer-volume-bar-wrap\">\n                                <div class=\"aplayer-volume-bar\">\n                                    <div class=\"aplayer-volume\" style=\"height: 80%; background: " + this.option.theme + ";\"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <button type=\"button\" class=\"aplayer-icon aplayer-icon-mode\">\n                            " + this.getSVG(this.mode) + "\n                        </button>\n                        <button type=\"button\" class=\"aplayer-icon aplayer-icon-menu\">\n                            " + this.getSVG('menu') + "\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"aplayer-list\" " + (this.option.listmaxheight ? "style=\"max-height: " + this.option.listmaxheight + "\"" : "") + ">\n                <ol>";
        for (var _i4 = 0; _i4 < this.option.music.length; _i4++) {
            eleHTML += "\n                    <li>\n                        <span class=\"aplayer-list-cur\" style=\"background: " + this.option.theme + ";\"></span>\n                        <span class=\"aplayer-list-index\">" + (_i4 + 1) + "</span>\n                        <span class=\"aplayer-list-title\">" + this.option.music[_i4].title + "</span>\n                        <span class=\"aplayer-list-author\">" + this.option.music[_i4].author + "</span>\n                    </li>";
        }
        eleHTML += "\n                </ol>\n            </div>";
        this.element.innerHTML = eleHTML;

        // hide mode button in arrow container
        if (this.element.offsetWidth < 300) {
            this.element.getElementsByClassName('aplayer-icon-mode')[0].style.display = 'none';
        }

        this.ptime = this.element.getElementsByClassName('aplayer-ptime')[0];

        if (this.element.getElementsByClassName('aplayer-info')[0].offsetWidth < 200) {
            this.element.getElementsByClassName('aplayer-time')[0].classList.add('aplayer-time-narrow');
        }
        // fix the width of aplayer bar
        var bar = {};
        bar.barWrap = this.element.getElementsByClassName('aplayer-bar-wrap')[0];

        // switch to narrow style
        if (this.option.narrow) {
            this.element.classList.add('aplayer-narrow');
        }

        // play and pause button
        this.button = this.element.getElementsByClassName('aplayer-button')[0];
        this.button.addEventListener('click', function () {
            _this.toggle();
        });

        // click music list: change music
        var list = this.element.getElementsByClassName('aplayer-list')[0];
        list.addEventListener('click', function (e) {
            var target = void 0;
            if (e.target.tagName.toUpperCase() === 'LI') {
                target = e.target;
            } else {
                target = e.target.parentElement;
            }
            var musicIndex = parseInt(target.getElementsByClassName('aplayer-list-index')[0].innerHTML) - 1;
            if (musicIndex !== _this.playIndex) {
                _this.setMusic(musicIndex);
                _this.play();
            } else {
                _this.toggle();
            }
        });

        // control play progress
        bar.playedBar = this.element.getElementsByClassName('aplayer-played')[0];
        bar.loadedBar = this.element.getElementsByClassName('aplayer-loaded')[0];
        var thumb = this.element.getElementsByClassName('aplayer-thumb')[0];
        var barWidth = void 0;
        bar.barWrap.addEventListener('click', function (event) {
            var e = event || window.event;
            barWidth = bar.barWrap.clientWidth;
            var percentage = (e.clientX - getElementViewLeft(bar.barWrap)) / barWidth;
            if (isNaN(_this.audio.duration)) {
                _this.updateBar('played', 0, 'width');
            } else {
                _this.updateBar('played', percentage, 'width');
                _this.element.getElementsByClassName('aplayer-ptime')[0].innerHTML = _this.secondToTime(percentage * _this.audio.duration);
                _this.audio.currentTime = parseFloat(bar.playedBar.style.width) / 100 * _this.audio.duration;
            }
        });

        thumb.addEventListener('mouseover', function () {
            thumb.style.background = _this.option.theme;
        });
        thumb.addEventListener('mouseout', function () {
            thumb.style.background = '#fff';
        });

        var thumbMove = function thumbMove(event) {
            var e = event || window.event;
            var percentage = (e.clientX - getElementViewLeft(bar.barWrap)) / barWidth;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            _this.updateBar('played', percentage, 'width');
            if (_this.option.showlrc) {
                _this.updateLrc(parseFloat(bar.playedBar.style.width) / 100 * _this.audio.duration);
            }
            _this.element.getElementsByClassName('aplayer-ptime')[0].innerHTML = _this.secondToTime(percentage * _this.audio.duration);
        };

        var thumbUp = function thumbUp() {
            document.removeEventListener('mouseup', thumbUp);
            document.removeEventListener('mousemove', thumbMove);
            if (isNaN(_this.audio.duration)) {
                _this.updateBar('played', 0, 'width');
            } else {
                _this.audio.currentTime = parseFloat(bar.playedBar.style.width) / 100 * _this.audio.duration;
                _this.playedTime = setInterval(function () {
                    _this.updateBar('played', _this.audio.currentTime / _this.audio.duration, 'width');
                    if (_this.option.showlrc) {
                        _this.updateLrc();
                    }
                    _this.element.getElementsByClassName('aplayer-ptime')[0].innerHTML = _this.secondToTime(_this.audio.currentTime);
                    _this.trigger('playing');
                }, 100);
            }
        };

        thumb.addEventListener('mousedown', function () {
            barWidth = bar.barWrap.clientWidth;
            clearInterval(_this.playedTime);
            document.addEventListener('mousemove', thumbMove);
            document.addEventListener('mouseup', thumbUp);
        });

        // control volume
        bar.volumeBar = this.element.getElementsByClassName('aplayer-volume')[0];
        var volumeBarWrap = this.element.getElementsByClassName('aplayer-volume-bar')[0];
        this.volumeicon = this.element.getElementsByClassName('aplayer-time')[0].getElementsByTagName('button')[0];
        var barHeight = 35;
        this.element.getElementsByClassName('aplayer-volume-bar-wrap')[0].addEventListener('click', function (event) {
            var e = event || window.event;
            var percentage = (barHeight - e.clientY + getElementViewTop(volumeBarWrap)) / barHeight;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            _this.volume(percentage);
        });
        this.volumeicon.addEventListener('click', function () {
            if (_this.audio.muted) {
                _this.audio.muted = false;
                _this.volumeicon.className = _this.audio.volume === 1 ? 'aplayer-icon aplayer-icon-volume-up' : 'aplayer-icon aplayer-icon-volume-down';
                if (_this.audio.volume === 1) {
                    _this.volumeicon.className = 'aplayer-icon aplayer-icon-volume-up';
                    _this.volumeicon.innerHTML = _this.getSVG('volume-up');
                } else {
                    _this.volumeicon.className = 'aplayer-icon aplayer-icon-volume-down';
                    _this.volumeicon.innerHTML = _this.getSVG('volume-down');
                }
                _this.updateBar('volume', _this.audio.volume, 'height');
            } else {
                _this.audio.muted = true;
                _this.volumeicon.className = 'aplayer-icon aplayer-icon-volume-off';
                _this.volumeicon.innerHTML = _this.getSVG('volume-off');
                _this.updateBar('volume', 0, 'height');
            }
        });

        // get element's view position
        function getElementViewLeft(element) {
            var actualLeft = element.offsetLeft;
            var current = element.offsetParent;
            var elementScrollLeft = 0;
            while (current !== null) {
                actualLeft += current.offsetLeft;
                current = current.offsetParent;
            }
            elementScrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
            return actualLeft - elementScrollLeft;
        }

        function getElementViewTop(element) {
            var actualTop = element.offsetTop;
            var current = element.offsetParent;
            var elementScrollTop = 0;
            while (current !== null) {
                actualTop += current.offsetTop;
                current = current.offsetParent;
            }
            elementScrollTop = document.body.scrollTop + document.documentElement.scrollTop;
            return actualTop - elementScrollTop;
        }

        // mode control
        var modeEle = this.element.getElementsByClassName('aplayer-icon-mode')[0];
        modeEle.addEventListener('click', function () {
            if (_this.isMultiple()) {
                if (_this.mode === 'random') {
                    _this.mode = 'single';
                } else if (_this.mode === 'single') {
                    _this.mode = 'order';
                } else if (_this.mode === 'order') {
                    _this.mode = 'circulation';
                } else if (_this.mode === 'circulation') {
                    _this.mode = 'random';
                }
            } else {
                if (_this.mode === 'circulation') {
                    _this.mode = 'order';
                } else {
                    _this.mode = 'circulation';
                }
            }
            modeEle.innerHTML = _this.getSVG(_this.mode);
            _this.audio.loop = !(_this.isMultiple() || _this.mode === 'order');
        });

        // toggle menu control
        list.style.height = list.offsetHeight + 'px';
        this.element.getElementsByClassName('aplayer-icon-menu')[0].addEventListener('click', function () {
            if (!list.classList.contains('aplayer-list-hide')) {
                list.classList.add('aplayer-list-hide');
            } else {
                list.classList.remove('aplayer-list-hide');
            }
        });

        if (this.mode === 'random') {
            this.setMusic(this.randomOrder[0]);
        } else {
            this.setMusic(0);
        }

        // autoplay
        if (this.option.autoplay) {
            this.play();
        }

        instances.push(this);
    }

    /**
     * Set music
     */


    _createClass(APlayer, [{
        key: "setMusic",
        value: function setMusic(index) {
            var _this2 = this;

            // get this.music
            if (typeof index !== 'undefined') {
                this.playIndex = index;
            }
            var indexMusic = this.playIndex;
            this.music = this.option.music[indexMusic];

            // set html
            if (this.music.pic) {
                this.element.getElementsByClassName('aplayer-pic')[0].style.backgroundImage = "url('" + this.music.pic + "')";
            } else {
                this.element.getElementsByClassName('aplayer-pic')[0].style.backgroundImage = '';
            }
            this.element.getElementsByClassName('aplayer-title')[0].innerHTML = this.music.title;
            this.element.getElementsByClassName('aplayer-author')[0].innerHTML = this.music.author ? ' - ' + this.music.author : '';
            if (this.element.getElementsByClassName('aplayer-list-light')[0]) {
                this.element.getElementsByClassName('aplayer-list-light')[0].classList.remove('aplayer-list-light');
            }
            this.element.getElementsByClassName('aplayer-list')[0].getElementsByTagName('li')[indexMusic].classList.add('aplayer-list-light');

            // set the previous audio object
            if (!this.isMobile && this.audio) {
                this.pause();
                this.audio.currentTime = 0;
            }

            this.element.getElementsByClassName('aplayer-list')[0].scrollTop = indexMusic * 33;

            // get this audio object
            if (this.isMobile && this.audio) {
                this.audio.src = this.music.url;
            } else if (!this.isMobile && this.audios[indexMusic]) {
                this.audio = this.audios[indexMusic];
                this.audio.volume = parseInt(this.element.getElementsByClassName('aplayer-volume')[0].style.height) / 100;
                this.audio.currentTime = 0;
                this.audio.src = this.music.url;
            } else {
                this.audio = document.createElement("audio");
                this.audio.src = this.music.url;
                this.audio.preload = this.option.preload ? this.option.preload : 'auto';

                this.audio.addEventListener('play', function () {
                    if (_this2.button.classList.contains('aplayer-play')) {
                        _this2.button.classList.remove('aplayer-play');
                        _this2.button.classList.add('aplayer-pause');
                        _this2.button.innerHTML = '';
                        setTimeout(function () {
                            _this2.button.innerHTML = "\n                                    <button type=\"button\" class=\"aplayer-icon aplayer-icon-pause\">" + _this2.getSVG('pause') + "     </button>";
                        }, 100);

                        // pause other players (Thanks @Aprikyblue)
                        if (_this2.option.mutex) {
                            for (var i = 0; i < instances.length; i++) {
                                if (_this2 !== instances[i]) {
                                    instances[i].pause();
                                }
                            }
                        }
                        if (_this2.playedTime) {
                            clearInterval(_this2.playedTime);
                        }
                        _this2.playedTime = setInterval(function () {
                            _this2.updateBar('played', _this2.audio.currentTime / _this2.audio.duration, 'width');
                            if (_this2.option.showlrc) {
                                _this2.updateLrc();
                            }
                            _this2.ptime.innerHTML = _this2.secondToTime(_this2.audio.currentTime);
                            _this2.trigger('playing');
                        }, 100);
                        _this2.trigger('play');
                    }
                });

                var pauseHandler = function pauseHandler() {
                    if (_this2.button && (_this2.button.classList.contains('aplayer-pause') || _this2.ended)) {
                        _this2.ended = false;
                        _this2.button.classList.remove('aplayer-pause');
                        _this2.button.classList.add('aplayer-play');
                        _this2.button.innerHTML = '';
                        setTimeout(function () {
                            _this2.button.innerHTML = "\n                                    <button type=\"button\" class=\"aplayer-icon aplayer-icon-play\">" + _this2.getSVG('play') + "     </button>";
                        }, 100);
                        clearInterval(_this2.playedTime);
                        _this2.trigger('pause');
                    }
                };

                this.audio.addEventListener('pause', pauseHandler);

                this.audio.addEventListener('abort', pauseHandler);

                // show audio time: the metadata has loaded or changed
                this.audio.addEventListener('durationchange', function () {
                    if (_this2.audio.duration !== 1) {
                        // compatibility: Android browsers will output 1 at first
                        _this2.element.getElementsByClassName('aplayer-dtime')[0].innerHTML = _this2.secondToTime(_this2.audio.duration);
                    }
                });

                // show audio loaded bar: to inform interested parties of progress downloading the media
                this.audio.addEventListener('progress', function () {
                    var percentage = _this2.audio.buffered.length ? _this2.audio.buffered.end(_this2.audio.buffered.length - 1) / _this2.audio.duration : 0;
                    _this2.updateBar('loaded', percentage, 'width');
                });

                // audio download error: an error occurs
                this.audio.addEventListener('error', function () {
                    _this2.element.getElementsByClassName('aplayer-author')[0].innerHTML = " - Error happens \u2565\uFE4F\u2565";
                    _this2.trigger('pause');
                });

                // audio can play: enough data is available that the media can be played
                this.audio.addEventListener('canplay', function () {
                    _this2.trigger('canplay');
                });

                // multiple music play
                this.ended = false;
                this.audio.addEventListener('ended', function () {
                    if (_this2.isMultiple()) {
                        if (_this2.audio.currentTime !== 0) {
                            if (_this2.mode === 'random') {
                                _this2.setMusic(_this2.nextRandomNum());
                                _this2.play();
                            } else if (_this2.mode === 'single') {
                                _this2.setMusic(_this2.playIndex);
                                _this2.play();
                            } else if (_this2.mode === 'order') {
                                if (_this2.playIndex < _this2.option.music.length - 1) {
                                    _this2.setMusic(++_this2.playIndex);
                                    _this2.play();
                                } else {
                                    _this2.ended = true;
                                    _this2.pause();
                                    _this2.trigger('ended');
                                }
                            } else if (_this2.mode === 'circulation') {
                                _this2.playIndex = (_this2.playIndex + 1) % _this2.option.music.length;
                                _this2.setMusic(_this2.playIndex);
                                _this2.play();
                            }
                        }
                    } else {
                        if (_this2.mode === 'order') {
                            _this2.ended = true;
                            _this2.pause();
                            _this2.trigger('ended');
                        }
                    }
                });

                // control volume
                this.audio.volume = parseInt(this.element.getElementsByClassName('aplayer-volume')[0].style.height) / 100;

                // loop
                this.audio.loop = !(this.isMultiple() || this.mode === 'order');

                this.audios[indexMusic] = this.audio;
            }

            /**
             * Parse lrc, suppose multiple time tag
             *
             * @param {String} lrc_s - Format:
             * [mm:ss.xx]lyric
             * [mm:ss.xxx]lyric
             * [mm:ss.xx][mm:ss.xx][mm:ss.xx]lyric
             *
             * @return {String} [[time, text], [time, text], [time, text], ...]
             */
            var parseLrc = function parseLrc(lrc_s) {
                var lyric = lrc_s.split('\n');
                var lrc = [];
                var lyricLen = lyric.length;
                for (var i = 0; i < lyricLen; i++) {
                    // match lrc time
                    var lrcTimes = lyric[i].match(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g);
                    // match lrc text
                    var lrcText = lyric[i].replace(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g, '').replace(/^\s+|\s+$/g, '');

                    if (lrcTimes) {
                        // handle multiple time tag
                        var timeLen = lrcTimes.length;
                        for (var j = 0; j < timeLen; j++) {
                            var oneTime = /\[(\d{2}):(\d{2})\.(\d{2,3})]/.exec(lrcTimes[j]);
                            var lrcTime = oneTime[1] * 60 + parseInt(oneTime[2]) + parseInt(oneTime[3]) / ((oneTime[3] + '').length === 2 ? 100 : 1000);
                            lrc.push([lrcTime, lrcText]);
                        }
                    }
                }
                // sort by time
                lrc.sort(function (a, b) {
                    return a[0] - b[0];
                });
                return lrc;
            };

            // fill in lrc
            if (this.option.showlrc) {
                var _index = indexMusic;

                if (!this.lrcs[_index]) {
                    var lrcs = '';
                    if (this.option.showlrc === 1) {
                        lrcs = this.option.music[_index].lrc;
                    } else if (this.option.showlrc === 2 || this.option.showlrc === true) {
                        lrcs = this.savelrc[_index];
                    } else if (this.option.showlrc === 3) {
                        var xhr = new XMLHttpRequest();
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === 4) {
                                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                                    lrcs = xhr.responseText;
                                    _this2.lrcs[_index] = parseLrc(lrcs);
                                } else {
                                    console.log('Request was unsuccessful: ' + xhr.status);
                                    _this2.lrcs[_index] = [['00:00', 'Not available']];
                                }
                                _this2.lrc = _this2.lrcs[_index];
                                var _lrcHTML = '';
                                _this2.lrcContents = _this2.element.getElementsByClassName('aplayer-lrc-contents')[0];
                                for (var i = 0; i < _this2.lrc.length; i++) {
                                    _lrcHTML += "<p>" + _this2.lrc[i][1] + "</p>";
                                }
                                _this2.lrcContents.innerHTML = _lrcHTML;
                                if (!_this2.lrcIndex) {
                                    _this2.lrcIndex = 0;
                                }
                                _this2.lrcContents.getElementsByTagName('p')[0].classList.add('aplayer-lrc-current');
                                _this2.lrcContents.style.transform = 'translateY(0px)';
                                _this2.lrcContents.style.webkitTransform = 'translateY(0px)';
                            }
                        };
                        var apiurl = this.option.music[_index].lrc;
                        xhr.open('get', apiurl, true);
                        xhr.send(null);
                    }
                    if (lrcs) {
                        this.lrcs[_index] = parseLrc(lrcs);
                    } else {
                        if (this.option.showlrc === 3) {
                            this.lrcs[_index] = [['00:00', 'Loading']];
                        } else {
                            this.lrcs[_index] = [['00:00', 'Not available']];
                        }
                    }
                }

                this.lrc = this.lrcs[_index];
                var lrcHTML = '';
                this.lrcContents = this.element.getElementsByClassName('aplayer-lrc-contents')[0];
                for (var i = 0; i < this.lrc.length; i++) {
                    lrcHTML += "<p>" + this.lrc[i][1] + "</p>";
                }
                this.lrcContents.innerHTML = lrcHTML;
                if (!this.lrcIndex) {
                    this.lrcIndex = 0;
                }
                this.lrcContents.getElementsByTagName('p')[0].classList.add('aplayer-lrc-current');
                this.lrcContents.style.transform = 'translateY(0px)';
                this.lrcContents.style.webkitTransform = 'translateY(0px)';
            }

            // set duration time
            if (this.audio.duration !== 1) {
                // compatibility: Android browsers will output 1 at first
                this.element.getElementsByClassName('aplayer-dtime')[0].innerHTML = this.audio.duration ? this.secondToTime(this.audio.duration) : '00:00';
            }
        }

        /**
         * Play music
         */

    }, {
        key: "play",
        value: function play(time) {
            if (Object.prototype.toString.call(time) === '[object Number]') {
                this.audio.currentTime = time;
            }
            if (this.audio.paused) {
                this.audio.play();
            }
        }

        /**
         * Pause music
         */

    }, {
        key: "pause",
        value: function pause() {
            if (!this.audio.paused) {
                this.audio.pause();
            }
        }

        /**
         * Set volume
         */

    }, {
        key: "volume",
        value: function volume(percentage) {
            this.updateBar('volume', percentage, 'height');
            this.audio.volume = percentage;
            if (this.audio.muted) {
                this.audio.muted = false;
            }
            if (percentage === 1) {
                this.volumeicon.className = 'aplayer-icon aplayer-icon-volume-up';
                this.volumeicon.innerHTML = this.getSVG('volume-up');
            } else {
                this.volumeicon.className = 'aplayer-icon aplayer-icon-volume-down';
                this.volumeicon.innerHTML = this.getSVG('volume-down');
            }
        }

        /**
         * attach event
         */

    }, {
        key: "on",
        value: function on(name, func) {
            if (typeof func === 'function') {
                this.event[name].push(func);
            }
        }

        /**
         * toggle between play and pause
         */

    }, {
        key: "toggle",
        value: function toggle() {
            if (this.button.classList.contains('aplayer-play')) {
                this.play();
            } else if (this.button.classList.contains('aplayer-pause')) {
                this.pause();
            }
        }

        /**
         * get whether multiple music definitions are loaded
         */

    }, {
        key: "isMultiple",
        value: function isMultiple() {
            return this.option.music.length > 1;
        }

        /**
         * get random order, using Fisher–Yates shuffle
         */

    }, {
        key: "getRandomOrder",
        value: function getRandomOrder() {
            function random(min, max) {
                if (max) {
                    max = min;
                    min = 0;
                }
                return min + Math.floor(Math.random() * (max - min + 1));
            }
            function shuffle(arr) {
                var length = arr.length,
                    shuffled = new Array(length);
                for (var index = 0, rand; index < length; index++) {
                    rand = random(0, index);
                    if (rand !== index) {
                        shuffled[index] = shuffled[rand];
                    }
                    shuffled[rand] = arr[index];
                }
                return shuffled;
            }
            if (this.isMultiple()) {
                this.randomOrder = shuffle([].concat(_toConsumableArray(Array(this.option.music.length))).map(function (item, i) {
                    return i;
                }));
            }
        }

        /**
         * get next random number
         */

    }, {
        key: "nextRandomNum",
        value: function nextRandomNum() {
            if (this.isMultiple()) {
                var index = this.randomOrder.indexOf(this.playIndex);
                if (index === this.randomOrder.length - 1) {
                    return this.randomOrder[0];
                } else {
                    return this.randomOrder[index + 1];
                }
            } else {
                return 0;
            }
        }

        /**
        * Remove song from playlist
        */

    }, {
        key: "removeSong",
        value: function removeSong(indexOfSong) {
            if (this.option.music[indexOfSong]) {
                // Check if song exists
                var list = this.element.getElementsByClassName('aplayer-list')[0];
                var oList = list.getElementsByTagName('ol')[0];
                var liList = oList.getElementsByTagName('li');
                if (this.option.music[indexOfSong + 1] || this.option.music[indexOfSong - 1]) {
                    if (indexOfSong === this.playIndex) {
                        if (this.option.music[indexOfSong + 1]) {
                            // Play next song if it exists.
                            this.setMusic(indexOfSong + 1);
                            this.playIndex = this.playIndex - 1; // Adjust play index for removed song
                        } else if (!this.option.music[indexOfSong + 1]) {
                            // Play previous song if it exists.
                            this.setMusic(indexOfSong - 1);
                        }
                    } else {
                        if (indexOfSong < this.playIndex) {
                            this.playIndex = this.playIndex - 1;
                        }
                    }
                    if (liList[indexOfSong + 1]) {
                        var targetSong = liList[indexOfSong - 1];
                        targetSong.getElementsByClassName('aplayer-list-index')[0].textContent = indexOfSong;
                    } else {
                        for (var i = 1; i < liList.length; i++) {
                            if (liList[indexOfSong + i]) {
                                var _targetSong = liList[indexOfSong + i];
                                _targetSong.getElementsByClassName('aplayer-list-index')[0].textContent = indexOfSong + i;
                            }
                        }
                    }
                    this.option.music.splice(indexOfSong, 1); // Delete song from music array
                    this.audios.splice(indexOfSong, 1); // Delete song from audios array
                    liList[indexOfSong].remove();
                    if (this.option.music[0] && this.option.music[1]) {
                        this.multiple = false;
                        this.element.classList.remove('aplayer-withlist');
                    }
                }
                var listHeight = parseInt(list.style.height, 10);
                list.style.height = listHeight - 33 + "px";
            } else {
                console.error("ERROR: Song does not exist");
            }
        }

        /**
         * destroy this player
         */

    }, {
        key: "destroy",
        value: function destroy() {
            instances.splice(instances.indexOf(this), 1);
            this.pause();
            this.element.innerHTML = '';
            clearInterval(this.playedTime);
            for (var key in this) {
                if (this.hasOwnProperty(key)) {
                    delete this[key];
                }
            }
        }

        /**
         * add music dynamically
         *
         * @param {Array} newMusic
         */

    }, {
        key: "addMusic",
        value: function addMusic(newMusic) {
            var wasSingle = !this.isMultiple();

            this.option.music = this.option.music.concat(newMusic);

            var list = this.element.getElementsByClassName('aplayer-list')[0];
            var listEle = list.getElementsByTagName('ol')[0];
            var newItemHTML = "";
            for (var i = 0; i < newMusic.length; i++) {
                newItemHTML += "\n                <li>\n                    <span class=\"aplayer-list-cur\" style=\"background: " + this.option.theme + ";\"></span>\n                    <span class=\"aplayer-list-index\">" + (this.option.music.length - newMusic.length + i + 1) + "</span>\n                    <span class=\"aplayer-list-title\">" + newMusic[i].title + "</span>\n                    <span class=\"aplayer-list-author\">" + newMusic[i].author + "</span>\n                </li>";
            }
            listEle.innerHTML += newItemHTML;

            if (wasSingle && this.isMultiple()) {
                this.element.classList.add('aplayer-withlist');
                this.audio.loop = false;
            }
            var songListLength = listEle.getElementsByTagName('li').length;
            list.style.height = songListLength * 33 + 'px';

            this.getRandomOrder();
        }
    }]);

    return APlayer;
}();

exports.default = APlayer;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=APlayer.js.map