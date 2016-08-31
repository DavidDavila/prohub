exports.id = 0;
exports.modules = {

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactGoogleLogin = __webpack_require__(173);
	
	var _reactGoogleLogin2 = _interopRequireDefault(_reactGoogleLogin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Login = function (_Component) {
	  _inherits(Login, _Component);
	
	  function Login(props, context) {
	    _classCallCheck(this, Login);
	
	    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props, context));
	  }
	
	  _createClass(Login, [{
	    key: 'responseGoogle',
	    value: function responseGoogle(response) {
	      console.log(response);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Login'
	        ),
	        _react2.default.createElement(_reactGoogleLogin2.default, {
	          clientId: '28039930136-hu376pv4ia2ssmqnjabmhnpr1hf11s4g.apps.googleusercontent.com',
	          buttonText: 'Login',
	          cssClass: 'googleButton',
	          callback: this.responseGoogle
	        })
	      );
	    }
	  }]);
	
	  return Login;
	}(_react.Component);
	
	exports.default = Login;

/***/ }

};
//# sourceMappingURL=0.8ed779f8a7f6774da3f4.hot-update.js.map