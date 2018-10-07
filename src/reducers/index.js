import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import HeroesReducer from './reducer-heroes';
import SearchedHeroesReducer from './reducer-searched-heroes';

const rootReducer = combineReducers({
  heroes: HeroesReducer,
  searchedHeroes: SearchedHeroesReducer,
  form: formReducer
});

export default rootReducer;
