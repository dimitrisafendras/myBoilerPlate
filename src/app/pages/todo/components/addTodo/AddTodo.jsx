import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { MainButton } from '../../../../genericComponents';

export const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = React.useState('');
  const handleChange = event => {
    setTodo(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addTodo(todo);
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        onChange={handleChange}
        value={todo}
        id="standard-basic"
        label="Add Task"
        margin="normal"
      />
      <MainButton type="submit" text="Add Todo" />
    </form>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func,
};
