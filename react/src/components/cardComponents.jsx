import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div className="course-card">
            <h3 className="course-name">
                {course.name}
                {course.isNew && <span className="new-status">New</span>}
            </h3>
            <p className="course-location">Location: {course.location}</p>
            <p className="course-date">Date: {course.date}</p>
            <button className="enroll-btn">Enroll</button>
            <p className="speaker-name">Speaker: {course.speaker}</p>
        </div>
    );
};

const SpeakerCard = ({ speaker, courses }) => {
    return (
        <div className="card">
            <h3>{speaker}</h3>
            <p>Courses: {courses.join(', ')}</p>
        </div>
    );
};

const LocationCard = ({ location, courses }) => {
    return (
        <div className="card">
            <h3>{location}</h3>
            <p>Courses: {courses.join(', ')}</p>
        </div>
    );
};

function renderCourseCards(data) {
    return data.map((course, index) => (
        <CourseCard key={index} course={course} />
    ));
}

function renderSpeakerCards(data) {
    const speakerMap = {};
    data.forEach((course) => {
        if (!speakerMap[course.speaker]) {
            speakerMap[course.speaker] = [];
        }
        speakerMap[course.speaker].push(course.name);
    });

    return Object.keys(speakerMap).map((speaker, index) => (
        <SpeakerCard key={index} speaker={speaker} courses={speakerMap[speaker]} />
    ));
}

function renderLocationCards(data) {
    const locationMap = {};
    data.forEach((course) => {
        if (!locationMap[course.location]) {
            locationMap[course.location] = [];
        }
        locationMap[course.location].push(course.name);
    });

    return Object.keys(locationMap).map((location, index) => (
        <LocationCard key={index} location={location} courses={locationMap[location]} />
    ));
}

export { renderCourseCards, renderSpeakerCards, renderLocationCards };