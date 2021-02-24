import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Discount from './index';
import createStore from '../../redux/index';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event';

describe('Discount', () => {
  const store = createStore;
  const mockInputValue = '#30OFF';

  it('should trigger apply discount button', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Discount />
      </Provider>
    );
    const applyButton = getByText(/APPLY/i);
    user.click(applyButton);
  });

  it('should accept input value', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Discount />
      </Provider>
    );
    const inputDiscount = getByPlaceholderText('Discount code');
    fireEvent.change(inputDiscount, { target: { value: mockInputValue } });
    expect(inputDiscount).toHaveValue('#30OFF');
  });
});
