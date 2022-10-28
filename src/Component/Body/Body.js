import React, { useEffect, useState } from 'react';
import { addToDb, getCartValue } from '../../Utilites/storage';
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
    let [added, setAdded] = useState([]);
    function addToCart(element){
        let freshCart = [];
        addToDb(element.id);        
        freshCart.push(element);
        setAdded(freshCart);
    }

    //---------------------------------------------- getting data from local storage
    let [cart, setCart] = useState([]);
    useEffect(()=>{
        let storedCart = getCartValue();
        let newCart = [];
        for(let id in storedCart){
            let addedProduct = products.find(index=> index.id == id);
            if(addedProduct){
                addedProduct.quantity = storedCart[id];
                newCart.push(addedProduct);                
            }
            setCart(newCart);
        }
    },[products, added])

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
                <Cart cart={cart}></Cart>
            </div>
            
            
        </div>
    );
};

export default Body;