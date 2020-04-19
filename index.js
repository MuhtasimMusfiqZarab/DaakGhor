// this is the root file/startup file for this application // we are creating route handlers here
//import the express library //node js does not have support for es 2015 modules // thus need to write common js moduels like this
const express = require("express");
const keys = require("./config/keys");

//1.mongoose require
const mongoose = require("mongoose");

//express doesnt have any idea how to handl ecookies thus inport this
const cookieSession = require("cookie-session");
//we have oto tell passport to keep track of our users session
const passport = require("passport");

//require the user model file to create the model when this file runs (here we define the model class)
require("./models/User");

//requiring passpostConfig
// asnothing is exported from this module thus we will only require it to run (we will use the previous required file (where model is defined) here)
require("./services/passport");

//2.connect to mongoDB using mongooese //pass the address of the mongo instance inside
mongoose.connect(keys.mongoURI);

// create express application // a single node js project can have several diff express applications (but we are going to use single app here)
// app object is used to set up configs that will listen for incoming requst to the particular route
const app = express();

//tell express that it needs to make use of cookies inside our application
app.use(
  // provide cookieSession a configuration object(this object expects two properties, 1st= maxAge(how long cookie last in milisecond)),2nd- keys to excrypt our cookie,  tis is always an array
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

//tell passport that is should make use of cookies to handle authentication
app.use(passport.initialize());
app.use(passport.session());

//-------------------------one way to do this

//import the auth routes file //authRoute is a function that takes the app and attaches these two routes to it
// const authRoutes = require("./routes/authRoutes");

//callling the route handlers with the app
// authRoutes(app);

//-----------------another way to do this
//requiring returns a function and we are giiivng the app parameter to it
require("./routes/authRoutes")(app);

//dynamically listening to port for both local machine and heroku
// whenver heroku runs our application it has the ability to inject the environment vriables
const PORT = process.env.PORT || 5000;
app.listen(PORT);
