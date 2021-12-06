const db = require('../config/connection');
const { Task } = require('../models');
const taskSeeds = require('./taskSeeds.json');

db.once('open', async () => {
  try {
    await Task.deleteMany({});
    await Task.create(taskSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
