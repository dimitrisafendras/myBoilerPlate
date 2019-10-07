import { createActionType } from '../../utils';

const ACTION_TYPES = ['TEST', 'EPIC_TEST'];

export const { TEST, EPIC_TEST } = createActionType(ACTION_TYPES);
