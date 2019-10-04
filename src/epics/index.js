import { combineEpics } from 'redux-observable';
import { testEpics } from './testEpic';

export const rootEpic = combineEpics(testEpics);
