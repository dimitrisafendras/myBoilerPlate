import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { useStyles } from './styles';

// TODO: refactor
export const MainButton = ({
  id,
  text,
  onClick,
  variant,
  color,
  className,
  ...rest
}) => {
  const { mainButton } = useStyles();
  return (
    <Button
      id={id}
      onClick={onClick}
      className={`${mainButton} ${className}`}
      variant={variant}
      color={color}
      {...rest}
    >
      {text}
    </Button>
  );
};

MainButton.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

// See material UI docs for variant and color props
MainButton.defaultProps = {
  variant: 'contained',
  color: 'primary',
};
