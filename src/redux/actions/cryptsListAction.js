export const GET_CRYPTS_LIST = 'GET_CRYPTS_LIST';
export const ADD_CRYPTS_FROM_API = 'ADD_CRYPTS_FROM_API';

export const getCryptsLists = () => {
  return {
    type: GET_CRYPTS_LIST,
  };
};

export const addCryptsFromAPI = (crypts) => {
  return {
    type: ADD_CRYPTS_FROM_API,
    payload: crypts,
  };
};
