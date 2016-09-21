exports.id = 0;
exports.modules = {

/***/ 172:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.decrement = decrement;
	exports.increment = increment;
	var DECREMENT = exports.DECREMENT = 'DECREMENT';
	var INCREMENT = exports.INCREMENT = 'INCREMENT';
	
	function decrement(event) {
	  return {
	    type: DECREMENT
	  };
	};
	
	function increment() {
	  return {
	    type: INCREMENT
	  };
	}

/***/ }

};
//# sourceMappingURL=0.7484752161ebdbb9da4c.hot-update.js.map