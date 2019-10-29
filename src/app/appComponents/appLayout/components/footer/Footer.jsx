import React from 'react';
import { ConnectedAddTodo } from '../../../../pages/todo/todoComponents/addTodo';
import { ConnectedLink } from '../../../../pages/todo/todoComponents/link/ConnectedLink';
import { useStyles } from './styles';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '/Users/cjuser/IdeaProjects/myBoilerPlate/src/app/pages/todo/toDoStore/actions/actionTypes';

export const Footer = () => {
  const { footer } = useStyles();
  return (
    <div className={footer}>
      <ConnectedAddTodo />
      <span>Show: </span>
      <ConnectedLink filter={SHOW_ALL}>All</ConnectedLink>
      <ConnectedLink filter={SHOW_ACTIVE}>Active</ConnectedLink>
      <ConnectedLink filter={SHOW_COMPLETED}>Completed</ConnectedLink>
    </div>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

// FIXME: remove everything from here
