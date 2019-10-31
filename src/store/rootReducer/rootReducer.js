import { combineReducers } from 'redux';
import { breweriesReducer } from '../../app/pages/home/state';
import { todoReducers } from '../../app/pages/todo/state';

export const rootReducer = combineReducers({
  homeState: breweriesReducer,
  todoState: todoReducers,
});
