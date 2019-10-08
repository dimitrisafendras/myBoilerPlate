import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'styled-css-grid';
import { useStyles } from './styles';

export const AppLayout = ({ children }) => {
  const { appLayout } = useStyles();
  return (
    <Grid
      id="layout"
      columns="auto auto auto auto"
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
