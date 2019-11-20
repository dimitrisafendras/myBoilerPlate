import { createNormalActions } from '../../../../../../store/rootReducer/utils';
import { SHOW_MODAL, HIDE_MODAL, DEFAULT_ACTION } from './actionTypes';

const normalActionTypes = [SHOW_MODAL, HIDE_MODAL, DEFAULT_ACTION];

export const { showModal, hideModal, defaultAction } = createNormalActions(
  normalActionTypes
);
