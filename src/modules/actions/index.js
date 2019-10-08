import { createNormalActions } from '../../utils';
import {
  FETCH_BREWERIES,
  STORE_BREWERIES,
  DELETE_BREWERIES,
} from './actionTypes';

const actionTypes = [FETCH_BREWERIES, STORE_BREWERIES, DELETE_BREWERIES];

export const {
  fetchBreweries,
  storeBreweries,
  deleteBreweries,
} = createNormalActions(actionTypes);
