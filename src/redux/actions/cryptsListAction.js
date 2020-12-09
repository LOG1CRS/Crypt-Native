export const ADD_CRYPTS_FROM_API = 'ADD_CRYPTS_FROM_API';

export const addCryptsFromAPI = (crypts) => {
  return {
    type: ADD_CRYPTS_FROM_API,
    payload: crypts,
  };
};
