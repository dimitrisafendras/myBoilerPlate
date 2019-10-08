import { createNormalActions } from '../../utils';
import { FETCH_BREWERIES, STORE_BREWERIES } from './actionTypes';

const actionTypes = [FETCH_BREWERIES, STORE_BREWERIES];

export const { fetchBreweries, storeBreweries } = createNormalActions(
  actionTypes
);
