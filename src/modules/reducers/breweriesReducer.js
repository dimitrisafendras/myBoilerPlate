import { initialState } from './initialState';
import { STORE_BREWERIES } from '../actions/actionTypes';
import { createReducer } from '../../utils';

const actionHandlers = {
  [STORE_BREWERIES]: (state, breweries) => ({ ...state, breweries }),
};

export const breweriesReducer = createReducer(actionHandlers);
