const express = require('express');
const router = express.Router();
const { createPro } = require('../controllers/pro.controller');

router.post('/create', createPro);

// Add other product-related routes here

module.exports = router;
