
const mongoose = require("mongoose"),
      { v4 } = require("uuid")


const UserSchema = new mongoose.Schema({
    
    name: {

        type: String,
        uppercase: true,
        required: true,
        unique: true

    },

    gender: {

        type: String,
        required: true
        
    },

    email: {

        type: String,
        trim: true,
        unique: true,

      },

      password: {

        type: String,
        minlength: 6,
        maxlength: 1023,

      },

    _id: {

        type: String,
        default: () => v4(),

      }},


    {

        timestamps: true

    });


const User = mongoose.model("User", UserSchema);

module.exports = { User };