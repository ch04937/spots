import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className = "footer-wrapper">
            <div className= 'footer-summary'>
                <h2>Hot Spot</h2>
                <p>Copyright ©2019 Hot Spot. All rights reserved</p>
            </div>
            
            <div className="footer-links">
                <p>Support</p>
                <p>Careers</p>
                <p>About</p>
                <p>Contact Us</p>
            </div>
        </div>
    );
};

export default Footer; 