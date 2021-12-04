const { Schema, model } = require('mongoose');


// import schema from Post.js
const postSchema = require('./Post');

const taskSchema = new Schema(
  {
    explanation: {
      type: String,
      required: true,
      unique: true,
    },
     // set posts to be an array of data that adheres to the postSchema
    posts: [postSchema],
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






// when we query a task, we'll also get another field called `postCount` with the number of saved posts we have
taskSchema.virtual('postCount').get(function () {
  return this.posts.length;
});

const Task = model('Task', taskSchema);

module.exports = Task;