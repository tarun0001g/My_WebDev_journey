


const mongoose = require("mongoose");

const todoItemSchema = mongoose.Schema({
  task: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
  },

  completed: {
    type: Boolean,
    required: false,
  },
}, 
{ 
  timestamps: true
 });

//It tells create one TodoItem Model(Class) who have userSchema structure and then export it
module.exports = mongoose.model('TodoItem', todoItemSchema);

