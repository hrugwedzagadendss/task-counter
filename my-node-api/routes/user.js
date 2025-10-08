//08-10-2025
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user'); // Renamed variable

router.get('/', userController.getUsers);

module.exports = router;