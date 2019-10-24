import { combineEpics } from 'redux-observable';
import { breweriesEpic } from '../../app/pages/home/homeStore';

export const rootEpic = combineEpics(breweriesEpic);
