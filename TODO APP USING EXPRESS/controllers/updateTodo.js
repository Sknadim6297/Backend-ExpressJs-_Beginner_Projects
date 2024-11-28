const todoModel = require('../models/todo');

exports.updateTodo = async (req, res) => {
    const { title, description, completed } = req.body;
    try {
        const updateTodo = await todoModel.findByIdAndUpdate(req.params.id, {
            title, description, completed
        }, { new: true });
        if (!updateTodo) {
            return res.status(404).json({ message: 'To-Do not found' });
        }
        res.json(updateTodo);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
