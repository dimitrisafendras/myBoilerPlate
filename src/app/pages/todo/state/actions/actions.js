import { createActions } from 'redux-actions';
import { createNormalActions } from '../../../../../store/rootReducer/utils';
import {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  EDIT_TODO,
  STOP_EDITING_TODO,
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
} from './actionTypes';

const normalActionTypes = [
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  EDIT_TODO,
  STOP_EDITING_TODO,
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
];

export const {
  setVisibilityFilter,
  toggleTodo,
  editTodo,
  stopEditingTodo,
  showActive,
  showAll,
  showCompleted,
} = createNormalActions(normalActionTypes);

// TODO: initial ID based on last element id in TODOS list
let nextTodoId = 0;
export const { addTodo } = createActions({
  [ADD_TODO]: () => ({
    // eslint-disable-next-line no-plusplus
    id: nextTodoId++,
  }),
});
