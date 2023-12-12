const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// register a new user
router.post('/register', userController.registerUser);

// login a user
router.post('/login', userController.loginUser);

module.exports = router;
