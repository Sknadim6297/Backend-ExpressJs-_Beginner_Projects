const todoModel = require('../models/todo');

exports.getTodos = async (req, res) => {

    try {
        const todos = await todoModel.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
};