import React, { useState } from 'react';
import { TotalLabel } from '../../page/styles';
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';

function CartDetail() {
  const { products } = useSelector((state) => state);
  return (
    <div>
      <>
        <div>
          <TotalLabel>
            Subtotal
            <>
              <span>
                <NumberFormat
                  value={products.subtotal}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$ '}
                />
              </span>
            </>
          </TotalLabel>
          <TotalLabel>
            Shipping:
            <>
              <span>
                <NumberFormat
                  value={products.shipping}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'R$ '}
                />
              </span>{' '}
            </>
          </TotalLabel>
          <TotalLabel>
            Discount:
            <>
              <span>
                <NumberFormat
                  value={products.discount}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'R$ '}
                />
              </span>{' '}
            </>
          </TotalLabel>
        </div>
      </>
    </div>
  );
}
export default CartDetail;
