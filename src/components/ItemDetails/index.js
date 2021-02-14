import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { Total, TotalLabel, ArrowImage } from '../../pages/Landing/styles';
import NumberFormat from 'react-number-format';
import { useProduct } from '../../hooks/ContextApi';
import arrowDown from '../../assets/images/icons/arrow-down-icon.svg';

function ItemDetails() {
  const [open, setOpen] = useState(false);
  const { cart, freteCalculated, subTotalCalculated } = useProduct();

  return (
    <div>
      <Button
        variant="small"
        onClick={() => setOpen(!open)}
        style={{ marginBottom: '0px', marginTop: '-20px' }}
      >
        Details
        {open === false ? `+` : <ArrowImage src={arrowDown} />}
      </Button>
      <Collapse in={open}>
        <div>
          <Total>
            <strong>
              <em>CART</em>
            </strong>
            <TotalLabel>
              Frete:
              {cart.length > 0 && (
                <>
                  <span>
                    <NumberFormat
                      value={freteCalculated.current}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'R$ '}
                    />
                  </span>
                </>
              )}
            </TotalLabel>
          </Total>
          <Total>
            <strong>
              <em>CART</em>
            </strong>{' '}
            <TotalLabel>
              Subtotal:
              {cart.length > 0 && (
                <>
                  <span>
                    <NumberFormat
                      value={subTotalCalculated.current.toFixed(2)}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'R$ '}
                    />
                  </span>{' '}
                </>
              )}
            </TotalLabel>
          </Total>
        </div>
      </Collapse>
    </div>
  );
}
export default ItemDetails;
