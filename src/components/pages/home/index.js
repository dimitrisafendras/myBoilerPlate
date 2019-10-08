import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import { map } from 'lodash-es';
import uuid from 'uuid';
import { fetchBreweries } from '../../../modules/actions';
import { useStyles } from './styles';
import { Card } from '../../molecules/card';

// eslint-disable-next-line no-shadow,react/prop-types
const Home = ({ fetchBreweries, breweries }) => {
  const { home } = useStyles();
  const onclick = () => fetchBreweries();
  console.log('breweries', breweries);
  return (
    <div className={home}>
      <Button onClick={onclick}>Click</Button>
      {map(breweries, brewery => (
        <Card key={uuid.v1()} data={brewery} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ breweriesState }) => ({
  breweries: breweriesState.breweries,
});

const mapDispatchToProps = dispatch => ({
  fetchBreweries: bindActionCreators(fetchBreweries, dispatch),
});

export const ConnectedHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
