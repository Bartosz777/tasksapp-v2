const express = require('express')
const { getTasks, getTask, createTask, deleteTask, updateTask } = require('../controllers/taskController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

// Get tasks
router.get('/' , getTasks)

// Get a single task 
router.get('/:id' , getTask)

// Create task 
router.post('/' , createTask)

// Delete task
router.delete('/:id' , deleteTask)

// Update task

router.patch('/:id' , updateTask)


module.exports = router