import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Cart from './index';
import createStore from '../../redux/index';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

describe('Cart', () => {
  const store = createStore;
  const mockProduct = { id: 1, name: 'Banana', price: 10.0, available: 10 };

  it('should trigger the add button', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Cart product={mockProduct} />
      </Provider>
    );
    const buyButton = getByTestId('plus');
    fireEvent.click(buyButton);
  });
  it('should trigger the remove button', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Cart product={mockProduct} />
      </Provider>
    );
    const buyButton = getByTestId('minus');
    fireEvent.click(buyButton);
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
