import _ from 'lodash';
import { FETCH_HEROES, CREATE_HERO, DELETE_HERO, FETCH_HERO, UPDATE_HERO } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case DELETE_HERO:
      return _.omit(state, action.payload);
    case FETCH_HEROES:
      return _.mapKeys(action.payload.data, 'id');
    case CREATE_HERO:
    case FETCH_HERO:
    case UPDATE_HERO:
      return {...state, [action.payload.data.id]: action.payload.data};
    default:
      return state;
  }
}
