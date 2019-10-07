import { map, mergeMap } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import { TEST } from '../modules/actions/actionTypes';
import { epicTest } from '../modules/actions';
import { fetchFromSource } from '../apis';

const testEpic = action$ =>
  action$.pipe(
    ofType(TEST),
    mergeMap(() => fetchFromSource()),
    map(data => {
      console.log('data', data);
      return epicTest();
    })
  );

export const testEpics = combineEpics(testEpic);
