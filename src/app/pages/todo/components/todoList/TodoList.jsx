import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import { useStyles } from './styles';

const masonryOptions = {
  transitionDuration: 0,
};

export const TodoList = ({ children }) => {
  const { todoList } = useStyles();
  return <Masonry options={masonryOptions}>{children}</Masonry>;
};

TodoList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

TodoList.defaultProps = {};
