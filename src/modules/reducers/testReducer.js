import { initialState } from './initialState';
import { TEST } from '../actions/actionTypes';
import { createReducer } from '../../utils';

const actionHandlers = {
  [TEST]: () => initialState,
};

export const testReducer = createReducer(actionHandlers);
