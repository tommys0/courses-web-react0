import React from 'react';
import Logo from './Logo';
import NavButtons from './NavButtons';
import '../index.css';

function NavBar() {
    return (
        <nav className="navbar">
            <Logo />
            <NavButtons />
        </nav>
    );
}

export default NavBar;
