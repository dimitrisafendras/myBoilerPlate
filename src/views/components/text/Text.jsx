import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { styles } from './styles';

export const Text = ({ text, variant }) => {
  const { textStyle } = styles();
  return (
    <Typography variant={variant} className={textStyle}>
      {text}
    </Typography>
  );
};

Text.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
};

Text.defaultProps = {
  variant: 'h4',
};
