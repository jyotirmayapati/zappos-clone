import React, { useState } from 'react';
import styled from 'styled-components';

// Grid container for the entire product list
const ProductGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px;
`;

// Individual product card
const ProductCard = styled.div`
  width: 300px;
  margin: 10px;
  padding: 20px;
  text-align: center;
`;

// Main image for the product
const ProductImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  margin-bottom: 10px;
`;

// Circle for color selector
const ColorCircle = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 5px;
  cursor: pointer;
  border: ${(props) => (props.selected ? '2px solid black' : '1px solid #ddd')};
`;

// Product details (brand, description, price, etc.)
const ProductDetails = styled.div`
  margin-top: 10px;
  font-size: 14px;

  h3 {
    font-size: 16px;
    margin: 10px 0;
    font-weight: bold;
  }

  p {
    margin: 5px 0;
  }

  span {
    font-size: 20px;
    font-weight: bold;
  }
`;

// Mock product data
const products = [
  {
    id: 1,
    brand: 'KUT from the Kloth',
    name: 'Meg High Rise Fab AB Wide Leg',
    price: '$104.00',
    colors: [
      { name: 'Black', image: 'https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/10.07/KUT-OCTOBER-NEW-ARRIVALS-658x916._SX650_FMwebp_.jpg 1x' }
    ]
  },
  {
    id: 2,
    brand: 'KUT from the Kloth',
    name: 'Catherine Boyfriend Corduroy',
    price: '$89.00',
    colors: [
      { name: 'Black', image: 'https://m.media-amazon.com/images/I/61l+xCALxAL._AC_SR768,1024_.jpg' },
      { name: 'Brown', image: 'https://m.media-amazon.com/images/I/71-rhleYEbL._AC_SR768,1024_.jpg' },
    ]
  },
  {
    id: 3,
    brand: 'KUT from the Kloth',
    name: 'Wine Bootcut',
    price: '$89.00',
    colors: [
      { name: 'Brown', image: 'https://m.media-amazon.com/images/I/71m5Wo9jdZL._AC_SR768,1024_.jpg' },
      { name: 'White', image: 'https://m.media-amazon.com/images/I/61NHEVSyKcL._AC_SR768,1024_.jpg' },
      {name: 'Red', image: 'https://m.media-amazon.com/images/I/61rvgkKlhKL._AC_SR768,1024_.jpg'}
    ]
  }
];

// Main Product component
const Product = () => {
  // State to track selected color for each product
  const [selectedColors, setSelectedColors] = useState(
    products.map((product) => product.colors[0].image)
  );

  // Handle color change for a specific product
  const handleColorChange = (index, image) => {
    const newSelectedColors = [...selectedColors];
    newSelectedColors[index] = image;
    setSelectedColors(newSelectedColors);
  };

  return (
    <ProductGrid>
      {products.map((product, index) => (
        <ProductCard key={product.id}>
          {/* Product Image */}
          <ProductImage src={selectedColors[index]} alt={product.name} />

          {/* Color Selection Circles */}
          <div>
            {product.colors.map((color, i) => (
              <ColorCircle
                key={i}
                color={color.name === 'Black' ? '#000' : color.name === 'Brown' ? '#654321' : color.name === 'Khaki' ? '#F5F5DC' : color.name === 'Wine' ? '#8B0000' : color.name === 'Red' ? '#FF0000' : ''}
                selected={selectedColors[index] === color.image}
                onClick={() => handleColorChange(index, color.image)}
              />
            ))}
          </div>

          {/* Product Details */}
          <ProductDetails>
            <h3>{product.brand}</h3>
            <p>{product.name}</p>
            <span>{product.price}</span>
          </ProductDetails>
        </ProductCard>
      ))}
    </ProductGrid>
  );
};

export default Product;
