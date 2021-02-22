import axios from 'axios';
import ActionCreators from '../actionCreators';
import { put } from 'redux-saga/effects';

export function* getProducts() {
  const products = yield axios.get(
    'https://shielded-wildwood-82973.herokuapp.com/products.json'
  );
  yield put(ActionCreators.getProductsSuccess(products.data.products));
}
export function* addToCart(product) {
  yield put(ActionCreators.addToCartSuccess(product));
}

export function* removeFromCart(product) {
  yield put(ActionCreators.removeFromCartSuccess(product));
}
