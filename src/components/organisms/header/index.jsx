import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export const Header = () => {
  const { header } = useStyles();
  return (
    <div className={header}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};
