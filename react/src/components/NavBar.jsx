import Logo from "./Logo.jsx";
import React from 'react';
import NavButtons from './NavButtons';

function NavBar() {
    return (
        <nav>
            <Logo/>
            <NavButtons />
        </nav>
    );
}

export default NavBar;
