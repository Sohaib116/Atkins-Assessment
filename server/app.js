const express = require('express')
const jwt = require('jsonwebtoken')
const http = require('http')
const config  =  require('./config');
const bodyParser = require('body-parser');
const cors = require('cors')
const authRoutes = require('./routes/auth')
const testRoutes = require('./routes/test')
const todoRoutes = require('./routes/todo')

const connectDB  =  require('./db')
connectDB()


const app = express();

//Middle ware

app.use(bodyParser.json())
app.use(cors());

app.get('/api', (req, res) => {
    res.json({
        message : "Welcome to the Restful API"
    })
})



app.use('/api/auth', authRoutes)
app.use('/api/test', testRoutes)
app.use('/api/task', todoRoutes)

app.listen(config.port, () => { // Begin listening for connections
	console.log(`Listening for connections on port ${config.port}`)
})