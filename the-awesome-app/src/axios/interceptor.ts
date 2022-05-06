import { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import {store} from '../redux/store';


axios.interceptors.request.use(function(config: AxiosRequestConfig){

    const accessToken = store.getState().auth.accessToken;
    
    if(config && config.headers){
        config.headers.authorization = "bearer " + accessToken
    }
    return config;

})


