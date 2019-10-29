import { connect } from 'react-redux';
import {
  toggleTodo,
  showCompleted,
  showActive,
  showAll,
} from '../../toDoStore/actions';
import { TodoList } from './TodoList';

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

const mapStateToProps = ({ todoStore }) => ({
  todos: getVisibleTodos(todoStore.todos, todoStore.visibility),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export const ConnectedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
