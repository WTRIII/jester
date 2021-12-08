// const db = require('../config/connection');
// const { User, Jest, Task } = require('../models');

// const userData = require('./userData.json');
// const jestData = require('./jestData.json');
// const taskData = require('./taskData.json');

// db.once('open', async () => {
//   // clean database
//   await User.deleteMany({});
//   await Jest.deleteMany({});
//   await Task.deleteMany({});

//   // bulk create each model
//   const users = await User.insertMany(userData);
//   const jests = await Jest.insertMany(jestData);
//   const tasks = await Task.insertMany(taskData);

//   for (newJest of jests) {
//     // randomly add each class to a school
//     const tempUser = users[Math.floor(Math.random() * users.length)];
//     tempUser.jests.push(newJest._id);
//     await tempUser.save();

//     // randomly add a professor to each class
//     const tempTask = tasks[Math.floor(Math.random() * taskd.length)];
//     newJest.task = tempTask._id;
//     await newJest.save();

//     // reference class on professor model, too
//     tempTask.jests.push(newJest._id);
//     await tempTask.save();
//   }

//   console.log('all done!');
//   process.exit(0);
// });


// // comparison to activity 9 in section 21
// // school = user
// // professor = task
// // class = jest