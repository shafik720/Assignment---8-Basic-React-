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
                    <p>Price : ${price} </p>
                </div>
                <div className="body-right"></div>
            </div>
        </div>
    );
};

export default Products;