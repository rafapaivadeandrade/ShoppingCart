import React, { useEffect } from 'react';
import {
  Container,
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
import CartDetail from '../components/CartDetails';
import ItemsData from '../components/Items';
import Cart from '../components/Cart';
import Discount from '../components/Discount';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ActionCreators from '../redux/actionCreators';
import NavBar from '../components/NavBar';

function Landing() {
  const { products, vouchers } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionCreators.getProductsRequest(true));
  }, []);
  if (vouchers.errorMessage.length > 0) {
    return (
      <Container>
        <NavBar />
        <Main>
          <p>{vouchers.errorMessage}</p>
        </Main>
      </Container>
    );
  }

  if (products.errorMessage.length > 0) {
    return (
      <Container>
        <NavBar />
        <Main>
          <p>{products.errorMessage}</p>
        </Main>
      </Container>
    );
  } else {
    return (
      <Container>
        <NavBar />
        <Main>
          <Section>
            <Box>
              {/* DISPLAY PRODUCTS TO BUY*/}
              {products.data.map((product) => {
                return <ItemsData key={product.id} product={product} />;
              })}
            </Box>
          </Section>
          <Aside>
            <CartTitle>Shopping Cart</CartTitle>
            <CartContainer>
              {/* DISPLAY PRODUCTS IN THE CART */}
              {products.cart.map((cart) => {
                return <Cart key={cart.id} product={cart} />;
              })}
            </CartContainer>
            <Discount />
            <SaveCart>
              {/* DISPLAY CART TOTAL AND DETAILS */}
              <CartDetail />
              <Total>
                <TotalLabel style={{ color: '#333333' }}>
                  Total:
                  <span>{'$ ' + products.total.toFixed(2)}</span>{' '}
                </TotalLabel>
              </Total>
            </SaveCart>
            <CheckOutButton>CHECKOUT</CheckOutButton>
          </Aside>
        </Main>
      </Container>
    );
  }
}
export default Landing;
