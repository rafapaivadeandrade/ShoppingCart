import React from 'react';
import App from '../App';
import { fireEvent, render, queryByAttribute } from '@testing-library/react';
import { ProductProvider, ProductContext } from '../hooks/ContextApi';
const addToCart = jest.fn();
const removeFromCart = jest.fn();

test('should test add product label button', () => {
  const { getByText } = render(
    <ProductProvider>
      <ProductContext.Consumer>
        {(value) => <button>Adicionar ao Cart</button>}
      </ProductContext.Consumer>
    </ProductProvider>
  );
  expect(getByText('Adicionar ao Cart')).toBeTruthy();
});
test('should test add product function', () => {
  const { getByText } = render(
    <ProductProvider value={{ addToCart }}>
      <ProductContext.Consumer>
        {(value) => (
          <button onClick={addToCart(value)}>Adicionar ao Cart</button>
        )}
      </ProductContext.Consumer>
    </ProductProvider>
  );
  const submitButton = getByText('Adicionar ao Cart');
  fireEvent.click(submitButton);

  expect(addToCart).toHaveBeenCalledTimes(1);
});
// test('should test remove product function', () => {
//   const getById = queryByAttribute.bind(null, 'id');

//   const dom = render(<App />);
//   const icon = getById(dom.container, 'icon');
//   const { getByText } = render(
//     <ProductProvider value={{ removeFromCart }}>
//       <ProductContext.Consumer>
//         {(value) => <i onClick={removeFromCart(value)}></i>}
//       </ProductContext.Consumer>
//     </ProductProvider>
//   );
//   //   const submitButton = getByText('Adicionar ao Cart');
//   fireEvent.click(icon);

//   expect(removeFromCart).toHaveBeenCalledTimes(1);
// });
