import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CartDetail from './index';
import createStore from '../../redux/index';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

describe('itemsData', () => {
  const store = createStore;

  it('should render Cart Details Component', () => {
    const result = render(
      <Provider store={store}>
        <CartDetail />
      </Provider>
    );

    expect(result).toMatchSnapshot();
    expect(result).toBeTruthy();
  });
});
