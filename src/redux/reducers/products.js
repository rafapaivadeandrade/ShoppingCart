import React, { useState } from 'react';
import { createReducer } from 'reduxsauce';
import { Types } from '../actionCreators';

export const INITIAL_STATE = {
  isLoading: false,
  data: [],
  cart: [],
  errorMessage: '',
  saved: false,
  isSaving: false,
};

export const getProductsRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: true,
  };
};
export const getProductsSuccess = (state = INITIAL_STATE, action) => {
  // console.log(action.products);
  return {
    ...state,
    isLoading: false,
    data: action.products,
  };
};
export const getProductsFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false,
  };
};
export const addToCartRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSaving: true,
    saved: false,
  };
};
export const addToCartSuccess = (state = INITIAL_STATE, action) => {
  console.log(action.product);
  console.log(state.cart);

  return {
    ...state,
    isSaving: false,
    saved: true,
    cart: [...state.cart, action.product],
  };
};
export const addToCartFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSaving: false,
    saved: false,
  };
};

export const HANDLERS = {
  [Types.GET_PRODUCTS_REQUEST]: getProductsRequest,
  [Types.GET_PRODUCTS_SUCCESS]: getProductsSuccess,
  [Types.GET_PRODUCTS_FAILURE]: getProductsFailure,

  [Types.ADD_TO_CART_REQUEST]: addToCartRequest,
  [Types.ADD_TO_CART_SUCCESS]: addToCartSuccess,
  [Types.ADD_TO_CART_FAILURE]: addToCartFailure,
};
export default createReducer(INITIAL_STATE, HANDLERS);
