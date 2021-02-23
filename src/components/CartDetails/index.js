import React from 'react';
import { TotalLabel } from '../../page/styles';
import { useSelector } from 'react-redux';

function CartDetail() {
  const { products } = useSelector((state) => state);
  return (
    <div>
      <>
        <div>
          <TotalLabel>
            Subtotal
            <span>{'$ ' + products.subtotal.toFixed(2)}</span>{' '}
          </TotalLabel>
          <TotalLabel>
            Shipping:
            <span>{'$ ' + products.shipping.toFixed(2)}</span>{' '}
          </TotalLabel>
          <TotalLabel>
            Discount:
            <span>{'$ ' + products.discount.toFixed(2)}</span>{' '}
          </TotalLabel>
        </div>
      </>
    </div>
  );
}
export default CartDetail;
