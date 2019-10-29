import { ConnectedHome, AboutUs, ConnectedTodoList } from '../pages';

// Extracted from App js because it is needed in Header as well
export const routes = {
  '/': {
    title: 'Home',
    page: ConnectedHome,
  },
  '/about': {
    title: 'About Us',
    page: AboutUs,
  },
  '/todo': {
    title: 'To Do List',
    page: ConnectedTodoList,
  },
};
