import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from './CollectionItem.styles';

const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage
        key={id}
        imageUrl={imageUrl}
      />
      <CollectionFooterContainer>
        <NameContainer> {name} </NameContainer>
        <PriceContainer> {price} </PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)}>Add to Cart</AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);