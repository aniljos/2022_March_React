import React from 'react';
import {useSelector} from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import {AppState} from '../../redux/store';

function ProtectedRoute(props: any){

    //const isAuthenticated = useSelector((state: AppState) => {return state.auth.isAuthenticated})
    const isAuthenticated = useSelector((state: AppState) => state.auth.isAuthenticated)
    const location = useLocation();

    console.log("ProtectedRoute", location);

    if(isAuthenticated){
        return props.children;
    }
    else{
        return <Navigate to="/login" state={{redirectUrl: location.pathname}}/>
    }
    
}

export default ProtectedRoute;