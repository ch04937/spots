import React from 'react';
import { Link  } from "react-router-dom";

import './NavBar.css';

const NavBar = () => {
    return (
        <div className = "NavBar-container">            
            <div className="NavBar-links">
                <Link to='/chat' >
                    <p>Chat</p>
                </Link>
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

export default NavBar; 