import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBreweries, deleteBreweries } from './state/actions';
import { Home } from './Home';

const mapStateToProps = ({ homeState }) => ({
  breweries: homeState.breweries,
});

const mapDispatchToProps = dispatch => ({
  fetchBreweries: bindActionCreators(fetchBreweries, dispatch),
  deleteBreweries: bindActionCreators(deleteBreweries, dispatch),
});

export const ConnectedHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
