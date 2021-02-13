import React from 'react';
import { ProductProvider } from './hooks/ContextApi';
import Routes from './routes';
function App() {
  return (
    <ProductProvider>
      <Routes />
    </ProductProvider>
  );
}

export default App;
