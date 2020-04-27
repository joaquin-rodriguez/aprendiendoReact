import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
    const navStyle = {
        color: "white"
    };

    return (
        <nav>
            <button />
            <img className='mini-logo' src="https://www.kindpng.com/picc/m/262-2627723_transparent-travel-agency-logo-hd-png-download.png" />
            <ul className='nav-links'>
                <Link style={navStyle} to='/Shop'>
                    <li>Shop</li>
                </Link>
                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
            </ul>
        </nav >
    );
}

export default Nav;