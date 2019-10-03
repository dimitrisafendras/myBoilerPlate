import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AboutUs, Home } from '../components/pages';

export const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.any
};
