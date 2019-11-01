import { connect } from 'react-redux';
import { toggleTodo, setVisibilityFilter } from './state/actions';
import { Todo } from './Todo';
import { filteredTodos } from './utils';

const mapStateToProps = ({ todoState }) => ({
  todos: filteredTodos(todoState.todos, todoState.visibility),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter)),
});

export const ConnectedTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
