const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/user.controller');

const {loginUser} = require('../controllers/loginUser.controller')

router.post('/register', createUser);

router.post('/login', loginUser);

// Add other user-related routes here

module.exports = router;
