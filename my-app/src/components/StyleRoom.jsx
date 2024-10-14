import React from 'react';
import styled from 'styled-components';

// Container for the whole section
const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

// Styled heading
const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #000;
  text-align: center;
`;

// Container for the items (images + text)
const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

// Each item (image and text box)
const Item = styled.div`
  flex: 1;
  margin: 0 10px;
  text-align: center;
`;

// Image styling for each image
const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

// Text styling
const Text = styled.p`
  margin-top: 15px;
  font-size: 16px;
  color: #333;
`;

// Main component
const StyleRoom = () => {
  return (
    <SectionContainer>
      {/* Heading */}
      <Heading>Want inspiration? Visit The Style Room for styling tips and fashion trends.</Heading>

      {/* Items container */}
      <ItemsContainer>
        {/* First section */}
        <Item>
          <StyledImage src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30NEW/W-ZAPPOSHP-ASICS-SEPTOCT2024-TSR-NEW._SX650_FMwebp_.jpg 1x, https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30NEW/W-ZAPPOSHP-ASICS-SEPTOCT2024-TSR-NEW._FMwebp_.jpg" alt="Flowy dress" />
          <Text>Flowy dresses with sporty kicks? It's a yes! Unexpected pairings are all the range.</Text>
        </Item>
        
        {/* Second section */}
        <Item>
          <StyledImage src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30NEW/W-ZAPPOSHP-FAVORITEPAIRINGS2-SEPTOCT2024-TSR._SX650_FMwebp_.jpg 1x, https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30NEW/W-ZAPPOSHP-FAVORITEPAIRINGS2-SEPTOCT2024-TSR._FMwebp_.jpg" alt="2nd img" />
          <Text>What happens when go-to pieces find their perfect partners? Style magic.</Text>
        </Item>

        {/* Third section */}
        <Item>
          <StyledImage src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30NEW/W-ZAPPOSHP-SAMEDELMAN-SEPTOCT2024-TSR-NEW._SX650_FMwebp_.jpg 1x, https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30NEW/W-ZAPPOSHP-SAMEDELMAN-SEPTOCT2024-TSR-NEW._FMwebp_.jpg" alt="3rd img" />
          <Text>Introduce effortless fall appeal into your wardrobe with our top picks.</Text>
        </Item>
      </ItemsContainer>
    </SectionContainer>
  );
};

export default StyleRoom;
