const { Schema, model } = require('mongoose');


// import schema from Jest.js
const jestSchema = require('./Jest');

const taskSchema = new Schema(
  {
    //need to fix type to date.now() to automatically add current date to db
    dateCreated: {
      type: String,
    },
    jestTaskDescription: {
      type: String,
      required: true,
      
    },
     // set jests to be an array of data that adheres to the jestSchema
    jestsArray: [jestSchema],
    //true/false is this the current active task
    currentTask: {
      type: Boolean,
      
    },
   
   
    
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
  return this.jestsArray.length;
});

const Task = model('Task', taskSchema);

module.exports = Task;