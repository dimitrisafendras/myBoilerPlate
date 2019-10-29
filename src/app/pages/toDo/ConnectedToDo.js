import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBreweries, deleteBreweries } from './toDoStore/actions';
import { ToDo } from './ToDo';

const mapStateToProps = ({ homeStore }) => ({
  breweries: homeStore.breweries,
});

const mapDispatchToProps = dispatch => ({
  fetchBreweries: bindActionCreators(fetchBreweries, dispatch),
  deleteBreweries: bindActionCreators(deleteBreweries, dispatch),
});

export const ConnectedToDo = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);
