import React from 'react';
import {
  AddButton,
  LabelRow,
  ItemRow,
  Column,
  Label,
  Item,
  Items,
  Image,
  Period,
} from '../../page/styles';

function ItemsData({ product }) {
  return (
    <Items>
      <Image></Image>
      <Label style={{ fontWeight: 'bold' }}>Product Name</Label>
      <LabelRow>
        <Label>$ 123,00</Label>
        <Period>.</Period>
        <Label>2 left</Label>
      </LabelRow>
      <AddButton>BUY</AddButton>
    </Items>
  );
}
export default ItemsData;
