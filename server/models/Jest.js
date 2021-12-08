const { Schema, model } = require('mongoose');

const userSchema = require('./User');
// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const jestSchema = new Schema({
  //username that created jest
  createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User"
  },

  //jest image description
  caption: {
    type: String,
  },
  //jest image
  image: {
    type: String,// need to figure out data type our images will be
  },
  //like count
  likes: {
    type: Number,
  },
  //related task id
  taskId: {
      type: Schema.Types.ObjectId,
      ref: "Task"
  }
  ,
 

  
});

//notice model not created, no collection will be created for this model
const Jest = model('Jest', jestSchema);
module.exports = Jest;
