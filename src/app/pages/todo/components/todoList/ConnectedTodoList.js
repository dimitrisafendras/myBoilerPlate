import { connect } from 'react-redux';
import {
  toggleTodo,
  showCompleted,
  showActive,
  showAll,
} from '../../toDoStore/actions';
import { TodoList } from './TodoList';

const getVisibleTodos = (todos, filter) => {
  console.log('func', todos, filter);
  switch (filter) {
    case showAll.Type:
      return todos;
    case showCompleted.Type:
      return todos.filter(t => t.completed);
    case showActive.Type:
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const mapStateToProps = ({ todoStore }) => {
  console.log('store', todoStore);
  return {
    todos: getVisibleTodos(todoStore, todoStore.visibilityFilter),
  };
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export const ConnectedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
