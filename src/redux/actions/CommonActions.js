import {
  SEARCH_TEXT
} from '../types';

export const searchText = (data) => {
  return {
    type: SEARCH_TEXT,
    payload: data
  }
}
