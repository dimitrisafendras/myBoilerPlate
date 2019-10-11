import { initialState } from './initialState';
import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETE_TASK,
} from '../actions/actionTypes';
import { createReducer } from '../utils';

const actionHandlers = {
  [ADD_TASK]: (state, task) => ({
    ...state,
    tasks: {
      byId: {
        id: task.id,
        text: task.text,
        editable: false,
      },
      allIds: [task.id],
    },
  }),
  [DELETE_TASK]: (state, task) => ({ ...state, task }),
  [EDIT_TASK]: (state, task) => ({ ...state, task }),
  [COMPLETE_TASK]: (state, task) => ({ ...state, task }),
};

export const toDoReducer = createReducer(actionHandlers);
