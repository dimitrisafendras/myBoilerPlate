import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash-es';
import uuid from 'uuid';
import { Todo } from '../todo';

export const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {map(todos, todo => (
      <Todo key={uuid.v1()} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.any,
  toggleTodo: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
};
