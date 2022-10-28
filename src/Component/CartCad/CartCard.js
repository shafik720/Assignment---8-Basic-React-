import React from 'react';
import './CartCard.css'

const CartCard = (props) => {
    return (
        <div className="cart-card">
            <div className="cart-left">
                <div className="cart-img"></div>
                <div className="cart-details"></div>
            </div>
            <div className="cart-right"></div>
        </div>
    );
};

export default CartCard;