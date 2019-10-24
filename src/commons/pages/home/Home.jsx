import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash-es';
import uuid from 'uuid';
import { useStyles } from './styles';
import { Card } from '../../molecules';
import { MainButton } from '../../atoms/buttons';

export const Home = ({ fetchBreweries, breweries, deleteBreweries }) => {
  const { home } = useStyles();
  const onclick = () => fetchBreweries();
  const onDelete = () => deleteBreweries();

  return (
    <div className={home}>
      <MainButton onClick={onclick} text="fetchBreweries" />
      <MainButton onClick={onDelete} text="Delete" />
      {map(breweries, brewery => (
        <Card key={uuid.v1()} data={brewery} />
      ))}
    </div>
  );
};

Home.propTypes = {
  fetchBreweries: PropTypes.func,
  breweries: PropTypes.any,
  deleteBreweries: PropTypes.func,
};

Home.defaultProps = {};
