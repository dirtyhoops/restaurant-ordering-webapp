import styled from 'styled-components';

export const FeaturedFoodItem = styled.div`
  flex: 0 0 18%;
  background: red;
  position: relative;
  padding-top: 70px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  margin-bottom: 100px;
`;

export const FoodImage = styled.img`
  position: absolute;
  top: -60px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 135px;
  height: 135px;
`;

export const FoodCalories = styled.p``;

export const FoodName = styled.p``;

export const FoodDesc = styled.p``;
