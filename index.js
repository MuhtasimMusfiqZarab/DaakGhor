// this is the root file/startup file for this application // we are creating route handlers here

//import the express library //node js does not have support for es 2015 modules // thus need to write common js moduels like this
const express = require("express");
//givees express the idea how to handle authentication
const passport = require("passport");
// used to instruct poassport how to authenticate user with google oauth
const GoogleStrategy = require("passport-google-oauth20").Strategy;

//get the keys inside keys object
const keys = require("./config/keys");

// create express application // a single node js project can have several diff express applications (but we are going to use single app here)
// app object is used to set up configs that will listen for incoming requst to the particular route
const app = express();

//help passpot to understand how to use google stratgey
//new GoogleStratgy(some configuration) create a new instance of the google passport stratgy
//the first argument is for google ids //2nd argument is a function
//this will get a code from google inside URL which is needed for the followup request to google again to get the user

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      //the route the user will be send to after permission is granted (this URI and the provided URI inside the cloud console must be same )
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      ///this will run whenever we get the profile of the user
      console.log("accessToken", accessToken);
      console.log("refreshToken", refreshToken);
      console.log("profile", profile);
      console.log("done", done);
    }
  )
);

//route handler that make sure that user gets kicked to the passport flow //2nd argument can be arrow func or thisimplemented
//fisrt argument:internallly googleStrategy has a little bit of code that says i am known as strategy called 'google' (internal identifier)
//2nd argument: is an options object , scope specifies to google (actual google servers) what access we want to have as the users info
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

//route handler when user visits to the redirected URL (here we woll let passport do that to cimmunicated with google server)
//googleStrategy has internally some identifier for 'google'
// as there is a code inside the URL, google will know that use is not trying to authenticated for the first time (thus wanting to turn the code into user profile)
app.get("/auth/google/callback", passport.authenticate("google"));

//dynamically listening to port for both local machine and heroku
// whenver heroku runs our application it has the ability to inject the environment vriables
const PORT = process.env.PORT || 5000;

app.listen(PORT);
