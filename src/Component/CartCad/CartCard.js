import React from 'react';
import './CartCard.css'

const CartCard = (props) => {
    const{name, price, quantity, img} = props.index;
    return (
        <div className="cart-card">
            <div className="cart-left">
                <div className="cart-img">
                    <img src={img} alt=""/>
                </div>
                <div className="cart-details">
                    <p>{price}</p>
                    <p>{quantity}</p>
                </div>
            </div>
            <div className="cart-right"></div>
        </div>
    );
};

export default CartCard;