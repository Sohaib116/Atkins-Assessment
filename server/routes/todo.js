const express = require('express')
const router = express.Router()
const { createTask, updateTask, deleteTask, getAllTask } =  require('../controllers/todoController')

const verify = require('./verifyToken')

router.post('/addTask', verify, createTask)
router.put('/updateTask/:id',verify, updateTask)
router.delete('/deleteTask/:id',verify, deleteTask)
router.get('/getAllTask', getAllTask)

module.exports = router
