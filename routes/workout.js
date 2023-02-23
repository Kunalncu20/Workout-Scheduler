const  express =require('express')

const {createWorkout,getWorkouts,getSingleWorkout,deleteWorkout,updateWorkout} = require('../controllers/workoutController')

const router = express.Router()

//get all workouts
router.get('/', getWorkouts)

//GET single workout
router.get('/:id', getSingleWorkout)

router.post('/',createWorkout)

router.delete('/:id',deleteWorkout)

router.patch('/:id',updateWorkout)




module.exports=router