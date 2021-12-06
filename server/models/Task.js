const { Schema, model } = require('mongoose');


// import schema from Jest.js
const jestSchema = require('./Jest');

const taskSchema = new Schema(
  {
    explanation: {
      type: String,
      required: true,
      unique: true,
    },
     // set jests to be an array of data that adheres to the jestSchema
    jests: [jestSchema],
    currentTask: {
      type: Boolean,
      required: true,
    },
    created: Date,
   
    
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);






// when we query a task, we'll also get another field called `jestCount` with the number of saved jests we have
taskSchema.virtual('jestCount').get(function () {
  return this.jests.length;
});

const Task = model('Task', taskSchema);

module.exports = Task;