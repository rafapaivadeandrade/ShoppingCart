import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid #e0dde5;
  height: 55px;
`;
export const FirstNav = styled.nav`
  margin: 10px 0;
  display: flex;
  justify-content: space-evenly;
  width: 350px;
  align-items: center;
  margin-left: -200px;
`;
export const FirstSpan = styled.span`
  font-size: 35px;
  font-weight: bold;
  color: #737373;
  font-style: italic;

  &:hover {
    cursor: pointer;
    border-bottom: 5px solid #b5c401;
    padding-bottom: 5px;
    border-radius: 5px;
  }
`;
export const SecondSpan = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #737373;
  font-style: italic;
  &:hover {
    cursor: pointer;
    border-bottom: 5px solid #b5c401;
    padding-bottom: 5px;
    border-radius: 5px;
  }
`;
export const SecondNav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 200px;
  align-items: center;
  margin-right: -100px;
`;
export const ThirdSpan = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #737373;
  font-style: italic;

  &:hover {
    cursor: pointer;
    border-bottom: 5px solid #b5c401;
    padding-bottom: 5px;
    border-radius: 5px;
  }
`;
export const FourthSpan = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #737373;
  font-style: italic;
  &:hover {
    cursor: pointer;
    border-bottom: 5px solid #b5c401;
    padding-bottom: 5px;
    border-radius: 5px;
  }
`;
export const Main = styled.main`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 80%;
`;

export const Section = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  p:nth-of-type(1) {
    padding-top: 20px;
    color: #737373;
    font-style: italic;
    font-size: 20px;
  }
`;
export const SortByLabel = styled.span`
  font-weight: bold;
  padding-top: 20px;
  color: #737373;
  font-style: italic;
  font-size: 12px;
`;
export const SortByDiv = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  width: 350px;
  justify-content: space-between;
`;
export const Price = styled.div`
  outline: none;
  border-radius: 20px;
  padding: 5px 20px;
  border: 1px solid #7f3992;
  color: #7f3992;
  font-weight: bold;
  font-style: italic;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    background-color: #7f3992;
    color: #f7f7f7;
  }
`;
export const Popularidade = styled.div`
  outline: none;
  border-radius: 20px;
  padding: 5px 20px;
  border: 1px solid #28c383;
  background-color: #28c383;
  color: white;
  font-weight: bold;
  font-style: italic;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    background-color: #f7f7f7;
    color: #28c383;
  }
`;
export const OrdemAlfabetica = styled.div`
  outline: none;
  border-radius: 20px;
  padding: 5px 20px;
  border: 1px solid #f9ba70;
  color: #f9ba70;
  font-weight: bold;
  font-style: italic;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    background-color: #f9ba70;
    color: #f7f7f7;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 10px;
`;
export const Items = styled.div`
  background-color: #adc0c4;
  border: 2px solid #fff;
  border-radius: 50%;
  text-align: center;
  padding-top: 17px;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  color: #ffffff;
  font-size: 12px;
`;
export const Buttons = styled.div`
  border-radius: 20px;
  padding-top: 20px;
  color: #7f3992;
`;
export const AddButton = styled.button`
  color: #ffffff;
  background-color: #27c383;
  outline: none;
  border: 1px solid #27c383;
  font-size: 12px;
  font-weight: bold;
  border-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 150px;
  transition: background-color 1s;
  &:hover {
    opacity: 0.8;
    background-color: transparent;
    color: #28c383;
    cursor: pointer;
  }
`;
export const Aside = styled.aside`
  width: 300px;
  height: 400px;
  border-radius: 8px;
`;
export const CartContainer = styled.div`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background-color: #ffffff;
  padding: 20px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid #e0dde5;
`;
export const CartTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #737373;
`;
export const Total = styled.div`
  font-size: 20px;
  color: #737373;
  display: flex;
  flex-direction: row;
`;
export const TotalLabel = styled.p`
  text-indent: 5px;
  font-size: 20px;
`;
export const CartItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 90px;
  margin-bottom: 5px;

  i {
    font-size: 15px;
    cursor: pointer;
  }
`;
export const CartBorder = styled.div`
  height: 60px;
  width: 3px;
`;
export const SaveCart = styled.div`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  border: 1px solid #e0dde5;
  height: 24%;
  font-weight: bold;
  align-items: center;
`;
export const SaveCartLabel = styled.p`
  color: #28c383;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
export const Footer = styled.footer`
  border-top: 1px solid #e0dde5;
  display: flex;
  justify-content: center;
  color: #737373;
  font-size: 15px;
  margin-top: 50px;
  align-items: center;
  p {
    margin-top: 20px;
  }
`;
