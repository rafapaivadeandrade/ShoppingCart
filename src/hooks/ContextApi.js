import React, { createContext, useState, useContext, useCallback } from 'react';
import Data from '../assets/products.json';
const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchData = useCallback(() => {
    setProducts(Data);
  }, [products]);
  async function sortPrice() {
    console.log('sort');
    const product = [...products].sort((a, b) => {
      return a.price < b.price ? -1 : 1;
    });
    setProducts(product);
  }
  return (
    <ProductContext.Provider
      value={{
        fetchData,
        products,
        setProducts,
        sortPrice,
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
