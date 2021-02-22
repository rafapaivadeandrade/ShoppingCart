import React from 'react';
import {
  CartItems,
  Item,
  CartDetails,
  CartName,
  CartQntPrice,
  CartImage,
  Buttons,
  RemoveButton,
  AddButton,
} from '../../page/styles';
import ActionCreators from '../../redux/actionCreators';
import { useDispatch } from 'react-redux';

function Cart({ product }) {
  const dispatch = useDispatch();

  return (
    <CartItems key={product.id}>
      <CartImage />
      <CartDetails>
        <CartName>
          <Item style={{ width: '180px' }}>{product.name}</Item>
        </CartName>
        <CartQntPrice>
          <Item>Quantity: {product.available}</Item>
          <Item style={{ marginRight: '10px' }}>$ {product.price}</Item>
        </CartQntPrice>
      </CartDetails>
      <Buttons>
        <AddButton>+</AddButton>
        <RemoveButton
          onClick={() =>
            dispatch(ActionCreators.removeFromCartRequest(product.id))
          }
        >
          -
        </RemoveButton>
      </Buttons>
    </CartItems>
  );
}

export default Cart;
