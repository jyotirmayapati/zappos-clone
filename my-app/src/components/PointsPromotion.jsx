import React from 'react';
import styled from 'styled-components';

const PromoContainer = styled.div`
  background-color: #d7ecf8; /* Light blue background */
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  margin-top: 30px
`;

const PromoTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
`;

const PromoText = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;

const SmallText = styled.p`
  font-size: 14px;
  color: #333;
`;

const LinkContainer = styled.div`
  margin-top: 10px;
`;

const PromoLink = styled.a`
  font-size: 16px;
  color: #0056b3;
  text-decoration: underline;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    color: #003d80;
  }
`;

const PointsPromotion = () => {
  return (
    <PromoContainer>
      <PromoTitle>Get 10x Points on 10/8 & 10/9*</PromoTitle>
      <PromoText>
        Already a Zappos VIP with a linked Prime account? Shop & earn now! Not a VIP or have a linked Prime account? Join & link to get in on the points!
      </PromoText>
      <SmallText>*Points will be added to your account within 5-7 days post-purchase.</SmallText>
      <LinkContainer>
        <PromoLink href="#">Join VIP</PromoLink>
        <PromoLink href="#">Link Your Prime</PromoLink>
      </LinkContainer>
    </PromoContainer>
  );
};

export default PointsPromotion;
