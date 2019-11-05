import { initialState } from '../initialState';
import {
  ADD_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  STOP_EDITING_TODO,
} from '../actions/actionTypes';
import { createReducer } from '../../../../../store/rootReducer/utils';

const actionHandlers = {
  [ADD_TODO]: (state, action) => [
    ...state,
    {
      id: action.id,
      completed: false,
      editMode: false,
    },
  ],
  [TOGGLE_TODO]: (state, action) =>
    state.map(todo =>
      todo.id === action ? { ...todo, completed: !todo.completed } : todo
    ),
  [EDIT_TODO]: (state, action) =>
    state.map(todo =>
      todo.id === action.id
        ? { ...todo, text: action.text, editMode: true }
        : todo
    ),
  [STOP_EDITING_TODO]: (state, action) =>
    state.map(todo =>
      todo.id === action ? { ...todo, editMode: false } : todo
    ),
};

export const todoReducer = createReducer(actionHandlers, initialState.todos);
