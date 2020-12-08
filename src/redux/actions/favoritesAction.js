export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

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
