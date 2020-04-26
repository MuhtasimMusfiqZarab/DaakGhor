//givees express the idea how to handle authentication
const passport = require("passport");
// used to instruct poassport how to authenticate user with google oauth
const GoogleStrategy = require("passport-google-oauth20").Strategy;

//to create the instance of the class to save as records(individual user record)
const mongoose = require("mongoose");

//get the keys inside keys object
const keys = require("../config/keys");

//get access to the userModel class //pulling a model out of mongoose
//Use robject here is the model class
const User = mongoose.model("users");

//this function is for taking a model and create some token which is passed to the client cookies for the upcomming followup requests to authenticatee the user
// hhere we will be passing the id of the user which mongoDB creates for us to the cookie
// args(userModel, done) //userModel is whatever we pulled out of the userModel
passport.serializeUser((user, done) => {
  //generate itentifying piece of information
  // writting this puts the id inside the cookie
  done(null, user.id);
});

//take the id inisde cookie and turn it into userModel
//we will get the id from the cookie to find the user
passport.deserializeUser((id, done) => {
  //find the user from the DB
  User.findById(id).then((user) => done(null, user));
});

//help passpot to understand how to use google stratgey
//new GoogleStratgy(some configuration) create a new instance of the google passport stratgy
//the first argument is for google ids //2nd argument is a function
//this will get a code from google inside URL which is needed for the followup request to google again to get the user
//we are not really exporting any code out of here, we are making sure that this file will execute only
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      //the route the user will be send to after permission is granted (this URI and the provided URI inside the cloud console must be same )
      callbackURL: "/auth/google/callback",
      //for https and root url problem for going from one url to other for development purposes
      proxy: true,
    },
    //this runs when we are redicted from the google flow
    async (accessToken, refreshToken, profile, done) => {
      //anytime we reach the database, we are initiating asynchronous action
      //search all the records inside the collection  to see if the user already exts(thus no need to save the user)
      const existingUser = await User.findOne({ googleID: profile.id });
      if (existingUser) {
        //we already have a record saved
        console.log(existingUser);
        //to say pasport tht we are done with athentication flow
        // we have to provide 2 arguments to it (errorObject,userRecord)
        return done(null, existingUser);
      }
      //user model class to create new model instance & save it to datrabase (save() is used to saving the user inside the database)
      //call done when the user is successfull saved
      // new User() creates new model Instance which is a single record inside the collection
      const user = await new User({ googleID: profile.id }).save();
      //to say pasport tht we are done with athentication flow
      // we have to provide 2 arguments to it (errorObject,userRecord)
      done(null, user);
    }
  )
);
