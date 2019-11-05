import { connect } from 'react-redux';
import {
  toggleTodo,
  setVisibilityFilter,
  addTodo,
  editTodo,
  deleteTodo,
} from './state/actions';
import { Todo } from './Todo';
import { filteredTodos } from './configs';

const mapStateToProps = ({ todoState }) => ({
  todos: filteredTodos(todoState.todos, todoState.visibility),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter)),
  addTodo: () => dispatch(addTodo()),
  editTodo: (id, text) => dispatch(editTodo({ id, text })),
  deleteTodo: id => dispatch(deleteTodo(id)),
});

export const ConnectedTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
