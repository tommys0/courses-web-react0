import React from 'react';
import {renderLocationCards} from "../cardComponents.jsx";
import data from "../data/myData.jsx";

const locationSection = () => {
    return (
        <div>
            <h2>Locations Section</h2>
            {renderLocationCards(data)}
        </div>
    );
};

export default locationSection;
