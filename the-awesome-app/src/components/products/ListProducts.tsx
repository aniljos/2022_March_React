import React, { Component, PureComponent } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { Product } from '../../models/Product';
import "./ListProducts.css";
import EditProduct from './EditProduct';
import {connect} from 'react-redux';
import { AppDispatch, AppState } from '../../redux/store';
import { AuthState } from '../../redux/authReducer';


interface ListProductsProps{
    auth: AuthState,
    updateAccessToken: (token: string) => void
}

interface ListProductsState{
    
    products: Array<Product>;
    selectedProduct : Product | null;
}

class ListProducts extends Component<ListProductsProps, ListProductsState>{

    
    state: ListProductsState = {
        products: [],
        selectedProduct : null
    }
    url: string = "";

    editProductRef = React.createRef<EditProduct>();

    constructor(props: ListProductsProps){
        super(props);
        console.log("[ListProducts] constructor");
        if(process.env.REACT_APP_PRODUCTS_URL){
            this.url = process.env.REACT_APP_PRODUCTS_URL ;
        }
        
    }

    async componentDidMount(){

        console.log("[ListProducts] componentDidMount");
        //const url = "http://localhost:9000/products";
        // var promise = axios.get(url);
        // //promise.then(successCallback, errorCallback)
        // promise.then((response) => {
        //     console.log("success", response);
        // }, (error) => {
        //     console.log("error", error);
        // });

        
        this.fetchProducts();

       
    }


    async fetchProducts(){


        //async-await => ES7 
        // Works on promises
        // write async operation code in a sync-style
        try {
            //response resolved from the promise(success)

            // const config: AxiosRequestConfig = {
            //     headers: {
            //         Authorization : "Bearer " + this.props.auth.accessToken
            //     }
            // }
            //const response = await axios.get<Array<Product>>(this.url, config);

            
            const response = await axios.get<Array<Product>>(this.url);
            //console.log("success", response);
            const allProducts = response.data;
            this.setState({
                products: allProducts
            });

        } catch (error: any) {
            
            console.log("error", error);
            if(error && error.response && error.response.status === 403){

                try {
                    const refreshUrl = "http://localhost:9000/refreshToken";
                    const refreshResponse 
                        = await axios.post(refreshUrl, {token: this.props.auth.refreshToken})
                    const newAccessToken = refreshResponse.data.accessToken;
                    this.props.updateAccessToken(newAccessToken);
                    this.fetchProducts();


                } catch (error) {
                    console.log("refresh token error", error);
                }
            }
            //error resolved from the promise(failed)
            
        }

    }

    deleteProduct = async (product: Product, index: number) => {

        const url = this.url + "/" + product.id;

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

        const url = this.url + "/" + updatedProduct.id;
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
                <div data-testid="product" key={item.id}  className='product'>
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

const mapStateToProps = (state: AppState) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch: AppDispatch)=> {
    return {

        updateAccessToken: (token: string) => {dispatch({type: "UPDATE_ACCESS_TOKEN", token: token})}
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
//export default ListProducts;