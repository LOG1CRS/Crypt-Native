export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const SET_STORED_CRYPTS = 'SET_STORED_CRYPTS';

export const setStoredCryptsAction = (crypts) => {
  return {
    type: SET_STORED_CRYPTS,
    payload: crypts,
  };
};

export const addFavoriteAction = (crypt) => {
  return {
    type: ADD_FAVORITE,
    payload: crypt,
  };
};

export const removeFavoriteAction = (cryptId) => {
  return {
    type: REMOVE_FAVORITE,
    payload: cryptId,
  };
};
