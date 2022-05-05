import { GadgetStoreAction } from './gadgetsReducer';
import { CartItem } from './../models/CartItem';

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