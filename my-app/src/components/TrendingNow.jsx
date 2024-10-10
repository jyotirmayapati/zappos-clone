import React from 'react';
import styled from 'styled-components';

const TrendingSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const TrendingItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TrendingImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const TrendingLink = styled.a`
  font-size: 16px;
  color: #333;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const TrendingNow = () => {
  return (
    <>
      <SectionTitle>Trending Now</SectionTitle>
      <TrendingSection>
        <TrendingItem>
          <TrendingImage src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/10.06/TRENDING-CATEGORY-BROOKS-432x540._FMwebp_.jpg" alt="Just-In Brooks" />
          <TrendingLink href="#">Just-In Brooks</TrendingLink>
        </TrendingItem>
        <TrendingItem>
          <TrendingImage src="https://m.media-amazon.com/images/I/616j9QcYLGL._AC_SX400_SR432,540,1,C_BR-10_FMwebp_.jpg" alt="Running Shoes" />
          <TrendingLink href="#">Running Shoes</TrendingLink>
        </TrendingItem>
        <TrendingItem>
          <TrendingImage src="https://m.media-amazon.com/images/I/71f4AQWyC+L._AC_SX400_SR432,540,1,C_BR-10_FMwebp_.jpg" alt="Ankle Booties" />
          <TrendingLink href="#">Ankle Booties</TrendingLink>
        </TrendingItem>
        <TrendingItem>
          <TrendingImage src="https://m.media-amazon.com/images/I/71yoe4nPWbL._AC_SX400_SR432,540,1,C_BR-10_FMwebp_.jpg" alt="Kids' Boots" />
          <TrendingLink href="#">Kids' Boots</TrendingLink>
        </TrendingItem>
        <TrendingItem>
          <TrendingImage src="https://m.media-amazon.com/images/I/61DgDUw04NL._AC_SX400_SR432,540,1,C_BR-10_FMwebp_.jpg" alt="Flats" />
          <TrendingLink href="#">Flats</TrendingLink>
        </TrendingItem>
        <TrendingItem>
          <TrendingImage src="https://m.media-amazon.com/images/I/71LSYoLsUIL._AC_SX400_SR432,540,1,C_BR-10_FMwebp_.jpg" alt="Coats & Outerwear" />
          <TrendingLink href="#">Coats & Outerwear</TrendingLink>
        </TrendingItem>
      </TrendingSection>
    </>
  );
};

export default TrendingNow;
