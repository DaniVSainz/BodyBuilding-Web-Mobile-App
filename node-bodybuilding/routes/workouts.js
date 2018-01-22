const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Workout = require('../models/workouts');

router.post('/', passport.authenticate('jwt', {session:false}), (req, res, next) => {

            User.findById(req.user._id).then(function(user){
                workout = new Workout({
                    name: req.body.name,
                    user: user._id
                })
                workout.save(function (err, result) {
                    if (err) {
                        return res.status(500).json({
                            title: 'An error occurred',
                            error: err
                        });
                    }
                    user.workouts.addToSet(workout);
                    user.save(function(err,result){
                        if (err) {
                            return res.status(500).json({
                                title: 'An error occurred',
                                error: err
                            });
                        }
                        console.log("SAVED Workout");
                        return res.status(200).json({
                            success: true,
                            obj: result
                        });
                    });
                });
        });
});


router.get('/asd', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    User.findById(req.user._id).then(function(user){
        // Workouts.find({'_id'})
    })
    res.json({test: 'ASD'});
});



module.exports = router;