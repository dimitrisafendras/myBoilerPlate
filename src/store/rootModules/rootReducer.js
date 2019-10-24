import { combineReducers } from 'redux';
import { breweriesReducer } from '../../app/pages/home/homeStore/reducers';

export const rootReducer = combineReducers({
  breweriesState: breweriesReducer,
});
