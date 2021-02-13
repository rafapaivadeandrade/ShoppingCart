import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  );
};

export function useProduct() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('Product must be used within an Product Provider');
  }
  return context;
}
