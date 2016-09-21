import express from 'express';
import React from 'react';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import './models/tvshow';
import TVShowCtrl from './controllers/tvshows';
import { match, RoutingContext } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

import configureStore from './store/configure-store';
import HtmlContainer from './layout/html';
import RouteContainer from './route';
import { Meta } from './config';

let Html = HtmlContainer;
let Route = RouteContainer;

const app      = express();
const hostname = 'localhost';
const port     = 3007;

function getMarkup(store, render_props, metadata) {
  
  const component = (
    <Provider store={store} key="provider">
      <RoutingContext {...render_props} />
    </Provider>
  );

  return '<!doctype html>\n' + renderToString(
    <Html
      metadata  = {metadata}
      component = {component}
      script    = {`http://localhost:3006/client/index.js`}
      state     = {store.getState()}

    />
  );
}

app.use('/client', express.static('client'));
app.use('/static', express.static('public'));



// Connection to DB

mongoose.connect('mongodb://localhost/tvshows', function (err, res) {
  if (err) {
    throw err;
  };
  console.log('Connected to Database');
});

// Middlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// API routes
var tvshows = express.Router();

tvshows.route('/tvshows')
  .get(TVShowCtrl.findAllTVShows)
  .post(TVShowCtrl.addTVShow);

tvshows.route('/tvshows/:id')
  .get(TVShowCtrl.findById)
  .put(TVShowCtrl.updateTVShow)
  .delete(TVShowCtrl.deleteTVShow);

app.use('/api', tvshows);


// WEB
app.get('/', function (req, res) {
  match({
    location: req.url,
    routes: Route
  }, function (error, redirection_location, render_props) {
    if (error) {
      console.error('Router error:', error);

      res.status(500).send(error.message);
    } else if (redirection_location) {
      res.redirect(302, redirectLocation.pathname + redirection_location.search);
    } else if (render_props) {

      const store = configureStore({});

      res.status(200).send(getMarkup(store, render_props, Meta[req.url] ));
    } else {
      res.status(400).send('Not Found');
    }
  });
});

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Open up https://${hostname}:${port}/ in your browser.`);
  }
});


if (module.hot) {
  console.info('[HMR] Server is listening…');

  module.hot.accept('./layout/html', function () {
    console.info('[HMR] Patching Html');

    Html = require('./layout/html').default;
  });

  module.hot.accept('./route', function () {
    console.info('[HMR] Patching Route');

    Route = require('./route').default;
  });
}
