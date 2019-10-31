import { connect } from 'react-redux';
import { toggleTodo, setVisibilityFilter } from './state/actions';
import {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
} from './state/actions/actionTypes';
import { Todo } from './Todo';

// TODO: extract to epics????
const filteredTodos = (todos, filter = SHOW_ALL) =>
  ({
    [SHOW_ALL]: todos,
    [SHOW_COMPLETED]: todos.filter(t => t.completed),
    [SHOW_ACTIVE]: todos.filter(t => !t.completed),
  }[filter]);

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
