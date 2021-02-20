import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './page';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} />
    </BrowserRouter>
  );
}
export default Routes;
