import { combineReducers } from 'redux';
import { breweriesReducer } from '../../app/pages/home/homeStore';

export const rootReducer = combineReducers({
  breweriesState: breweriesReducer,
});
