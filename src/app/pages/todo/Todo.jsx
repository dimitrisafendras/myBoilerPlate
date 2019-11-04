import { map } from 'lodash-es';
import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { AddTodo, FiltersBar, TodoCard, TodoList } from './components';
import { filters } from './configs';

export const Todo = ({
  todos,
  toggleTodo,
  setVisibilityFilter,
  addTodo,
  editTodo,
}) => (
  <>
    <AddTodo addTodo={addTodo} />
    <FiltersBar filters={filters} setFilterCallback={setVisibilityFilter} />
    <TodoList>
      {map(todos, todo => (
        <TodoCard
          key={uuid.v1()}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
          editTodo={() => editTodo(todo.id)}
        />
      ))}
    </TodoList>
  </>
);

Todo.propTypes = {
  todos: PropTypes.any,
  toggleTodo: PropTypes.func,
  setVisibilityFilter: PropTypes.func,
  addTodo: PropTypes.func,
  editTodo: PropTypes.func,
};

Todo.defaultProps = {
  todos: [],
};
