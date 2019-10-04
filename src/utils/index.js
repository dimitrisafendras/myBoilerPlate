import { camelCase, reduce } from 'lodash-es';
import { createAction } from 'redux-actions';

import { initialState } from '../modules/reducers/initialState';

export const actionTypeCreator = actionsTypes =>
  reduce(actionsTypes, (result, value) => ({ ...result, [value]: value }), {});

// Use only to create actions without payload. For actions with payload use createActions from redux-actions
export const dummyActionsCreator = actionTypes =>
  reduce(
    actionTypes,
    (result, value) => ({ ...result, [camelCase(value)]: createAction(value) }),
    {}
  );

export const reducerCreator = actionHandlers => (
  state = initialState,
  { type, payload }
) => (actionHandlers[type] ? actionHandlers[type](state, payload) : state);
