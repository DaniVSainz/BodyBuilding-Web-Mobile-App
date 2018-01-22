const mongoose = require('mongoose');
const config = require('../config/database');

var User = require('./user');
var Exercise = require('./exercise');

const excerciseSchema = mongoose.Schema ({
    weight: {type:Number},
    reps: {type:Number},
    rest: {type: Number},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    workout: {type: mongoose.Schema.Types.ObjectId, ref: 'Workout', required: true},
    exercise: {type: mongoose.Schema.Types.ObjectId, ref: 'Exercise', required: true},
    date : { type : Date, default: Date.now }
  });

const Exercise = module.exports = mongoose.model('Exercise', excerciseSchema);


