import { createActions } from 'redux-actions';
import { createDummyActions } from '../../utils';
import { FETCH_BREWERIES, STORE_BREWERIES } from './actionTypes';

const actionTypes = [FETCH_BREWERIES, STORE_BREWERIES];

export const { fetchBreweries } = createDummyActions(actionTypes);

export const { storeBreweries } = createActions({
  STORE_BREWERIES: breweries => breweries,
});
