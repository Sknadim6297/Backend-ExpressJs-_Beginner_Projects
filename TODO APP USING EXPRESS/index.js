const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const todoController = require('./routes/todo');
const connectDB = require('./config/db');

connectDB();

const PORT = 3000;

app.use(bodyParser.json());
app.use('/todo', todoController)

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

