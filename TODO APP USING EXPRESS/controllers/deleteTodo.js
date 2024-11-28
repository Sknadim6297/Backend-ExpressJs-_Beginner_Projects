const todoModel = require('../models/todo');

exports.deleteTodo = async (req, res) => {
    try {
        const deleteTodo = await todoModel.findByIdAndDelete(req.params.id);
        if (!deleteTodo) {
            return res.status(404).json({ message: 'To-Do not found' });
        }
        res.status(200).json({ message: 'To-Do deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}