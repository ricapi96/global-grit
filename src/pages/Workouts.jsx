import React, { useState } from "react";
import CalendarInput from "../components/CalendarInput";
import "./Workouts.css";

const Workouts = () => {
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [submittedData, setSubmittedData] = useState({
    activity: "",
    duration: "",
    date: "",
  });

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmittedData({
      activity,
      duration,
      date: selectedDate.toDateString(),
    });

    console.log({ activity, duration, selectedDate });
  };

  const handleClearForm = () => {
    setActivity("");
    setDuration("");
    setSelectedDate(new Date());
    setSubmittedData({ activity: "", duration: "", date: "" });
  };

  return (
    <div>
      <h1>Workouts</h1>
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
            <label htmlFor="duration-input">Duration (minutes): </label>
            <input
              id="duration-input"
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Mins"
              className="duration-input"
            />
          </div>
          <div className="form-actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClearForm}>
              Clear Form
            </button>
          </div>
        </form>
      </div>

      {submittedData.activity && (
        <div className="submitted-info-container">
          <div className="submitted-info">
            <p>Date: {submittedData.date}</p>
            <p>Activity: {submittedData.activity}</p>
            <p>Duration: {submittedData.duration} minutes</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Workouts;
