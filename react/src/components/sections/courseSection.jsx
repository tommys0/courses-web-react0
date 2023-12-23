import React from 'react';
import { renderCourseCards } from '../cardComponents.jsx';
import data from '../data/myData';
import '../../index.css'

const CourseSection = () => {
    return (
        <>
            <div className={'courseCard'}>
                {renderCourseCards(data)}
            </div>
        </>
    );
};

export default CourseSection;
