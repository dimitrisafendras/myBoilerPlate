import React from 'react';
import { Typography } from '@material-ui/core';

export const H3 = ({ id, children }) => (
  <Typography id={id} variant="h3">
    {children}
  </Typography>
);
