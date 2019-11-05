import { createActionTypes } from '../../../../../store/rootReducer/utils';

const ACTION_TYPES = [
  'ADD_TODO',
  'SET_VISIBILITY_FILTER',
  'TOGGLE_TODO',
  'EDIT_TODO',
  'DELETE_TODO',
  'SHOW_ALL',
  'SHOW_COMPLETED',
  'SHOW_ACTIVE',
];

export const {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  EDIT_TODO,
  DELETE_TODO,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} = createActionTypes(ACTION_TYPES);
