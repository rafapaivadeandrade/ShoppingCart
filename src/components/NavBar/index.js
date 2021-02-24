import React from 'react';
import {
  Nav,
  FirstNav,
  FirstSpan,
  SecondNav,
  ThirdSpan,
} from '../../page/styles';

function NavBar() {
  return (
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
  );
}
export default NavBar;
