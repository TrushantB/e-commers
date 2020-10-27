import React from 'react'
import { get, post} from './baseService';

export const getProduct = () => {
    return get(`/Product`);
 }

 export const getProductById = (id) => {
    return get(`/Product/${id}`);
 }

 export const getProductByCategory = (id) => {
   return get(`/Product?categoryId=${id}`);
}

