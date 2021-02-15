import React from 'react';
import {
  CartItems,
  CartBorder,
  Item,
  CartDetails,
  CartName,
  CartPrice,
} from '../../pages/Landing/styles';
import { useProduct } from '../../hooks/ContextApi';

function Cart({ cartItem }) {
  const { removeFromCart } = useProduct();
  return (
    <CartItems key={cartItem.id}>
      <i
        id="icon"
        className="far fa-trash-alt"
        onClick={() => {
          removeFromCart(cartItem);
        }}
      ></i>
      <CartBorder></CartBorder>
      <CartDetails>
        <CartName>
          <Item style={{ width: '180px' }}>{cartItem.name}</Item>
        </CartName>
        <CartPrice>
          <Item>R$:{cartItem.price}</Item>
        </CartPrice>
      </CartDetails>
    </CartItems>
  );
}

export default Cart;
