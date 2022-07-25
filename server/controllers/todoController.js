const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler')
const Todo  = require('../models/todoModel')
const { all } = require('../routes/auth')

/**
 * 
 * @desc For creating a task 
 * @route /api/task/addTask
 * @access Public
 */

exports.createTask = asyncHandler(async (req, res) => {
    const {task, active } = req.body
    const todo = await Todo.create({task, active})
    res.status(201).json({
        success : true, 
        data : todo,
        message : 'Task is created successfully'
    })
})


/**
 * 
 * @desc For updating a task 
 * @route /api/task/:id
 * @access Public
 */

 exports.updateTask = asyncHandler(async (req, res) => {
    const {task, active } = req.body
    const existTask = await Todo.findOne({_id : req.params.id})
    if(existTask){
        existTask.task = task
        existTask.active =active
        const updatedTask = await existTask.save()
        res.status(200).json({
            success : true,
            data : updatedTask, 
            message : 'Task is updated successfully'
        })
    }
    else{
        res.status(401).json({
            success : false,
            data : null, 
            message : 'Task is not found'
        })
    }
})


/**
 * 
 * @desc For deleting a task 
 * @route /api/task/:id
 * @access Public
 */

 exports.deleteTask = asyncHandler(async (req, res) => {
    const {task, active } = req.body
    const existTask = await Todo.findOne({_id : req.params.id})
    if(existTask){
        await existTask.remove()
        res.status(200).json({
            success : true,
            message : 'Task is deleted'
        })
    }
    else{
        res.status(401).json({
            success : false,
            message : 'Task is not found'
        })
    }
})


/**
 * 
 * @desc For all the tasks 
 * @route /api/task/getAll
 * @access Public
 */

 exports.getAllTask = asyncHandler(async (req, res) => {
    const allTask =  await Todo.find({})
    if(allTask){
        res.status(200).json({
            success : true,
            data : allTask,
            message : 'All the tasks are listed'
        })
    }
    else{
        res.status(401).json({
            success : false,
            message : 'No tasks found'
        })
    }
})