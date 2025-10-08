//08-10-2025
const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/user');

router.get('/users', getUsers);

module.exports = router;