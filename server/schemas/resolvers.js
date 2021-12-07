const { AuthenticationError } = require('apollo-server-express');
const { Task, User, Jest } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    tasks: async () => {
     return await Task.find();
    },
    allJests: async () => {
      return await Jest.find({});
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
     
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    saveJest: async (parent, { jestData }, context) => {
      if (context.user) {
        const updatedUser = await Task.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedJests: jestData } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    removeJest: async (parent, { jestId }, context) => {
      if (context.user) {
        const updatedUser = await Task.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedJests: { jestId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
