import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

export const H2 = ({ text }) => {
  const { h2 } = useStyles();
  return (
    <Typography variant="h2" className={h2}>
      {text}
    </Typography>
  );
};

H2.propTypes = {
  text: PropTypes.string,
};
