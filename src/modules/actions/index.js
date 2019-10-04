import { dummyActionsCreator } from '../../utils';
import { TEST, EPIC_TEST } from './actionTypes';

const actionTypes = [TEST, EPIC_TEST];

export const { test, epicTest } = dummyActionsCreator(actionTypes);
