import React from 'react';
import ActiveDays from '../components/ActiveDays';

const Workouts = () => {
    const workoutDays = ['2023-12-01', '2023-12-03', '2023-12-05'];

  return (
    <div>
      <h1>Workouts</h1>
      <ActiveDays workoutDays={workoutDays} />
      
    </div>
  );
};

export default Workouts;
