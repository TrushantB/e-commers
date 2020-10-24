import React from 'react'
import { get, post} from './baseService';

export const getProduct = () => {
    return get(`/Product`);
 }

