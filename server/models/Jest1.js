const { Schema, model } = require('mongoose');

const jestSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    // building: {
    //   type: String,
    //   required: true
    // },
    // creditHours: {
    //   type: Number,
    //   required: true
    // },
    task: {
      type: Schema.Types.ObjectId,
      ref: 'task'
    }
  }
);

const Jest = model('Jest', jestSchema);

module.exports = Jest;