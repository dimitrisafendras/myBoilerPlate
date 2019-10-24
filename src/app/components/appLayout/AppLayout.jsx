import React from 'react';
import PropTypes from 'prop-types';
import { Cell, Grid } from 'styled-css-grid';
import { useStyles } from './styles';
import { Header } from '../header';
import { Footer } from '../footer';

export const AppLayout = ({ children }) => {
  const { appLayout, main } = useStyles();
  return (
    <Grid
      id="layout"
      columns="auto"
      rows="40px auto 40px"
      areas={['header', 'main', 'footer']}
      className={appLayout}
    >
      <Cell area="header" className="Header">
        <Header />
      </Cell>
      <Cell area="main" className={main}>
        {children}
      </Cell>
      <Cell area="footer" className="Footer">
        <Footer />
      </Cell>
    </Grid>
  );
};

AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
