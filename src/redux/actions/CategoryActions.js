import {
  GET_CATEGORY
} from '../types';

export const getCategoryData = (data) => {
  return {
    type: GET_CATEGORY,
    payload: data
  }
}
