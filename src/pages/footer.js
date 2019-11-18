import React from 'react';
import { Link  } from "react-router-dom";

//setting styles
import './footer.css';

const Footer = () => {
    return (
        <div className = "footer-wrapper">
            <div className= 'footer-summary'>
                <h2>Hot Spot</h2>
                <p>Copyright ©2019 Hot Spot. All rights reserved</p>
            </div>
            
            <div className="footer-links">
            <Link to= '/'>
                    <p>Home</p>
                </Link>
                <Link to = '/profile'>
                    <p>Settings/Profile</p>
                </Link>
            </div>
        </div>
    );
};

export default Footer; 