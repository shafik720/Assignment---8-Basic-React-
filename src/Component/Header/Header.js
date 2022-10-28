import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className="header-div">
            <div className="left-side">
                <span><FontAwesomeIcon icon={faUserTie} /></span>
                <h2>Gentelmen's Cart</h2>
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