import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

export const Text = ({ text, variant, ...rest }) => {
  const { textStyle } = useStyles();
  return (
    <Typography variant={variant} className={textStyle} {...rest}>
      {text}
    </Typography>
  );
};

Text.propTypes = {
  rest: PropTypes.any,
  text: PropTypes.string,
  variant: PropTypes.string,
};

Text.defaultProps = {
  variant: 'h4',
};
