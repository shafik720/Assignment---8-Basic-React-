import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-div">
            <div className="left-side">

            </div>
            <div className="right-side">
                <a href="/home">Home</a>
                <a href="/home">About</a>
                <a href="/home">Contact</a>
                <a href="/home">Menu</a>
                <a href="/home">Shop</a>
            </div>
        </div>
    );
};

export default Header;