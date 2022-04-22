import React, { Component } from 'react';
import { Product } from '../../models/Product';

interface EditProductProps{
    product: Product;
}

interface EditProductState{
    currentProduct: Product | null
}

class EditProduct extends Component<EditProductProps,EditProductState>{

    state: EditProductState = {
        currentProduct : null
    }

    constructor(props: EditProductProps){
        super(props);
        this.state.currentProduct = props.product;
        console.log("[EditProduct] constructor" )
    }

    // static getDerivedStateFromProps(nextProps: EditProductProps, currentState: EditProductState){

        
    //     //if there is a state change then return the new state
    //     if(nextProps.product.id !== currentState.currentProduct?.id){
    //         return {
    //             currentProduct: nextProps.product
    //         }
    //     };
        
    //     //if there is no state change return null
    //     return null;
    // }

    render(): React.ReactNode {

        //destucturing
        const {currentProduct} = this.state;

        return (
            <div>
                <h3>EditProduct : {currentProduct?.id}</h3>

                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" value={currentProduct?.name}/>
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <input id="price" type='number' value={currentProduct?.price}/>
                </div>

                <div>
                    <label htmlFor="desc">Description</label>
                    <input id="desc" value={currentProduct?.description}/>
                </div>
                <div>
                    <button>Save</button>&nbsp;
                    <button>Cancel</button>
                </div>
            </div>
        )
    }
} 
export default EditProduct;