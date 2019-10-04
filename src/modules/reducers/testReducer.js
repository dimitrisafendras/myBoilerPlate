import { initialState } from './initialState';
import { TEST } from '../actions/actionTypes';

const actionHandlers = {
  [TEST]: () => initialState
};

// FIXME refactor extract
export const testReducer = (state = initialState, { type, payload }) =>
  actionHandlers[type] ? actionHandlers[type](state, payload) : state;
