import { createReducer } from '../../../../../store/rootReducer/utils';
import { SET_VISIBILITY_FILTER } from '../actions/actionTypes';
import { initialState } from '../initialState';

const actionHandlers = {
  [SET_VISIBILITY_FILTER]: (state, action) => action,
};

export const visibilityReducer = createReducer(
  actionHandlers,
  initialState.visibility
);
