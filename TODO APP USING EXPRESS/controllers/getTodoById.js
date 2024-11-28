const todoModel = require('../models/todo');

exports.getTodoById = async (req, res) => {

    try {
        const todo = await todoModel.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'To-Do not found' });
        }
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
