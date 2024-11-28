const todoModel = require('../models/todo');

exports.createTodo = async (req, res) => {
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }
    try {
        const newTodo = new todoModel({
            title, description
        });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });

    }

}