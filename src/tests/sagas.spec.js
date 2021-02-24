import { call, put } from 'redux-saga/effects';
import { GetProductsMock } from '../data/GetProductsMock';
import { GetVouchersMock } from '../data/GetVouchersMock';
import { getProductsFromApi, getVouchersFromApi } from '../data/api';
import {
  getProducts,
  addToCart,
  removeFromCart,
} from '../redux/sagas/products';
import { getVouchers } from '../redux/sagas/vouchers';
import ActionCreators from '../redux/actionCreators';

describe('getProducts', () => {
  it('should trigger get products successfully', () => {
    const generator = getProducts();
    const response = GetProductsMock;

    expect(generator.next().value).toEqual(call(getProductsFromApi));
    expect(generator.next(response).value).toEqual(
      put(ActionCreators.getProductsSuccess(GetProductsMock))
    );

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });

  it('should failure to get products', () => {
    const generator = getProducts();

    expect(generator.next().value).toEqual(call(getProductsFromApi));

    expect(
      generator.throw(
        'Request failed with status code 500, please refresh the page.'
      ).value
    ).toEqual(put(ActionCreators.getProductsFailure()));

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });
});

describe('getVouchers', () => {
  it('should trigger get vouchers successfully', () => {
    const generator = getVouchers();
    const response = GetVouchersMock;

    expect(generator.next().value).toEqual(call(getVouchersFromApi));
    expect(generator.next(response).value).toEqual(
      put(ActionCreators.getVouchersSuccess(GetVouchersMock))
    );

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });

  it('should failure to get vouchers', () => {
    const generator = getVouchers();

    expect(generator.next().value).toEqual(call(getVouchersFromApi));

    expect(
      generator.throw(
        'Request failed with status code 500, please refresh the page.'
      ).value
    ).toEqual(put(ActionCreators.getVouchersFailure()));

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });
});

describe('addToCart', () => {
  it('should trigger add product to cart', () => {
    const obj = undefined;
    const generator = addToCart(obj);
    const response = GetProductsMock;

    // expect(generator.next().value).toEqual(undefined);

    expect(generator.next(response).value).toEqual(
      put(ActionCreators.addToCartSuccess(GetProductsMock))
    );

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });
});

describe('removeFromCart', () => {
  it('should remove product from cart', () => {
    const obj = undefined;
    const generator = removeFromCart(obj);
    const response = GetProductsMock;

    expect(generator.next(response).value).toEqual(
      put(ActionCreators.removeFromCartSuccess(GetProductsMock))
    );

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });
});
