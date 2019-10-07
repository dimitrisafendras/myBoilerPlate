import React from 'react';
import { Typography } from '@material-ui/core';
import { styles } from './styles';

export const H3 = ({ children }) => {
  const { h3 } = styles();
  return (
    <Typography variant="h3" className={h3}>
      {children}
    </Typography>
  );
};
