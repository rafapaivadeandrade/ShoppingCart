import React, { useState } from 'react';
import { Total, TotalLabel } from '../../page/styles';
import NumberFormat from 'react-number-format';

function CartDetail() {
  return (
    <div>
      <>
        <div>
          <TotalLabel>
            Subtotal
            <>
              <span>
                <NumberFormat
                  value={234.0}
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
                  value={10}
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
                  value={1}
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
