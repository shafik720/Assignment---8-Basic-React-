import React from 'react';
import CartCard from '../CartCad/CartCard';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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

    //---------------------------- working for random card selection    
    let random = 0;
    let randomized ;

    function openModal(){
        random = Math.floor(Math.random() * cart.length);
        randomized = cart[random];
        let modalParent = document.querySelector('.modal-parent');
        let modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = `
            <img src="${randomized.img}" alt=""/>
            <h2>${randomized.name}</h2> 
            <h3>$${randomized.price}</h3> 
        `;
  
        let crossBtn = document.querySelector('.cross-icon');
        modalParent.classList.add('active');
        crossBtn.addEventListener('click',()=>{
            modalParent.classList.remove('active');
        })
    }

    function choseAgain(){        
        let modalParent = document.querySelector('.modal-parent');
        modalParent.classList.remove('active');
        openModal();
    }

    
    
    return (
        <div className="cart-div">
            <div className="modal-parent">
                <div className="modal">
                    <div className="modal-body">                        
                    </div>
                    <button onClick={choseAgain}>Choose Again</button>
                    <div className="cross-icon">
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
            </div>
            <div className="calculation-div">
                <h2>Order summary : </h2>
                <p>Total Added : {quantity} </p>
                <p>Total Price : ${totalPrice} </p>
                <p>Tax : ${tax}</p>
                <p>Shipping Charge : ${shippingFee}</p>
                <p>( Shipping is <span style={{color:'blue', fontWeight:'600'}}>Free</span> for Order more Than <span style={{color:'blue'}}>8000/-</span>) </p>
                <h2>Grand Total : ${grandTotal} </h2>
            </div>
            <div className="random-chooser">
                <button onClick={openModal}>Choose 1 For Me</button>
                <button onClick={props.deleteAll}>Choose Again</button>
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