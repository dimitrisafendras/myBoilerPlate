import React from 'react';
import { Cell, Grid } from 'styled-css-grid';
import { map } from 'lodash-es';
import PropTypes from 'prop-types';
import { AddTodo, FiltersBar, TodoCard, TodoList } from './components';
import { filters } from './configs';

export const Todo = ({
  todos,
  toggleTodo,
  setVisibilityFilter,
  addTodo,
  editTodo,
  deleteTodo,
}) => (
  <Grid
    id="layout"
    columns="auto"
    rows="auto auto auto"
    areas={['addBtn', 'filters', 'list']}
    gap="0"
    rowGap="10px"
  >
    <Cell are="filters" center>
      <FiltersBar filters={filters} setFilterCallback={setVisibilityFilter} />
    </Cell>
    <Cell area="addBtn" center>
      <AddTodo addTodo={addTodo} />
    </Cell>
    <Cell area="list" center>
      <TodoList>
        {map(todos, todo => (
          <TodoCard
            {...todo}
            key={todo.id}
            toggleTodo={() => toggleTodo(todo.id)}
            editTodo={event => editTodo(todo.id, event)}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        ))}
      </TodoList>
    </Cell>
  </Grid>
);

Todo.propTypes = {
  todos: PropTypes.any,
  toggleTodo: PropTypes.func,
  setVisibilityFilter: PropTypes.func,
  addTodo: PropTypes.func,
  editTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};

Todo.defaultProps = {
  todos: [],
};
