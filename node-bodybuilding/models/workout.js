const mongoose = require('mongoose');
const config = require('../config/database');

var User = require('./user');
var Excersice = require('./exercise');
var Set = require('./set');

const workoutSchema = mongoose.Schema ({
    name: {type: String},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    date : { type : Date, default: Date.now },
    exercises: [{type: mongoose.Schema.Types.ObjectId, ref: 'Exercise', required: true}],
    sets: [{type: mongoose.Schema.Types.ObjectId, ref: 'Set', required: true}],
  });

const Workout = module.exports = mongoose.model('Workout', workoutSchema);
