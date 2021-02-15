import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useRef,
} from 'react';
import Data from '../assets/products.json';
export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  let freteCalculated = useRef(0);
  let subTotalCalculated = useRef(0);
  let totalCalculated = useRef(0);

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
  async function addToCart(product) {
    setCart((previousProduct) => {
      return [...previousProduct, product];
    });

    calculateFrete(product.price);
    calculateSubTotal(product.price);
    calculateTotal();
  }
  function removeFromCart(product) {
    setCart((previousProduct) => {
      return previousProduct.filter((prev) => prev.id !== product.id);
    });

    freteCalculated.current <= 0
      ? (freteCalculated.current = 10 * [cart.length - 1])
      : (freteCalculated.current -= 10);

    subTotalCalculated.current = subTotalCalculated.current - product.price;

    totalCalculated.current =
      subTotalCalculated.current + freteCalculated.current;
  }
  function calculateFrete() {
    Math.round(Number(subTotalCalculated.current)) >= 250
      ? (freteCalculated.current = 0)
      : (freteCalculated.current += 10);
  }
  function calculateSubTotal(productPrice) {
    subTotalCalculated.current += productPrice;
    if (Math.round(subTotalCalculated.current) >= 250) {
      freteCalculated.current = 0;
    }
  }
  function calculateTotal() {
    totalCalculated.current =
      subTotalCalculated.current + freteCalculated.current;
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
        removeFromCart,
        freteCalculated,
        subTotalCalculated,
        totalCalculated,
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
