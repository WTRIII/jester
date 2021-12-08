const { Schema, model } = require('mongoose');

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    // studentScore: {
    //   type: Number
    // },
    // officeHours: {
    //   type: String,
    //   required: true
    // },
    // officeLocation: {
    //   type: String,
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

const Task = model('Task', taskSchema);

module.exports = Task;