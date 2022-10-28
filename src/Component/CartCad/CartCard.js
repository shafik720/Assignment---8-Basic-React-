import React from 'react';
import './CartCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

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
            <div className="cart-right">
                <span><FontAwesomeIcon icon={faPlus} /></span>
                <span><FontAwesomeIcon icon={faMinus} /></span>
            </div>
        </div>
    );
};

export default CartCard;