exports.id = 0;
exports.modules = {

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _express = __webpack_require__(4);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mongoose = __webpack_require__(6);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	var _methodOverride = __webpack_require__(7);
	
	var _methodOverride2 = _interopRequireDefault(_methodOverride);
	
	var _bodyParser = __webpack_require__(8);
	
	var _bodyParser2 = _interopRequireDefault(_bodyParser);
	
	__webpack_require__(9);
	
	var _client = __webpack_require__(10);
	
	var _client2 = _interopRequireDefault(_client);
	
	__webpack_require__(15);
	
	var _user = __webpack_require__(16);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _reactRouter = __webpack_require__(17);
	
	var _reactRedux = __webpack_require__(18);
	
	var _server = __webpack_require__(19);
	
	var _configureStore = __webpack_require__(166);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	var _html = __webpack_require__(176);
	
	var _html2 = _interopRequireDefault(_html);
	
	var _route = __webpack_require__(177);
	
	var _route2 = _interopRequireDefault(_route);
	
	var _metadata = __webpack_require__(188);
	
	var _middleware = __webpack_require__(189);
	
	var _middleware2 = _interopRequireDefault(_middleware);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Html = _html2.default;
	var Route = _route2.default;
	
	var app = (0, _express2.default)();
	var hostname = 'localhost';
	var port = 3007;
	
	function getMarkup(store, render_props, metadata) {
	  var component = _react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store, key: 'provider' },
	    _react2.default.createElement(_reactRouter.RoutingContext, render_props)
	  );
	
	  return '<!doctype html>\n' + (0, _server.renderToString)(_react2.default.createElement(Html, {
	    metadata: metadata,
	    component: component,
	    script: 'http://localhost:3006/client/index.js',
	    state: store.getState()
	
	  }));
	}
	
	app.use('/client', _express2.default.static('client'));
	app.use('/static', _express2.default.static('public'));
	
	// Connection to DB
	
	_mongoose2.default.connect('mongodb://localhost/', function (err, res) {
	  if (err) {
	    throw err;
	  };
	  console.log('Connected to Database');
	});
	
	// Middlewares
	
	app.use(_bodyParser2.default.urlencoded({ extended: false }));
	app.use(_bodyParser2.default.json());
	app.use((0, _methodOverride2.default)());
	
	// WEB
	app.get('/', function (req, res) {
	  (0, _reactRouter.match)({
	    location: req.url,
	    routes: Route
	  }, function (error, redirection_location, render_props) {
	    if (error) {
	      console.error('Router error:', error);
	
	      res.status(500).send(error.message);
	    } else if (redirection_location) {
	      res.redirect(302, redirectLocation.pathname + redirection_location.search);
	    } else if (render_props) {
	
	      var store = (0, _configureStore2.default)({});
	
	      res.status(200).send(getMarkup(store, render_props, _metadata.Meta[req.url]));
	    } else {
	      res.status(400).send('Not Found');
	    }
	  });
	});
	
	// API routes
	var rooter = _express2.default.Router();
	
	rooter.route('/user').get(_user2.default.findAllUsers).post(_user2.default.addUser);
	
	rooter.route('/user/:id').put(_user2.default.updateUser).delete(_user2.default.deleteUser);
	
	rooter.route('/client').get(_middleware2.default.ensureAuthenticated, _client2.default.findAllClients).post(_client2.default.addClient);
	
	rooter.route('/client/:id').get(_client2.default.findByName).put(_client2.default.updateClient).delete(_client2.default.deleteClient);
	
	rooter.route('/client/:id/validate').post(_client2.default.validateClient);
	
	app.use('/api', rooter);
	
	// Create Server 
	
	app.listen(port, function (error) {
	  if (error) {
	    console.error(error);
	  } else {
	    console.info('==> 🌎  Open up https://' + hostname + ':' + port + '/ in your browser.');
	  }
	});
	
	if (true) {
	  console.info('[HMR] Server is listening…');
	
	  module.hot.accept(176, function () {
	    console.info('[HMR] Patching Html');
	
	    Html = __webpack_require__(176).default;
	  });
	
	  module.hot.accept(177, function () {
	    console.info('[HMR] Patching Route');
	
	    Route = __webpack_require__(177).default;
	  });
	}

/***/ }

};
//# sourceMappingURL=0.8e52f6072fffc37802c9.hot-update.js.map