import cryptsListReducer from './cryptsListReducer';
import favoritesReducer from './favoritesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  crypts: cryptsListReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
