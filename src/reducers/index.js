import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import HeroesReducer from './reducer-heroes';

const rootReducer = combineReducers({
  heroes: HeroesReducer,
  form: formReducer
});

export default rootReducer;
