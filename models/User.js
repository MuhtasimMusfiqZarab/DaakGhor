// here we will create mongooes model class for createing user collection
const mongoose = require("mongoose");
const { Schema } = mongoose;

//mongoose wants to know all the different properties that out records will hasve inside DB
//schema describe what an user will look like
const userSchema = new Schema({
  googleID: String,
});

//create  an acutual model class and tell mongoose that it needs to be aware that the the new collection to be created
//1st arg-- name of the collection //2nd arg-- users schema
// if users is existed already, it will not recreate
//we are creating mongoose model here //here creating a model users using th eschema
mongoose.model("users", userSchema);
