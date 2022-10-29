import React, { useEffect, useState } from 'react';
import { addToDb, decreaseDb, getCartValue } from '../../Utilites/storage';
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

    //---------------------------------------------- decrease value from localstorage 
    let[decreased, setDecreased]  =   useState([]);
    let newCart = [];
    function decreaseCart(element){     
        decreaseDb(element.id);
        newCart.push(element);
        setDecreased(newCart);
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
    },[products, added, decreased])

    // console.log(products);

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
                <Cart 
                cart={cart}
                addToCart = {addToCart}
                decreaseCart = {decreaseCart}
                products = {products}
                ></Cart>
            </div>
            
            
        </div>
    );
};

export default Body;