import { initialState } from './initialState';
import { TEST } from '../actions/actionTypes';
import { reducerCreator } from '../../utils';

const actionHandlers = {
  [TEST]: () => initialState,
};

export const testReducer = reducerCreator(actionHandlers);
