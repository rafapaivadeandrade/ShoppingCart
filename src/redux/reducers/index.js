import { combineReducers } from 'redux';
import products from './products';
import vouchers from './vouchers';
const rootReducer = combineReducers({
  products,
  vouchers,
});

export default rootReducer;
