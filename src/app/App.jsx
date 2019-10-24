import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { map } from 'lodash-es';
import uuid from 'uuid';
import { AboutUs, ConnectedHome } from './pages';
import { theme } from '../theme';
import { AppLayout } from './appComponents/appLayout';
import { store } from '../store';

const routes = {
  '/': ConnectedHome,
  '/about': AboutUs,
};

export const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppLayout>
          {map(routes, (component, route) => (
            <Route exact path={route} component={component} key={uuid.v1()} />
          ))}
        </AppLayout>
      </Router>
    </ThemeProvider>
  </Provider>
);
