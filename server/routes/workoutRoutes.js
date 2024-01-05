const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');

// Route to post a new workout
router.post('/', workoutController.addWorkout);

// Route to get all workouts for a user
router.get('/:userId', workoutController.getUserWorkouts);

export { router as workoutRoutes };
