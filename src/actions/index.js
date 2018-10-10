import axios from 'axios';

export const FETCH_HEROES = 'fetch_heroes';
export const FETCH_HERO = 'fetch_hero';
export const CREATE_HERO = 'create_hero';
export const UPDATE_HERO = 'update_hero';
export const DELETE_HERO = 'delete_hero';
export const SEARCH_HEROES = 'search_heroes';

const ROOT_URL = 'https://tour-of-heroes-api.herokuapp.com/api/heroes';
// Split data area with key
const key = 1;

export function fetchHeroes() {
  const request = axios.get(`${ROOT_URL}?key=${key}`);
  return {
    type: FETCH_HEROES,
    payload: request
  }
}

export function fetchHero(id) {
  const request = axios.get(`${ROOT_URL}/${id}?key=${key}`);
  return {
    type: FETCH_HERO,
    payload: request
  }
}

export function createHero(values) {
  const request = axios.post(`${ROOT_URL}?key=${key}`, values);
  return {
    type: CREATE_HERO,
    payload: request
  }
}

export function updateHero(id, values) {
  const request = axios.put(`${ROOT_URL}/${id}?key=${key}`, values);
  return {
    type: UPDATE_HERO,
    payload: request
  }
}

export function deleteHero(id) {
  axios.delete(`${ROOT_URL}/${id}?key=${key}`);
  return {
    type: DELETE_HERO,
    payload: id
  }
}

export function searchHeroes(value) {
  let request =  null
  if(!value){
    request = []
  }else {
    request =  axios.get(`${ROOT_URL}?name=${value}&key=${key}`);
  }
  return {
    type: SEARCH_HEROES,
    payload: request
  }
}