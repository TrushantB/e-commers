import {
  GET_HOME_BANNER
} from '../types';


const INITIAL_STATE = {
  bannerData: [
    {
      "id":1,
      "category":"",
      "title":"",
      "subtitle":"",
      "label":"",
      "image":""
    },
    {
      "id":2,
      "category":"",
      "title":"",
      "subtitle":"",
      "label":"",
      "image":""
    }
  ]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_HOME_BANNER:
      return { ...state, bannerData: action.payload }
    default:
      return state;
  }
};
