import { combineReducers } from 'redux';
import { breweriesReducer } from '../../app/pages/home/homeStore';
import {
  todoReducer,
  visibilityReducer,
} from '../../app/pages/todo/toDoStore/reducers';

export const rootReducer = combineReducers({
  homeStore: breweriesReducer,
  todoStore: todoReducer,
  todoVisibility: visibilityReducer,
});
