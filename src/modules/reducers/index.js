import { combineReducers } from 'redux';
import { breweriesReducer } from './breweriesReducer';

export const rootReducer = combineReducers({
  breweriesState: breweriesReducer,
});
