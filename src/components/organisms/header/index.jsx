import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { useStyles } from './styles';

export const Header = () => {
  const { header } = useStyles();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      className={header}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </Box>
  );
};
