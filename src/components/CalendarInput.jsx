import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarInput = ({ selectedDate, onChange }) => {
  return (
    <div className="calendar-input-container">
      <label htmlFor="workout-date" className="workout-date-label">
        Workout Date:
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        id="workout-date"
        className="datepicker-custom"
      />
    </div>
  );
};

export default CalendarInput;
