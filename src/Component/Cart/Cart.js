import React from 'react';
import './Cart.css'

const Cart = (props) => {
    let cart = props.cart;
    let quantity = 0;
    for(let element of cart){
        quantity += element.quantity;
    }
    return (
        <div className="cart-div">
            <h2>Order summary : </h2>
            <p>Total Added : {quantity} </p>
        </div>
    );
};

export default Cart;