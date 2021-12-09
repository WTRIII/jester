const { AuthenticationError } = require('apollo-server-express');
const { Task, User, Jest } = require('../models');
const { signToken } = require('../utils/auth');
const mongoose = require('mongoose');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      console.log(context.user)
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
        // const userData = await User.findOne({ _id: '61afd4be83fe1a707887d5be' }).populate('jests');
        // console.log(userData)
        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    profile: async (parent, args, context)=>{
      const userData= await User.findOne({_id:context.user._id }).populate('jests').select('-__v -password');
      return userData;
    },

    tasks: async () => {
    return await Task.find();
    },
    allJests: async () => {
      return await Jest.find({});
    }
  },

  Mutation: {
    //adding new user
    addUser: async (parent, args) => {
     
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    //verifiying user logged in
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
 
    newJest:  async (parent,  jestData , context) => {
      if (context.user) {
        const jest = new Jest;
        jest.caption = jestData.caption;
        jest.image = jestData.image;
        jest.likes = 0;
        
        jest.save((err) => {
          if(err) {
            return err
          }
        });

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { jests: jest } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    
    removeJest: async (parent,  jestData , context) => {

     if (context.user) {
       
        const deletedjest = await Jest.findOneAndDelete(
          { _id: jestData.jestId },
        );
        return deletedjest;
      }
    }
    
  },
};

module.exports = resolvers;
