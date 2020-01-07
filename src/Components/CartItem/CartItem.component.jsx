import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './CartItem.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage alt='item' src={imageUrl}/>
    <ItemDetailsContainer>
      <span> {name} </span>
      <span> {quantity} x ${price} </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;