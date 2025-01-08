const express = require('express');
const todoModel = require('../models/todo.model')
const todoRouter = express.Router()

todoRouter.post("/add", async (req,res)=>{
    await todoModel.insertMany([req.body])
    res.send("todo added")
})

module.exports = todoRouter;
