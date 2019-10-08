import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import { fetchBreweries } from '../../../modules/actions';
import { styles } from './styles';

// eslint-disable-next-line no-shadow,react/prop-types
const Home = ({ fetchBreweries, breweries }) => {
  const { home } = styles();
  const onclick = () => fetchBreweries();
  console.log('breweries', breweries);
  return (
    <div className={home}>
      <Button onClick={onclick}>Click</Button>
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
