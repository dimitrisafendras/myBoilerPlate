import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash-es';
import uuid from 'uuid';
import {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
} from './state/actions/actionTypes';
import { ConnectedAddTodo, TodoCard } from './components';
import { ConnectedLink } from './components/link/ConnectedLink';

export const Todo = ({ todos, toggleTodo }) => (
  <>
    <ConnectedAddTodo />
    <span>Show: </span>
    <ConnectedLink filter={SHOW_ALL}>All</ConnectedLink>
    <ConnectedLink filter={SHOW_ACTIVE}>Active</ConnectedLink>
    <ConnectedLink filter={SHOW_COMPLETED}>Completed</ConnectedLink>
    <ul>
      {map(todos, todo => (
        <TodoCard
          key={uuid.v1()}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      ))}
    </ul>
  </>
);

Todo.propTypes = {
  todos: PropTypes.any,
  toggleTodo: PropTypes.func,
};

Todo.defaultProps = {
  todos: [],
};
