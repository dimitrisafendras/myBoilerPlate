import { initialState } from '../initialState';
import { STORE_BREWERIES, DELETE_BREWERIES } from '../actions/actionTypes';
import { createReducer } from '../../../../../store/rootModules/utils';

const actionHandlers = {
  [STORE_BREWERIES]: (state, breweries) => ({ ...state, breweries }),
  [DELETE_BREWERIES]: () => initialState,
};

export const breweriesReducer = createReducer(actionHandlers);
