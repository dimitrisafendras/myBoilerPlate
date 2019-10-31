import { initialState } from '../initialState';
import { ADD_TODO, TOGGLE_TODO } from '../actions/actionTypes';
import { createReducer } from '../../../../../store/rootReducer/utils';

const actionHandlers = {
  [ADD_TODO]: (state, action) => [
    ...state,
    {
      id: action.id,
      text: action.text,
      completed: false,
    },
  ],
  [TOGGLE_TODO]: (state, action) =>
    state.map(todo =>
      todo.id === action ? { ...todo, completed: !todo.completed } : todo
    ),
};

export const todoReducer = createReducer(actionHandlers, initialState);
