import { actionTypeCreator } from '../../utils';

const ACTION_TYPES = ['TEST', 'EPIC_TEST'];

export const { TEST, EPIC_TEST } = actionTypeCreator(ACTION_TYPES);
