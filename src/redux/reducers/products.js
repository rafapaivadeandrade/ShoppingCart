import { createReducer } from 'reduxsauce';
import { Types } from '../actionCreators';

export const INITIAL_STATE = {
  isLoading: false,
  data: [],
  cart: [],
  errorMessage: '',
  saved: false,
  isSaving: false,
  subtotal: 0,
  shipping: 0,
  discount: 0,
  total: 0,
  kilograms: 0,
};

export const getProductsRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: true,
  };
};
export const getProductsSuccess = (state = INITIAL_STATE, action) => {
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
  // console.log(state.cart);
  // console.log(action.product.product);
  var repeatedProduct = state.cart.find(
    (p) => p.id === action.product.product.id
  );
  if (repeatedProduct) {
    console.log('repeated!');
    var product = action.product.product;
    let count = 1;
    state.subtotal += product.price;
    state.kilograms += 1;
    if (state.kilograms <= 10) {
      state.shipping += 30;
    } else {
      if (state.kilograms % 5 && state.kilograms > 10) {
        state.shipping += 7;
      }
    }
    if (state.subtotal > 400) state.shipping = 0;

    product.count += count;
    product.left = product.available - product.count;
    if (product.count > product.available) {
      product.left = 0;
      product.count = product.available;
      state.kilograms -= 1;
    }
    console.log(state.kilograms);

    return {
      ...state,
      isSaving: false,
      saved: true,
      cart: [...state.cart],
      subtotal: state.subtotal,
      kilograms: state.kilograms,
      shipping: state.shipping,
    };
  } else {
    var product = action.product.product;
    let count = 1;
    state.subtotal += product.price;
    state.kilograms += 1;
    if (state.kilograms <= 10) {
      state.shipping += 30;
    } else {
      if (state.kilograms % 5 && state.kilograms > 10) {
        state.shipping += 7;
      }
    }
    if (state.subtotal > 400) state.shipping = 0;

    product.count = count;
    product.left = product.available - count;
    if (product.count > product.available) {
      product.left = 0;
      product.count = product.available;
      state.kilograms -= 1;
    }
    console.log(state.kilograms);

    return {
      ...state,
      isSaving: false,
      saved: true,
      cart: [...state.cart, product],
      subtotal: state.subtotal,
      kilograms: state.kilograms,
      shipping: state.shipping,
    };
  }
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
  console.log(action.product.product);
  var product = action.product.product;
  let count = 1;
  state.subtotal -= product.price;
  state.kilograms -= 1;
  if (state.kilograms <= 10) {
    state.shipping -= 30;
  } else {
    if (state.kilograms % 5 && state.kilograms > 10) {
      state.shipping -= 7;
    }
  }
  if (state.subtotal > 400) state.shipping = 0;
  if (state.shipping <= 0) {
    state.shipping = 0;
  }
  console.log(state.kilograms);
  product.count -= count;
  product.left = product.available - product.count;
  const cart = [...state.cart];
  const id = action.product.product.id;
  if (product.count === 0) {
    const indexToDelete = cart.findIndex((product) => product.id === id);
    cart.splice(indexToDelete, 1);
  }
  if (product.left >= product.available) {
    product.left = product.available;
  }

  return {
    ...state,
    isSaving: false,
    cart: cart,
    subtotal: state.subtotal,
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
