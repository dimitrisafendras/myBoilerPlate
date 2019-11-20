import { createReducer } from '../../../../../../store/rootReducer/utils';
import { HIDE_MODAL, SHOW_MODAL, DEFAULT_ACTION } from '../actions/actionTypes';
import { initialState } from '../initialState';

const actionHandlers = {
  [SHOW_MODAL]: (state, action) => ({ ...state, showModal: true }),
  [HIDE_MODAL]: (state, action) => ({ ...state, showModal: false }),
  [DEFAULT_ACTION]: state => state,
};

export const modalReducer = createReducer(actionHandlers, initialState);
