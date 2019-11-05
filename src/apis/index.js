import axios from 'axios';

export const fetchBreweries = () =>
  axios.get('https://api.openbrewerydb.org/breweries');

export const picsUrl = 'https://picsum.photos/200/50?random=';
