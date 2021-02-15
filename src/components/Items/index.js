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
} from '../../pages/Landing/styles';
import { useProduct } from '../../hooks/ContextApi';
// import cartIcon from '../../assets/images/icons/cart-icon.svg';

function ItemsData({ product }) {
  const { addToCart } = useProduct();
  return (
    <Items>
      <Image src={require(`../../assets/images/${product.image}`).default} />
      <Column>
        <LabelRow>
          <Label>Name:</Label>
          <Label>Price:</Label>
          <Label>Score:</Label>
        </LabelRow>
        <ItemRow>
          <Item style={{ width: '30px' }}>{product.name}</Item>
          <Item>R$:{product.price}</Item>
          <Item>{product.score}</Item>
        </ItemRow>
        <AddButton
          onClick={() => {
            addToCart(product);
          }}
        >
          {/* <CartImage src={cartIcon} /> */}
          Adicionar ao Cart
        </AddButton>
      </Column>
    </Items>
  );
}
export default ItemsData;
