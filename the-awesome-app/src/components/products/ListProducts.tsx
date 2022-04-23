import React, { Component, PureComponent } from 'react';
import axios from 'axios';
import { Product } from '../../models/Product';
import "./ListProducts.css";
import EditProduct from './EditProduct';

interface ListProductsProps{

}

interface ListProductsState{
    
    products: Array<Product>;
    selectedProduct : Product | null;
}

class ListProducts extends PureComponent<ListProductsProps, ListProductsState>{

    state: ListProductsState = {
        products: [],
        selectedProduct : null
    }

    editProductRef = React.createRef<EditProduct>();

    constructor(props: ListProductsProps){
        super(props);
        console.log("[ListProducts] constructor");
    }

    async componentDidMount(){

        console.log("[ListProducts] componentDidMount");
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
            //console.log("success", response);
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

    editProduct = (product: Product, index: number)=>{
        this.setState({
            selectedProduct: product
        });
    }

    editCancel = (message: string)=> {
        this.setState({
            selectedProduct: null
        });
        alert(message);
    }

    editUpdate = async (updatedProduct: Product) => {
        console.log("ListProducts updatedProduct", updatedProduct);

        const url = "http://localhost:9000/products/" + updatedProduct.id;
        try {
            
            const response = await axios.put(url, updatedProduct);
            const products = [...this.state.products];
            const index = products.findIndex(item => item.id === updatedProduct.id);
            if(index !== -1){
                products[index] = updatedProduct;

                this.setState({
                    products
                });
            }
            alert("Updated the product" + updatedProduct.id)

        } catch (error) {
            alert("Failed to Update the product" + updatedProduct.id)
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
                        <button onClick={() => this.editProduct(item , index)}>Edit</button>
                    </div>
                </div>

            );
        });
        console.log("renderProducts", result);
        return result;
    }

    render(): React.ReactNode {

        console.log("[ListProducts] render");
        return (
            <div>
                <h3>List Products</h3>
                <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                    {this.renderProducts()}
                </div>

                <div>
                  {this.state.selectedProduct ? 
                        <EditProduct 
                            ref={this.editProductRef}
                            key={this.state.selectedProduct.id} 
                            product={this.state.selectedProduct}
                            onCancel={this.editCancel}
                            onSave={this.editUpdate}/> : null}
                </div>
                <div>
                    {this.state.selectedProduct ? 
                        <button onClick={()=> {
                            console.log(this.editProductRef); 
                            this.editProductRef.current?.invoke();
                        }}>View EditProduct Ref</button> 
                        : null}
                </div>
                <br/><br/><br/><br/><br/><br/>
            </div>
        )
    }

    componentWillMount(){
        console.log("[ListProducts] componentWillMount");
    }

    //update
    componentWillReceiveProps(){
        console.log("[ListProducts] componentWillReceiveProps");
    }
    // shouldComponentUpdate(nextProps: ListProductsProps, nextState: ListProductsState){
    //     console.log("[ListProducts] shouldComponentUpdate");
    //     return true;
    // }
    componentWillUpdate(){
        console.log("[ListProducts] componentWillUpdate");
    }
    //render(){}
    componentDidUpdate(){
        console.log("[ListProducts] componentDidUpdate");
    }

    //unmount
    componentWillUnmount(){
        console.log("[ListProducts] componentWillUnmount");
    }

}

export default ListProducts;