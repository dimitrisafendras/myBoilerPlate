import { ConnectedHome, AboutUs, ConnectedTodo } from '../pages';

// Extracted from App js because it is needed in Header as well
export const routes = {
  '/': {
    title: 'Home',
    component: ConnectedHome,
  },
  '/todo': {
    title: 'To Do List',
    component: ConnectedTodo,
  },
  '/about': {
    title: 'About Us',
    component: AboutUs,
  },
};
