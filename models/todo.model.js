const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true
    },
    status: { 
        type: Boolean, 
        required: true
    },
    description: String,
    deadline: String,
    gender: { 
        type: String, 
        enum: ['male', 'female', 'other'], 
        required: true
    },
    age: { 
        type: Number, 
        required: true,
        min: 20,
        max: 100
    },
});

const todoModel = mongoose.model("todos", TodoSchema);

module.exports = todoModel;
