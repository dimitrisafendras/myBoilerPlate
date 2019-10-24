import { createEpicMiddleware } from 'redux-observable';
import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './rootModules/rootReducer';
import { rootEpic } from './rootEpics';

const epicMiddleware = createEpicMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);
