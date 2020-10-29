import {
  GET_CATEGORY
} from '../types';

const INITIAL_STATE = {
  categoryData:[
    {
      "id": 1,
      "name": "",
      "key": "",
      "image": ""
    },
    {
      "id": 2,
      "name": "",
      "key": "",
      "image": ""
    },
    {
      "id": 3,
      "name": "",
      "key": "",
      "image": ""

    },
    {
      "id": 4,
      "name": "",
      "key": "",
      "image": ""

    }
  ]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return { ...state, categoryData: action.payload }
    default:
      return state;
  }
};
