import React from 'react';
import './Products.css'

const Products = (props) => {
    
    const {name, id, price, img}  = props.index;
    console.log(name);
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
                <div draggable className="body-right">
                    <h3>Add To Cart</h3>
                </div>
            </div>
        </div>
    );
};

export default Products;