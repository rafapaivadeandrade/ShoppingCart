import React from 'react';
import {
  CartItems,
  CartBorder,
  Item,
  CartDetails,
  CartName,
  CartPrice,
} from '../../page/styles';

function Cart() {
  return (
    <CartItems>
      <i id="icon"></i>
      <CartBorder></CartBorder>
      <CartDetails>
        <CartName>
          <Item style={{ width: '180px' }}>Name</Item>
        </CartName>
        <CartPrice>
          <Item>R$:Price</Item>
        </CartPrice>
      </CartDetails>
    </CartItems>
  );
}

export default Cart;
