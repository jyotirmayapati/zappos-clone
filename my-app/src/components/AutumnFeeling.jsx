import React from 'react';
import styled from 'styled-components';

const AutumnSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AutumnItem = styled.div`
  text-align: center;
  width: 30%;
`;

const AutumnImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const AutumnDescription = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;

const AutumnLink = styled.a`
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

const AutumnFeeling = () => {
  return (
    <>
      <SectionTitle>That Autumn Feeling</SectionTitle>
      <AutumnSection>
        <AutumnItem>
          <AutumnImage src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30/TRIPTYCH-1-HUNTER-896x896-NEW._SX650_FMwebp_.jpg 1x, https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30/TRIPTYCH-1-HUNTER-896x896-NEW._FMwebp_.jpg 2x" alt="Hunter Boots" />
          <AutumnDescription>
            Waterproof picks made for what fall has in store.
          </AutumnDescription>
          <AutumnLink href="#">Shop Hunter</AutumnLink>
        </AutumnItem>
        <AutumnItem>
          <AutumnImage src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30NEW/TRIPTYCH-2-NEW-BALANCE-896x896_1._SX650_FMwebp_.jpg 1x, https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30NEW/TRIPTYCH-2-NEW-BALANCE-896x896_1._FMwebp_.jpg 2x" alt="Sport Kicks" />
          <AutumnDescription>
            Sport laid-back, classic kicks from brunch to bonfire.
          </AutumnDescription>
          <AutumnLink href="#">Shop Sport Shoes</AutumnLink>
        </AutumnItem>
        <AutumnItem>
          <AutumnImage src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30/TRIPTYCH-3-LACE-UP-BOOTS-896x896-NEW._SX650_FMwebp_.jpg 1x, https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30/TRIPTYCH-3-LACE-UP-BOOTS-896x896-NEW._FMwebp_.jpg 2x" alt="Lace-Up Boots" />
          <AutumnDescription>
            These lace-up beauts will complete every outfit.
          </AutumnDescription>
          <AutumnLink href="#">Shop Lace-Up Boots</AutumnLink>
        </AutumnItem>
      </AutumnSection>
    </>
  );
};

export default AutumnFeeling;
