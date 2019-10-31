import React from 'react';
import PropTypes from 'prop-types';
import {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
} from './state/actions/actionTypes';
import { ConnectedAddTodo, FiltersBar, TodoList } from './components';

const filters = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED];

export const Todo = ({ todos, toggleTodo, setVisibilityFilter }) => (
  <>
    <ConnectedAddTodo />
    <FiltersBar filters={filters} setFilterCallback={setVisibilityFilter} />
    <TodoList todos={todos} toggleTodoCallback={toggleTodo} />
  </>
);

Todo.propTypes = {
  todos: PropTypes.any,
  toggleTodo: PropTypes.func,
  setVisibilityFilter: PropTypes.func,
};

Todo.defaultProps = {
  todos: [],
};
