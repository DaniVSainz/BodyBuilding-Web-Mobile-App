const mongoose = require('mongoose');
const config = require('../config/database');

var User = require('./user');
var Set = require('./set');
var Workout = require('./workout')

const excerciseSchema = mongoose.Schema ({
    name: {type: String},
    rest: {type: Number, required:true },
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    workout: {type: mongoose.Schema.Types.ObjectId, ref: 'Workout', required: true},
    sets: [{type: mongoose.Schema.Types.ObjectId, ref: 'Set', required: true}],
    date : { type : Date, default: Date.now }
  });

const Exercise = module.exports = mongoose.model('Exercise', excerciseSchema);


