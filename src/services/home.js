import React from 'react'
import { get, post} from './baseService';

export const getHomeBanner = () => {
    return get(`/HomeBanner`);
 }

