import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Cart from './index';
import createStore from '../../redux/index';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

describe('Cart', () => {
  const store = createStore;
  const mockProduct = { id: 1, name: 'Banana', price: 10.0, available: 10 };
  const MockAddProduct = jest.fn();
  const MockRemoveProduct = jest.fn();

  it('should trigger the add button and add product', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Cart product={mockProduct} />
      </Provider>
    );
    const addButton = getByTestId('plus');
    fireEvent.click(addButton);
  });
  it('should trigger the remove button and remove product', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Cart product={mockProduct} />
      </Provider>
    );
    const removeButton = getByTestId('minus');
    fireEvent.click(removeButton);
  });
  it('should render a product object', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Cart product={mockProduct} />
      </Provider>
    );
    const Item = getByTestId('item');
    expect(Item).toHaveTextContent(mockProduct.name);
    expect(Item).toHaveTextContent(mockProduct.price);
    expect(Item).toHaveTextContent(mockProduct.id);
  });
});
