import { map } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import { TEST } from '../modules/actions/actionTypes';
import { epicTest } from '../modules/actions';

const testEpic = action$ =>
  action$.pipe(
    ofType(TEST),
    map(() => epicTest())
  );

export const testEpics = combineEpics(testEpic);
