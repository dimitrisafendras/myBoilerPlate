import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AboutUs, ConnectedHome } from '../components/pages';

export const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Route path="/home" component={ConnectedHome} />
      <Route path="/about" component={AboutUs} />
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.any,
};
