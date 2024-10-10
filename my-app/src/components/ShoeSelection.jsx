import React, { useState } from 'react';
import styled from 'styled-components';

// Container for the entire section
const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 20px;
  padding: 40px;
  background-color: #fafafa;
  max-width: 100%;
  box-sizing: border-box;
`;

// Card Container for each shoe product
const ShoeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; // Add padding for other cards
  border: 1px solid #e6e6e6;
  background-color: #fff;
  transition: box-shadow 0.3s ease;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

// Shoe image container
const ShoeImageWrapper = styled.div`
  width: 100%;
  height: 300px; // Set a fixed height for the first card
  display: flex; // Enable flex to center the image
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
  margin-bottom: 10px; // Add margin to separate from title
`;

// Shoe image styling
const ShoeImage = styled.img`
  max-width: 100%; // Max width of the image
  max-height: 100%; // Max height of the image
  object-fit: contain; // Maintain original aspect ratio without stretching
`;

// Title and Price
const ShoeTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 10px 0 5px;
`;

const ShoePrice = styled.p`
  font-size: 16px;
  color: #666;
  font-weight: bold;
`;

// Star rating container
const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Star = styled.span`
  color: #f5c518;
  margin-right: 3px;
  font-size: 14px;
`;

// Color options container
const ColorOptions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

// Individual color circle
const ColorCircle = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 5px;
  overflow: hidden;
  border: 2px solid transparent;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    border-color: #000;
  }
`;

// Styled for "3 left in stock" label
const StockInfo = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  font-weight: bold;
`;

// Placeholder data for products
const products = [
  {
    images: {
      default: 'https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.16/NEW-ARRIVALS-FEED-658x916_13._FMwebp_.jpg',
      colorOptions: []
    }
  },
  {
    title: 'New Balance Classics',
    price: '$199.95',
    rating: 3,
    reviews: 9,
    stockInfo: null,
    images: {
      default: 'https://m.media-amazon.com/images/I/71YRtxfTZaL._AC_SR768,1024__FMwebp_.jpg',
      colorOptions: [
        { colorName: 'Grey', imageUrl: 'https://m.media-amazon.com/images/I/71YMIOfQaZL._AC_SR768,1024__FMwebp_.jpg' },
        { colorName: 'Navy', imageUrl: 'https://m.media-amazon.com/images/I/71YRtxfTZaL._AC_SR768,1024__FMwebp_.jpg' },
      ]
    }
  },
  {
    title: 'PUMA Suede Classic XXI',
    price: '$75.00',
    rating: 4,
    reviews: 106,
    stockInfo: null,
    images: {
      default: 'https://m.media-amazon.com/images/I/71vOzb8i9BL._AC_SR768,1024__FMwebp_.jpg',
      colorOptions: [
        { colorName: 'Red', imageUrl: 'https://m.media-amazon.com/images/I/71AB4eBNMnL._AC_SR768,1024__FMwebp_.jpg' },
        { colorName: 'Black', imageUrl: 'https://m.media-amazon.com/images/I/71zs4gW7bQL._AC_SR768,1024__FMwebp_.jpg' },
      ]
    }
  },
  {
    title: 'Saucony Originals Jazz',
    price: '$85.00',
    rating: 5,
    reviews: 892,
    stockInfo: '3 left in stock',
    images: {
      default: 'https://m.media-amazon.com/images/I/71YAdHoQ8UL._AC_SR768,1024__FMwebp_.jpg',
      colorOptions: [
        { colorName: 'Tan', imageUrl: 'https://m.media-amazon.com/images/I/819w5rJS+3L._AC_SR768,1024__FMwebp_.jpg' },
        { colorName: 'Blue', imageUrl: 'https://m.media-amazon.com/images/I/81iPp9Yf3bL._AC_SR768,1024__FMwebp_.jpg' },
      ]
    }
  }
];

const ShoeSelection = () => {
  // State to track the selected color image for each product
  const [selectedImages, setSelectedImages] = useState(products.map((product) => product.images.default));

  // Function to handle color click
  const handleColorClick = (imageUrl, productIndex) => {
    const newImages = [...selectedImages];
    newImages[productIndex] = imageUrl; // Update the clicked image for the specific product
    setSelectedImages(newImages);
  };

  return (
    <SectionContainer>
      {/* Shoes Cards including New Arrivals as the first card */}
      {products.map((product, idx) => (
        <ShoeCard key={idx} style={idx === 0 ? { padding: 0 } : {}}>
          <ShoeImageWrapper>
            <ShoeImage src={selectedImages[idx]} alt={product.title} />
          </ShoeImageWrapper>

          {idx > 0 && ( // Only show color options for other products
            <ColorOptions>
              {product.images.colorOptions.map((option, index) => (
                <ColorCircle
                  key={index}
                  onClick={() => handleColorClick(option.imageUrl, idx)}
                  className={selectedImages[idx] === option.imageUrl ? 'selected' : ''}
                >
                  <img src={option.imageUrl} alt={option.colorName} />
                </ColorCircle>
              ))}
            </ColorOptions>
          )}

          {idx > 0 && ( // Only show title and price for other products
            <>
              <ShoeTitle>{product.title}</ShoeTitle>
              <ShoePrice>{product.price}</ShoePrice>

              <Rating>
                {[...Array(5)].map((_, i) => (
                  <Star key={i}>
                    {i < product.rating ? '★' : '☆'}
                  </Star>
                ))}
                {product.reviews > 0 && (
                  <span style={{ color: '#666', marginLeft: '5px' }}>
                    ({product.reviews})
                  </span>
                )}
              </Rating>

              {product.stockInfo && <StockInfo>{product.stockInfo}</StockInfo>}
            </>
          )}
        </ShoeCard>
      ))}
    </SectionContainer>
  );
};

export default ShoeSelection;
