const { Schema, model } = require('mongoose');


// import schema from Jest.js
// const jestSchema = require('./Jest');

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
     jests: [
      {
        type: Schema.Types.ObjectId,
        ref: "Jest"
      }
    ],
    //true/false is this the current active task
    currentTask: {
      type: Boolean,
      
    },
   
   
    
  },
  // set this to use virtual below
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  // }
);






// when we query a task, we'll also get another field called `jestCount` with the number of saved jests we have
// Task.virtual('jestCount').get(function () {
//   return this.jests.length;
// });

const Task = model('Task', taskSchema);

module.exports = Task;