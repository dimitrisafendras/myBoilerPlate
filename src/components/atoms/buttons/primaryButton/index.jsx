import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { useStyles } from './styles';

export const PrimaryButton = ({ id, text, onClick }) => {
  const { primaryButton } = useStyles();
  return (
    <Button
      id={id}
      onClick={onClick}
      className={primaryButton}
      variant="contained"
      color="primary"
    >
      {text}
    </Button>
  );
};

PrimaryButton.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};
