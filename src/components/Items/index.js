import React from 'react';
import {
  BuyButton,
  LabelRow,
  Label,
  Items,
  Image,
  Period,
} from '../../page/styles';
import NumberFormat from 'react-number-format';

function ItemsData({ product }) {
  return (
    <Items>
      <Image></Image>
      <Label style={{ fontWeight: 'bold' }}>{product.name}</Label>
      <LabelRow>
        <Label>
          <NumberFormat
            value={product.price.toFixed(2)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$ '}
          />
        </Label>
        <Period>.</Period>
        <Label>{product.available} left</Label>
      </LabelRow>
      <BuyButton onClick={() => {}}>BUY</BuyButton>
    </Items>
  );
}
export default ItemsData;
