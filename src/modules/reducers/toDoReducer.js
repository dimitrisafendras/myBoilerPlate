import { find } from 'lodash-es';
import { initialState } from '../utils/initialState';
import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETE_TASK,
} from '../actions/actionTypes';
import { createReducer } from '../utils';

const actionHandlers = {
  [ADD_TASK]: (state, action) => addTask(state, action),
  [EDIT_TASK]: (state, action) => editTask(state, action),
};

const addTask = (state, action) => ({
  ...state,
  [`task-${[action.id]}`]: {
    id: action.id,
    editMode: false,
  },
});

const editTask = (state, action) => {
  console.log('>>>>', find(state, task => console.log('111', task)));
  return state;
};

export const toDoReducer = createReducer(actionHandlers);
