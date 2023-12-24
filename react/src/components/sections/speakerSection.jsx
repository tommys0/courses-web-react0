import React from 'react';
import {renderSpeakerCards} from "../cardComponents.jsx";
import data from "../data/myData.jsx";

const speakerSection = () => {
    return (
        <div className={'speakerCardContainer'}>
            {renderSpeakerCards(data)}
        </div>
    );
};

export default speakerSection;
