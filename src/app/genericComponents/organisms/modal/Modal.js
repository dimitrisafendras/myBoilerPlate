import React from 'react';
import PropTypes from 'prop-types';
import { MainButton } from '../../atoms/buttons';
import { useStyles } from './styles';

export const Modal = ({ showModal, hideModal }) => {
  const { modal, innerContainer } = useStyles();

  return showModal ? (
    <div className={modal}>
      <div className={innerContainer}>
        <MainButton onClick={hideModal} text="Hide" />
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  showModal: PropTypes.bool,
};

Modal.defaultProps = {};
