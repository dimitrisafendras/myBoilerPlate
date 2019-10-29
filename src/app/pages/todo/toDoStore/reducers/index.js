import { combineReducers } from 'redux';

import { todoReducer } from './todoReducer';
import { visibilityReducer } from './visibilityFilterReducer';

export const todoReducers = combineReducers({
  todos: todoReducer,
  visibility: visibilityReducer,
});
