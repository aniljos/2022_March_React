import React, { Component } from 'react';
import axios from 'axios';

interface ListProductsProps{

}

interface ListProductsState{
    
}

class ListProducts extends Component<ListProductsProps, ListProductsState>{

    componentDidMount(){

        const url = "http://localhost:9000/products1";
        var promise = axios.get(url);
        //promise.then(successCallback, errorCallback)
        promise.then((response) => {
            console.log("success", response);
        }, (error) => {
            console.log("error", error);
        });

        //async-await

    }

    render(): React.ReactNode {
        return (
            <div>
                <h3>List Products</h3>
            </div>
        )
    }
}

export default ListProducts;