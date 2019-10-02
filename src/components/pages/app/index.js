import React from 'react';
import logo from './logo.svg';
import { styles } from './styles';

export const App = () => {
  const { root, logo: logoStyle, header, link } = styles();
  return (
    <div className={root}>
      <header className={header}>
        <img src={logo} className={logoStyle} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
