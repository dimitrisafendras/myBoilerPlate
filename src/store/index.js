import { createEpicMiddleware } from 'redux-observable';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../modules/reducers';
import { rootEpic } from '../epics';

const epicMiddleware = createEpicMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);
