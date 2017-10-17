import axios from 'axios';
import apiURL from './api';

export const getCustomerList = () =>{
   return axios.get(apiURL).then( (response) => response.data)
}

export const postCustomer = (obj) =>{
    return axios.post(apiURL, obj).then((response) => response)
} 

export const getCustomer = (id) =>{
    return axios.get(apiURL + id).then((response) => response.data)
}

export const updateCustomer = (id, object) => {
    return axios.patch(apiURL + id, object).then((response) => response.data)
}

export const deleteCustomer = (id) => {
    return axios.delete(apiURL+id).then((response) => response)
}