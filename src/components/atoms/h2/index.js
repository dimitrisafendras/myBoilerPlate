import React from 'react';
import { Typography } from '@material-ui/core';
import { styles } from './styles';

export const H2 = ({ children }) => {
  const { h2 } = styles();
  return (
    <Typography variant="h2" className={h2}>
      {children}
    </Typography>
  );
};
