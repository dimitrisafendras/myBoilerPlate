import { map, mergeMap } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import { ADD_TASK, TASK_ADDED } from '../modules/actions/actionTypes';
import { taskAdded, editTask } from '../modules/actions';

const addTaskEpic = action$ =>
  action$.pipe(
    ofType(ADD_TASK),
    map(({ payload }) => taskAdded(payload.id))
  );

const editTaskEpic = action$ =>
  action$.pipe(
    ofType(TASK_ADDED),
    map(({ payload }) => editTask(payload))
  );

export const todoEpic = combineEpics(addTaskEpic, editTaskEpic);
