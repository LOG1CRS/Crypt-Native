import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_STORED_CRYPTS,
} from '../actions/favoritesAction';
import { updateFavoritesCrypts } from '../../utils/storage';

const saveFavoritesInStorage = async (crypts) => {
  try {
    await updateFavoritesCrypts(crypts);
  } catch (err) {
    console.log(err);
  }
};

const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const concatenatedState = state.concat(action.payload);
      saveFavoritesInStorage(concatenatedState);
      return concatenatedState;
      break;
    case REMOVE_FAVORITE:
      const filteredState = state.filter(
        (value, index, arr) => value.id !== action.payload
      );
      saveFavoritesInStorage(filteredState);
      return filteredState;
      break;
    case SET_STORED_CRYPTS:
      return (state = action.payload);
      break;

    default:
      return state;
      break;
  }
};

export default favoritesReducer;
