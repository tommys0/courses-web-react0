import React from 'react';
import Button0 from './Button0';

function NavButtons({ handleNavClick, activeSection }) {
    return (
        <div className="nav-buttons">
            {activeSection !== 'home' && (
                <Button0
                    label="Home"
                    handleClick={() => handleNavClick('home')}
                />
            )}
            <Button0
                label="Courses"
                handleClick={() => handleNavClick('courses')}
                active={activeSection === 'courses'}
            />
            <Button0
                label="Speakers"
                handleClick={() => handleNavClick('speakers')}
                active={activeSection === 'speakers'}
            />
            <Button0
                label="Locations"
                handleClick={() => handleNavClick('locations')}
                active={activeSection === 'locations'}
            />
        </div>
    );
}

export default NavButtons;
