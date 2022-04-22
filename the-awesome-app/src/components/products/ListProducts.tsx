import React, { Component } from 'react';
import axios from 'axios';
import { Product } from '../../models/Product';
import "./ListProducts.css";

interface ListProductsProps{

}

interface ListProductsState{
    
    products: Array<Product>;
}

class ListProducts extends Component<ListProductsProps, ListProductsState>{

    state: ListProductsState = {
        products: []
    }

    async componentDidMount(){

        const url = "http://localhost:9000/products";
        // var promise = axios.get(url);
        // //promise.then(successCallback, errorCallback)
        // promise.then((response) => {
        //     console.log("success", response);
        // }, (error) => {
        //     console.log("error", error);
        // });

        //async-await => ES7 
        // Works on promises
        // write async operation code in a sync-style

        try {
            //response resolved from the promise(success)
            const response = await axios.get<Array<Product>>(url);
            console.log("success", response);
            const allProducts = response.data;
            this.setState({
                products: allProducts
            });

        } catch (error) {
            
            //error resolved from the promise(failed)
            console.log("error", error);
        }
    }

    deleteProduct = async (product: Product, index: number) => {

        const url = "http://localhost:9000/products/" + product.id;

        try {
            
            const response = await axios.delete(url);
           

            //updating the client
            // copy of products
            const copy_of_products = [...this.state.products];
            copy_of_products.splice(index, 1);
            this.setState({
                products: copy_of_products
            }, () => {
                alert("Deleted record with ID: " + product.id);
            });

            
        } catch (error) {
            
            alert("Failed to delete record with ID: " + product.id);
        }
    }

    renderProducts(){

        const result =  this.state.products.map((item, index)=> {

            return (
                <div key={item.id}  className='product'>
                    <p>Id: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Price: {item.price}</p>
                    <p>Description: {item.description}</p>
                    <div>
                        <button onClick={() => {this.deleteProduct(item, index)}}>Delete</button>&nbsp;
                        {/* <button onClick={this.deleteProduct.bind(this, item, index)}>Delete</button>&nbsp; */}
                        <button>Edit</button>
                    </div>
                </div>

            );
        });
        console.log("renderProducts", result);
        return result;
    }

    render(): React.ReactNode {
        return (
            <div>
                <h3>List Products</h3>
                <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                    {this.renderProducts()}
                </div>
            </div>
        )
    }
}

export default ListProducts;