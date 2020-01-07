import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../CartItem/CartItem.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { 
    CartDropDownContainer,
    CartItemsContainer, 
    EmptyMessageContainer, 
    CartDropdownButton 
} from './CartDropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropDownContainer>
    <CartItemsContainer>
      {
        cartItems.length 
          ? (
              cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
              ))
            )
          : (
              <EmptyMessageContainer> Your cart is empty </EmptyMessageContainer>
            ) 
      }
    </CartItemsContainer>
    <CartDropdownButton onClick={() => { 
      history.push('/checkout'); 
      dispatch(toggleCartHidden()) 
    }}> 
      GO TO CHECKOUT 
    </CartDropdownButton>
  </CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));