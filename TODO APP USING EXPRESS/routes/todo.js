const express = require('express');
const { createTodo } = require('../controllers/CreateTodo');
const { deleteTodo } = require('../controllers/deleteTodo');
const { getTodos } = require('../controllers/getTodos');
const router = express.Router();



router.post('/create', createTodo);
router.get('/delete', deleteTodo);
router.get('/alltodos', getTodos);

module.exports = router;