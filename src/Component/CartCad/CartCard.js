import React from 'react';
import './CartCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const CartCard = (props) => {
    const{id, price, quantity, img} = props.index;
    return (
        <div className="cart-card">
            <div className="cart-left">
                <div className="cart-img">
                    <img src={img} alt=""/>
                </div>
                <div className="cart-details">
                    <p>Price : ${price}</p>
                    <p>Quantity : {quantity}</p>
                </div>
            </div>
            <div className="cart-right">
                <span onClick={()=>props.addToCart(props.index)} draggable><FontAwesomeIcon icon={faPlus} /></span>
                <span draggable><FontAwesomeIcon icon={faMinus} /></span>
            </div>
        </div>
    );
};

export default CartCard;