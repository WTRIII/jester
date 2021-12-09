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
    removeJest: async (parent,  jestId , context) => {
      console.log("this is my jestID", jestId);
      console.log(context.user);
      if (context.user) {
        console.log(jestId);
        const updatedJest = await Jest.findByIdAndDelete(
          { _id: jestId }
        );

        return updatedJest;
      }

      throw new AuthenticationError('You need to be logged in!');
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


        
        // console.log("this is jest", jest);
        // console.log(jestData, "hellowwwww")
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

      console.log(jestData)
      console.log("outside the if")
      if (context.user) {
        console.log("inside the if")
        const deletedjest = await Jest.findOneAndDelete(
          { _id: jestData.jestId },
          
        );
        return deletedjest;
      }
    }
    
    // newJest: async (parent, { caption, image } ) => {
    //   console.log("NEW JEST RESOLVER", caption, image);
    //   return await Jest.create({ caption, image});
    //  },
  },
};

module.exports = resolvers;
