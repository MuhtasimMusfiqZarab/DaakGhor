//react-stripe-creckout lets us create a button which can be pressed to see the stripe payment form

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Payments = () => {
  return (
    // we need some required configuration options
    <StripeCheckout
      //required 3 config options
      amount={500}
      token={(token) => console.log(token)} //token is expected to receive a callback func which will be invocked after we get the authorization token
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    />
  );
};

export default Payments;
