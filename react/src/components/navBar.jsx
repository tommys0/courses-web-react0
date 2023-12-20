import React from 'react';
import Logo from './Logo';
import NavButtons from './NavButtons';

function NavBar({ handleNavClick }) {
    return (
        <nav className="navbar">
            <Logo />
            <NavButtons handleNavClick={handleNavClick} />
        </nav>
    );
}

export default NavBar;
