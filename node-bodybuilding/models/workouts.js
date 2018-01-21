const mongoose = require('mongoose');
const config = require('../config/database');

var User = require('./user');


const WorkoutSchema = mongoose.Schema ({
    name: {
      type: String
    },
    belongsTo: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  });

module.exports = mongoose.model('Workouts', WorkoutSchema);
