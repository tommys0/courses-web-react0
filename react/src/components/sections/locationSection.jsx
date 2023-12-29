import React from 'react';
import {renderLocationCards} from "../cardComponents.jsx";
import data from "../data/myData.jsx";

const locationSection = () => {
    return (
        <div className={'locationCardContainer'}>
            {renderLocationCards(data)}
        </div>
    );
};

export default locationSection;
