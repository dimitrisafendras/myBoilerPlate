import axios from 'axios';

export const fetchFromSource = () =>
  axios.get('https://api.github.com/users?per_page=5');
