import { createActionTypes } from '../../../../../store/rootReducer/utils';

const ACTION_TYPES = ['FETCH_BREWERIES', 'STORE_BREWERIES', 'DELETE_BREWERIES'];

export const {
  FETCH_BREWERIES,
  STORE_BREWERIES,
  DELETE_BREWERIES,
} = createActionTypes(ACTION_TYPES);
