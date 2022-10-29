import React, { useEffect, useState } from 'react';
import { addToDb, decreaseDb, getCartValue } from '../../Utilites/storage';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBiking, faDragon } from '@fortawesome/free-solid-svg-icons';

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
        <div className="">
            <div className="greetings">
                <h1>Welcome to Dragon's Ride</h1>
                <h1>Start Riding <span className="header-icon"><FontAwesomeIcon icon={faPersonBiking} /></span> instead of Riding <span className="header-icon"><FontAwesomeIcon icon={faDragon} /></span>  </h1>
            </div>
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
            
            
            
        </div>
    );
};

export default Body;