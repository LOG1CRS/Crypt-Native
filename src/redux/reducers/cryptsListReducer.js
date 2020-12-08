import {
  GET_CRYPTS_LIST,
  ADD_CRYPTS_FROM_API,
} from '../actions/cryptsListAction';

const cryptsListReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CRYPTS_LIST:
      return state;
      break;
    case ADD_CRYPTS_FROM_API:
      return (state = action.payload);
      break;

    default:
      return state;
      break;
  }
};

export default cryptsListReducer;
