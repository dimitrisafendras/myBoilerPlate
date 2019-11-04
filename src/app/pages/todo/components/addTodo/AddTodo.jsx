import PropTypes from 'prop-types';
import React from 'react';
import { MainButton } from '../../../../genericComponents';
import { useStyles } from './styles';

export const AddTodo = ({ addTodo }) => {
  const { formStyle } = useStyles();

  const onClick = event => {
    event.preventDefault();
    addTodo();
  };

  return <MainButton text="Add Task" onClick={onClick} />;
};

AddTodo.propTypes = {
  addTodo: PropTypes.func,
};
