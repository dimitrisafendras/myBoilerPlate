import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

export const H1 = ({ text }) => {
  const { h1 } = useStyles();
  return (
    <Typography variant="h1" className={h1}>
      {text}
    </Typography>
  );
};

H1.propTypes = {
  text: PropTypes.string,
};
