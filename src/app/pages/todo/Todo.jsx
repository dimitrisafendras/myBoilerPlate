import { map } from 'lodash-es';
import React from 'react';
import PropTypes from 'prop-types';
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
          key={todo.id}
          {...todo}
          toggleTodo={() => toggleTodo(todo.id)}
          editTodo={event => editTodo(todo.id, event)}
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
