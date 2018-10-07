import _ from 'lodash';
import { SEARCH_HEROES } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case SEARCH_HEROES:
      return _.mapKeys(action.payload, 'id');
    default:
      return state;
  }
}
