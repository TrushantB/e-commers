import {
  GET_PRODUCT
} from '../types';
// import products from '../../product.json';

const INITIAL_STATE = {
  products: [],
  featureProducts:[],
  handMadeCards:[]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCT:
    state.featureProducts = action.payload.filter(item => item.type=='feature_product'); 
    state.handMadeCards = action.payload.filter(item => item.type=='handmade_card');

      return { ...state, 
        products: action.payload,
        featureProducts:[...state.featureProducts],
        handMadeCards:[...state.handMadeCards]
      }
    default:
      return state;
  }
};
