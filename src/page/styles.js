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
  background-color: #d8d8d8;
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
  color: #333333;
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
  justify-content: space-evenly;
  width: 200px;
  align-items: center;
  margin-right: -100px;
`;
export const ThirdSpan = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #333333;
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
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 900px;
  margin-top: 10px;
`;
export const Items = styled.div`
  box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.2);
  width: 200px;
  height: 260px;
  display: flex;
  align-items: center;
  font-size: 30px;
  margin-top: 10px;
  flex-direction: column;
  margin-right: 50px;
  border-radius: 8px;
  margin-bottom: 20px;
`;
export const Buttons = styled.div`
  border-radius: 8px;
  color: #7f3992;
  height: 70px;
  width: 50px;
`;
export const AddButton = styled.div`
  color: #7f3992;
  height: 35px;
  border: 1px solid #c4c4c4;
  text-align: center;
  padding: 5px;
  font-size: 15px;
  color: #737373;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
`;
export const RemoveButton = styled.div`
  color: #7f3992;
  height: 35px;
  border: 1px solid #c4c4c4;
  text-align: center;
  padding: 5px;
  font-size: 15px;
  color: #737373;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
`;
export const BuyButton = styled.button`
  color: #ffffff;
  background-color: #333333;
  outline: none;
  border: 1px solid #333333;
  font-size: 12px;
  font-weight: bold;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 200px;
  transition: background-color 1s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
    background-color: transparent;
    color: #333333;
    cursor: pointer;
  }
`;
export const CartImage = styled.img`
  width: 80px;
  height: 70px;
  margin-right: 10px;
  background-color: #bbbbbb;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;
export const Aside = styled.aside`
  width: 300px;
  height: 400px;
  border-radius: 8px;
`;
export const CartContainer = styled.div`
  background-color: #d8d8d8;
  padding: 20px;
  height: 200px;
  display: flex;
  flex-direction: column;
  /* border: 1px solid #e0dde5; */
  overflow-y: auto;
`;
export const DiscountContainer = styled.div`
  background-color: #d8d8d8;
  padding: 10px;
  padding-left: 20px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CartTitle = styled.p`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #333333;
  text-align: center;
  background-color: #999999;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding: 10px 0;
`;
export const Total = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  font-weight: bold;
  align-items: center;
`;
export const TotalLabel = styled.p`
  text-indent: 5px;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #c4c4c4;
  width: 300px;
  padding: 10px;
  color: #737373;
  justify-content: space-between;
`;

export const SaveCart = styled.div`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #d8d8d8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #e0dde5;
  height: 40%;
`;
export const SaveCartLabel = styled.p`
  color: #28c383;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
export const Image = styled.div`
  width: 200px;
  height: 100px;
  object-fit: cover;
  background-color: #999999;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-bottom: 10px;
  padding-top: 150px;
`;
export const LabelRow = styled.div`
  display: flex;
  width: 150px;
  height: 40px;
  flex-direction: row;
  margin-top: 10px;
`;

export const Label = styled.span`
  font-size: 15px;
  color: #737373;
  margin-left: 10px;
  width: 60px;
`;
export const Period = styled.span`
  color: #333333;
  padding-bottom: 50px;
  width: 1px;
  margin-top: -15px;
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
export const CartQntPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CartItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  width: 270px;
  height: 70px;
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
export const Input = styled.input`
  height: 40px;
  border-radius: 4px;
  outline: none;
  text-indent: 5px;
  border: 1px solid #c4c4c4;
  box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.2);
`;
export const Button = styled.button`
  height: 40px;
  width: 80px;
  color: #ffffff;
  background-color: #333333;
  outline: none;
  border: 1px solid #333333;
  font-size: 12px;
  font-weight: bold;
  border-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: background-color 1s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
    background-color: transparent;
    color: #333333;
    cursor: pointer;
  }
`;
export const CheckOutButton = styled.button`
  color: #ffffff;
  background-color: #333333;
  outline: none;
  border: 1px solid #333333;
  font-size: 12px;
  font-weight: bold;
  border-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 300px;
  transition: background-color 1s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  &:hover {
    opacity: 0.8;
    background-color: transparent;
    color: #333333;
    cursor: pointer;
  }
`;
