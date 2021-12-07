const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    // location: {
    //   type: String,
    //   required: true
    // },
    // studentCount: {
    //   type: Number,
    //   required: true
    // },
    jests: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Jest'
      }
    ]
  }
);

const User = model('User', userSchema);

module.exports = User;