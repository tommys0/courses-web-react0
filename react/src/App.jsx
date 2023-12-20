import React, { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import CourseSection from "./components/Sections/courseSection.jsx";
import SpeakerSection from "./components/Sections/speakerSection.jsx";
import LocationSection from "./components/Sections/locationSection.jsx";
import MainSection from "./components/sections/mainSection.jsx";

function App() {
    const [activeSection, setActiveSection] = useState('home');

    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div>
            <NavBar handleNavClick={handleNavClick} />
            <div className="main-content">
                {activeSection === 'courses' && <CourseSection />}
                {activeSection === 'speakers' && <SpeakerSection />}
                {activeSection === 'locations' && <LocationSection />}
                {activeSection === 'home' && <MainSection/>}
            </div>
        </div>
    );
}

export default App;
