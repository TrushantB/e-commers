import {
  GET_HOME_BANNER
} from '../types';

const INITIAL_STATE = {
  bannerData: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_HOME_BANNER:
      return { ...state, bannerData: action.payload }
    default:
      return state;
  }
};
