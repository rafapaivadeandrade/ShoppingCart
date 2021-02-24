import axios from 'axios';

const productsBaseURL =
  'https://shielded-wildwood-82973.herokuapp.com/products.json';

const vouchersBaseURL =
  'https://shielded-wildwood-82973.herokuapp.com/vouchers.json';

export const getProductsFromApi = () => {
  return axios.get(`${productsBaseURL}`);
};

export const getVouchersFromApi = () => {
  return axios.get(`${vouchersBaseURL}`);
};
