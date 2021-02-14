import styled from 'styled-components';

export const Container = styled.div`
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
  width: 450px;
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
  box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.2);
  width: 450px;
  height: 200px;
  display: flex;
  align-items: center;
  font-size: 30px;
  padding: 15px;
  margin-top: 10px;
  flex-direction: row;
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
  width: 200px;
  transition: background-color 1s;
  margin-left: 120px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
    background-color: transparent;
    color: #28c383;
    cursor: pointer;
    svg {
      opacity: 0.8;
      background-color: transparent;
      color: #28c383;
    }
  }
`;
export const CartImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
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
  overflow-y: auto;
`;
export const CartTitle = styled.p`
  margin-top: 10px;
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
  position: relative;
  display: flex;
  justify-content: center;
  color: #737373;
  font-size: 15px;
  margin-top: 50px;
  p {
    padding: 20px 0;
  }
`;
export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;
export const LabelRow = styled.div`
  display: flex;
  width: 300px;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
  /* margin-top: -50px; */
`;
export const ItemRow = styled.div`
  display: flex;
  margin-left: 10px;
  width: 300px;
  height: 20px;
  flex-direction: row;
  justify-content: space-between;
  /* margin-top: -20px; */
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
`;
export const Label = styled.span`
  font-size: 15px;
  color: #737373;
`;
export const Item = styled.span`
  font-size: 15px;
  color: #737373;
`;
export const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
`;
export const CartName = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CartPrice = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CartItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 220px;
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
  background-color: #01ac66;
`;
