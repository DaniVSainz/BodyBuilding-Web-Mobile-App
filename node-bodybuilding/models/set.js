const mongoose = require('mongoose');
const config = require('../config/database');

var User = require('./user');
var Exercise = require('./exercise');
var Workout = require('./workout')

const setSchema = mongoose.Schema ({
    weight: {type:Number},
    reps: {type:Number},
    rest: {type: Number},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    workout: {type: mongoose.Schema.Types.ObjectId, ref: 'Workout', required: true},
    exercise: {type: mongoose.Schema.Types.ObjectId, ref: 'Exercise', required: true},
  });

const Set = module.exports = mongoose.model('Set', setSchema,'sets');


