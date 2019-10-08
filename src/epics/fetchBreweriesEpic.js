import { map, mergeMap } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import { FETCH_BREWERIES } from '../modules/actions/actionTypes';
import { storeBreweries } from '../modules/actions';
import { fetchBreweries } from '../apis';

const fetchBreweriesEpic = action$ =>
  action$.pipe(
    ofType(FETCH_BREWERIES),
    mergeMap(() => fetchBreweries()),
    map(breweries => storeBreweries(breweries.data))
  );

export const breweriesEpic = combineEpics(fetchBreweriesEpic);
