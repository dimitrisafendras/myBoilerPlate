import { map } from 'lodash-es';
import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Masonry from 'react-masonry-component';
import { TodoCard } from '../todoCard';
import { useStyles } from './styles';

const masonryOptions = {
  transitionDuration: 0,
};

export const TodoList = ({ todos, toggleTodoCallback }) => {
  const { todoList } = useStyles();
  return (
    <Masonry options={masonryOptions}>
      {map(todos, todo => (
        <TodoCard
          key={uuid.v1()}
          {...todo}
          onClick={() => toggleTodoCallback(todo.id)}
        />
      ))}
    </Masonry>
  );
};

TodoList.propTypes = {
  todos: PropTypes.any,
  toggleTodoCallback: PropTypes.any,
};

TodoList.defaultProps = {};
