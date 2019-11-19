import { connect } from 'react-redux';
import Modal from './Modal';
import { modalsConfig } from './modalsConfig';

const mapStateToProps = state => {
  const { modalId } = state.app.modal;
  const { title, texts, actions } = modalsConfig(modalId);

  return {
    loading: state.app.loading,
    title,
    texts,
    actions,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { actions } = modalsConfig(ownProps.modalId);

  const reducedActions = actions.reduce(
    (accumulatedActions, { action }, index) => ({
      ...accumulatedActions,
      [`action${index}`]: () => dispatch(action()),
    }),
    {}
  );

  return {
    ...reducedActions,
  };
};

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

export default ModalContainer;
