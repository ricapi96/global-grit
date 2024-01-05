import express from 'express';
// import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js'; 
import { workoutRoutes } from './routes/workoutRoutes.js'; 

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Wave Walker API' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

