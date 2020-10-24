import {
  GET_CATEGORY
} from '../types';

const INITIAL_STATE = {
  categoryData:[]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return { ...state, categoryData: action.payload }
    default:
      return state;
  }
};
