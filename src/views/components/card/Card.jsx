import React from 'react';
import { map } from 'lodash-es';
import uuid from 'uuid';
import { useStyles } from './styles';
import { Text } from '../text';

export const Card = ({ data }) => {
  const { card } = useStyles();
  console.log('data', data);
  return (
    <div className={card}>
      {map(data, data => (
        <Text key={uuid.v1()} text={data} variant="h4" />
      ))}
    </div>
  );
};
