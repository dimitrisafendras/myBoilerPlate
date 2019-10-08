import React from 'react';
import { styles } from './styles';

export const Card = ({ city, country, id, name, phone, state, street }) => {
  const { card } = styles();
  return <div className={card} />;
};
