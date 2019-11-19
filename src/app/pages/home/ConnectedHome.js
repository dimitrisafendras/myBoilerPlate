import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  hideModal,
  showModal,
} from '../../genericComponents/organisms/modal/state/actions';
import { fetchBreweries, deleteBreweries } from './state/actions';
import { Home } from './Home';

const mapStateToProps = ({ homeState }) => ({
  breweries: homeState.breweries,
});

const mapDispatchToProps = dispatch => ({
  fetchBreweries: bindActionCreators(fetchBreweries, dispatch),
  deleteBreweries: bindActionCreators(deleteBreweries, dispatch),
  showModal: bindActionCreators(showModal, dispatch),
  hideModal: bindActionCreators(hideModal, dispatch),
});

export const ConnectedHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
