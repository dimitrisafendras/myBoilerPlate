import PropTypes from 'prop-types';
import React from 'react';
import { MainButton } from '../../../../genericComponents';
import { useStyles } from './styles';

export const AddTodo = ({ addTodo }) => {
  const { addTodoStyle } = useStyles();

  const onClick = () => {
    addTodo();
  };

  return (
    <MainButton
      text="Add Task"
      onClick={onClick}
      color="secondary"
      className={addTodoStyle}
    />
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func,
};
