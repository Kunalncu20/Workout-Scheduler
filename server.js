require('dotenv').config()

const express = require('express')
//express app
const app = express();

// const cors = require('cors');
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const workoutRoutes = require('./routes/workout')

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/api/workouts', workoutRoutes)
// app.use(cors)

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("listening a port "+process.env.PORT+"!")
        })
    })
    .catch((error) => {
        console.log(error)
    })
