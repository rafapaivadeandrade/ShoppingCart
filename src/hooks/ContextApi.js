import React, { createContext, useState, useContext, useCallback } from 'react';
import Data from '../assets/products.json';
const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchData = useCallback(() => {
    setProducts(Data);
  }, [products]);

  async function sortPrice() {
    const product = [...products].sort((a, b) => {
      return a.price < b.price ? -1 : 1;
    });
    setProducts(product);
  }

  async function sortPopularity() {
    const product = [...products].sort((a, b) => {
      return a.score < b.score ? -1 : 1;
    });
    setProducts(product);
  }

  async function sortAlphabeticalOrder() {
    const product = [...products].sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    });
    setProducts(product);
  }
  function addToCart(product) {
    setCart((previousProduct) => {
      return [...previousProduct, product];
    });
    console.log(cart);
  }
  return (
    <ProductContext.Provider
      value={{
        fetchData,
        products,
        setProducts,
        sortPrice,
        sortPopularity,
        sortAlphabeticalOrder,
        addToCart,
        cart,
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
