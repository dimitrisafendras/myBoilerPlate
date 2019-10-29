import { combineReducers } from 'redux';
import { breweriesReducer } from '../../app/pages/home/homeStore';
import { todoReducers } from '../../app/pages/todo/toDoStore/reducers';

export const rootReducer = combineReducers({
  homeStore: breweriesReducer,
  todoStore: todoReducers,
});
