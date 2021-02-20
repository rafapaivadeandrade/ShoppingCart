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
  Price,
  Box,
  Aside,
  CartContainer,
  CartTitle,
  Total,
  TotalLabel,
  SaveCart,
} from './styles';
import '../App.css';
import CartDetail from '../components/CartDetails';
import ItemsData from '../components/Items';
import Cart from '../components/Cart';

function Landing() {
  return (
    <Container>
      <Nav>
        <FirstNav>
          <FirstSpan>Shopping</FirstSpan>
        </FirstNav>
        <SecondNav>
          <ThirdSpan>John doe</ThirdSpan>
        </SecondNav>
      </Nav>
      <Main>
        <Section>
          <Box>{/* <ItemsData /> */}</Box>
        </Section>
        <Aside>
          <CartTitle>
            <em>CART</em>
          </CartTitle>
          <CartContainer>{/* <Cart /> */}</CartContainer>
          <SaveCart>
            <Total>
              <strong>
                <em>CART</em>
              </strong>{' '}
              <TotalLabel>TOTAL:</TotalLabel>
            </Total>
            {/* <CartDetail /> */}
          </SaveCart>
        </Aside>
      </Main>
    </Container>
  );
}
export default Landing;
