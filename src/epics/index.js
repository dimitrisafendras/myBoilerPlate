import { combineEpics } from 'redux-observable';
import { breweriesEpic } from './fetchBreweriesEpic';

export const rootEpic = combineEpics(breweriesEpic);
