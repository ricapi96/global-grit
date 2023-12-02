import React from 'react';

const ActiveDays = ({ workoutDays }) => {
  return (
    <div className="active-days">
      <h2>Active Days</h2>
      <ul>
        {workoutDays.map((day, index) => (
          <li key={index}>{day}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveDays;
