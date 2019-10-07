import React from 'react';
import { Typography } from '@material-ui/core';
import { styles } from './styles';

export const H4 = ({ children }) => {
  const { h4 } = styles();
  return (
    <Typography variant="h4" className={h4}>
      {children}
    </Typography>
  );
};
