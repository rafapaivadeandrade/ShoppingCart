import { createReducer } from 'reduxsauce';
import { Types } from '../actionCreators';

export const INITIAL_STATE = {
  isLoading: false,
  isDiscounted: false,
  data: [],
  cart: [],
  errorMessage: '',
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
    data: action.products.data.products,
  };
};
export const getProductsFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false,
    errorMessage:
      'Request failed with status code 500, please refresh the page.',
  };
};
export const addToCartRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isDiscounted: true,
  };
};
export const addToCartSuccess = (state = INITIAL_STATE, action) => {
  //IF DISCOUNT WAS ADDED THEN CALCULATE THE DISCOUNT
  if (action.product.product.type === 'percentual') {
    state.discount = (state.subtotal * action.product.product.amount) / 100;
    state.subtotal = state.subtotal - state.discount;
    state.total = state.subtotal + state.shipping;

    return {
      ...state,
      isDiscounted: true,
      cart: [...state.cart],
      subtotal: state.subtotal,
      kilograms: state.kilograms,
      shipping: state.shipping,
      discount: state.discount,
      total: state.total,
    };
  } else if (action.product.product.type === 'fixed') {
    if (state.total === 0 || state.total < 100) {
      return {
        ...state,
        isDiscounted: true,
        cart: [...state.cart],
        subtotal: state.subtotal,
        kilograms: state.kilograms,
        shipping: state.shipping,
        discount: state.discount,
        total: state.total,
      };
    }
    state.discount = action.product.product.amount;
    state.total = state.total - state.discount;

    return {
      ...state,
      isDiscounted: false,
      cart: [...state.cart],
      subtotal: state.subtotal,
      kilograms: state.kilograms,
      shipping: state.shipping,
      discount: state.discount,
      total: state.total,
    };
  } else if (action.product.product.type === 'shipping') {
    if (state.subtotal >= action.product.product.minValue) {
      state.shipping = 0;
      state.total = state.subtotal + state.shipping;
      state.discount = 0;

      return {
        ...state,
        isDiscounted: true,
        shipping: state.shipping,
        discount: state.discount,
        total: state.total,
      };
    } else {
      return {
        ...state,
        isDiscounted: false,
        shipping: state.shipping,
        discount: state.discount,
        total: state.total,
      };
    }
  }
  var repeatedProduct = state.cart.find(
    (p) => p.id === action.product.product.id
  );
  //IF THE PRODUCT WAS ALREADY ADDED TO THE CART, CALCULATE THE COSTS AND KILOGRAMS
  if (repeatedProduct) {
    var product = action.product.product;
    let count = 1;
    product.count += count;
    if (product.count <= product.available) {
      state.subtotal += product.price;
      state.kilograms += 1;

      if (state.kilograms <= 10) {
        state.shipping = 30;
      } else {
        if (state.kilograms > 10 && state.kilograms % 5 === 0)
          state.shipping += 7;
      }
      if (state.subtotal > 400) state.shipping = 0;

      product.left = product.available - product.count;
      if (product.count > product.available) {
        product.left = 0;
        product.count = product.available;
        state.kilograms -= 1;
        if (state.kilograms < 0) state.kilograms = 0;
      }
      state.total = state.subtotal + state.shipping;
      return {
        ...state,
        isDiscounted: false,
        cart: [...state.cart],
        subtotal: state.subtotal,
        kilograms: state.kilograms,
        shipping: state.shipping,
      };
    } else {
      product.count = product.available;
      return {
        ...state,
        isDiscounted: false,
        cart: [...state.cart],
        subtotal: state.subtotal,
        kilograms: state.kilograms,
        shipping: state.shipping,
      };
    }
  }
  //IF THE PRODUCT WAS NOT ALREADY ADDED TO THE CART, CALCULATE THE COSTS AND KILOGRAMS
  else {
    var product = action.product.product;
    let count = 1;
    product.count = count;
    if (product.count <= product.available) {
      state.subtotal += product.price;
      state.kilograms += 1;

      if (state.kilograms <= 10) {
        state.shipping = 30;
      } else {
        if (state.kilograms > 10 && state.kilograms % 5 === 0)
          state.shipping += 7;
      }
      if (state.subtotal > 400) state.shipping = 0;

      product.left = product.available - count;

      if (product.count > product.available) {
        product.left = 0;
        product.count = product.available;
        state.kilograms -= 1;
        if (state.kilograms < 0) state.kilograms = 0;
      }
      state.total = state.subtotal + state.shipping;
      return {
        ...state,
        isDiscounted: false,
        cart: [...state.cart, product],
        subtotal: state.subtotal,
        kilograms: state.kilograms,
        shipping: state.shipping,
        total: state.total,
      };
    } else {
      product.count = product.available;
      return {
        ...state,
        isDiscounted: false,
        cart: [...state.cart],
        subtotal: state.subtotal,
        kilograms: state.kilograms,
        shipping: state.shipping,
      };
    }
  }
};

export const addToCartFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isDiscounted: false,
    errorMessage:
      'Request failed with status code 500, please refresh the page.',
  };
};

export const removeFromCartRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isDiscounted: false,
  };
};

export const removeFromCartSuccess = (state = INITIAL_STATE, action) => {
  var product = action.product.product;
  let count = 1;
  state.subtotal -= product.price;
  state.kilograms -= 1;
  if (state.kilograms === 0) {
    state.shipping = 0;
  } else {
    if (state.kilograms >= 10 && state.kilograms % 5 === 0) state.shipping -= 7;
  }
  if (state.subtotal > 400) state.shipping = 0;
  if (state.shipping <= 0) state.shipping = 0;

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
  state.total = state.subtotal + state.shipping;
  return {
    ...state,
    cart: cart,
    subtotal: state.subtotal,
    total: state.total,
  };
};

export const removeFromCartFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    errorMessage:
      'Request failed with status code 500, please refresh the page.',
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
