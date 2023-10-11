// CourseDetail.js
import React from 'react';

const CourseDetail = ({ course }) => {
  // Render detailed information about the course
  return (
    <div>
      <h2>{course.name}</h2>
      <p>{course.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CourseDetail;
