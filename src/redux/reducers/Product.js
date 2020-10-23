import {
  EXAMPLE_TYPE
} from '../types';
import products from '../../product.json';

const INITIAL_STATE = {
  products: products
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXAMPLE_TYPE:
      return { ...state, message: action.payload }
    default:
      return state;
  }
};
