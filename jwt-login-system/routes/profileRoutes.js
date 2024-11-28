

const express = require('express');
const authenticate = require('../middlewares/authenticate');
const { getProfile } = require('../controllers/profileController');
const router = express.Router();

router.get('/profile', authenticate, getProfile );

module.exports = router;