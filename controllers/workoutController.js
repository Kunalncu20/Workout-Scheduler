const Workout = require('../models/workoutSchems')
const mongoose = require('mongoose')
// get all workouts
const getWorkouts =async(req,res)=>{
    const workouts = await Workout.find({}).sort({created:-1})

    res.status(200).json(workouts)
}


//get a single workout
const getSingleWorkout =async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error:'Not Found'})
    }
    const workouts = await Workout.findById(id)

    if(!workouts){
      return res.status(404).json({error:'No such workout'})
    }

    res.status(200).json(workouts)
}



// create new workout
const createWorkout = async(req,res)=>{
    const{title,reps,load}=req.body;

    //add to db
    try {
        const workout= await Workout.create({title,reps,load})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


// delete a workout

const deleteWorkout = async (req,res)=>{
    const {id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error:'Not Found'})
    }

    const workouts = await Workout.findOneAndDelete({_id:id});

    if(!workouts){
        return res.status(404).json({error:'No such workout'})
    }

    res.status(200).json(workouts)

}


//update a workout

const updateWorkout=async (req,res)=>{
    const {id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
      return   res.status(404).json({error:'Not Found'})
    }

    const workouts = await Workout.findOneAndUpdate({_id:id},
        {...req.body})

        if(!workouts){
           return res.status(404).json({error:'No such workout'})
        }
    
        res.status(200).json(workouts)
    


}


module.exports={createWorkout,getWorkouts,getSingleWorkout,deleteWorkout,updateWorkout}