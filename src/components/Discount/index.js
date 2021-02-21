import React from 'react';
import { DiscountContainer, Input, Button } from '../../page/styles';

function Discount() {
  return (
    <DiscountContainer>
      <Input placeholder="Discount code" />
      <Button>APPLY</Button>
    </DiscountContainer>
  );
}

export default Discount;
