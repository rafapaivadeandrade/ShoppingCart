import React, { useEffect, useState } from 'react';
import { DiscountContainer, Input, Button } from '../../page/styles';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ActionCreators from '../../redux/actionCreators';

function Discount() {
  const [discount, setDiscount] = useState('');
  const { vouchers, products } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionCreators.getVouchersRequest());
  }, []);

  function getDiscount() {
    vouchers.vouchers.forEach((voucher) => {
      if (voucher.code === discount) {
        dispatch(ActionCreators.addToCartRequest(voucher));
      }
    });
  }
  return (
    <DiscountContainer>
      <Input
        placeholder="Discount code"
        onChange={(e) => setDiscount(e.target.value)}
        value={discount}
      />
      <Button onClick={() => getDiscount()} disabled={products.isDiscounted}>
        APPLY
      </Button>
    </DiscountContainer>
  );
}

export default Discount;
