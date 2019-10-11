import { combineReducers } from 'redux';
import { breweriesReducer } from './breweriesReducer';
import { toDoReducer } from './toDoReducer';

export const rootReducer = combineReducers({
  breweriesState: breweriesReducer,
  todoState: toDoReducer,
});
