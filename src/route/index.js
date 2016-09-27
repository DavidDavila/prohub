import React from 'react';

import { IndexRoute, Route } from 'react-router';

import Layout from 'layout';

import Admin from 'view/admin';
import Home from 'view/home';
import NotFound from 'view/not-found';

import ListProjects from 'component/listProjects/';
import NewProject from 'component/newProject/';


export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />		
    <Route path="/admin" component={Admin}>
      <IndexRoute component={ListProjects} />
      <Route path="new-project" component={NewProject} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);
