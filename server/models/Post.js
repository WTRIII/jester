const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const postSchema = new Schema({
  //username that created post
  author:
    {
      type: String,
      required: true,
    },
  //posted image description
  description: {
    type: String,
  },
  // saved book id from GoogleBooks

  // PostId: {
  //   type: String,
  //   required: true,
  // },

  image: {
    type: String,// need to figure out data type our images will be
  },
  likes: {
    type: Number,
  }
  // link: {
  //   type: String,
  // },
  // title: {
  //   type: String,
  //   required: true,
  // },
});

//notice model not created, no collection will be created for this model

module.exports = postSchema;
