import { connect } from 'react-redux';
import {
  toggleTodo,
  showCompleted,
  showActive,
  showAll,
} from './state/actions';
import { Todo } from './Todo';

// FIXME THIS SHIT
const getVisibleTodos = (todos, filter = showAll().Type) => {
  switch (filter && filter.action) {
    case showAll().Type:
      return todos;
    case showCompleted().Type:
      return todos.filter(t => t.completed);
    case showActive().Type:
      return todos.filter(t => !t.completed);
    default:
  }
};

const mapStateToProps = ({ todoState }) => ({
  todos: getVisibleTodos(todoState.todos, todoState.visibility),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export const ConnectedTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
