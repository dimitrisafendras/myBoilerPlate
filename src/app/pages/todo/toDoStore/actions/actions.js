import { createActions } from 'redux-actions';
import { createNormalActions } from '../../../../../store/rootReducer/utils';
import {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
} from './actionTypes';

const normalActionTypes = [
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
];

export const {
  setVisibilityFilter,
  toggleTodo,
  showActive,
  showAll,
  showCompleted,
} = createNormalActions(normalActionTypes);

let nextTodoId = 0;
export const { addTodo } = createActions({
  [ADD_TODO]: text => ({
    // eslint-disable-next-line no-plusplus
    id: nextTodoId++,
    text,
  }),
});
