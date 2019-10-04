import { camelCase, reduce } from 'lodash-es';
import { createAction } from 'redux-actions';

export const actionTypeCreator = actionsTypes =>
  reduce(actionsTypes, (result, value) => ({ ...result, [value]: value }), {});

// Use only to create actions without payload. For actions with payload use createActions from redux-actions
export const dummyActionsCreator = actionTypes =>
  reduce(
    actionTypes,
    (result, value) => {
      return { ...result, [camelCase(value)]: createAction(value) };
    },
    {}
  );
