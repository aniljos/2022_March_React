import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from '../../models/CartItem';
import { createRemoveFromCartAction } from '../../redux/actionCreators';

import { AppDispatch, AppState } from '../../redux/store';

// function foo(id: number, type: string) : number{

//     return 100;
// }

// const bar = (id: number, type: string): void => {

// }


function ViewCart(){

    const cart = useSelector((state: AppState) => state.gadgets.cart);
    const dispatch = useDispatch<AppDispatch>();

    function remove(cartItem: CartItem){

        // dispatch({
        //     type: "REMOVEFROMCART",
        //     productId: cartItem.product.id
        // })

        dispatch(createRemoveFromCartAction(cartItem.product.id));
    }

     return (
        <div>
            <h3>Cart</h3>
            {cart.length === 0 ?<div className='alert alert-secondary'>
                No Items in the cart.
            </div> : null}
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {cart.map((item, index) => {
                    return (
                        <div className="col" key={index}>
                            <div className="card bg-light mb-3 border-success">
                                <p className="card-header">{item.product.name}</p>
                                <div className="card-body">
                                    <p className="card-text">{item.product.description}</p>
                                    <p className="card-text">Quantity: {item.quantity}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success" onClick={() => { remove(item) }}>Remove</button>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ViewCart;