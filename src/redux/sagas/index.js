import { takeLatest, all } from 'redux-saga/effects';
import { Types } from '../actionCreators';
import { getProducts, addToCart, removeFromCart } from './products';
import { getVouchers } from './vouchers';
export default function* rootSaga() {
  yield all([
    takeLatest(Types.GET_PRODUCTS_REQUEST, getProducts),
    takeLatest(Types.ADD_TO_CART_REQUEST, addToCart),
    takeLatest(Types.REMOVE_FROM_CART_REQUEST, removeFromCart),
    takeLatest(Types.GET_VOUCHERS_REQUEST, getVouchers),
  ]);
}
