import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getProductsRequest: null,
  getProductsSuccess: ['products'],
  getProductsFailure: null,

  addToCartRequest: ['product'],
  addToCartSuccess: ['product'],
  addToCartFailure: ['error'],

  removeFromCartRequest: ['product'],
  removeFromCartSuccess: ['product'],
  removeFromCartFailure: ['error'],
});
export default Creators;
