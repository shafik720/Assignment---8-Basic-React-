import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBiking, faDragon } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className="header-divs">
            <div className="header-div">
                <div className="left-sides">
                    <span className="icon"><FontAwesomeIcon icon={faDragon} /></span>
                    <h2>Dragon's Ride</h2>
                </div>
                <div className="right-sides">
                    <a href="/home">Home</a>
                    <a href="/home">About</a>
                    <a href="/home">Contact</a>
                    <a href="/home">Menu</a>
                    <a href="/home">Shop</a>
                </div>
            </div>
        </div>
    );
};

export default Header;