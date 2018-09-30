import { combineReducers } from 'redux';
import HeroesReducer from './reducer-heroes';

const rootReducer = combineReducers({
  heroes: HeroesReducer
});

export default rootReducer;
