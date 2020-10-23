import {ADD_TO_CART, REMOVE_FROM_CART} from '../types'

const INITIAL_STATE = {
    cartProduct: []
  }
  

  export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return state.concat(action.payload);
        case REMOVE_FROM_CART:
            return state.filter(item => item !== action.payload);
        default:
            return state;
    }
}
