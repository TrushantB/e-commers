import React from 'react'
import { get, post} from './baseService';

export const getCategories = () => {
    return get(`/Category`);
}

export const getCategoryById = (id) => {
    return get(`/Category/${id}`);
}


