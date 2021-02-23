import axios from 'axios';
import ActionCreators from '../actionCreators';
import { put } from 'redux-saga/effects';

export function* getVouchers() {
  try {
    const vouchers = yield axios.get(
      'https://shielded-wildwood-82973.herokuapp.com/vouchers.json'
    );
    yield put(ActionCreators.getVouchersSuccess(vouchers.data.vouchers));
  } catch (e) {
    yield put(ActionCreators.getVouchersFailure(e));
  }
}
