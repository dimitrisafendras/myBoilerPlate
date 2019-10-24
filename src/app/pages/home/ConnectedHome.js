import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBreweries, deleteBreweries } from './homeStore/actions';
import { Home } from './Home';

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
