import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from './styles';

export const Header = () => {
  const { header } = styles();
  return (
    <div className={header}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};
