const jwt = require('jsonwebtoken');
const users = require('../models/userModel');

exports.login = (req, res) => {
    const { username, password } = req.body;


    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }


    const token = jwt.sign(
        { id: user.id, username: user.username },
        'Nadim',
        { expiresIn: '1h' }
    );

    res.json({ message: 'Login successful', token });
};
