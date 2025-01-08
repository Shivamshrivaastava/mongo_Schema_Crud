const mongoose = require('mongoose');
const TodoSchema = new mongoose.Schema({
    name: String,
    status: Boolean,
    description: String,
    deadline:String,
});

 const  todoModel = mongoose.model("todos", TodoSchema)

 module.exports = todoModel;