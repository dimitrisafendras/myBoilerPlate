import { camelCase } from 'lodash-es';
import { createAction } from 'redux-actions';
import { initialState } from '../../../app/pages/home/homeStore/initialState';

// creates a collection of action types eliminating the need to reuse the 'create' logic
export const createActionTypes = actionsTypes =>
  actionsTypes.reduce(
    (accumulatedActionTypes, actionType) => ({
      ...accumulatedActionTypes,
      [actionType]: actionType,
    }),
    {}
  );

// Use only to create actions without special payload transformation.
// For actions with payload transformations use createActions from redux-actions
export const createNormalActions = actionTypes =>
  actionTypes.reduce(
    (accumulatedActions, actionType) => ({
      ...accumulatedActions,
      [camelCase(actionType)]: createAction(actionType),
    }),
    {}
  );

// this function exists in order to replace the classic switch statement
// in a reducer and eliminate the duplication of that logic
// include it in every reducer file you create
export const createReducer = actionHandlers => (
  state = initialState,
  { type, payload }
) => (actionHandlers[type] ? actionHandlers[type](state, payload) : state);
