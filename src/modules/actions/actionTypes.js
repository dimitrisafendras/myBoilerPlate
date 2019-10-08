import { createActionType } from '../../utils';

const ACTION_TYPES = ['FETCH_BREWERIES', 'STORE_BREWERIES'];

export const { FETCH_BREWERIES, STORE_BREWERIES } = createActionType(
  ACTION_TYPES
);
