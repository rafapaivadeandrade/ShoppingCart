import axios from 'axios';
import { getProductsFromApi, getVouchersFromApi } from '../data/api';

// Tests
describe('getProducts', () => {
  beforeEach(() => {
    axios.get = jest.fn();
  });

  describe('getProducts', () => {
    it('httpClient is called as expected', () => {
      getProductsFromApi();
      expect(axios.get).toHaveBeenCalledWith(
        'https://shielded-wildwood-82973.herokuapp.com/products.json'
      );
    });
  });

  describe('getVochers', () => {
    it('httpClient is called as expected', () => {
      getVouchersFromApi();
      expect(axios.get).toHaveBeenCalledWith(
        'https://shielded-wildwood-82973.herokuapp.com/vouchers.json'
      );
    });
  });
});
