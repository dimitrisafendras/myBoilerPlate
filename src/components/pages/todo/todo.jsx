import React from 'react';
import Button from '@material-ui/core/Button';
import { styles } from './styles';

export const Todo = ({ addTask }) => {
  const { todo } = styles();
  const onClick = () => addTask();
  return (
    <div className={todo}>
      <Button onClick={onClick}>ADD</Button>
    </div>
  );
};
