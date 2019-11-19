import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

export const Modal = ({ showModal }) => {
  const { modal } = useStyles();
  return <div className={modal} />;
};

Modal.propTypes = {
  showModal: PropTypes.bool,
};

Modal.defaultProps = {};
