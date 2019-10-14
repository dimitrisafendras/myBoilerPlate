import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

export const H4 = ({ text }) => {
  const { h4 } = useStyles();
  return (
    <Typography variant="h4" className={h4}>
      {text}
    </Typography>
  );
};

H4.propTypes = {
  text: PropTypes.string,
};
