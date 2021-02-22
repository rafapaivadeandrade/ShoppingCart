import React, { useEffect } from 'react';
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
import { useSelector } from 'react-redux';

function Cart({ product }) {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();

  function countValue(productId) {
    console.log(products.cart);
    products.cart.forEach((item) => {
      if (item.id === productId) {
        product.count += 1;
        // return (item.count += 1);
      }
    });
    console.log(product);
    dispatch(ActionCreators.getProductsRequest(true));
  }

  function reduction(productId) {
    products.cart.forEach((item) => {
      if (item.id === productId) {
        product.count === 0 ? removeItem(productId) : (product.count -= 1);
        console.log(product.count);
      }
    });
    dispatch(ActionCreators.getProductsRequest(true));
  }

  function removeItem(productId) {
    console.log('test');
    dispatch(ActionCreators.removeFromCartRequest(productId));
    dispatch(ActionCreators.getProductsRequest(true));
  }

  return (
    <CartItems key={product.id}>
      <CartImage />
      <CartDetails>
        <CartName>
          <Item style={{ width: '180px' }}>{product.name}</Item>
        </CartName>
        <CartQntPrice>
          <Item>Quantity: {product.count}</Item>
          <Item style={{ marginRight: '10px' }}>$ {product.price}</Item>
        </CartQntPrice>
      </CartDetails>
      <Buttons>
        <AddButton onClick={() => countValue(product.id)}>+</AddButton>
        <RemoveButton onClick={() => reduction(product.id)}>-</RemoveButton>
      </Buttons>
    </CartItems>
  );
}

export default Cart;
