/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
var gravity = 0.5;
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.speed = 10;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 66;
    this.height = 150;
    this.image = createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        cropWidth: 341,
        width: 127.875
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = this.sprites.stand.cropWidth;
    this.currentWidth = this.sprites.stand.width;
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.currentWidth, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 59 && this.currentSprite === this.sprites.stand.right) {
        this.frames = 0;
      } else if (this.frames > 29 && this.currentSprite === this.sprites.run.right) {
        this.frames = 0;
      }
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      }
    }
  }]);
  return Player;
}();
var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
      y = _ref.y,
      image = _ref.image;
    _classCallCheck(this, Platform);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return Platform;
}();
var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
      y = _ref2.y,
      image = _ref2.image;
    _classCallCheck(this, GenericObject);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return GenericObject;
}();
function createImage(path) {
  var image = new Image();
  image.src = path;
  return image;
}
var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var player = new Player();
var platforms = [];
var genericObjects = [];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;
function init() {
  platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Player();
  platforms = [new Platform({
    x: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]).width * 2,
    y: 270,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: 0,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 100,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 300,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 500,
    y: 470,
    image: platformImage
  })];
  genericObjects = [new GenericObject({
    x: 0,
    y: 0,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: 0,
    y: 0,
    image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  scrollOffset = 0;
}
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;
    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += player.speed * 0.66;
      });
    }
  }
  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });

  // experimental platform
  platforms.forEach(function (platform) {
    if (player.velocity.y < 0 &&
    // Player is moving upwards
    player.position.y <= platform.position.y + platform.height &&
    // Player's top is below or at the platform's bottom
    player.position.y + player.height >= platform.position.y && player.position.x + player.width >= platform.position.x &&
    // Player's right is beyond the platform's left
    player.position.x <= platform.position.x + platform.width // Player's left is before the platform's right
    ) {
      console.log("Hit the bottom of the platform");
      player.velocity.y = 5; // Push the player down
    }
  });

  // win condition
  if (scrollOffset > platformImage.width * 4 + 250) {
    console.log("End of game");
  }

  // lose condition
  if (player.position.y > canvas.height) {
    console.log("You lose");
    init();
  }
}
init();
animate();
window.addEventListener("keydown", function (_ref3) {
  var keyCode = _ref3.keyCode;
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = true;
      break;
    case 87:
      console.log("up");
      player.velocity.y -= 15;
      break;
    case 68:
      console.log("right");
      keys.right.pressed = true;
      player.currentSprite = player.sprites.run.right;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.currentWidth = player.sprites.run.width;
      break;
    case 83:
      console.log("down");
      break;
    default:
      break;
  }
});
window.addEventListener("keyup", function (_ref4) {
  var keyCode = _ref4.keyCode;
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = false;
      break;
    // case 87:
    //   console.log("up");
    //   player.velocity.y = -10;
    //   break;
    case 68:
      console.log("right");
      keys.right.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.currentWidth = player.sprites.stand.width;
      break;
    case 83:
      console.log("down");
      break;
    default:
      break;
  }
});
/******/ })()
;
//# sourceMappingURL=canvas.bundle.js.map