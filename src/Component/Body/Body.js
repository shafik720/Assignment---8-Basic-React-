import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Body.css'

const Body = () => {
    const[products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('cycle.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="body-div">
            <div className="left-side">
            {
                products.map(index=><Products
                    index={index}
                    key = {index.id}
                ></Products>)
            }
            </div>
            <div className="right-side">
                <Cart></Cart>
            </div>
            
            
        </div>
    );
};

export default Body;