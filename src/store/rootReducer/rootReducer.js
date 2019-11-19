import { combineReducers } from 'redux';
import { modalReducer } from '../../app/genericComponents/organisms/modal/state/reducers';
import { breweriesReducer } from '../../app/pages/home/state';
import { todoReducers } from '../../app/pages/todo/state';

export const rootReducer = combineReducers({
  homeState: breweriesReducer,
  todoState: todoReducers,
  modalState: modalReducer,
});
