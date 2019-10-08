import { combineReducers } from 'redux';
import { breweriesReducer } from './breweriesReducer';

const rootReducer = combineReducers({
  breweriesState: breweriesReducer,
});

export default rootReducer;
