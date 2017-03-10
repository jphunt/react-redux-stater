import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, hashHistory, IndexRedirect} from 'react-router';


ReactDom.render(
    <Router history={hashHistory}>
        <Route path={"/"} component={"App"}>
        </Route>
    </Router>
    , document.getElementById('root')
);