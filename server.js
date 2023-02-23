require('dotenv').config()

const express = require('express')
//express app
const app = express();

const cors= require('cors');
const mongoose = require('mongoose')

const workoutRoutes =require('./routes/workout')

app.use(cors)
//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
 app.use('/api/workouts',workoutRoutes)
 
 mongoose.connect(process.env.MONGO_URL)
 .then(()=>{
     app.listen(process.env.PORT || 8080,()=>{
         console.log("listening a port 4000!")
     })
 }
 )
 .catch((error)=>{
    console.log(error)
 })
