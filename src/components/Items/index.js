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
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ActionCreators from '../../redux/actionCreators';
function ItemsData({ product }) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);

  function addToCart() {
    var repeatedProduct = products.cart.find((p) => p.id === product.id);
    if (repeatedProduct) return null;
    dispatch(ActionCreators.addToCartRequest(product));
  }
  return (
    <Items data-testid="item" id="item">
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
        <Label>
          {product.left === undefined ? product.available : product.left} left
        </Label>
      </LabelRow>
      <BuyButton onClick={() => addToCart()}>BUY</BuyButton>
    </Items>
  );
}
export default ItemsData;
