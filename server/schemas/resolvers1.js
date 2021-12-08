const { User, Jest, Task } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return await User.find({}).populate('jests').populate({
        path: 'jests',
        populate: 'tasks',
      });
    },
    jests: async () => {
      return await Jest.find({}).populate('task');
    },
    jest: async (parent, args) => {
      return await Jest.findById(args.id).populate('task');
    },
    tasks: async () => {
      return await Task.find({}).populate('jests');
    },
  },
  // Define the functions that will fulfill the mutations
  Mutation: {
    addUser: async (parent, { name, location, studentCount }) => {
      // Create and return the new School object
      return await School.create({ name, location, studentCount });
    },
  },
};

module.exports = resolvers;


// comparison to activity 9 in section 21
// school = user
// professor = task
// class = jest