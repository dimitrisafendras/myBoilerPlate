import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'styled-css-grid';

export const AppLayout = ({ children }) => (
  <Grid
    minHeight="100vh"
    id="layout"
    columns="100px auto auto 100px"
    rows="50px auto 40px"
    gap="14px 0"
    areas={[
      'header header header header',
      'main main main main',
      'footer footer footer footer',
    ]}
    className="AppLayout"
  >
    {children}
  </Grid>
);

AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
