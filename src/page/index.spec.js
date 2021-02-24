import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Landing from './index';
import createStore from '../redux/index';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

describe('landing', () => {
  const store = createStore;

  it('should render Landing Component', () => {
    const result = render(
      <Provider store={store}>
        <Landing />
      </Provider>
    );
    expect(result).toBeTruthy();
  });
});
