import React from 'react';
import './Cart.css'

const Cart = (props) => {
    let cart = props.cart;
    let quantity = 0;
    let totalPrice = 0;
    let shippingFee = 0;
    let tax = 0;
    let grandTotal = 0;
    for(let element of cart){
        quantity += element.quantity;
        totalPrice += (element.price * element.quantity);   
        shippingFee += (element.quantity * 100);
    }
    if(totalPrice>8000){
        shippingFee = 0 ;
    }
    tax = (totalPrice * 0.1);
    grandTotal += (totalPrice + tax + shippingFee)
    return (
        <div className="cart-div">
            <h2>Order summary : </h2>
            <p>Total Added : {quantity} </p>
            <p>Total Price : ${totalPrice} </p>
            <p>Tax : ${tax}</p>
            <p>Shipping Charge : ${shippingFee}</p>
            <h2>Grand Total : ${grandTotal} </h2>
        </div>
    );
};

export default Cart;