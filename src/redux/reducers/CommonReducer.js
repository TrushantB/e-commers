import {
  SEARCH_TEXT
} from '../types';

const INITIAL_STATE = {
  searchText: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return { ...state, searchText: action.payload }
    default:
      return state;
  }
};
