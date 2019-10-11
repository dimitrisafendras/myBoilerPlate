import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTask } from '../../../modules/actions';
import { Todo } from './todo';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  addTask: bindActionCreators(addTask, dispatch),
});

export const ConnectedTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
