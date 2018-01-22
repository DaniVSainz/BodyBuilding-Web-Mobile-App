const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Workout = require('../models/workouts');
const Exercise = require('../models/exercise');


router.post('/', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    Workout.findById(req.body.workout).then(function(workout){
        let exercise = new Exercise({
            name: req.body.name,
            user: req.body.user,
            rest: req.body.rest,
            workout: workout._id
        })
        exercise.save();
        workout.exercises.addToSet(exercise)
        workout.save().then(function(workout){
            return res.status(200).json({
                success: true,
                obj: workout
            }); 
        })
    }).catch(function(err){
        return res.status(500).json({
        sucess: false,
        title: 'An error occurred',
        error: err
        });
    });
});



router.get('/', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    User.findById(req.user._id).populate('workouts').then(function(user){
            return res.status(200).json({
            success: true,
            obj: user.workouts
        }); 
    }).catch(function(err){
            return res.status(500).json({
                sucess: false,
                title: 'An error occurred',
                error: err
            });
        });
});

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