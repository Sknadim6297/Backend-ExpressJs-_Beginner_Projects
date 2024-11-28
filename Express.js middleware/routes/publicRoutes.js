

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Welcome to the public route!");
});


router.get('/open', (req, res) => {
    res.send("This route is open to everyone.");
});

module.exports = router;
