import React from 'react';
import PropTypes from 'prop-types';
import { AddTodo, FiltersBar, TodoList } from './components';
import { filters } from './utils';

export const Todo = ({ todos, toggleTodo, setVisibilityFilter, addTodo }) => (
  <>
    <FiltersBar filters={filters} setFilterCallback={setVisibilityFilter} />
    <AddTodo addTodo={addTodo} />
    <TodoList todos={todos} toggleTodoCallback={toggleTodo} />
  </>
);

Todo.propTypes = {
  todos: PropTypes.any,
  toggleTodo: PropTypes.func,
  setVisibilityFilter: PropTypes.func,
  addTodo: PropTypes.func,
};

Todo.defaultProps = {
  todos: [],
};
