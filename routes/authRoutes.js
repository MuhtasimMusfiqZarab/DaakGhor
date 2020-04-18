//givees express the idea how to handle authentication
const passport = require("passport");

//in the undeneath there is no app defined so we cant write app.get // because app is defines inside index.js // thus here is a trick to use that app here which is only defined in index.js
// to get that functionlayt we are going to wrap the two route handlersinsdie of this arrow function // thus exporting a function from this file
module.exports = (app) => {
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
};
