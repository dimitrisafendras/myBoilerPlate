import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

export const H1 = ({ text }) => {
  const { h1 } = useStyles();
  return (
    <Typography variant="h1" className={h1}>
      {text}
    </Typography>
  );
};