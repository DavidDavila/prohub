exports.id = 0;
exports.modules = {

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Counter = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _templateObject = _taggedTemplateLiteral(['\n  b\n    font-size: 40px;\n    font-family: WorkSans\n    margin:60px;\n    display:block;\n    color: #222;\n  p\n    overflow: hidden;\n    display: block;\n    text-align: center;\n'], ['\n  b\n    font-size: 40px;\n    font-family: WorkSans\n    margin:60px;\n    display:block;\n    color: #222;\n  p\n    overflow: hidden;\n    display: block;\n    text-align: center;\n']);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactStyling = __webpack_require__(180);
	
	var _reactStyling2 = _interopRequireDefault(_reactStyling);
	
	var _redux = __webpack_require__(168);
	
	var _reactRedux = __webpack_require__(18);
	
	var _counterAction = __webpack_require__(172);
	
	var counterAction = _interopRequireWildcard(_counterAction);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	var style = (0, _reactStyling2.default)(_templateObject);
	
	var Counter = exports.Counter = function (_Component) {
	  _inherits(Counter, _Component);
	
	  function Counter() {
	    _classCallCheck(this, Counter);
	
	    return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
	  }
	
	  _createClass(Counter, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h2',
	          null,
	          ' El resultado es:',
	          _react2.default.createElement(
	            'b',
	            { style: style.b },
	            this.props.counter
	          )
	        ),
	        _react2.default.createElement(
	          'p',
	          { style: style.p },
	          _react2.default.createElement(
	            'button',
	            { type: 'button', onClick: this.props.decrement },
	            'Restar'
	          ),
	          _react2.default.createElement(
	            'button',
	            { type: 'button', onClick: this.props.increment },
	            'Sumar'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Counter;
	}(_react.Component);
	
	Counter.propTypes = {
	  counter: _react.PropTypes.number.isRequired
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    counter: state.counterReducer
	  };
	}, function (dispatch) {
	  return (0, _redux.bindActionCreators)(counterAction, dispatch);
	})(Counter);

/***/ }

};
//# sourceMappingURL=0.559b5a968d0904f20dad.hot-update.js.map