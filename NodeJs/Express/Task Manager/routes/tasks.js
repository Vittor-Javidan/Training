const express = require('express')
const router = express.Router()

//Functions require
const {
    getAllTasks,
    getTask, 
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/Tasks')

//Routes
router.route('/')
    .get(getAllTasks)
    .post(createTask)
router.route('/:id')
    .get(getTask)
    .patch(updateTask)
    .delete(deleteTask)
//

module.exports = router