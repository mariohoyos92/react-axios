import axios from 'axios';
import apiURL from './api';

export const getCustomerList = () =>{
   return axios.get(apiURL).then( (response) => response.data)
}

export const postCustomer = (obj) =>{
    axios.post(apiURL, obj).then((resp) => resp.data)
} 
