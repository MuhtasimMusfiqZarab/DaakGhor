// here we will create mongooes model class for createing user collection
const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose wants to know all the different properties that out records will hasve inside DB
//schema describe what an user will look like
const userSchema = new Schema({
  googleID: String,
  //telling that credits propety can both be a number but it also needs to have a default value of zero
  //we need an obeject to specify both of those pieces of configuration
  credits: { type: Number, default: 0 },
});

//create  an acutual model class and tell mongoose that it needs to be aware that the the new collection to be created
//1st arg-- name of the collection //2nd arg-- users schema
// if users is existed already, it will not recreate
//we are creating mongoose model here //here creating a model users using th eschema
mongoose.model('users', userSchema);
