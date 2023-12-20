import React from 'react';
import Button0 from './Button0';

function NavButtons({ handleNavClick }) {
    return (
        <div className="nav-buttons">
            <Button0 label="Home" handleClick={() => handleNavClick('home')} />
            <Button0 label="Courses" handleClick={() => handleNavClick('courses')} />
            <Button0 label="Speakers" handleClick={() => handleNavClick('speakers')} />
            <Button0 label="Locations" handleClick={() => handleNavClick('locations')} />
        </div>
    );
}

export default NavButtons;
