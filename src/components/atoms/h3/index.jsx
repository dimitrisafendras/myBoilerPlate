import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

export const H3 = ({ text }) => {
  const { h3 } = useStyles();
  return (
    <Typography variant="h3" className={h3}>
      {text}
    </Typography>
  );
};

H3.propTypes = {
  text: PropTypes.string,
};
