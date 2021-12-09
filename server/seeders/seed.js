const db = require('../config/connection');
const { Task, Jest, User } = require('../models');
const taskSeeds = require('./taskSeeds.json');
const userSeeds = require('./userSeeds.json');
const jestSeeds = require('./jestSeeds.json');

// db.once('open', async () => {
//   try {
//     await Task.deleteMany({});
//     await Jest.deleteMany({});
//     await User.deleteMany({});
//     await Task.create(taskSeeds);
//     await Jest.create(jestSeeds);
//     await User.create(userSeeds);

//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }

//   console.log('all done!');
//   process.exit(0);
// });


db.once('open', async () => {
  // clean database
     await Task.deleteMany({});
     await Jest.deleteMany({});
     await User.deleteMany({});

  // bulk create each model
  const users = await User.insertMany(userSeeds);
  const jests = await Jest.insertMany(jestSeeds);
  const tasks = await Task.insertMany(taskSeeds);

  for (newJest of jests) {
    // randomly add each Jest to a User
    const tempUser = users[Math.floor(Math.random() * users.length)];
    tempUser.jests.push(newJest._id);
    await tempUser.save();

    // randomly add a task to each Jest
    const tempTask = tasks[Math.floor(Math.random() * tasks.length)];
    newJest.taskId = tempTask._id;
    await newJest.save();

    // reference Jest on task model, too
    tempTask.jests.push(newJest._id);
    await tempTask.save();
  }

  console.log('all done!');
  process.exit(0);
});