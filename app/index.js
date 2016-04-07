import React from 'react'
import ReactDOM from 'react-dom';
// import Relay from 'react-relay';
import { Router, Route, hashHistory } from 'react-router';
// import ReactRouterRelay from 'react-router-relay';
import App from './App'
import About from './views/about'
import user from './views/user'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/user" component={user}/>
    <Route path="/about" component={About}/>
  </Router>
  , document.getElementById('root')
);