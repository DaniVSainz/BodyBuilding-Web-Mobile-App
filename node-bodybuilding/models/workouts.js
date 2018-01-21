const mongoose = require('mongoose');
const config = require('../config/database');

var User = require('./user');


const workoutSchema = mongoose.Schema ({
    name: {
      type: String
    },
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  });

const Workouts = module.exports = mongoose.model('Workouts', workoutSchema);
