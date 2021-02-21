import React, { useEffect } from 'react';
import {
  Container,
  Nav,
  FirstNav,
  FirstSpan,
  SecondNav,
  ThirdSpan,
  Main,
  Section,
  DiscountContainer,
  Box,
  Aside,
  CartContainer,
  CartTitle,
  Total,
  TotalLabel,
  SaveCart,
  Input,
  Button,
  CheckOutButton,
} from './styles';
import '../App.css';
import CartDetail from '../components/CartDetails';
import ItemsData from '../components/Items';
import Cart from '../components/Cart';
import NumberFormat from 'react-number-format';
import Discount from '../components/Discount';

function Landing() {
  return (
    <Container>
      <Nav>
        <FirstNav>
          <FirstSpan>Shopping</FirstSpan>
        </FirstNav>
        <SecondNav>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 25,
              backgroundColor: '#666666',
            }}
          />{' '}
          <ThirdSpan>John doe</ThirdSpan>
        </SecondNav>
      </Nav>
      <Main>
        <Section>
          <Box>
            <ItemsData />
            <ItemsData />
            <ItemsData />
            <ItemsData />
            <ItemsData />
            <ItemsData />
          </Box>
        </Section>
        <Aside>
          <CartTitle>Shopping Cart</CartTitle>
          <CartContainer>
            <Cart />
            <Cart />
          </CartContainer>
          <Discount />
          <SaveCart>
            <CartDetail />
            <Total>
              <TotalLabel style={{ color: '#333333' }}>
                Total:{' '}
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
          </SaveCart>
          <CheckOutButton>CHECKOUT</CheckOutButton>
        </Aside>
      </Main>
    </Container>
  );
}
export default Landing;
