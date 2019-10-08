import React from 'react';
import { map } from 'lodash-es';
import uuid from 'uuid';
import { styles } from './styles';
import { H4 } from '../../atoms/h4';

export const Card = ({ data }) => {
  const { card } = styles();
  return (
    <div className={card}>
      {map(data, data => (
        <H4 key={uuid.v1()}>{data}</H4>
      ))}
    </div>
  );
};
