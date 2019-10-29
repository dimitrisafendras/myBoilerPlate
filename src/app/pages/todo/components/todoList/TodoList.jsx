import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../todo';

export const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {console.log('todos', todos)}
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
  todos: [],
};
