import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Products = (props) => {
    
    const {name, id, price, img}  = props.index;
    return (
        <div className="cardx">
            <div className="card-img">
                <img src={img} alt=""/>
            </div>
            <div className="card-body">
                <div className="body-left">
                    <h4>{name}</h4>
                    <p>Price : <span className="price">${price}</span>  </p>
                </div>
                <div onClick={()=>props.addToCart(props.index)} draggable className="body-right">
                    <h3>Add To <FontAwesomeIcon icon={faShoppingCart} /></h3>
                </div>
            </div>
        </div>
    );
};

export default Products;