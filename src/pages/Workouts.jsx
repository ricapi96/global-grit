import React, { useState } from 'react';
import ActiveDays from '../components/ActiveDays';
import './Workouts.css';


const Workouts = () => {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const workoutDays = ['12-01-23', '12-02-23', '12-03-23'];

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log({ activity, duration });
  };

  return (
    <div>
      <h1>Workouts</h1>
      <ActiveDays workoutDays={workoutDays} />
      <div className="form-container">
    <form onSubmit={handleSubmit}>
    <div className="form-element">
      <label htmlFor="activity-select">Choose an activity:</label>
      <select
        id="activity-select"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      >
        <option value="">--Please choose an option--</option>
        <option value="running">Running</option>
        <option value="cycling">Cycling</option>
        <option value="swimming">Swimming</option>
        <option value="yoga">Yoga</option>
        <option value="other">Other</option>
      </select>
      </div>

      {activity === 'other' && (
        <input
          type="text"
          placeholder="Please specify the activity"
          onChange={(e) => setActivity(e.target.value)}
        />
      )}
<div className="form-element">
      <label htmlFor="duration-input">Duration (minutes):</label>
      <input
        id="duration-input"
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Enter duration in minutes"
      />
      </div>

      {/* Add more inputs as needed */}

      <button type="submit">Submit</button>
    </form>
    </div> 
    </div>
    
  );
};

export default Workouts;

