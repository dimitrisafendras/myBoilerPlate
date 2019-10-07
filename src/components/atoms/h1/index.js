import React from 'react';
import { Typography } from '@material-ui/core';
import { styles } from './styles';

export const H1 = ({ children }) => {
  const { h1 } = styles();
  return (
    <Typography variant="h1" className={h1}>
      {children}
    </Typography>
  );
};
