const keys = '../config/keys.js';
const stripe = require('stripe')(keys.stripeSecretKey);

// create an arrow function and immediately export it
module.exports = (app) => {
  //post reuest to api/stripe route
  app.post('/api/stripe', async (req, res) => {
    //-------see what(stripe authorization tokenpppp) is sent from the client stripe
    /// this outputs a req body which contains a token which identifies the credit card
    // that token would allow us to charge the amount we wanted
    // console.log(req.body);

    //-----Bill the credit card using the token
    const charge = await stripe.charges.create({
      // ---configuration object to let stripe know what we are going to do with the credit card info
      amount: 500, // we bill 5$
      currency: 'usd',
      description: '5$ for 5 credits',
      //souce of the credit card which is the id (token) included in the request id
      source: req.body.id,
    });
    console.log(charge);
  });
};
