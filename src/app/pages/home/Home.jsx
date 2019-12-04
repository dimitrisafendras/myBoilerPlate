import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash-es';
import uuid from 'uuid';
import { useStyles } from './styles';
import { Card } from '../../genericComponents/molecules';
import { MainButton } from '../../genericComponents/atoms';

export const Home = ({
  fetchBreweries,
  breweries,
  deleteBreweries,
  showModal,
  hideModal,
}) => {
  const { home } = useStyles();
  const btns = {
    'Fetch Breweries': fetchBreweries,
    'Delete Breweries': deleteBreweries,
    'Show Modal': showModal,
    'Hide Modal': hideModal,
  };
  return (
    <div className={home}>
      {map(btns, (callBack, txt) => (
        <MainButton key={uuid.v1()} onClick={callBack} text={txt} />
      ))}
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
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
};

Home.defaultProps = {};
