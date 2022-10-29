import React from 'react';
import CartCard from '../CartCad/CartCard';
import './Cart.css'

const Cart = (props) => {
    let cart = props.cart;
    let addToCart = props.addToCart;
    let decreaseCart = props.decreaseCart;

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
    grandTotal += (totalPrice + tax + shippingFee);

    // working for random card selection
    let random = Math.floor(Math.random() * cart.length);
    
    console.log(cart[random]);

    function openModal(){
        document.querySelector('.modal-parent').classList.add('active');
    }

    
    
    
    return (
        <div className="cart-div">
            <div className="modal-parent">
                <div className="modal">
                    <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, assumenda, omnis quibusdam provident maxime magnam nam facere culpa quisquam quam id ipsam! Harum modi perferendis corrupti, distinctio reiciendis odit natus, in repellendus quia maiores, aspernatur voluptatum est vel voluptates qui ad quas expedita provident omnis? Non deserunt nobis adipisci aspernatur.</h4>
                </div>
            </div>
            <div className="calculation-div">
                <h2>Order summary : </h2>
                <p>Total Added : {quantity} </p>
                <p>Total Price : ${totalPrice} </p>
                <p>Tax : ${tax}</p>
                <p>Shipping Charge : ${shippingFee}</p>
                <h2>Grand Total : ${grandTotal} </h2>
            </div>
            <div className="random-chooser">
                <button onClick={openModal}>Choose 1 For Me</button>
            </div>
            <div className="show-div">
                {
                    cart.map(index=><CartCard
                        index = {index}
                        key = {index.id}
                        addToCart = {addToCart}
                        decreaseCart = {decreaseCart}
                    ></CartCard>)
                }
            </div>
        </div>
    );
};

export default Cart;