import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ItemsData from './index';
import createStore from '../../redux/index';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

describe('itemsData', () => {
  const store = createStore;
  const mockProduct = {
    id: 1,
    name: 'Banana',
    price: 10.0,
    available: 10,
    left: 0,
  };

  it('should render itemsData Component', () => {
    const result = render(
      <Provider store={store}>
        <ItemsData product={mockProduct} />
      </Provider>
    );

    expect(result).toBeTruthy();
  });

  it('should trigger the buy button', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ItemsData product={mockProduct} />
      </Provider>
    );
    const buyButton = getByText(/BUY/i);

    fireEvent.click(buyButton);
  });
  it('should render a product object', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ItemsData product={mockProduct} />
      </Provider>
    );
    const Item = getByTestId('item');
    expect(Item).toHaveTextContent(mockProduct.name);
    expect(Item).toHaveTextContent(mockProduct.price);
    expect(Item).toHaveTextContent(mockProduct.available);
    expect(Item).toHaveTextContent(mockProduct.left);
  });
});
