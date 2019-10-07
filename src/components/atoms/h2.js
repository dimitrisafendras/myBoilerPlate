import React from 'react';
import { Typography } from '@material-ui/core';

export const H2 = ({ id, children }) => (
  <Typography id={id} variant="h2">
    {children}
  </Typography>
);
