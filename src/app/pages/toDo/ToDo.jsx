import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash-es';
import uuid from 'uuid';
import { useStyles } from './styles';
import { Card } from '../../genericComponents/molecules';
import { MainButton } from '../../genericComponents/atoms';

export const ToDo = ({ fetchBreweries, breweries, deleteBreweries }) => {
  const { todo } = useStyles();
  const onclick = () => fetchBreweries();
  const onDelete = () => deleteBreweries();

  return (
    <div className={todo}>
      <MainButton onClick={onclick} text="fetchBreweries" />
      <MainButton onClick={onDelete} text="Delete" />
      {map(breweries, brewery => (
        <Card key={uuid.v1()} data={brewery} />
      ))}
    </div>
  );
};

ToDo.propTypes = {
  fetchBreweries: PropTypes.func,
  breweries: PropTypes.any,
  deleteBreweries: PropTypes.func,
};

ToDo.defaultProps = {};
