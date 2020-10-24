import {
  GET_HOME_BANNER
} from '../types';

export const getHomeBannerData = (data) => {
  return {
    type: GET_HOME_BANNER,
    payload: data
  }
}
