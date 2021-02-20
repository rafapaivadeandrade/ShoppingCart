import React, { useState } from 'react';
import { Total, TotalLabel } from '../../page/styles';
import NumberFormat from 'react-number-format';

function CartDetail() {
  return (
    <div>
      <>
        <div>
          <Total>
            <strong>
              <em>CART</em>
            </strong>
            <TotalLabel>
              Frete:
              <>
                <span>
                  <NumberFormat
                    value={1}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'R$ '}
                  />
                </span>
              </>
            </TotalLabel>
          </Total>
          <Total>
            <strong>
              <em>CART</em>
            </strong>{' '}
            <TotalLabel>
              Subtotal:
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
          </Total>
        </div>
      </>
    </div>
  );
}
export default CartDetail;
