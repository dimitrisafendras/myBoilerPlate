import { createNormalActions } from '../../utils';
import {
  FETCH_BREWERIES,
  STORE_BREWERIES,
  DELETE_BREWERIES,
} from './actionTypes';

const normalActionTypes = [FETCH_BREWERIES, STORE_BREWERIES, DELETE_BREWERIES];

export const {
  fetchBreweries,
  storeBreweries,
  deleteBreweries,
} = createNormalActions(normalActionTypes);
