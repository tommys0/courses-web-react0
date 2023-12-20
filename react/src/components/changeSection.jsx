import React, { useState } from 'react';
import NavButtons from './NavButtons';
import CoursesSection from "./sections/coursesSection.jsx";
import SpeakersSection from "./sections/speakersSection.jsx";
import LocationsSection from "./sections/locationsSection.jsx";

function ChangeSection() {
    const [currentSection, setCurrentSection] = useState('courses');

    const handleNavClick = (section) => {
        setCurrentSection(section);
    };

    return (
        <div>
            <NavButtons handleNavClick={handleNavClick} />
            {currentSection === 'courses' && <CoursesSection/>}
            {currentSection === 'speakers' && <SpeakersSection />}
            {currentSection === 'locations' && <LocationsSection />}
        </div>
    );
}

export default ChangeSection;
