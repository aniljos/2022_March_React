import { Product } from './../models/Product';
import { AppDispatch } from './store';
import { GadgetStoreAction } from './gadgetsReducer';
import { CartItem } from './../models/CartItem';
import axios from 'axios';

export const createAddToCartAction = (cartItem: CartItem): GadgetStoreAction => {

    return {
        type: "ADDTOCART",
        cartItem: cartItem
    }
}

export const createRemoveFromCartAction = (productId: number): GadgetStoreAction => {
    return {
        type: "REMOVEFROMCART",
        productId: productId
    }
}

export const createSaveProductsAction = () => {

    return async (dispatch: AppDispatch) => {

        try {
            const url = process.env.REACT_APP_PRODUCTS_URL;
            if(url){
                const response = await axios.get<Array<Product>>(url);
                dispatch({
                    type: "SAVEPRODUCTS",
                    products: response.data
                })
            }
            

        } catch (error) {
            
        }

    }

}