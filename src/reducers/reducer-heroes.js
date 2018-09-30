import _ from 'lodash';
import { FETCH_HEROES } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_HEROES:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
