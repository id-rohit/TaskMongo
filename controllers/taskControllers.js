const Task = require('../models/taskSchema')
var ObjectId = require('mongodb').ObjectID;

const index = (req, res, next) => {
    Task.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
         res.json({
         message: 'An error Occured'
        })
    })
}

const Read = (req, res, next) => {
    let completed = req.body.completed
    Task.find({completed:false})
    .then(response => {
        console.log(response)
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error ocurred'
        })
    })
}

const Create = (req, res, next) => {
    let task =new Task({
        task: req.body.task,
        description: req.body.description,
        completed: req.body.completed
    })
    task.save()
    .then(respnse => {
        res.json({
            message:'Task Added Successfully'

        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured'
        })
    })
}

const Update = (req, res, next) => {
    let completed = req.body.completed

    let updatedData = {
        description: req.body.description
        
    }
    Task.updateMany(
        {  }, 
        { $set: {  completed: true }}
    )
    
    .then(() => {
        res.json({
            message: 'Task updated successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error ocurred'
        })
    })
}

const Delete = (req, res, next) => {
    let id = req.body.id
     Task.findByIdAndRemove(id)
    .then(() =>{
        res.json({
            message: 'Task deleted successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Ocurred'
        })
    })
}

module.exports ={
    index, Create, Read, Update, Delete
}