import React from 'react';

import { IndexRoute, Route } from 'react-router';

import Layout from 'layout';

import CounterView from 'view/counter';
import Home from 'view/home';
import NotFound from 'view/not-found';
import Login from 'view/login';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />

    <Route path="/contador" component={CounterView} />
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFound} />
  </Route>
);
