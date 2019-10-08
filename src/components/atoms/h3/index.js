import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

export const H3 = ({ children }) => {
  const { h3 } = useStyles();
  return (
    <Typography variant="h3" className={h3}>
      {children}
    </Typography>
  );
};
