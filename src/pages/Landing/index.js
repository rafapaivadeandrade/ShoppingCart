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
} from './styles';
import { useProduct } from '../../hooks/ContextApi';

function Landing() {
  const {} = useProduct();

  useState(() => {}, []);
  return (
    <Container>
      <Nav>
        <FirstNav>
          <div>
            <FirstSpan>Logo</FirstSpan>
          </div>
          <div>
            <SecondSpan>Home</SecondSpan>
          </div>
        </FirstNav>
        <SecondNav>
          <div>
            <ThirdSpan>Conta</ThirdSpan>
          </div>
          <div>
            <FourthSpan>
              Log out <i class="fas fa-arrow-right fa-sm"></i>
            </FourthSpan>
          </div>
        </SecondNav>
      </Nav>
      <Main>
        <Section>
          <p>
            <strong>Produtos</strong>
          </p>

          <SortByLabel>Sortear por</SortByLabel>
          <SortByDiv>
            <Price>Preço</Price>
            <Popularidade>Popularidade</Popularidade>
            <OrdemAlfabetica>Ordem Alfabetica</OrdemAlfabetica>
          </SortByDiv>
          <Box></Box>
          <Buttons>
            <AddButton>Adicionar ao Cart</AddButton>
          </Buttons>
        </Section>
        <Aside>
          <CartContainer>
            <CartTitle>
              <em>CART</em>
            </CartTitle>
            <CartItems>
              <i className="far fa-trash-alt"></i>
              <CartBorder></CartBorder>
            </CartItems>

            <Total>
              <strong>
                <em>CART</em>
              </strong>{' '}
              <TotalLabel>
                TOTAL: <span></span>{' '}
              </TotalLabel>
            </Total>
          </CartContainer>
          <SaveCart>
            <SaveCartLabel>
              Save
              <span>
                <i class="fas fa-arrow-right fa-xs"></i>
              </span>
            </SaveCartLabel>
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
