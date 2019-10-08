import { initialState } from './initialState';
import { STORE_USERS } from '../actions/actionTypes';
import { createReducer } from '../../utils';

const actionHandlers = {
  [STORE_USERS]: (state, users) => ({ ...state, users }),
};

export const usersReducer = createReducer(actionHandlers);
