import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  height: 
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-top: 30px
`;

const ImageSection = styled.div`
  background-color: #f8f1eb; 
  padding: 20px 0;
  text-align: center;
  width: 100%;
  margin-top: -5px
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const SectionLink = styled.a`
  font-size: 16px;
  color: #333;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #ff6347; 
  }
`;

const ImageComponent = () => {
  return (
    <ImageContainer>
      <StyledImage
        src="https://p.itc.zappos/prod/?w=2048&h=-1&url=https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30NEW/FALL-CAMPAIGN-HTT-HERO-TABLET-2048x853_1.gif%201x"
        alt="Fall Campaign"
      />

      <ImageSection>
        <SectionTitle>Head-to-Toe Fall</SectionTitle>
        <SectionLink href="#">Shop Women's Fall Favorites</SectionLink>
      </ImageSection>
    </ImageContainer>
  );
};

export default ImageComponent;
