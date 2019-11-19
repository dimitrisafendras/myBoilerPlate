import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { map } from 'lodash-es';
import uuid from 'uuid';
import { theme } from '../theme';
import { AppLayout } from './components/appLayout';
import { store } from '../store';
import Modal from './genericComponents/organisms/modal/Modal'; // FIXME
import { routes } from './utils';

export const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Modal />
      <Router>
        <AppLayout>
          {map(routes, (page, url) => (
            <Route
              exact
              path={url}
              component={page.component}
              key={uuid.v1()}
            />
          ))}
        </AppLayout>
      </Router>
    </ThemeProvider>
  </Provider>
);
