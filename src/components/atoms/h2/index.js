import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

export const H2 = ({ children }) => {
  const { h2 } = useStyles();
  return (
    <Typography variant="h2" className={h2}>
      {children}
    </Typography>
  );
};
