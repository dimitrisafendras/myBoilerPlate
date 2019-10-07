import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Cell } from 'styled-css-grid';
import { map } from 'lodash-es';
import uuid from 'uuid';
import { AboutUs, ConnectedHome } from '../components/pages';
import { theme } from '../theme';
import { AppLayout } from '../components/templates';
import { Footer, Header } from '../components/organisms';

const routes = {
  '/': ConnectedHome,
  '/about': AboutUs,
};

export const App = ({ store }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppLayout>
          <Cell area="header" className="Header">
            <Header />
          </Cell>
          <Cell area="main" className="Main">
            {map(routes, (component, route) => (
              <Route exact path={route} component={component} key={uuid.v1()} />
            ))}
          </Cell>
          <Cell area="footer" className="Footer">
            <Footer />
          </Cell>
        </AppLayout>
      </Router>
    </ThemeProvider>
  </Provider>
);

App.propTypes = {
  store: PropTypes.any,
};
