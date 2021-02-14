import React, { createContext, useState, useContext } from 'react';
import Data from '../assets/products.json';
const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  function fetchData() {
    setProducts(Data);
  }

  return (
    <ProductContext.Provider
      value={{
        fetchData,
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export function useProduct() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('Product must be used within an Product Provider');
  }
  return context;
}
