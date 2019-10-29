import React from 'react';
import { ConnectedAddTodo } from '../../../../pages/todo/components/addTodo';
import { ConnectedLink } from '../../../../pages/todo/components/link/ConnectedLink';
import { useStyles } from './styles';
import {
  showAll,
  showActive,
  showCompleted,
} from '/Users/cjuser/IdeaProjects/myBoilerPlate/src/app/pages/todo/toDoStore/actions/index.js';

export const Footer = () => {
  const { footer } = useStyles();
  return (
    <div>
      <ConnectedAddTodo />
      <span>Show: </span>
      <ConnectedLink filter={showAll}>All</ConnectedLink>
      <ConnectedLink filter={showActive}>Active</ConnectedLink>
      <ConnectedLink filter={showCompleted}>Completed</ConnectedLink>
    </div>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};
