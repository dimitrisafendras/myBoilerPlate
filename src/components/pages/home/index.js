import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteBreweries, fetchBreweries } from '../../../modules/actions';
import { Home } from './home';

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
