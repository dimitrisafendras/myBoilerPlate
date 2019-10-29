import { ConnectedHome, AboutUs, ConnectedToDo } from '../pages';

// Extracted from App js because it is needed in Header as well
export const routes = {
  '/': {
    title: 'Home',
    component: ConnectedHome,
  },
  '/about': {
    title: 'About Us',
    component: AboutUs,
  },
  '/todo': {
    title: 'To Do List',
    component: ConnectedToDo,
  },
};
