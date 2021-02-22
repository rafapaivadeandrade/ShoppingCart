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

function Cart({ product }) {
  // console.log(product);
  return (
    <CartItems>
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
        <RemoveButton>-</RemoveButton>
      </Buttons>
    </CartItems>
  );
}

export default Cart;
