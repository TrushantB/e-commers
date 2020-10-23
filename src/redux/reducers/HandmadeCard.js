import {
  EXAMPLE_TYPE
} from '../types';

const INITIAL_STATE = {
  message: 'DreamApp'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXAMPLE_TYPE:
      return { ...state, message: action.payload }
    default:
      return state;
  }
};
