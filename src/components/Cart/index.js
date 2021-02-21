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

function Cart() {
  return (
    <CartItems>
      <CartImage />
      <CartDetails>
        <CartName>
          <Item style={{ width: '180px' }}>Product name</Item>
        </CartName>
        <CartQntPrice>
          <Item>Quantity: 4</Item>
          <Item style={{ marginRight: '10px' }}>$ 123</Item>
        </CartQntPrice>
      </CartDetails>
      <Buttons>
        <AddButton>+</AddButton>
        <RemoveButton>-</RemoveButton>
      </Buttons>
    </CartItems>
  );
}

export default Cart;
