const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Workout = require('../models/workouts');







// router.post('/', function (req, res, next) {
//     var decoded = jwt.decode(req.query.token);
//     User.findById(decoded.user._id, function (err, user) {
//         if (err) {
//             return res.status(500).json({
//                 title: 'An error occurred',
//                 error: err
//             });
//         }
//         let newWorkout = new Workout ({
//             name: req.body.name,
//             email: req.body.email,
//             username: req.body.username,
//             password: req.body.password
//           });
//         message.save(function (err, result) {
//             if (err) {
//                 return res.status(500).json({
//                     title: 'An error occurred',
//                     error: err
//                 });
//             }
//             user.workouts.push(result);
//             user.save();
//             res.status(201).json({
//                 message: 'Saved message',
//                 obj: result
//             });
//         });
//     });

    router.post('/', passport.authenticate('jwt', {session:false}), (req, res, next) => {

        User.findById(req.user._id).then(function(user){
            workout = new Workout({
                name: req.body.name
            })
            workout.save(function (err, result) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                user.workouts.push(workout);
                user.update(done);
            });
    });
});


module.exports = router;