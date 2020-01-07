import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CartDropdown from './CartDropdown.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const CartDropdownContainer = compose(
  connect(mapStateToProps),
)(CartDropdown);

export default CartDropdownContainer;