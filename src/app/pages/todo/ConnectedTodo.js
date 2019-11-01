import { connect } from 'react-redux';
import { toggleTodo, setVisibilityFilter, addTodo } from './state/actions';
import { Todo } from './Todo';
import { filteredTodos } from './utils';

const mapStateToProps = ({ todoState }) => ({
  todos: filteredTodos(todoState.todos, todoState.visibility),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter)),
  addTodo: input => dispatch(addTodo(input)),
});

export const ConnectedTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
