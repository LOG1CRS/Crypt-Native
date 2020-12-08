import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesAction';

const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return state;
      break;
    case REMOVE_FAVORITE:
      return state;
      break;

    default:
      return state;
      break;
  }
};

export default favoritesReducer;
