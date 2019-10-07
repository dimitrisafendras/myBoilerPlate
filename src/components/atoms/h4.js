import React from 'react';
import { Typography } from '@material-ui/core';

export const H4 = ({ id, children }) => (
  <Typography id={id} variant="h4">
    {children}
  </Typography>
);
