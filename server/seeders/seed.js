const db = require('../config/connection');
const { Task, Jest, User } = require('../models');
const taskSeeds = require('./taskSeeds.json');
const userSeeds = require('./userSeeds.json');
const jestSeeds = require('./jestSeeds.json');

db.once('open', async () => {
  try {
    await Task.deleteMany({});
    await Jest.deleteMany({});
    await User.deleteMany({});
    await Task.create(taskSeeds);
    await Jest.create(jestSeeds);
    await User.create(userSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
