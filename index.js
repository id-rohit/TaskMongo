const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const TaskRoute = require('./routes/taskRoutes')

mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true, UseUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('DB Connection Established!')
})

const app= express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log('Server is running on port %d',PORT);
})

app.use('/api/task', TaskRoute)