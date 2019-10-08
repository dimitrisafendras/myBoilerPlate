import axios from 'axios';

export const fetchBreweries = () =>
  axios.get('https://api.openbrewerydb.org/breweries');
