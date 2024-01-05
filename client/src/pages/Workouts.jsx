import React, { useState, useEffect } from "react";
import CalendarInput from "../components/CalendarInput";
import "./Workouts.css";

const Workouts = () => {
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem("workouts"));
    if (storedWorkouts) {
      setSubmittedData(storedWorkouts);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newWorkout = {
      activity,
      duration,
      date: selectedDate.toISOString(),
    };
    const updatedWorkouts = [...submittedData, newWorkout];
    setSubmittedData(updatedWorkouts);
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
  };

  const handleClearForm = () => {
    setActivity("");
    setDuration("");
    setSelectedDate(new Date());
  };

  const handleDeleteWorkout = (indexToDelete) => {
    const updatedWorkouts = submittedData.filter((_, index) => index !== indexToDelete);
    setSubmittedData(updatedWorkouts);
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
  };

  return (
    <div>
      <h1 className="workout-title">Your Workouts</h1>
      <CalendarInput selectedDate={selectedDate} onChange={setSelectedDate} />
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

          {activity === "other" && (
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

          <div className="form-actions">
            <button type="button" onClick={handleClearForm}>
              Clear
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      <div className="submitted-info-container">
        {submittedData.map((workout, index) => (
          <div className="submitted-info" key={index}>
            <p>Date: {new Date(workout.date).toLocaleDateString()}</p>
            <p>Activity: {workout.activity}</p>
            <p>Duration: {workout.duration} minutes</p>
            <button onClick={() => handleDeleteWorkout(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
