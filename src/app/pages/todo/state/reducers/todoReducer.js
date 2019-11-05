import { initialState } from '../initialState';
import {
  ADD_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from '../actions/actionTypes';
import { createReducer } from '../../../../../store/rootReducer/utils';

const actionHandlers = {
  [ADD_TODO]: (state, action) =>
    [
      ...state,
      {
        id: action.id,
        completed: false,
        editMode: false,
      },
    ].reverse(),
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
  [DELETE_TODO]: (state, action) => state.filter(todo => todo.id !== action),
};

export const todoReducer = createReducer(actionHandlers, initialState.todos);
