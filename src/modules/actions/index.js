import { createActions } from 'redux-actions';
import { createNormalActions } from '../utils';

import {
  FETCH_BREWERIES,
  STORE_BREWERIES,
  DELETE_BREWERIES,
  ADD_TASK,
  TASK_ADDED,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETE_TASK,
} from './actionTypes';

const normalActionTypes = [
  FETCH_BREWERIES,
  STORE_BREWERIES,
  DELETE_BREWERIES,
  ADD_TASK,
  TASK_ADDED,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETE_TASK,
];

export const {
  fetchBreweries,
  storeBreweries,
  deleteBreweries,
  deleteTask,
  editTask,
  completeTask,
  taskAdded,
} = createNormalActions(normalActionTypes);

let nextTodoId = 0;
export const { addTask } = createActions({
  [ADD_TASK]: () => ({
    id: nextTodoId++,
  }),
});
