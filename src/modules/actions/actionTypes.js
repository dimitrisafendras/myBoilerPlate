import { createActionType } from '../../utils';

const ACTION_TYPES = ['FETCH_USERS', 'STORE_USERS'];

export const { FETCH_USERS, STORE_USERS } = createActionType(ACTION_TYPES);
