import { initialState } from './initialState';
import { TEST } from '../actions/actionTypes';

const actionHandlers = {
  [TEST]: () => initialState
};

// FIXME refactor extract
export const testReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const actionHandler = actionHandlers[type];

  return actionHandler ? actionHandler(state, payload) : state;
};
