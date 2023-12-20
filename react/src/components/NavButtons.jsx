import React from 'react';
import Button from './Button';

function NavButtons({ handleNavClick }) {
    return (
        <div className="nav-buttons">
            <Button label="Home" handleClick={() => handleNavClick('home')} />
            <Button label="Profile" handleClick={() => handleNavClick('profile')} />
            <Button label="Settings" handleClick={() => handleNavClick('settings')} />
        </div>
    );
}

export default NavButtons;
