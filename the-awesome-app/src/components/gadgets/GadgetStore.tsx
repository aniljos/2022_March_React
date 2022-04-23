import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Product } from '../../models/Product';

function GadgetStore(){

    const [products, setProducts]= useState<Array<Product>>([]);

    useEffect( () =>{
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

    function renderProducts() {

        const productsView =  products.map((item, index) => {
            return (
                <div className="col" key={index} >
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <button className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }

    return (
        <div>
            <h3>Gadget Store</h3>
            {renderProducts()}
        </div>
    )
}

export default GadgetStore;