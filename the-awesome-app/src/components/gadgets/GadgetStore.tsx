import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Product } from '../../models/Product';

function GadgetStore(){

    const [products, setProducts]= useState<Array<Product>>([]);

    useEffect(() =>{
        fetchProducts();
        
    }, []);

    async function fetchProducts(){

        const url = process.env.REACT_APP_PRODUCTS_URL;
        if(url){

            try {
                const response = await axios.get<Array<Product>>(url);
                setProducts(response.data);
                
            } catch (error) {
                console.log("error", error);
            }
            
        }
    }

    return (
        <div>
            <h3>Gadget Store</h3>
        </div>
    )
}

export default GadgetStore;