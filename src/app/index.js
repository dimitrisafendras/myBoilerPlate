import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AboutUs, ConnectedHome } from '../components/pages';
import { theme } from '../theme';

export const App = ({ store }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Route path="/home" component={ConnectedHome} />
        <Route path="/about" component={AboutUs} />
      </Router>
    </ThemeProvider>
  </Provider>
);

App.propTypes = {
  store: PropTypes.any,
};
