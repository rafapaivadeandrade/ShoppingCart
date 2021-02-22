import { takeLatest, all, put } from 'redux-saga/effects';
import { Types } from '../actionCreators';
import { getProducts, addToCart } from './products';
export default function* rootSaga() {
  yield all([
    takeLatest(Types.GET_PRODUCTS_REQUEST, getProducts),
    takeLatest(Types.ADD_TO_CART_REQUEST, addToCart),
  ]);
}
