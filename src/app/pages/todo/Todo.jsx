import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash-es';
import uuid from 'uuid';
import { MainButton, Text } from '../../genericComponents';
import {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
} from './state/actions/actionTypes';
import { ConnectedAddTodo, TodoCard } from './components';

const filters = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED];

export const Todo = ({ todos, toggleTodo, setVisibilityFilter }) => (
  <>
    <ConnectedAddTodo />
    <Text text="Show:" />
    {filters.map(filter => (
      <MainButton
        onClick={() => setVisibilityFilter(filter)}
        text={filter}
        key={uuid.v1()}
      />
    ))}
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
  setVisibilityFilter: PropTypes.func,
};

Todo.defaultProps = {
  todos: [],
};
