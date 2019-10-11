import { combineEpics } from 'redux-observable';
import { breweriesEpic } from './fetchBreweriesEpic';
import { todoEpic } from './todoEpic';

export const rootEpic = combineEpics(breweriesEpic, todoEpic);
