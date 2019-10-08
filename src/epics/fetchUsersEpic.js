import { map, mergeMap } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import { FETCH_USERS } from '../modules/actions/actionTypes';
import { storeUsers } from '../modules/actions';
import { fetchFromSource } from '../apis';

const fetchUsersEpic = action$ =>
  action$.pipe(
    ofType(FETCH_USERS),
    mergeMap(() => fetchFromSource()),
    map(users => storeUsers(users.data))
  );

export const usersEpic = combineEpics(fetchUsersEpic);
