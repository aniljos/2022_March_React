import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Product } from '../../models/Product';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../../redux/store';
import { CartItem } from '../../models/CartItem';
import { createAddToCartAction, createSaveProductsAction } from '../../redux/actionCreators';
import { ThunkDispatch } from 'redux-thunk';
import { GadgetStoreAction } from '../../redux/gadgetsReducer';

type AppThunkDispatch = ThunkDispatch<AppState, any, GadgetStoreAction>

function GadgetStore(){

    //const [products, setProducts]= useState<Array<Product>>([]);

    const products = useSelector((state: AppState) => state.gadgets.products);
    const isProductsLoaded = useSelector((state: AppState) => state.gadgets.isProductsLoaded);

    const dispatch = useDispatch<AppDispatch>();
    const thunkDispatch = useDispatch<AppThunkDispatch>()

    useEffect( () =>{
        //fetchProducts();
        if(isProductsLoaded===false){
            fetchProductsAndSaveToRedux();
        }
    }, []);

    function fetchProductsAndSaveToRedux(){

        thunkDispatch(createSaveProductsAction())
    }

    // async function fetchProducts(){

    //     const url = process.env.REACT_APP_PRODUCTS_URL;
    //     if(url){

    //         try {
    //             const response = await axios.get<Array<Product>>(url);
    //             setProducts(response.data);

    //         } catch (error) {
    //             console.log("error", error);
    //         }
            
    //     }
    // }

    function addToCart(product: Product){

        // dispatch({
        //     type: "ADDTOCART",
        //     cartItem: new CartItem(product, 1)
        // })
        dispatch(createAddToCartAction(new CartItem(product, 1)));
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
                            <button className="btn btn-primary" onClick={() => addToCart(item)}>Add To Cart</button>
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