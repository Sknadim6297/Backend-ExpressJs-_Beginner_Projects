

const express = require('express');
const authenticate = require('../middlewares/authenticate');
const router = express.Router();

router.get('/restricted', authenticate, (req, res) => {
    res.send("You have access to this restricted route!");
});

module.exports = router;
