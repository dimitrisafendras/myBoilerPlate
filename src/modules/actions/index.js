import { createNormalActions } from '../../utils';
import {
  FETCH_BREWERIES,
  STORE_BREWERIES,
  DELETE_BREWERIES,
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETE_TASK,
} from './actionTypes';

const normalActionTypes = [
  FETCH_BREWERIES,
  STORE_BREWERIES,
  DELETE_BREWERIES,
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETE_TASK,
];

export const {
  fetchBreweries,
  storeBreweries,
  deleteBreweries,
  addTask,
  deleteTask,
  editTask,
  completeTask,
} = createNormalActions(normalActionTypes);
