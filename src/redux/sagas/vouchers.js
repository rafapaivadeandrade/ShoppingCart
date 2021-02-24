import ActionCreators from '../actionCreators';
import { put, call } from 'redux-saga/effects';
import { getVouchersFromApi } from '../../data/api';

export function* getVouchers() {
  try {
    const response = yield call(getVouchersFromApi);
    const vouchers = response;

    yield put(ActionCreators.getVouchersSuccess(vouchers));
  } catch (e) {
    yield put(ActionCreators.getVouchersFailure());
  }
}
