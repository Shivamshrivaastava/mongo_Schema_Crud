const express = require('express');
const todoModel = require('../models/todo.model')
const todoRouter = express.Router()

todoRouter.post("/add", async (req,res)=>{
    await todoModel.insertMany([req.body])
    res.send("todo added")
})
todoRouter.get("/get/:id", async (req, res) => {
    const todo = await todoModel.findById(req.params.id);
    res.send(todo);
});
todoRouter.put("/update/:id", async (req, res) => {
    await todoModel.updateOne({ _id: req.params.id }, { $set: req.body });
    res.send("todo updated");
});

todoRouter.patch("/update/:id", async (req, res) => {
    await todoModel.updateOne({ _id: req.params.id }, { $set: req.body });
    res.send("todo partially updated");
});

todoRouter.delete("/delete/:id", async (req, res) => {
    await todoModel.deleteOne({ _id: req.params.id });
    res.send("todo deleted");
});




module.exports = todoRouter;
