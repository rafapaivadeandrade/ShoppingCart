import React from 'react';
import {
  addToCart,
  getProducts,
  removeFromCart,
} from '../redux/sagas/products';

describe('getProducts', () => {
  it('should get all products', () => {
    const generator = getProducts();
  });
});
