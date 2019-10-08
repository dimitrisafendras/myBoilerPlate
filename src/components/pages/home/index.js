import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import { map } from 'lodash-es';
import uuid from 'uuid';
import { fetchBreweries, deleteBreweries } from '../../../modules/actions';
import { useStyles } from './styles';
import { Card } from '../../molecules/card';

// eslint-disable-next-line no-shadow,react/prop-types
const Home = ({ fetchBreweries, breweries, deleteBreweries }) => {
  const { home } = useStyles();
  const onclick = () => fetchBreweries();
  const onDelete = () => deleteBreweries();
  console.log('breweries', breweries);
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

const mapStateToProps = ({ breweriesState }) => ({
  breweries: breweriesState.breweries,
});

const mapDispatchToProps = dispatch => ({
  fetchBreweries: bindActionCreators(fetchBreweries, dispatch),
  deleteBreweries: bindActionCreators(deleteBreweries, dispatch),
});

export const ConnectedHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
