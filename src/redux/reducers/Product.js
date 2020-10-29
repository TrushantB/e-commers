import {
  GET_PRODUCT
} from '../types';
// import products from '../../product.json';
let products = [
  {
    "id": "11",
    "title": "",
    "image": "",
    "categoryId": "",
    "seller": "",
    "price": "",
    "type":"",
    "subtitle": "",
    "description": ""

  },
  {
    "id": "12",
    "title": "",
    "image": "",
    "categoryId": "",
    "seller": "",
    "price": "",
    "type":"",
    "subtitle": "",
    "description": ""

  },
  {
    "id": "13",
    "title": "",
    "image": "",
    "categoryId": "",
    "seller": "",
    "price": "",
    "type":"",
    "subtitle": "",
    "description": ""

  },
  {
    "id": "14",
    "title": "",
    "image": "",
    "categoryId": "",
    "seller": "",
    "price": "",
    "type":"",
    "subtitle": "",
    "description": ""

  },
  {
    "id": "15",
    "title": "",
    "image": "",
    "categoryId": "",
    "seller": "",
    "price": "",
    "type":"",
    "subtitle": "",
    "description": ""

  }
]

const INITIAL_STATE = {
  products: products,
  featureProducts:products,
  handMadeCards:products
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCT:
    state.featureProducts = action.payload.filter(item => item.type=='feature_product'); 
    state.handMadeCards = action.payload.filter(item => item.type=='handmade_card');
    action.payload.map((item) => console.log(item.type))

      return { ...state, 
        products: action.payload,
        featureProducts:[...state.featureProducts],
        handMadeCards:[...state.handMadeCards]
      }
    default:
      return state;
  }
};
