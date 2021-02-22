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
  // console.log(action.product.product);
  // console.log(state.cart);

  return {
    ...state,
    isSaving: false,
    saved: true,
    cart: [...state.cart, action.product.product],
  };
};
export const addToCartFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSaving: false,
    saved: false,
  };
};
export const removeFromCartRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSaving: false,
  };
};
export const removeFromCartSuccess = (state = INITIAL_STATE, action) => {
  const cart = [...state.cart];
  const id = action.id.id;
  console.log(id);
  const indexToDelete = cart.findIndex((product) => product.id === id);
  cart.splice(indexToDelete, 1);
  return {
    ...state,
    isSaving: false,
    cart: cart,
  };
};
export const removeFromCartFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSaving: false,
  };
};

export const HANDLERS = {
  [Types.GET_PRODUCTS_REQUEST]: getProductsRequest,
  [Types.GET_PRODUCTS_SUCCESS]: getProductsSuccess,
  [Types.GET_PRODUCTS_FAILURE]: getProductsFailure,

  [Types.ADD_TO_CART_REQUEST]: addToCartRequest,
  [Types.ADD_TO_CART_SUCCESS]: addToCartSuccess,
  [Types.ADD_TO_CART_FAILURE]: addToCartFailure,

  [Types.REMOVE_FROM_CART_REQUEST]: removeFromCartRequest,
  [Types.REMOVE_FROM_CART_SUCCESS]: removeFromCartSuccess,
  [Types.REMOVE_FROM_CART_FAILURE]: removeFromCartFailure,
};
export default createReducer(INITIAL_STATE, HANDLERS);
