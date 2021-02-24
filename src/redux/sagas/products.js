import axios from 'axios';
import ActionCreators from '../actionCreators';
import { put, call } from 'redux-saga/effects';
import { getProductsFromApi } from '../../data/api';

export function* getProducts() {
  try {
    const response = yield call(getProductsFromApi);
    const products = response;
    yield put(ActionCreators.getProductsSuccess(products));
  } catch (e) {
    yield put(ActionCreators.getProductsFailure());
  }
}
export function* addToCart(product) {
  try {
    yield put(ActionCreators.addToCartSuccess(product));
  } catch (e) {
    yield put(ActionCreators.addToCartFailure());
  }
}

export function* removeFromCart(product) {
  try {
    yield put(ActionCreators.removeFromCartSuccess(product));
  } catch (e) {
    yield put(ActionCreators.removeFromCartFailure());
  }
}
