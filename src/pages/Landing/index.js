import React, { useState, useEffect } from 'react';
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
  SaveCartLabel,
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
  } = useProduct();
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Nav>
        <FirstNav>
          <>
            <FirstSpan>Logo</FirstSpan>
          </>
          <>
            <SecondSpan>Home</SecondSpan>
          </>
        </FirstNav>
        <SecondNav>
          <>
            <ThirdSpan>Conta</ThirdSpan>
          </>
          <>
            <FourthSpan>
              Log out <i className="fas fa-arrow-right fa-sm"></i>
            </FourthSpan>
          </>
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
            {products.map(
              (product) => {
                return (
                  <Items key={product.id}>
                    <Image
                      src={
                        require(`../../assets/images/${product.image}`).default
                      }
                    />
                    <Column>
                      <LabelRow>
                        <Label>Name:</Label>
                        <Label>Price:</Label>
                        <Label>Score:</Label>
                      </LabelRow>
                      <ItemRow>
                        <Item style={{ width: '30px' }}>{product.name}</Item>
                        <Item>R$:{product.price}</Item>
                        <Item>{product.score}</Item>
                      </ItemRow>
                      <AddButton
                        onClick={() => {
                          addToCart(product);
                        }}
                      >
                        <CartImage src={cartIcon} />{' '}
                        <span>Adicionar ao Cart</span>
                      </AddButton>
                    </Column>
                  </Items>
                );
              },
              [products]
            )}
          </Box>
        </Section>
        <Aside>
          <CartContainer>
            <CartTitle>
              <em>CART</em>
            </CartTitle>
            {cart.map((cartItem) => {
              return (
                <CartItems>
                  <i
                    className="far fa-trash-alt"
                    onClick={() => {
                      removeFromCart(cartItem);
                    }}
                  ></i>
                  <CartBorder></CartBorder>
                  <CartDetails>
                    <CartName>
                      <Item style={{ width: '180px' }}>{cartItem.name}</Item>
                    </CartName>
                    <CartPrice>
                      <Item>R$:{cartItem.price}</Item>
                    </CartPrice>
                  </CartDetails>
                </CartItems>
              );
            })}
          </CartContainer>
          <SaveCart>
            <Total>
              <strong>
                <em>CART</em>
              </strong>{' '}
              <TotalLabel>
                Frete: <span></span>{' '}
              </TotalLabel>
            </Total>
            <Total>
              <strong>
                <em>CART</em>
              </strong>{' '}
              <TotalLabel>
                Subtotal: <span></span>{' '}
              </TotalLabel>
            </Total>
            <Total>
              <strong>
                <em>CART</em>
              </strong>{' '}
              <TotalLabel>
                TOTAL: <span></span>{' '}
              </TotalLabel>
            </Total>
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
