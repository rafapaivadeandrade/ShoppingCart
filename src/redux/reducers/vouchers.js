import { createReducer } from 'reduxsauce';
import { Types } from '../actionCreators';

export const INITIAL_STATE = {
  isLoading: false,
  vouchers: [],
  errorMessage: '',
};

export const getVouchersRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: true,
  };
};
export const getVouchersSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false,
    vouchers: action.vouchers,
  };
};
export const getVouchersFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false,
  };
};

export const HANDLERS = {
  [Types.GET_VOUCHERS_REQUEST]: getVouchersRequest,
  [Types.GET_VOUCHERS_SUCCESS]: getVouchersSuccess,
  [Types.GET_VOUCHERS_FAILURE]: getVouchersFailure,
};
export default createReducer(INITIAL_STATE, HANDLERS);
