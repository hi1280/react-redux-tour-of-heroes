import axios from 'axios';

export const FETCH_HEROES = 'fetch_heroes';

const ROOT_URL = 'https://tour-of-heroes-api.herokuapp.com/api/heroes';

export function fetchHeroes() {
  const request = axios.get(ROOT_URL);

  return {
    type: FETCH_HEROES,
    payload: request
  }
}