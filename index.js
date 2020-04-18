// this is the root file/startup file for this application // we are creating route handlers here
//import the express library //node js does not have support for es 2015 modules // thus need to write common js moduels like this
const express = require("express");

//requiring passpostConfig
// asnothing is exported from this module thus we will only require it to run
require("./services/passport");

// create express application // a single node js project can have several diff express applications (but we are going to use single app here)
// app object is used to set up configs that will listen for incoming requst to the particular route
const app = express();

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
