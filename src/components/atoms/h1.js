import React from 'react';
import { Typography } from '@material-ui/core';

export const H1 = ({ id, children }) => (
  <Typography id={id} variant="h1">
    {children}
  </Typography>
);
