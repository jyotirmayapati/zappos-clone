import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #9bb3bd;
  text-align: center;
  padding: 40px;
`;

const HeaderTitle = styled.h1`
  font-size: 36px;
  color: #333;
`;

const Header = () => (
  <HeaderContainer>
    <HeaderTitle>The Big October Sale</HeaderTitle>
    <p>It’s an autumn dream come true. Explore HUGE deals up to 80% off!</p>
  </HeaderContainer>
);

export default Header;
