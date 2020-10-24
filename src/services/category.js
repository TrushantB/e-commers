import React from 'react'
import { get, post} from './baseService';

export const getCategories = () => {
    return get(`/books?category`);
 }

 export const searchBookByCategory = (category,searchText) => {
    return get(`/books?category=${category}&searchKeyword=${searchText}`);
 }

 export const getBooksByCategory = (categoryName) => {
   return get(`/books?category=${categoryName}`);
}


