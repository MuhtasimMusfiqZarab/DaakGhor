// next is a function we call when our middleware is complete
//next() let the app know that we want to run the next middlewares(pass the request to the next middleware in the chain), coz this middleware is finished running
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You need to log in to get access!' });
  }

  //handle the request to the next middleware in the chain
  next();
};
