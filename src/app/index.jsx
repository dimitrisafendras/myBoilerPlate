import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Cell } from 'styled-css-grid';
import { map } from 'lodash-es';
import uuid from 'uuid';
import { AboutUs, ConnectedHome } from '../components/pages';
import { theme } from '../theme';
import { AppLayout } from '../components/templates';
import { Footer, Header } from '../components/organisms';
import { store } from '../store';
import { useStyles } from './styles';

const routes = {
  '/': ConnectedHome,
  '/about': AboutUs,
};

export const App = () => {
  const { app } = useStyles();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AppLayout>
            <Cell area="header" className="Header">
              <Header />
            </Cell>
            <Cell area="main" className={app}>
              {map(routes, (component, route) => (
                <Route
                  exact
                  path={route}
                  component={component}
                  key={uuid.v1()}
                />
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
};
