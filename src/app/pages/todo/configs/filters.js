import {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
} from '../state/actions/actionTypes';

// TODO: extract to epics????
const filtersConfig = todos => ({
  [SHOW_ALL]: todos,
  [SHOW_COMPLETED]: todos && todos.filter(t => t.completed),
  [SHOW_ACTIVE]: todos && todos.filter(t => !t.completed),
});

export const filteredTodos = (todos, filter = SHOW_ALL) =>
  filtersConfig(todos)[filter];

export const filters = Object.keys(filtersConfig());
