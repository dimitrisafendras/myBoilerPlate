import { createActions } from 'redux-actions';
import { createDummyActions } from '../../utils';
import { FETCH_USERS, STORE_USERS } from './actionTypes';

const actionTypes = [FETCH_USERS, STORE_USERS];

export const { fetchUsers } = createDummyActions(actionTypes);

export const { storeUsers } = createActions({
  STORE_USERS: users => users,
});
