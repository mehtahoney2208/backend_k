const express = require('express');
const router = express.Router();
const { createHotel } = require('../controllers/hotel.controller');

router.post('/create', createHotel);

// Add other hotel-related routes here

module.exports = router;
