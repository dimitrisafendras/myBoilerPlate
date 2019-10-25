import React from 'react';
import PropTypes from 'prop-types';
import { Cell, Grid } from 'styled-css-grid';
import { useStyles } from './styles';
import { Header, Footer } from './components';

export const AppLayout = ({ children }) => {
  const { appLayout, header, main, footer } = useStyles();
  return (
    <Grid
      id="layout"
      columns="auto"
      rows="40px auto 40px"
      areas={['header', 'main', 'footer']}
      className={appLayout}
    >
      <Cell area="header" className={header}>
        <Header />
      </Cell>
      <Cell area="main" className={main}>
        {children}
      </Cell>
      <Cell area="footer" className={footer}>
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
