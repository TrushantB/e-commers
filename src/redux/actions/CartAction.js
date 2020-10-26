import {ADD_TO_CART, REMOVE_FROM_CART} from '../types';

export function addToCart(payload,quantity){
    let product = {
        id:payload.id,
        title:payload.title,
        quantity:quantity,
        image:payload.image,
        price: quantity * payload.price
    }
    return({
        type: ADD_TO_CART,
        payload: product
    });
}

export function removeFromCart(payload){
    return({
        type: REMOVE_FROM_CART,
        payload: payload
    });
}