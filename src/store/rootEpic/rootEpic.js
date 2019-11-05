import { combineEpics } from 'redux-observable';
import { breweriesEpic } from '../../app/pages/home/state';

export const rootEpic = combineEpics(breweriesEpic);
