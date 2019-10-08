import { combineEpics } from 'redux-observable';
import { usersEpic } from './fetchUsersEpic';

export const rootEpic = combineEpics(usersEpic);
