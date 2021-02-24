import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ItemsData from './index';
import createStore from '../../redux/index';
import { Provider } from 'react-redux';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('itemsData', () => {
  const store = createStore;
  const mockProduct = { id: 1, name: 'Banana', price: 10.0, available: 10 };

  it('should render ItemsData Component', () => {
    // const items = shallow(
    //     <Provider store={store}>
    //       <ItemsData />
    //     </Provider>
    // );
    // // expect(items).toMatchSnapshot();
    // items.debug();
  });

  it('should display the buy button', () => {
    const { getByText, debug } = render(
      <Provider store={store}>
        <ItemsData product={mockProduct} />
      </Provider>
    );
    // debug();
    const buyButton = getByText(/BUY/i);
    fireEvent.click(buyButton);
  });
  it('should render a product object', () => {
    const { getByTextId } = render(
      <Provider store={store}>
        <ItemsData product={mockProduct} />
      </Provider>
    );
    const Item = getByTextId('item');
    expect(Item).toHaveTextContent(mockProduct.name);
  });
});
