import React, { useEffect, useState } from 'react';
import { addToDb } from '../../Utilites/storage';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Body.css'

const Body = () => {

    //---------------------------------------------- fetching data from api 
    const[products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('cycle.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    //---------------------------------------------- saving data to local storage
    function addToCart(element){
        addToDb(element.id);        
    }

    //---------------------------------------------- getting data from local storage
    

    return (
        <div className="body-div">
            <div className="left-side">
            {
                products.map(index=><Products
                    index={index}
                    key = {index.id}
                    addToCart = {addToCart}
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