import { map } from 'lodash-es';
import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { TodoCard } from '../todoCard';
import { useStyles } from './styles';

export const TodoList = ({ todos, toggleTodoCallback }) => {
  const { todoList } = useStyles();
  return (
    <>
      {map(todos, todo => (
        <TodoCard
          key={uuid.v1()}
          {...todo}
          onClick={() => toggleTodoCallback(todo.id)}
        />
      ))}
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.any,
};

TodoList.defaultProps = {};
