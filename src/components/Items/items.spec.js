import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ItemsData from './index';
import createStore from '../../redux/index';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event';

describe('itemsData', () => {
  const store = createStore;
  const mockProduct = { id: 1, name: 'Banana', price: 10.0, available: 10 };

  it('should display the buy button', () => {
    const { getByText, debug } = render(
      <Provider store={store}>
        <ItemsData product={mockProduct} />
      </Provider>
    );
    const buyButton = getByText(/BUY/i);
    fireEvent.click(buyButton);
  });
  it('should render a product object', () => {
    const { debug, getByTestId } = render(
      <Provider store={store}>
        <ItemsData product={mockProduct} />
      </Provider>
    );
    const Item = getByTestId('item');
    expect(Item).toHaveTextContent(mockProduct.name);
  });
});
