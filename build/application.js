webpackJsonp([0],{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
module.exports = __webpack_require__(328);


/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _addClass = __webpack_require__(329);

var _addClass2 = _interopRequireDefault(_addClass);

__webpack_require__(330);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _addClass2.default)('.block-1');
(0, _addClass2.default)('.block-2');

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function addClass(selector) {
  var rootElement = document.querySelector(selector);
  var button = rootElement.querySelector('.btn');
  var modal = rootElement.querySelector('.addClass');

  function addClass() {
    modal.classList.toggle('showed');
  }

  button.addEventListener('click', function () {
    addClass();
  });
}

exports.default = addClass;

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[126]);