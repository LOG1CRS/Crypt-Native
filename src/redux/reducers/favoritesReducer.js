import {
  GET_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from '../actions/favoritesAction';

const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return state.concat(action.payload);
      break;
    case REMOVE_FAVORITE:
      return state.filter((value, index, arr) => value.id !== action.payload);
      break;

    default:
      return state;
      break;
  }
};

export default favoritesReducer;
