import React from 'react';
import { ProductProvider } from './hooks/ContextApi';
function App() {
  return (
    <ProductProvider>
      <div></div>
    </ProductProvider>
  );
}

export default App;
