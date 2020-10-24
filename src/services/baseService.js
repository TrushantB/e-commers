import React from 'react'
import axios from 'axios'
import { environment } from '../environments/environment'

const localURL = environment.api
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export const post = (url,data) => {
 return axios.post(`${localURL}${url}`,data);
}

export const get = (url) => {
  return axios.get(`${localURL}${url}`);
 }
