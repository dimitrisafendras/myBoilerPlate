import { createAction } from 'redux-actions';
import { TEST, EPIC_TEST } from './actionTypes';

export const test = createAction(TEST);
export const epicTest = createAction(EPIC_TEST);
