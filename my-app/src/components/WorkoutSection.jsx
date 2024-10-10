import React from 'react';
import styled from 'styled-components';

const WorkoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  align-items: center; /* Ensures vertical centering */
`;

const WorkoutTextContainer = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically center the text */
  align-items: center; /* Horizontally center the text */
  text-align: center;
`;

const WorkoutTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const WorkoutDescription = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
`;

const WorkoutLink = styled.a`
  font-size: 16px;
  color: #0056b3;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #003d80;
  }
`;

const WorkoutImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WorkoutImage = styled.img`
  width: 100%;
  height: auto;
`;

const WorkoutSection = () => {
  return (
    <WorkoutContainer>
      <WorkoutTextContainer>
        <WorkoutTitle>On: Work Out Anywhere</WorkoutTitle>
        <WorkoutDescription>
          Train indoors or run outside in ultra-comfortable sneakers.
        </WorkoutDescription>
        <WorkoutLink href="#">Shop On</WorkoutLink>
      </WorkoutTextContainer>
      <WorkoutImageContainer>
        <WorkoutImage src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/10.07/ON-OCTOBER-AOE-960x500._FMwebp_.jpg 1x, https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/10.07/ON-OCTOBER-AOE-1920x1000._FMwebp_.jpg" alt="Work Out Anywhere" />
      </WorkoutImageContainer>
    </WorkoutContainer>
  );
};

export default WorkoutSection;







