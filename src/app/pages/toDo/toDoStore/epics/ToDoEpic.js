import { map, mergeMap } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import { fetchBreweries } from '../../../../../apis';
import { FETCH_BREWERIES } from '../actions/actionTypes';
import { storeBreweries } from '../actions';

const toDoEpic = action$ =>
  action$.pipe(
    ofType(FETCH_BREWERIES),
    mergeMap(() => fetchBreweries()),
    map(breweries => storeBreweries(breweries.data))
  );

export const breweriesEpic = combineEpics(toDoEpic);
