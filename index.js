// this is the root file/startup file for this application // we are creating route handlers here

//import the express library //node js does not have support for es 2015 modules // thus need to write common js moduels like this
const express = require("express");

// create express application // a single node js project can have several diff express applications (but we are going to use single app here)
// app object is used to set up configs that will listen for incoming requst to the particular route
const app = express();

//create route handler associate to the given route
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(5000);
