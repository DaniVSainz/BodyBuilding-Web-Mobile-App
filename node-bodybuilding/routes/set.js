const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Workout = require('../models/workout');
const Exercise = require('../models/exercise');
const Set = require('../models/set');



router.post('/', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    Exercise.findById(req.body.exercise).then(function(exercise){
        let set = new Set({
            user: req.body.user,
            rest: req.body.rest,
            reps: req.body.reps,
            weight: req.body.weight,
            workout: exercise.workout,
            exercise: req.body.exercise
        })
        set.save();
        exercise.sets.addToSet(set)
        exercise.save()
        Workout.findById(exercise.workout).then(function(workout){
            workout.sets.addToSet(set)
            workout.save().then(function(){
                return res.status(200).json({
                    success: true,
                    obj: set
                }); 
            })
        })
    }).catch(function(err){
        return res.status(500).json({
        sucess: false,
        title: 'An error occurred',
        error: err
        });
    });
});



// router.get('/', passport.authenticate('jwt', {session:false}), (req, res, next) => {

//     User.findById(req.user._id).populate('workouts').then(function(user){
//             return res.status(200).json({
//             success: true,
//             obj: user.workouts
//         }); 
//     }).catch(function(err){
//             return res.status(500).json({
//                 sucess: false,
//                 title: 'An error occurred',
//                 error: err
//             });
//         });
// });

router.get('/:id', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    console.log("INSIDE GET BY ID WORKOUT");
    Workout.findById(req.params.id).populate('exercises').then(function(workout){
        return res.status(200).json({
            success: true,
            obj: workout
        });
    }).catch(function(err){
            return res.status(500).json({
            sucess: false,
            title: 'An error occurred',
            error: err
            });
        });
});

module.exports = router;