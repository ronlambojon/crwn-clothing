import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector }  from 'reselect';

import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem.component';
import StripeCheckoutButton from '../../Components/StripeCheckoutButton/StripeCheckoutButton.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
 
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './CheckoutPage.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span> Product </span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span> Description </span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span> Qty. </span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span> Price </span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span> Remove </span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {
      cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
      ))
    }
    <TotalContainer>
      <span> TOTAL: ${total} </span>
    </TotalContainer>
    <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningContainer>
    <StripeCheckoutButton price={total}/>
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);