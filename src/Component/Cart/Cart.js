import React from 'react';
import './Cart.css'

const Cart = (props) => {
    let cart = props.cart;
    return (
        <div className="cart-div">
            <h2>Order summary : </h2>
            <p>Total Added : {cart.length} </p>
        </div>
    );
};

export default Cart;