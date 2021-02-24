import React from 'react';
import {
  Nav,
  FirstNav,
  FirstSpan,
  SecondNav,
  SecondSpan,
  Circle,
} from '../../page/styles';

function NavBar() {
  return (
    <Nav>
      <FirstNav>
        <FirstSpan>Shopping</FirstSpan>
      </FirstNav>
      <SecondNav>
        <Circle /> <SecondSpan>John doe</SecondSpan>
      </SecondNav>
    </Nav>
  );
}
export default NavBar;
