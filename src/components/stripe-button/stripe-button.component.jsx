import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H3R8eJDq4ZDghEhfUN8HNCm6KQxuPiORpCNHUjhofJfW9qcc89hOVP1zxd15TkdEAqGiegjhrUVEMn3slcYWNUn00ouC0lY7d';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            tokken={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;