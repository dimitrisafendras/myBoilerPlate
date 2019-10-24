import { combineEpics } from 'redux-observable';
import { breweriesEpic } from '../../app/pages/home/homeStore/epics';

export const rootEpic = combineEpics(breweriesEpic);
