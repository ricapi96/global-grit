const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  activity: {
    type: String,
    required: true
  },
  duration: {
    type: Number, // Duration in minutes
    required: true
  },
  
  // intensity, calories burned, etc.
});

const Workout = mongoose.model('Workout', workoutSchema);