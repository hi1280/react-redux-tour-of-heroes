import axios from 'axios';

export const FETCH_HEROES = 'fetch_heroes';
export const FETCH_HERO = 'fetch_hero';
export const CREATE_HERO = 'create_hero';
export const UPDATE_HERO = 'update_hero';
export const DELETE_HERO = 'delete_hero';

const ROOT_URL = 'https://tour-of-heroes-api.herokuapp.com/api/heroes';

export function fetchHeroes() {
  const request = axios.get(ROOT_URL);
  return {
    type: FETCH_HEROES,
    payload: request
  }
}

export function fetchHero(id) {
  const request = axios.get(`${ROOT_URL}/${id}`);
  return {
    type: FETCH_HERO,
    payload: request
  }
}

export function createHero(values) {
  const request = axios.post(ROOT_URL, values);
  return {
    type: CREATE_HERO,
    payload: request
  }
}

export function updateHero(id, values) {
  const request = axios.put(`${ROOT_URL}/${id}`, values);
  return {
    type: UPDATE_HERO,
    payload: request
  }
}

export function deleteHero(id) {
  axios.delete(`${ROOT_URL}/${id}`);
  return {
    type: DELETE_HERO,
    payload: id
  }
}