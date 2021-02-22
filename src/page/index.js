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
  Box,
  Aside,
  CartContainer,
  CartTitle,
  Total,
  TotalLabel,
  SaveCart,
  CheckOutButton,
} from './styles';
import '../App.css';
import CartDetail from '../components/CartDetails';
import ItemsData from '../components/Items';
import Cart from '../components/Cart';
import NumberFormat from 'react-number-format';
import Discount from '../components/Discount';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ActionCreators from '../redux/actionCreators';

function Landing() {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionCreators.getProductsRequest(true));
    console.log(products.cart);
  }, [products.cart]);

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
            {products.data.map((product) => {
              return <ItemsData key={product.id} product={product} />;
            })}
          </Box>
        </Section>
        <Aside>
          <CartTitle>Shopping Cart</CartTitle>
          <CartContainer>
            {products.cart.length === 0 && ''}
            {products.cart.length !== 0 &&
              products.cart.map((cart) => {
                return <Cart product={cart} />;
              })}
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
