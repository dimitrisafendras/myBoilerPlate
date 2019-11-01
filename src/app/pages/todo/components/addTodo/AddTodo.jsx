import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { MainButton } from '../../../../genericComponents';
import { useStyles } from './styles';

export const AddTodo = ({ addTodo }) => {
  const { formStyle } = useStyles();
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
    <form onSubmit={handleSubmit} className={formStyle}>
      <TextField
        onChange={handleChange}
        value={todo}
        id="standard-basic"
        label="Add Task"
        margin="normal"
      />
      <MainButton type="submit" text="Add Task" disabled={todo === ''} />
    </form>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func,
};
