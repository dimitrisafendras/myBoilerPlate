import { camelCase, reduce } from 'lodash-es';
import { createAction } from 'redux-actions';
import { initialState } from '../modules/reducers/initialState';

export const createActionType = actionsTypes =>
  reduce(
    actionsTypes,
    (accumulatedActionTypes, actionType) => ({
      ...accumulatedActionTypes,
      [actionType]: actionType,
    }),
    {}
  );

// Use only to create actions without payload. For actions with payload use createActions from redux-actions
export const createDummyActions = actionTypes =>
  reduce(
    actionTypes,
    (accumulatedActions, actionType) => ({
      ...accumulatedActions,
      [camelCase(actionType)]: createAction(actionType),
    }),
    {}
  );

export const createReducer = actionHandlers => (
  state = initialState,
  { type, payload }
) => (actionHandlers[type] ? actionHandlers[type](state, payload) : state);
