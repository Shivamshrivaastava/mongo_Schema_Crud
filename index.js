const express = require('express');
const mongoose = require('mongoose');
const todoRouter = require('./routes/todo.routes');
require('dotenv').config(); 
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/todos', todoRouter);

app.listen(4000, async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected successfully to DB");
        
    } catch (err) {
        console.error("Failed to connect to DB", err);
    }
    
    console.log('Server running on port 4000');
});
