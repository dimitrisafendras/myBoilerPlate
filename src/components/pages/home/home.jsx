import React from 'react';
import Button from '@material-ui/core/Button';
import { map } from 'lodash-es';
import uuid from 'uuid';
import { useStyles } from './styles';
import { Card } from '../../molecules/card';

export const Home = ({ fetchBreweries, breweries, deleteBreweries }) => {
  const { home } = useStyles();
  const onclick = () => fetchBreweries();
  const onDelete = () => deleteBreweries();

  return (
    <div className={home}>
      <Button onClick={onclick}>Click</Button>
      <Button onClick={onDelete}>Delete</Button>
      {map(breweries, brewery => (
        <Card key={uuid.v1()} data={brewery} />
      ))}
    </div>
  );
};
