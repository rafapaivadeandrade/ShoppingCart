import React from 'react';
import {
  AddButton,
  Image,
  LabelRow,
  ItemRow,
  Column,
  Label,
  Item,
  CartImage,
  Items,
} from '../../page/styles';

function ItemsData({ product }) {
  return (
    <Items>
      <Column>
        <LabelRow>
          <Label>Name:</Label>
          <Label>Price:</Label>
          <Label>Score:</Label>
        </LabelRow>
        <ItemRow>
          <Item style={{ width: '30px' }}>name</Item>
          <Item>R$:123</Item>
        </ItemRow>
        <AddButton>Adicionar ao Cart</AddButton>
      </Column>
    </Items>
  );
}
export default ItemsData;
