import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarInput = ({ selectedDate, onChange }) => {
  return (
    <div>
      <label htmlFor="workout-date">Workout Date:</label>
      <DatePicker 
        selected={selectedDate}
        onChange={onChange}
        id="workout-date"
      />
    </div>
  );
};

export default CalendarInput;
