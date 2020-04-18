//givees express the idea how to handle authentication
const passport = require("passport");
// used to instruct poassport how to authenticate user with google oauth
const GoogleStrategy = require("passport-google-oauth20").Strategy;

//get the keys inside keys object
const keys = require("../config/keys");

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
