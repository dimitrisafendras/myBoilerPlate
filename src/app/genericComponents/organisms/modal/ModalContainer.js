import { connect } from 'react-redux';
import { Modal } from './Modal';
import { modalsConfig } from './modalsConfig';

const mapStateToProps = ({ modalState }) => {
  const { showModal, modalId } = modalState;
  // const { title, texts, actions } = modalsConfig(modalId);

  return {
    // title,
    // texts,
    // actions,
    showModal,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // const { actions } = modalsConfig(ownProps.modalId);
  //
  // const reducedActions = actions.reduce(
  //   (accumulatedActions, { action }, index) => ({
  //     ...accumulatedActions,
  //     [`action${index}`]: () => dispatch(action()),
  //   }),
  //   {}
  // );
  //
  // return {
  //   ...reducedActions,
  // };
};

export const ConnectedModal = connect(
  mapStateToProps,
  null
)(Modal);
