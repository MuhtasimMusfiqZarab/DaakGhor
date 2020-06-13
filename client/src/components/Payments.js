//react-stripe-creckout lets us create a button which can be pressed to see the stripe payment form

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Payments = () => {
  return (
    // we need some required configuration options
    <StripeCheckout
      //required 3 config options----------------------------------------
      amount={500}
      //token argument is the entire object that represents the pendingcharge
      token={(token) => console.log(token)} //token is expected to receive a callback func which will be invocked after we get the authorization token
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      //other configuration props-----------------------------------------
      name="Emailyfy" //it is the header of the stripe form
      description="$5 for 5 email credits"
    >
      {/*For styling the stripe button we need to pass a child button component inside this component*/}
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};

export default Payments;
