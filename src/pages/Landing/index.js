import React, { useEffect } from 'react';
import {
  Container,
  Nav,
  FirstNav,
  FirstSpan,
  SecondSpan,
  SecondNav,
  ThirdSpan,
  FourthSpan,
  Main,
  Section,
  SortByLabel,
  SortByDiv,
  Price,
  Popularidade,
  OrdemAlfabetica,
  Box,
  Items,
  Buttons,
  AddButton,
  Aside,
  CartContainer,
  CartTitle,
  Total,
  TotalLabel,
  CartItems,
  CartBorder,
  SaveCart,
  Footer,
  Image,
  LabelRow,
  ItemRow,
  Column,
  Label,
  Item,
  CartImage,
  CartDetails,
  CartName,
  CartPrice,
} from './styles';
import { useProduct } from '../../hooks/ContextApi';
import cartIcon from '../../assets/images/icons/cart-icon.svg';
import NumberFormat from 'react-number-format';
import CartDetail from '../../components/CartDetails/index';
import ItemsData from '../../components/Items/index';
import Cart from '../../components/Cart/index';

function Landing() {
  const {
    products,
    fetchData,
    sortPrice,
    sortPopularity,
    sortAlphabeticalOrder,
    addToCart,
    cart,
    removeFromCart,
    totalCalculated,
  } = useProduct();
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Nav>
        <FirstNav>
          <FirstSpan>Logo</FirstSpan>
          <SecondSpan>Home</SecondSpan>
        </FirstNav>
        <SecondNav>
          <ThirdSpan>Conta</ThirdSpan>
          <FourthSpan>
            Log out <i className="fas fa-arrow-right fa-sm"></i>
          </FourthSpan>
        </SecondNav>
      </Nav>
      <Main>
        <Section>
          <p>
            <strong>Produtos</strong>
          </p>

          <SortByLabel>Sortear por:</SortByLabel>
          <SortByDiv>
            <Price
              onClick={() => {
                sortPrice();
              }}
            >
              Preço
            </Price>
            <Popularidade onClick={() => sortPopularity()}>
              Popularidade
            </Popularidade>
            <OrdemAlfabetica onClick={() => sortAlphabeticalOrder()}>
              Ordem Alfabética
            </OrdemAlfabetica>
          </SortByDiv>
          <Box>
            {products.map((product) => {
              return <ItemsData key={product.id} product={product} />;
            })}
          </Box>
        </Section>
        <Aside>
          <CartTitle>
            <em>CART</em>
          </CartTitle>
          <CartContainer>
            {cart.map((cartItem) => {
              return <Cart key={cartItem.id} cartItem={cartItem} />;
            })}
          </CartContainer>
          <SaveCart>
            <Total>
              <strong>
                <em>CART</em>
              </strong>{' '}
              <TotalLabel>
                TOTAL:
                {cart.length > 0 && (
                  <>
                    <span>
                      <NumberFormat
                        value={totalCalculated.current.toFixed(2)}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'R$ '}
                      />
                    </span>
                  </>
                )}
              </TotalLabel>
            </Total>
            <CartDetail />
          </SaveCart>
        </Aside>
      </Main>
      <Footer>
        <p>Copyright 2021 Supera Tecnologia</p>
      </Footer>
    </Container>
  );
}

export default Landing;
