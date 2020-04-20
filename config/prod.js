module.exports = {
  //clientID identifies our applicaiton to google server
  //by convension the environmental variables need to have capital  letter
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  //fo rmongoDB conneciton
  mongoURI: process.env.MONGO_URI,
  //cookie key can be anything provided, not a specific value
  cookieKey: process.env.COOKIE_KEY,
};
