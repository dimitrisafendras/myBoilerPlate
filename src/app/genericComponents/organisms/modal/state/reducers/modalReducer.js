// case types.SHOW_MODAL:
// // return {
// // 	...state,
// // 	modal: { ...action.content, showModal: true },
// // };
// // case types.HIDE_MODAL:
// // return {
// // 	...state,
// // 	modal: { ...action.content, showModal: false },
// // };

import { createReducer } from '../../../../../../store/rootReducer/utils';
import { HIDE_MODAL, SHOW_MODAL, DEFAULT_ACTION } from '../actions/actionTypes';
import { initialState } from '../initialState';

const actionHandlers = {
  [SHOW_MODAL]: (state, action) => state,
  [HIDE_MODAL]: (state, action) => state,
  [DEFAULT_ACTION]: state => state,
};

export const modalReducer = createReducer(actionHandlers, initialState);
