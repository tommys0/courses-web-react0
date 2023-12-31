# Optional homework
## Description

This repository contains my optional homework assignment for a React-based website development course with WAR. The original task involved transforming a design from an image into code, rendering the design, and scripting the rendering of course cards. Each card features an "Enroll" button that triggers an alert displaying the course name upon click.

### Main Tasks of the Original Homework:
- Transforming a design from an image into functional code using React.
- Rendering course cards with details like course name, location, date, speaker, and an "Enroll" button functionality triggering an alert with the course name.

### Additional Features Implemented:
- **Dynamic Content Changes:** Added functionality to change sections on the main page by clicking buttons in the navbar.
- **Custom Speaker and Location Cards:** Added custom cards displaying speakers and locations.
  
### Implemented Functions for Rendering Cards:
- **Course Cards:** Render course details and an "Enroll" button triggering an alert with the course name.
- **Speaker Cards:** Organize courses based on speakers, displaying their names and associated courses.
- **Location Cards:** Group courses by location, showing location names and related courses.

The `renderCourseCards`, `renderSpeakerCards`, and `renderLocationCards` functions utilize operations similar to `map` and `forEach` to organize and render the course, speaker, and location cards based on the provided data.

### How to Use
1. **Clone** this repository: `git clone <repository_url>`.
2. Navigate to the project directory.
3. **Install** dependencies: `npm install`.
4. **Start** the development server: `npm start`.
5. **View** the project in a web browser at `http://localhost:3000` (or the specified URL).

Feel free to explore the project to interact with the added features and examine the card rendering functionality.
