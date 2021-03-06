import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";

export interface GadgetStoreState{
    cart : Array<CartItem>,
    products: Array<Product>,
    isProductsLoaded: boolean
}

const gadgetStoreState : GadgetStoreState = {
    cart: [],
    products: [],
    isProductsLoaded: false
};

// Action for ADDTOCART or REMOVEFROMCART
export interface GadgetStoreAction{

    type: string;
    cartItem?: CartItem;
    productId?: number,
    products?: Array<Product>
}

export const gadgetsReducer = 
        (state: GadgetStoreState=gadgetStoreState, action: GadgetStoreAction): GadgetStoreState => {

    //return the update state
    if(action.type === "ADDTOCART"){

        if(action.cartItem){
            const cart = [...state.cart];
            cart.push(action.cartItem);
            return {

                ...state,
                cart
            }
        }
        
    }

    if(action.type === "REMOVEFROMCART"){

        if(action.productId){
            const cart = [...state.cart];
            const index = cart.findIndex(item => item.product.id === action.productId);
            if(index !== -1){
                cart.splice(index, 1);
                return {
                    ...state,
                    cart
                }
                //state.cart = cart; // won't work

                //state = { ...state, cart}; // will worl
                return state;
            }
        }
    }

    if(action.type === "SAVEPRODUCTS"){

        if(action.products){
            return {

                ...state,
                products: action.products,
                isProductsLoaded: true
            }
        }
        
    }

    return state;
}

