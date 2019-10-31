import { createReducer } from '../../../../../store/rootReducer/utils';
import { SHOW_ALL, SET_VISIBILITY_FILTER } from '../actions/actionTypes';

const actionHandlers = {
  [SET_VISIBILITY_FILTER]: (state = SHOW_ALL, action) => ({ ...state, action }),
};

export const visibilityReducer = createReducer(actionHandlers);
