import React from 'react';
import {renderSpeakerCards} from "../cardComponents.jsx";
import data from "../data/myData.jsx";

const speakerSection = () => {
    return (
        <div>
            <h2>Speakers Section</h2>
            {renderSpeakerCards(data)}
        </div>
    );
};

export default speakerSection;
