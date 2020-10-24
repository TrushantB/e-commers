import {
  GET_PRODUCT
} from '../types';

export const getProductData = (data) => {
  return {
    type: GET_PRODUCT,
    payload: data
  }
}
