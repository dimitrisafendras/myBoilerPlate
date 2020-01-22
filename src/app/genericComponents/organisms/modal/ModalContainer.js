import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal } from './Modal';
import { modalsConfig } from './modalsConfig';
import { hideModal } from './state/actions';

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

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideModal: bindActionCreators(hideModal, dispatch),

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
});

export const ConnectedModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
