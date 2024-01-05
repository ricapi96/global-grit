import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';

const router = express.Router();

// register a new user
router.post('/register', registerUser);

// login a user
router.post('/login', loginUser);

export default router;
