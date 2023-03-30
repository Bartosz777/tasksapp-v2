const mongoose = require('mongoose')
const Task = require('../models/taskModel')



// Get tasks

const getTasks = async (req, res) => {
    const user_id = req.user._id.toString()

    const tasks = await Task.find({user_id}).sort({createdAt: -1})

    res.status(200).json(tasks)
}

// Get a single task

const getTask = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Id is invalid'})
    }

    const task = await Task.findById({_id: id})

    if (!task) {
        return res.status(400).json({error: 'No Such workout'})
    }

    res.status(200).json(task)
}

// Create task

const createTask = async (req, res) => {
    const { title, content } = req.body
    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }

    if (!content) {
        emptyFields.push('content')
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({error: 'All fields must be filled', emptyFields})
    }

    try {
        const user_id = req.user._id.toString()
        const task = await Task.create({
            title, 
            content,
            user_id
        })
        
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete task

const deleteTask = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Id is invalid'})
    }

    const task = await Task.findByIdAndDelete(id)

    if (!task) {
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(task)
}

// update task

const updateTask = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Id is invalid'})
    }

    const task = await Task.findByIdAndUpdate(id, {...req.body})

    if (!task) {
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(task)
}


module.exports = { getTasks, getTask, createTask, deleteTask, updateTask }