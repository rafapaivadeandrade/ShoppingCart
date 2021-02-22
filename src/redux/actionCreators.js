import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getProductsRequest: null,
  getProductsSuccess: ['products'],
  getProductsFailure: null,

  addToCartRequest: ['product'],
  addToCartSuccess: ['product'],
  addToCartFailure: ['error'],

  removeFromCartRequest: ['id'],
  removeFromCartSuccess: ['id'],
  removeFromCartFailure: ['error'],
});
export default Creators;
