import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css'

const HomePage = () => {
    return (
        <div className = "HomePage-container">            
                <p>Dont Have an Account?</p>
            <div className="HomePage-links">
                <Link to = '/login'>
                Login
                </Link>
                <Link to = '/register'>
                Register
                </Link>
            </div>
        </div>
    );
};

export default HomePage; 