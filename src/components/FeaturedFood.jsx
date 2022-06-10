import {
  StyledFeaturedFood,
  FeaturedFoodFlex,
  FeaturedFoodBox,
  FoodImage,
  FoodCalories,
  FoodName,
  FoodDesc
} from './styles/FeaturedFood.styled';

export default function FeaturedFood() {
  return (
    <StyledFeaturedFood>
      <h3>Our Featured Food</h3>
      <FeaturedFoodFlex>
        <FeaturedFoodBox>
          <FoodImage src='./images/pizza1_lg.png' />
          <FoodCalories>654</FoodCalories>
          <FoodName>Cheese Pizza</FoodName>
          <FoodDesc>
            BBQ infused pizza sauce, bacon, roasted chicken, pineapple, red
            onion, cilantro, mozzarella
          </FoodDesc>
        </FeaturedFoodBox>
      </FeaturedFoodFlex>
    </StyledFeaturedFood>
  );
}
