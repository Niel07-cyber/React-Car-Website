import React from 'react';
import { NavLink } from 'react-router-dom';

function Logo() {
    return (
        <NavLink to="/">
            <img 
                src={process.env.PUBLIC_URL + "/assets/image/logo.png"} 
                alt="Logo"
                style={{ width: '100px', height: 'auto' }} // Adjust width and height as needed
            />
        </NavLink>
    );
}

export default Logo;
