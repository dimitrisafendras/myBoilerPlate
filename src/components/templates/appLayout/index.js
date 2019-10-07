import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'styled-css-grid';
import { styles } from './styles';

export const AppLayout = ({ children }) => {
  const { appLayout } = styles();
  return (
    <Grid
      id="layout"
      columns="100px auto auto 100px"
      rows="40px auto 40px"
      areas={[
        'header header header header',
        'main main main main',
        'footer footer footer footer',
      ]}
      className={appLayout}
    >
      {children}
    </Grid>
  );
};

AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
