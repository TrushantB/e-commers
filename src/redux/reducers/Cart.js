import {ADD_TO_CART, REMOVE_FROM_CART} from '../types'

const INITIAL_STATE = {
    cartProducts: sessionStorage.getItem("cartData") ? JSON.parse(sessionStorage.getItem("cartData")) : []
  }
  

  export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_TO_CART:
            let item = state.cartProducts.find(obj => obj.id == action.payload.id);
            if(item) {
              item.quantity = item.quantity + action.payload.quantity
              item.price = item.price + action.payload.price
              sessionStorage.setItem("cartData", JSON.stringify(state.cartProducts));
            } else {

                state.cartProducts.push(action.payload)
                sessionStorage.setItem("cartData", JSON.stringify(state.cartProducts));
            }
      return { ...state,
        cartProducts: [...state.cartProducts] 
    }

        case REMOVE_FROM_CART:
            let product = state.cartProducts.filter(item => item.id != action.payload)
            return { ...state,
              cartProducts: [...product] 
          }
        default:
            return state;
    }
}
